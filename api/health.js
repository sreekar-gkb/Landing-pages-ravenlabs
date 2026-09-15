export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'Method not allowed' })

  res.status(200).json({
    ok: true,
    service: 'raven-landing-page-platform',
    environment: process.env.VERCEL_ENV || 'unknown',
    githubConfigured: Boolean(process.env.GITHUB_TOKEN),
    vercelConfigured: Boolean(process.env.VERCEL_TOKEN),
    leadWebhookConfigured: Boolean(process.env.LEAD_WEBHOOK_URL),
    analyticsConfigured: Boolean(process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_ADS_ID),
    timestamp: new Date().toISOString(),
  })
}
