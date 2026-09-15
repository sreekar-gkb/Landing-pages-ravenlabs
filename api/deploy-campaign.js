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
  if (!response.ok) throw new Error(`GitHub ${response.status}: ${data.message || text}`)
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

    const expectedPage = `app/${campaignName}/page.tsx`
    const expectedThanks = `app/${campaignName}/thanks/page.tsx`
    const suppliedPaths = Object.keys(campaignFiles)
    if (!suppliedPaths.includes(expectedPage) || !suppliedPaths.includes(expectedThanks)) {
      return res.status(400).json({ success: false, error: 'Required campaign routes are missing', required: [expectedPage, expectedThanks], supplied: suppliedPaths })
    }

    for (const [path, content] of Object.entries(campaignFiles)) {
      const allowed = path.startsWith(`app/${campaignName}/`) || path.startsWith(`public/${campaignName}/`) || path.startsWith('components/')
      if (!allowed) return res.status(400).json({ success: false, error: `Unsupported campaign file path: ${path}` })
      if (typeof content !== 'string') return res.status(400).json({ success: false, error: `File content must be text: ${path}` })
      if (Buffer.byteLength(content, 'utf8') > 1024 * 1024) return res.status(400).json({ success: false, error: `File exceeds 1MB: ${path}` })
    }

    // Read registry and commit it together with the campaign so Vercel never builds half a campaign.
    const registry = await github('contents/data/campaigns.json?ref=main')
    const campaigns = JSON.parse(Buffer.from(registry.content, 'base64').toString('utf8'))
    if (!Array.isArray(campaigns)) throw new Error('data/campaigns.json must contain a JSON array')

    const record = {
      slug: campaignName,
      name: `${campaignName.replace(/-/g, ' ')} Campaign`,
      url: `${DOMAIN}/${campaignName}`,
      keyword: campaignName.replace(/-/g, ' '),
      status: campaignStatus,
      deployedAt: new Date().toISOString().slice(0, 10),
    }
    const index = campaigns.findIndex((c) => c.slug === campaignName)
    if (index >= 0) campaigns[index] = record
    else campaigns.push(record)

    const branch = await github('git/ref/heads/main')
    const baseSha = branch.object.sha
    const tree = Object.entries({
      ...campaignFiles,
      'data/campaigns.json': JSON.stringify(campaigns, null, 2) + '\n',
    }).map(([path, content]) => ({ path, mode: '100644', type: 'blob', content }))

    const treeData = await github('git/trees', { method: 'POST', body: JSON.stringify({ base_tree: baseSha, tree }) })
    const commit = await github('git/commits', { method: 'POST', body: JSON.stringify({ message: `Deploy ${campaignName} landing page`, tree: treeData.sha, parents: [baseSha] }) })
    await github('git/refs/heads/main', { method: 'PATCH', body: JSON.stringify({ sha: commit.sha, force: false }) })

    await github(`contents/${expectedPage}?ref=main`)
    await github(`contents/${expectedThanks}?ref=main`)

    const deployment = await vercel('/v13/deployments?forceNew=1', {
      method: 'POST',
      body: JSON.stringify({ projectId: PROJECT_ID, gitSource: { type: 'github', ref: 'main' } }),
    })
    if (!deployment.id) throw new Error('Vercel did not return a deployment ID')

    let state = 'QUEUED'
    for (let attempt = 0; attempt < 9; attempt++) {
      await sleep(5000)
      const status = await vercel(`/v13/deployments/${deployment.id}`)
      state = status.state || status.readyState || 'UNKNOWN'
      if (state === 'READY') break
      if (['ERROR', 'CANCELED', 'CANCELLED'].includes(state)) {
        return res.status(502).json({ success: false, error: 'Vercel deployment failed', deploymentId: deployment.id, deploymentState: state })
      }
    }

    if (state !== 'READY') {
      return res.status(504).json({ success: false, error: 'Vercel deployment was not READY within the verification window', deploymentId: deployment.id, deploymentState: state, url: `${DOMAIN}/${campaignName}` })
    }

    let verification = null
    for (let attempt = 0; attempt < 4; attempt++) {
      verification = await verifyUrl(`${DOMAIN}/${campaignName}`)
      if (verification.ok) break
      await sleep(3000)
    }

    if (!verification?.ok) {
      return res.status(502).json({ success: false, error: 'Production URL verification failed', deploymentId: deployment.id, deploymentState: state, url: `${DOMAIN}/${campaignName}`, httpStatus: verification?.status ?? null })
    }

    return res.status(200).json({
      success: true,
      status: 'LIVE',
      campaign: campaignName,
      url: `${DOMAIN}/${campaignName}`,
      registryUrl: `${DOMAIN}/campaigns`,
      deploymentId: deployment.id,
      deploymentState: state,
      verification: { githubFiles: true, vercelReady: true, productionHttpStatus: verification.status, productionUrlVerified: true },
    })
  } catch (error) {
    console.error('[deploy-campaign]', error)
    return res.status(500).json({ success: false, error: 'Deployment failed', details: error instanceof Error ? error.message : String(error) })
  }
}
