import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: "You're booked | Raven Labs",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  const adsId = process.env.NEXT_PUBLIC_ADS_ID
  const conversionLabel = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_ZOHO_ZIA_AGENTS

  return (
    <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--rl-space-6)' }}>
      {adsId && conversionLabel && (
        <Script id="ads-conversion-zoho-zia" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('event', 'conversion', { send_to: '${adsId}/${conversionLabel}' });
          `}
        </Script>
      )}
      <div style={{ maxWidth: 480, textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/raven-labs-logo.png" alt="Raven Labs" style={{ width: 150, marginInline: 'auto', marginBottom: 'var(--rl-space-8)' }} />
        <h1 className="rl-h2">You're booked in.</h1>
        <p className="rl-lead">
          Thanks for reaching out about Zoho Zia Agents. We'll reply within one business day to schedule your readiness session — no obligation, no pressure.
        </p>
        <a className="rl-btn-primary" href="https://www.theravenlabs.com">
          Visit the full site
        </a>
      </div>
    </div>
  )
}
