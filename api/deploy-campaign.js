const GITHUB_API = 'https://api.github.com'
const VERCEL_API = 'https://api.vercel.com'
const OWNER = 'sreekar-gkb'
const REPO = 'Landing-pages-ravenlabs'
const REPO_ID = 1368350860
const PROJECT_ID = 'prj_X1zS1V8NW6zf3P4sUXUSsPb21Sjb'
const DOMAIN = 'https://landing-pages-ravenlabs.vercel.app'

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
  if (!response.ok) {
    const error = new Error(`Vercel ${response.status}: ${data.error?.message || data.message || text}`)
    error.status = response.status
    throw error
  }
  return data
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

  // Optimistic concurrency: retry the full read/tree/commit/ref-update sequence
  // when another campaign advances main between our read and ref update.
  for (let attempt = 1; attempt <= 5; attempt++) {
    const branch = await github('git/ref/heads/main')
    const baseCommitSha = branch.object.sha
    const baseCommit = await github(`git/commits/${baseCommitSha}`)
    const baseTreeSha = baseCommit.tree.sha

    const registry = await github(`contents/data/campaigns.json?ref=${baseCommitSha}`)
    const campaigns = JSON.parse(Buffer.from(registry.content, 'base64').toString('utf8'))
    if (!Array.isArray(campaigns)) throw new Error('data/campaigns.json must contain an array')

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

    const tree = Object.entries({
      ...campaignFiles,
      'data/campaigns.json': JSON.stringify(campaigns, null, 2) + '\n',
    }).map(([path, content]) => ({ path, mode: '100644', type: 'blob', content }))

    const treeData = await github('git/trees', {
      method: 'POST',
      body: JSON.stringify({ base_tree: baseTreeSha, tree }),
    })

    const commit = await github('git/commits', {
      method: 'POST',
      body: JSON.stringify({
        message: `Deploy ${campaignName} landing page`,
        tree: treeData.sha,
        parents: [baseCommitSha],
      }),
    })

    try {
      await github('git/refs/heads/main', {
        method: 'PATCH',
        body: JSON.stringify({ sha: commit.sha, force: false }),
      })
    } catch (error) {
      if ((error.status === 409 || error.status === 422) && attempt < 5) {
        await new Promise((resolve) => setTimeout(resolve, 300 * attempt))
        continue
      }
      throw error
    }

    await github(`contents/${expectedPage}?ref=${commit.sha}`)
    await github(`contents/${expectedThanks}?ref=${commit.sha}`)
    const committedRegistry = await github(`contents/data/campaigns.json?ref=${commit.sha}`)
    const committedCampaigns = JSON.parse(Buffer.from(committedRegistry.content, 'base64').toString('utf8'))
    if (!committedCampaigns.some((campaign) => campaign.slug === campaignName)) {
      throw new Error('Campaign registry was not written to the same Git commit')
    }

    return commit.sha
  }

  throw new Error('GitHub commit failed after 5 attempts')
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
    if (!['live', 'test'].includes(campaignStatus)) {
      return res.status(400).json({ success: false, error: 'campaignStatus must be live or test' })
    }
    if (!campaignFiles || typeof campaignFiles !== 'object' || Object.keys(campaignFiles).length === 0) {
      return res.status(400).json({ success: false, error: 'campaignFiles are required' })
    }

    validateCampaignFiles(campaignName, campaignFiles)
    const commitSha = await commitCampaign(campaignName, campaignStatus, campaignFiles)

    const deployment = await vercel(`/v13/projects/${PROJECT_ID}/deployments?forceNew=1`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'landing-pages-ravenlabs',
        target: 'production',
        gitSource: {
          type: 'github',
          repoId: REPO_ID,
          ref: 'main',
          sha: commitSha,
        },
      }),
    })

    if (!deployment.id) throw new Error('Vercel did not return a deployment ID')

    // HTTP 202 means the request was accepted, not that the campaign is live.
    // Keep success=false so callers cannot mistake this state for deployment completion.
    return res.status(202).json({
      success: false,
      status: 'DEPLOYMENT_STARTED',
      campaign: campaignName,
      url: `${DOMAIN}/${campaignName}`,
      registryUrl: `${DOMAIN}/campaigns`,
      commitSha,
      deploymentId: deployment.id,
      message: 'Campaign was committed to GitHub and an exact-commit production deployment was started. Call /api/verify-deployment until it returns status LIVE before reporting success.',
    })
  } catch (error) {
    console.error('[deploy-campaign]', error)
    return res.status(500).json({
      success: false,
      status: 'DEPLOYMENT_FAILED',
      error: 'Deployment failed',
      details: error instanceof Error ? error.message : String(error),
      ...(error?.details ? { validation: error.details } : {}),
    })
  }
}
