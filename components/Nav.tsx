import Image from 'next/image'
import styles from './Nav.module.css'

type Partner = {
  name: string
  /** Path under /public, e.g. '/partners/zoho.webp'. Omit to show name as text only. */
  logoSrc?: string
}

type NavProps = {
  partner?: Partner
  phone?: string
  phoneLabel?: string
}

/**
 * Shared site header: Raven Labs logo, optional partner co-brand lockup, phone CTA.
 * Matches the pattern used on copilot.theravenlabs.com. Used across every campaign —
 * do not fork this per campaign; pass a different `partner` prop instead.
 */
export default function Nav({ partner, phone = 'tel:1300000000', phoneLabel = 'Give us a call' }: NavProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="Raven Labs home">
          <Image src="/raven-labs-logo.png" alt="Raven Labs" width={145} height={59} priority className={styles.logo} />
        </a>

        {partner && (
          <div className={styles.partnerLockup}>
            <span className={styles.divider} aria-hidden="true" />
            {partner.logoSrc && (
              <Image src={partner.logoSrc} alt="" width={28} height={28} className={styles.partnerLogo} aria-hidden="true" />
            )}
            <span className={styles.partnerName}>{partner.name}</span>
          </div>
        )}

        <a href={phone} className={`${styles.cta} rl-btn-primary`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className={styles.ctaLabel}>{phoneLabel}</span>
        </a>
      </div>
    </header>
  )
}
