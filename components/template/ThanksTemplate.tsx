import Nav from '@/components/Nav'
import type { Partner } from './CampaignContent.types'

type Props = {
  campaign: string
  partner?: Partner
  nav?: { phoneHref?: string; phoneLabel?: string }
  heading: string
  body: string
}

export default function ThanksTemplate({ partner, nav, heading, body }: Props) {
  return (
    <>
      <Nav partner={partner} phone={nav?.phoneHref} phoneLabel={nav?.phoneLabel} />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--rl-space-16) var(--rl-space-6)' }}>
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <h1 className="rl-h1">{heading}</h1>
          <p className="rl-lead">{body}</p>
        </div>
      </main>
    </>
  )
}
