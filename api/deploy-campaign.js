// **NEW: Retry helper with exponential backoff**
async function retryWithBackoff(fn, maxAttempts = 3, initialDelayMs = 1000) {
  let lastError
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxAttempts}`)
      return await fn()
    } catch (error) {
      lastError = error
      console.warn(`Attempt ${attempt} failed: ${error.message}`)
      
      if (attempt < maxAttempts) {
        const delayMs = initialDelayMs * Math.pow(2, attempt - 1)
        console.log(`Retrying in ${delayMs}ms...`)
        await new Promise(resolve => setTimeout(resolve, delayMs))
      }
    }
  }
  
  throw lastError
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaignName, campaignStatus = 'live', campaignFiles = null } = req.body

    if (!campaignName) {
      return res.status(400).json({ error: 'campaignName required' })
    }

    // **NEW: Validate campaign slug format**
    const validSlugPattern = /^[a-z0-9-]+$/
    if (!validSlugPattern.test(campaignName)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid campaign slug format',
        message: `Campaign name "${campaignName}" contains invalid characters. Use only lowercase letters, numbers, and hyphens (e.g., "my-campaign-123").`,
        guidance: {
          problem: 'Invalid campaign slug',
          solution: 'Use only lowercase a-z, numbers 0-9, and hyphens (-)',
          example: 'gpt-6-astra, zoho-zia-agents, my-product-2024'
        }
      })
    }

    const githubToken = process.env.GITHUB_TOKEN
    const vercelToken = process.env.VERCEL_TOKEN

    if (!githubToken || !vercelToken) {
      console.error('Missing tokens:', { githubToken: !!githubToken, vercelToken: !!vercelToken })
      return res.status(500).json({ error: 'GitHub or Vercel token not configured' })
    }

    const repoOwner = 'sreekar-gkb'
    const repoName = 'Landing-pages-ravenlabs'

    // **NEW: Validate file sizes if provided**
    if (campaignFiles && Object.keys(campaignFiles).length > 0) {
      const maxFileSize = 1024 * 1024 // 1MB per file
      const largeFiles = []
      
      for (const [path, content] of Object.entries(campaignFiles)) {
        const size = typeof content === 'string' ? new TextEncoder().encode(content).length : 0
        if (size > maxFileSize) {
          largeFiles.push({ path, size: Math.round(size / 1024 / 1024 * 100) / 100 })
        }
      }
      
      if (largeFiles.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'File size limit exceeded',
          message: `The following files exceed the 1MB limit: ${largeFiles.map(f => `${f.path} (${f.size}MB)`).join(', ')}`,
          guidance: {
            problem: 'Campaign files are too large',
            solution: 'Reduce file sizes or split into smaller components',
            limits: {
              'page.tsx': '1MB max',
              'thanks/page.tsx': '1MB max',
              'total per campaign': 'No hard limit but should be <5MB total'
            }
          }
        })
      }
    }
    // **FIX: campaignFiles are required for new campaigns**
    if (!campaignFiles || Object.keys(campaignFiles).length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Campaign files required',
        message: 'No campaign files provided in request. Please include campaignFiles with page.tsx and thanks/page.tsx content.',
        guidance: {
          problem: 'Cannot create campaign without files',
          solution: 'Provide campaignFiles object with page content',
          required_files: ['app/{campaignName}/page.tsx', 'app/{campaignName}/thanks/page.tsx'],
          example: {
            campaignName: 'my-campaign',
            campaignStatus: 'live',
            campaignFiles: {
              'app/my-campaign/page.tsx': '..content..',
              'app/my-campaign/thanks/page.tsx': '..content..'
            }
          }
        }
      })
    }

    console.log(`Auto-pushing campaign files for: ${campaignName}`)

    // **NEW: Use retry logic for GitHub operations**
    try {
      await retryWithBackoff(async () => {
        // Get current main branch
        const mainBranchRes = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/main`,
          {
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )

        if (!mainBranchRes.ok) {
          const errorBody = await mainBranchRes.text()
          console.error('Get main branch failed:', { status: mainBranchRes.status, statusText: mainBranchRes.statusText, body: errorBody })
          throw new Error(`Failed to get main branch: ${mainBranchRes.statusText} - ${errorBody}`)
        }

        const mainBranchData = await mainBranchRes.json()
        const mainSha = mainBranchData.object.sha

        // Create tree with campaign files
        const treeRes = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees`,
          {
            method: 'POST',
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              base_tree: mainSha,
              tree: Object.entries(campaignFiles).map(([path, content]) => ({
                path,
                mode: '100644',
                type: 'blob',
                content: typeof content === 'string' ? content : JSON.stringify(content, null, 2),
              })),
            }),
          }
        )

        if (!treeRes.ok) {
          const errorBody = await treeRes.text()
          console.error('Tree creation failed:', { status: treeRes.status, statusText: treeRes.statusText, body: errorBody })
          throw new Error(`Failed to create tree: ${treeRes.statusText} - ${errorBody}`)
        }

        const treeData = await treeRes.json()

        // Create commit
        const commitRes = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/git/commits`,
          {
            method: 'POST',
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Add ${campaignName} landing page campaign (auto-deployed via API)`,
              tree: treeData.sha,
              parents: [mainSha],
            }),
          }
        )

        if (!commitRes.ok) {
          const errorBody = await commitRes.text()
          console.error('Commit creation failed:', { status: commitRes.status, statusText: commitRes.statusText, body: errorBody })
          throw new Error(`Failed to create commit: ${commitRes.statusText} - ${errorBody}`)
        }

        const commitData = await commitRes.json()

        // Update main branch reference
        const updateRefRes = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/git/refs/heads/main`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sha: commitData.sha,
              force: false,
            }),
          }
        )

        if (!updateRefRes.ok) {
          const errorBody = await updateRefRes.text()
          console.error('Branch update failed:', { status: updateRefRes.status, statusText: updateRefRes.statusText, body: errorBody })
          throw new Error(`Failed to update main branch: ${updateRefRes.statusText} - ${errorBody}`)
        }

        console.log(`✓ Campaign files auto-pushed to GitHub for: ${campaignName}`)
      }, 3, 1000) // **3 retries with 1s initial delay, exponential backoff**
      
    } catch (pushError) {
      console.error('Error auto-pushing files to GitHub after 3 retries:', pushError)
      // **Fail immediately with clear error and retry instructions**
      return res.status(500).json({
        success: false,
        error: 'Failed to push campaign files to GitHub (after 3 retry attempts)',
        message: `GitHub push failed: ${pushError.message}`,
        guidance: {
          problem: 'Campaign files could not be pushed to GitHub (retried 3 times with 1s, 2s, 4s delays)',
          cause: pushError.message,
          debugging: {
            'GitHub token valid?': 'Check if GITHUB_TOKEN env var is set correctly',
            'GitHub rate limit?': 'Check https://github.com/settings/tokens for rate limits',
            'Repository accessible?': 'Verify sreekar-gkb/Landing-pages-ravenlabs exists and token has access',
            'Network issue?': 'GitHub API might be temporarily unavailable',
            'Check Vercel logs': 'Go to Vercel project Settings > Functions to see full error'
          },
          'next-step': 'Wait 30 seconds and retry the deployment',
          'retry-after': '30 seconds'
        }
      })
    }

    // **EXISTING STEP: Check if campaign page files exist in GitHub**
    console.log(`Checking if campaign files exist for: ${campaignName}`)

    const campaignPagePath = `app/${campaignName}/page.tsx`
    const checkFileRes = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${campaignPagePath}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )

    // If campaign files don't exist, return error with guidance
    if (!checkFileRes.ok && checkFileRes.status === 404) {
      console.warn(`Campaign files not found for: ${campaignName}`)

      return res.status(400).json({
        success: false,
        error: 'Campaign files not found in GitHub',
        message: `The campaign page files (app/${campaignName}/page.tsx) were not found in the GitHub repository.`,
        guidance: {
          problem: 'Campaign files were created locally but not pushed to GitHub.',
          solution: 'Push campaign files to GitHub, then retry this API call.',
          steps: [
            'cd /tmp/landing-pages-ravenlabs',
            'git config user.email "admin@ravenlabs.com"',
            'git config user.name "Admin"',
            `git add app/${campaignName}/ public/${campaignName}/ data/campaigns.json`,
            `git commit -m "Add ${campaignName} campaign landing page"`,
            'git push https://[GITHUB_TOKEN]@github.com/sreekar-gkb/Landing-pages-ravenlabs.git main',
            'Wait 30 seconds, then retry this API call.',
          ],
          retry: `curl -X POST https://landing-pages-ravenlabs.vercel.app/api/deploy-campaign -H "Content-Type: application/json" -d '{"campaignName":"${campaignName}","campaignStatus":"${campaignStatus}"}'`,
        },
        retryAfter: '30 seconds (after pushing files to GitHub)',
      })
    }

    if (!checkFileRes.ok) {
      throw new Error(`Failed to check campaign files: ${checkFileRes.statusText}`)
    }

    console.log(`✓ Campaign files found for: ${campaignName}`)

    // **EXISTING STEP: Get current campaigns.json via GitHub API**
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

    // **EXISTING STEP: Add or update campaign**
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

    // **EXISTING STEP: Push update to GitHub**
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

    console.log(`✓ Campaign registered in campaigns.json`)

    // **EXISTING STEP: Trigger Vercel redeploy**
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

    console.log(`✓ Vercel deployment triggered`)

    // **SUCCESS RESPONSE**
    res.json({
      success: true,
      message: `Campaign '${campaignName}' verified, registered, and deploying`,
      url: `https://landing-pages-ravenlabs.vercel.app/${campaignName}`,
      campaignRegistry: `https://landing-pages-ravenlabs.vercel.app/campaigns`,
      vercelDeployment: deployData.url || 'Deployment triggered',
      note: 'Live in 30-60 seconds',
      verification: {
        filesFound: true,
        filesAutoPushed: campaignFiles ? true : false,
        campaignRegistered: true,
        vercelRedeploying: true,
      },
    })
  } catch (error) {
    console.error('Deployment error:', error)
    res.status(500).json({
      success: false,
      error: 'Deployment failed',
      details: error.message,
      troubleshooting: {
        step1: 'Verify campaign files exist in GitHub: app/{campaignName}/page.tsx',
        step2: 'Check GitHub tokens are set in Vercel environment variables',
        step3: 'Try again with same campaignName',
      },
    })
  }
}
