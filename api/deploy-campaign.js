const GITHUB_API = 'https://api.github.com'
const VERCEL_API = 'https://api.vercel.com'
const OWNER = 'sreekar-gkb'
const REPO = 'Landing-pages-ravenlabs'
const PROJECT_ID = 'prj_X1zS1V8NW6zf3P4sUXUSsPb21Sjb'
const DOMAIN = 'https://landing-pages-ravenlabs.vercel.app'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function github(path, options = {}) {
  const response = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  })
  const text = await response.text()
  let data
  try { data = JSON.parse(text) } catch { data = { raw: text } }
  if (!response.ok) {
    const error = new Error(`GitHub ${response.status}: ${data.message || text}`)
    error.status = response.status
    throw error
  }
  return data
}

async function vercel(path, options = {}) {
  const response = await fetch(`${VERCEL_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const text = await response.text()
  let data
  try { data = JSON.parse(text) } catch { data = { raw: text } }
  if (!response.ok) throw new Error(`Vercel ${response.status}: ${data.error?.message || data.message || text}`)
  return data
}

async function verifyUrl(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller.signal, cache: 'no-store' })
    const body = await response.text()
    return { ok: response.status >= 200 && response.status < 300, status: response.status, body: body.slice(0, 50000) }
  } finally {
    clearTimeout(timer)
  }
}

function validateCampaignFiles(campaignName, campaignFiles) {
  const expectedPage = `app/${campaignName}/page.tsx`
  const expectedThanks = `app/${campaignName}/thanks/page.tsx`
  const suppliedPaths = Object.keys(campaignFiles || {})

  if (!suppliedPaths.includes(expectedPage) || !suppliedPaths.includes(expectedThanks)) {
    const error = new Error('Required campaign routes are missing')
    error.details = { required: [expectedPage, expectedThanks], supplied: suppliedPaths }
    throw error
  }

  for (const [filePath, content] of Object.entries(campaignFiles)) {
    const allowed = filePath.startsWith(`app/${campaignName}/`) || filePath.startsWith(`public/${campaignName}/`)
    if (!allowed || filePath.includes('..') || filePath.startsWith('/')) {
      throw new Error(`Unsupported campaign file path: ${filePath}`)
    }
    if (typeof content !== 'string') throw new Error(`File content must be text: ${filePath}`)
    if (Buffer.byteLength(content, 'utf8') > 1024 * 1024) throw new Error(`File exceeds 1MB: ${filePath}`)
  }
}

async function commitCampaign(campaignName, campaignStatus, campaignFiles) {
  const expectedPage = `app/${campaignName}/page.tsx`
  const expectedThanks = `app/${campaignName}/thanks/page.tsx`

  // Multiple Claude requests can arrive close together. Retry the complete
  // registry + branch read + commit when main advances between attempts.
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const registry = await github('contents/data/campaigns.json?ref=main')
      const campaigns = JSON.parse(Buffer.from(registry.content, 'base64').toString('utf8'))
      const record = {
        slug: campaignName,
        name: `${campaignName.replace(/-/g, ' ')} Campaign`,
        url: `${DOMAIN}/${campaignName}`,
        keyword: campaignName.replace(/-/g, ' '),
        status: campaignStatus,
        deployedAt: new Date().toISOString().slice(0, 10),
      }
      const index = campaigns.findIndex((campaign) => campaign.slug === campaignName)
      if (index >= 0) campaigns[index] = record
      else campaigns.push(record)

      const branch = await github('git/ref/heads/main')
      const baseSha = branch.object.sha
      const tree = Object.entries({
        ...campaignFiles,
        'data/campaigns.json': JSON.stringify(campaigns, null, 2) + '\n',
      }).map(([path, content]) => ({ path, mode: '100644', type: 'blob', content }))

      const treeData = await github('git/trees', {
        method: 'POST',
        body: JSON.stringify({ base_tree: baseSha, tree }),
      })
      const commit = await github('git/commits', {
        method: 'POST',
        body: JSON.stringify({ message: `Deploy ${campaignName} landing page`, tree: treeData.sha, parents: [baseSha] }),
      })

      try {
        await github('git/refs/heads/main', {
          method: 'PATCH',
          body: JSON.stringify({ sha: commit.sha, force: false }),
        })
      } catch (error) {
        if (error.status === 422 || error.status === 409) throw Object.assign(error, { retryableConflict: true })
        throw error
      }

      await github(`contents/${expectedPage}?ref=main`)
      await github(`contents/${expectedThanks}?ref=main`)
      return commit.sha
    } catch (error) {
      if (!error.retryableConflict || attempt === 4) throw error
      await sleep(500 * attempt)
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' })

  try {
    if (!process.env.GITHUB_TOKEN || !process.env.VERCEL_TOKEN) {
      return res.status(500).json({ success: false, error: 'GitHub or Vercel token is not configured' })
    }

    const { campaignName, campaignStatus = 'live', campaignFiles } = req.body || {}
    if (!campaignName || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(campaignName)) {
      return res.status(400).json({ success: false, error: 'campaignName must be a lowercase URL slug such as zoho-crm' })
    }
    if (!campaignFiles || typeof campaignFiles !== 'object' || Object.keys(campaignFiles).length === 0) {
      return res.status(400).json({ success: false, error: 'campaignFiles are required' })
    }

    validateCampaignFiles(campaignName, campaignFiles)
    const commitSha = await commitCampaign(campaignName, campaignStatus, campaignFiles)

    const deployment = await vercel('/v13/deployments?forceNew=1', {
      method: 'POST',
      body: JSON.stringify({
        projectId: PROJECT_ID,
        gitSource: { type: 'github', ref: 'main' },
      }),
    })
    if (!deployment.id) throw new Error('Vercel did not return a deployment ID')

    let state = 'QUEUED'
    for (let attempt = 0; attempt < 24; attempt++) {
      await sleep(5000)
      const status = await vercel(`/v13/deployments/${deployment.id}`)
      state = status.state || status.readyState || 'UNKNOWN'
      if (state === 'READY') break
      if (['ERROR', 'CANCELED', 'CANCELLED'].includes(state)) {
        return res.status(502).json({ success: false, error: 'Vercel deployment failed', commitSha, deploymentId: deployment.id, deploymentState: state })
      }
    }

    if (state !== 'READY') {
      return res.status(504).json({ success: false, error: 'Vercel deployment was not READY within 120 seconds', commitSha, deploymentId: deployment.id, deploymentState: state, url: `${DOMAIN}/${campaignName}` })
    }

    let verification = null
    for (let attempt = 0; attempt < 6; attempt++) {
      verification = await verifyUrl(`${DOMAIN}/${campaignName}`)
      if (verification.ok) break
      await sleep(3000)
    }

    if (!verification?.ok) {
      return res.status(502).json({
        success: false,
        error: 'Production URL verification failed',
        commitSha,
        deploymentId: deployment.id,
        deploymentState: state,
        url: `${DOMAIN}/${campaignName}`,
        httpStatus: verification?.status ?? null,
      })
    }

    return res.status(200).json({
      success: true,
      status: 'LIVE',
      campaign: campaignName,
      url: `${DOMAIN}/${campaignName}`,
      registryUrl: `${DOMAIN}/campaigns`,
      commitSha,
      deploymentId: deployment.id,
      deploymentState: state,
      verification: {
        githubFiles: true,
        vercelReady: true,
        productionHttpStatus: verification.status,
        productionUrlVerified: true,
      },
    })
  } catch (error) {
    console.error('[deploy-campaign]', error)
    return res.status(500).json({
      success: false,
      error: 'Deployment failed',
      details: error instanceof Error ? error.message : String(error),
      ...(error?.details ? { validation: error.details } : {}),
    })
  }
}
