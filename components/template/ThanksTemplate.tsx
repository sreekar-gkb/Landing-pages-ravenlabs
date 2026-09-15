import Image from 'next/image'
import styles from './CampaignTemplate.module.css'

type Props = {
  campaign: string
  partnerName?: string
  heading?: string
  body?: string;
  nav: { phoneHref: string; phoneLabel: string }
}

/**
 * Fixed thanks-page template. Every campaign's app/{slug}/thanks/page.tsx should render this
 * rather than building a bespoke confirmation page.
 */
export default function ThanksTemplate({ partnerName, heading, body, nav }: Props) {
  return (
    <>
      <header className={styles.nav}>
        <div className={`rl-container ${styles.navInner}`}>
          <div className={styles.cobrand}>
            <Image src="/raven-labs-logo.png" alt="Raven Labs" width={140} height={40} priority style={{ height: 36, width: 'auto' }} />
            {partnerName && (
              <>
                <span className={styles.cobrandDivider} aria-hidden />
                <span className={styles.partnerName}>{partnerName}</span>
              </>
            )}
          </div>
          <a href={nav.phoneHref} className="rl-btn-primary">{nav.phoneLabel}</a>
        </div>
      </header>

      <main
        style={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--rl-canvas)',
          backgroundImage: 'var(--rl-ambient)',
          padding: 'var(--rl-space-8)',
        }}
      >
        <div
          style={{
            maxWidth: 480,
            textAlign: 'center',
            background: 'var(--rl-white)',
            borderRadius: 'var(--rl-radius-lg)',
            boxShadow: 'var(--rl-shadow-lg)',
            padding: 'var(--rl-space-12)',
          }}
        >
          <div
            aria-hidden
            style={{
              width: 56, height: 56, borderRadius: 'var(--rl-radius-full)',
              background: 'var(--rl-soft-purple)', color: 'var(--rl-accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto var(--rl-space-6)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <h1 className="rl-h2">{heading ?? "Thanks — we're on it."}</h1>
          <p className="rl-lead" style={{ marginBottom: 'var(--rl-space-6)' }}>
            {body ?? 'One of the Raven Labs team will be in touch within one business day.'}
          </p>
          <p style={{ fontSize: 'var(--rl-text-sm)', color: 'var(--rl-fg-muted)', margin: 0 }}>
            Need something faster?{' '}
            <a href="mailto:hello@theravenlabs.com" style={{ color: 'var(--rl-accent)', fontWeight: 600 }}>hello@theravenlabs.com</a>
          </p>
        </div>
      </main>
    </>
  )
}
