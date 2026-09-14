import type { Metadata } from 'next'
import campaigns from '@/data/campaigns.json'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Campaign Registry | Raven Labs',
  robots: { index: false, follow: false },
}

const badgeClass: Record<string, string> = {
  live: 'badgeLive',
  test: 'badgeTest',
  retired: 'badgeRetired',
}

export default function CampaignsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <a href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/raven-labs-logo.png" alt="Raven Labs" className={styles.logo} />
        </a>
        <h1 className="rl-h2">Campaign registry</h1>
        <p className="rl-lead">Every landing page deployed under this project, for internal reference.</p>
      </div>
      <div className={styles.list}>
        {campaigns.map((c) => (
          <div key={c.slug} className={styles.card}>
            <div className={styles.cardLeft}>
              <h2>{c.name}</h2>
              <p>
                Keyword: {c.keyword} · Deployed {c.deployedAt}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--rl-space-4)' }}>
              <span className={`${styles.badge} ${styles[badgeClass[c.status] ?? 'badgeTest']}`}>{c.status}</span>
              <a className="rl-btn-secondary" href={c.url}>
                View page
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
