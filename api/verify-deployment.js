const GITHUB_API = 'https://api.github.com'
const VERCEL_API = 'https://api.vercel.com'
const OWNER = 'sreekar-gkb'
const REPO = 'Landing-pages-ravenlabs'
const DOMAIN = 'https://landing-pages-ravenlabs.vercel.app'

async function github(path) {
  const response = await fetch(`${GITHUB_API}/repos/${OWNER}/${REPO}/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  const text = await response.text()
  let data
  try { data = JSON.parse(text) } catch { data = { raw: text } }
  if (!response.ok) throw new Error(`GitHub ${response.status}: ${data.message || text}`)
  return data
}

async function vercel(path) {
  const response = await fetch(`${VERCEL_API}${path}`, {
    headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}` },
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
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
      signal: controller.signal,
    })
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

    const { campaignName, deploymentId, commitSha } = req.body || {}
    if (!campaignName || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(campaignName)) {
      return res.status(400).json({ success: false, error: 'campaignName must be a lowercase URL slug' })
    }
    if (!deploymentId) return res.status(400).json({ success: false, error: 'deploymentId is required' })
    if (!commitSha) return res.status(400).json({ success: false, error: 'commitSha is required' })

    // Verify the requested Git commit directly. Do NOT require main to remain at
    // this commit because other campaigns may be deployed concurrently.
    const commit = await github(`git/commits/${commitSha}`)
    if (commit.sha !== commitSha) {
      return res.status(409).json({ success: false, status: 'COMMIT_NOT_FOUND', error: 'Requested GitHub commit could not be verified', commitSha })
    }

    // Verify the exact campaign files at the requested commit.
    const page = await github(`contents/app/${campaignName}/page.tsx?ref=${commitSha}`)
    const thanks = await github(`contents/app/${campaignName}/thanks/page.tsx?ref=${commitSha}`)
    const registryFile = await github(`contents/data/campaigns.json?ref=${commitSha}`)
    const registry = JSON.parse(Buffer.from(registryFile.content, 'base64').toString('utf8'))

    if (!page.sha || !thanks.sha || !Array.isArray(registry) || !registry.some((campaign) => campaign.slug === campaignName)) {
      return res.status(409).json({ success: false, status: 'GITHUB_CONTENT_FAILED', error: 'Campaign files or registry entry could not be verified at the requested commit', commitSha })
    }

    const deployment = await vercel(`/v13/deployments/${deploymentId}`)
    const state = deployment.state || deployment.readyState || 'UNKNOWN'
    const deployedSha = deployment.gitSource?.sha || deployment.meta?.githubCommitSha || deployment.meta?.commitSha || null

    if (deployedSha && deployedSha !== commitSha) {
      return res.status(409).json({
        success: false,
        status: 'WRONG_COMMIT',
        error: 'Vercel deployment does not match the requested GitHub commit',
        deploymentState: state,
        expectedCommitSha: commitSha,
        deployedSha,
        deploymentId,
      })
    }

    if (state !== 'READY') {
      if (['ERROR', 'CANCELED', 'CANCELLED'].includes(state)) {
        return res.status(502).json({
          success: false,
          status: 'DEPLOYMENT_FAILED',
          error: 'Vercel deployment failed',
          deploymentState: state,
          deploymentId,
          commitSha,
        })
      }
      return res.status(202).json({
        success: true,
        status: 'BUILDING',
        deploymentState: state,
        deploymentId,
        commitSha,
        url: `${DOMAIN}/${campaignName}`,
      })
    }

    let verification = null
    for (let attempt = 0; attempt < 4; attempt++) {
      verification = await verifyUrl(`${DOMAIN}/${campaignName}`)
      if (verification.ok) break
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    if (!verification?.ok) {
      return res.status(502).json({
        success: false,
        status: 'URL_FAILED',
        error: 'Exact production campaign URL did not return HTTP 2xx',
        deploymentState: state,
        deploymentId,
        commitSha,
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
      deploymentId,
      commitSha,
      deploymentState: state,
      verification: {
        githubCommitVerified: true,
        githubRoutesVerified: true,
        githubRegistryVerified: true,
        exactCommitDeployed: deployedSha ? deployedSha === commitSha : 'not-reported-by-vercel',
        vercelReady: true,
        productionHttpStatus: verification.status,
        productionUrlVerified: true,
      },
    })
  } catch (error) {
    console.error('[verify-deployment]', error)
    return res.status(500).json({
      success: false,
      error: 'Deployment verification failed',
      details: error instanceof Error ? error.message : String(error),
    })
  }
}
