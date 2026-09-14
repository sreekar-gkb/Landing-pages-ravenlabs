export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaignName, campaignStatus = 'live' } = req.body

    if (!campaignName) {
      return res.status(400).json({ error: 'campaignName required' })
    }

    const githubToken = process.env.GITHUB_TOKEN
    const vercelToken = process.env.VERCEL_TOKEN

    if (!githubToken || !vercelToken) {
      console.error('Missing tokens:', { githubToken: !!githubToken, vercelToken: !!vercelToken })
      return res.status(500).json({ error: 'GitHub or Vercel token not configured' })
    }

    // 1. Get current campaigns.json via GitHub API
    const repoOwner = 'sreekar-gkb'
    const repoName = 'Landing-pages-ravenlabs'
    const filePath = 'data/campaigns.json'

    const getFileRes = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    if (!getFileRes.ok) {
      throw new Error(`Failed to fetch campaigns.json: ${getFileRes.statusText}`)
    }

    const fileData = await getFileRes.json()
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8')
    let campaigns = JSON.parse(currentContent)

    // 2. Add or update campaign
    const campaignIndex = campaigns.findIndex((c) => c.slug === campaignName)
    const newCampaign = {
      slug: campaignName,
      name: `${campaignName.replace(/-/g, ' ')} Campaign`,
      url: `https://landing-pages-ravenlabs.vercel.app/${campaignName}`,
      keyword: campaignName.replace(/-/g, ' '),
      status: campaignStatus,
      deployedAt: new Date().toISOString().split('T')[0],
    }

    if (campaignIndex >= 0) {
      campaigns[campaignIndex] = newCampaign
    } else {
      campaigns.push(newCampaign)
    }

    const newContent = Buffer.from(JSON.stringify(campaigns, null, 2)).toString('base64')

    // 3. Push update to GitHub
    const pushRes = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Add/update ${campaignName} campaign via API`,
          content: newContent,
          sha: fileData.sha,
          branch: 'main',
        }),
      }
    )

    if (!pushRes.ok) {
      throw new Error(`Failed to update campaigns.json: ${pushRes.statusText}`)
    }

    // 4. Trigger Vercel redeploy
    const deployRes = await fetch(
      'https://api.vercel.com/v13/deployments?forceNew=1',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId: 'prj_X1zS1V8NW6zf3P4sUXUSsPb21Sjb',
          gitSource: {
            type: 'github',
            ref: 'main',
          },
        }),
      }
    )

    const deployData = await deployRes.json()

    res.json({
      success: true,
      message: `Campaign '${campaignName}' registered and deploying`,
      url: `https://landing-pages-ravenlabs.vercel.app/${campaignName}`,
      campaignRegistry: `https://landing-pages-ravenlabs.vercel.app/campaigns`,
      vercelDeployment: deployData.url || 'Deployment triggered',
      note: 'Live in 30-60 seconds',
    })
  } catch (error) {
    console.error('Deployment error:', error)
    res.status(500).json({
      error: 'Deployment failed',
      details: error.message,
    })
  }
}
