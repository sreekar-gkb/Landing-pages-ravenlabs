import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { Zap, Target, Workflow, CheckCircle2 } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Accordion from '@/components/Accordion'
import EngagementTracker from '@/components/EngagementTracker'
import TrackedCta from '@/components/TrackedCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Zoho Zia Agents: Autonomous AI for Your Zoho Ecosystem | Raven Labs',
  description: 'Deploy autonomous AI agents that execute multi-step tasks across your Zoho apps. Free readiness session for Zoho enterprise customers ready to automate.',
  alternates: { canonical: 'https://landing-pages-ravenlabs.vercel.app/zoho-zia-agents' },
  openGraph: { title: 'Zoho Zia Agents: Autonomous AI for Your Zoho Ecosystem | Raven Labs', description: 'Deploy autonomous AI agents that execute multi-step tasks across your Zoho apps.', type: 'website', url: 'https://landing-pages-ravenlabs.vercel.app/zoho-zia-agents' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const faqs = [
  { q: 'What are Zoho Zia Agents?', a: "Autonomous AI bots that execute multi-step workflows across Zoho apps without human intervention at each step." },
  { q: 'Can we build custom agents?', a: 'Zoho provides pre-built agents and custom agents can be configured in Zia Agent Studio.' },
  { q: 'How long does it take to see results?', a: 'Timing depends on the workflow and scope; a readiness session can identify a suitable pilot.' },
  { q: 'What if our Zoho data is a mess?', a: 'A readiness assessment can identify the data cleanup needed before an agent pilot.' },
  { q: 'Can Zia Agents talk to systems outside Zoho?', a: 'External integrations depend on available connectors and the specific workflow.' },
]

export default function ZohoZiaAgentsPage() {
  const schemaData = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Service', name: 'Zoho Zia Agents Readiness & Deployment', areaServed: 'AU', provider: { '@type': 'Organization', name: 'Raven Labs', url: 'https://www.theravenlabs.com' } }, { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] }

  return <div>
    <Script id="ldjson-schema-zoho-zia" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    <EngagementTracker campaign="zoho-zia-agents" />
    <a href="#main" className="rl-skip-link">Skip to main content</a>
    <nav className={styles.nav}>
      <img src="/raven-labs-logo.png" alt="Raven Labs" className={styles.navLogo} />
      <TrackedCta href="#lead-form" label="nav" className="rl-btn-primary">Book a Readiness Session</TrackedCta>
    </nav>
    <main id="main">
      <header className={styles.hero}><div className={styles.heroInner}><div>
        <span className={styles.eyebrow}>Already In Your Zoho License</span>
        <h1 className="rl-h1">Zoho Zia Agents: autonomous AI across your ecosystem</h1>
        <p className={styles.heroSub}>Multi-step workflows that execute without stopping. Lead qualification, support automation, invoice processing and more inside the Zoho apps you already use.</p>
        <ul className={styles.heroBullets}><li><CheckCircle2 size={16} /> Execute workflows across your Zoho ecosystem</li><li><CheckCircle2 size={16} /> Automate repetitive multi-step work</li><li><CheckCircle2 size={16} /> Start with a focused readiness assessment</li></ul>
      </div><div className={styles.formCard} id="lead-form"><h2>Book your readiness session</h2><p>30 minutes. No obligation. We reply within one business day.</p><Suspense fallback={null}><LeadForm /></Suspense></div></div></header>
      <section className={styles.trustBar}><p className={styles.trustLabel}>Zoho automation</p><div className={styles.trustLogos}><img src="/partners/zoho.webp" alt="Zoho" /><span>Raven Labs helps Australian businesses scope and implement practical automation.</span></div></section>
      <section className={styles.section}><div className={styles.sectionNarrow}><h2 className="rl-h2">Your teams are drowning in repetitive work.</h2><p className="rl-lead">Repetitive qualification, routing, processing and follow-up can consume valuable team time. The right autonomous workflow can take work from trigger to completion with less manual intervention.</p></div><div className={styles.statStrip}><div className={styles.stat}><div className={styles.statNum}>24/7</div><div className={styles.statLabel}>Automation can run continuously</div></div><div className={styles.stat}><div className={styles.statNum}>Multi-step</div><div className={styles.statLabel}>Workflows can span connected apps</div></div><div className={styles.stat}><div className={styles.statNum}>Less</div><div className={styles.statLabel}>Manual repetitive work</div></div></div></section>
      <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}><div className={styles.sectionInner}><div className={styles.sectionNarrow}><h2 className="rl-h2">Zia Agents: work that stays finished</h2><p className="rl-lead">Define the workflow, the rules and the outcome. Then identify where an agent can take over repetitive steps.</p></div><div className={styles.benefitsGrid}><div className={styles.benefitCard}><Zap size={24} color="var(--rl-purple-1)" /><h3>Execute and forget</h3><p>Automate repeatable workflows without requiring a person to supervise every step.</p></div><div className={styles.benefitCard}><Target size={24} color="var(--rl-purple-1)" /><h3>Cross-app intelligence</h3><p>Use context from connected Zoho applications to make workflows more useful.</p></div><div className={styles.benefitCard}><Workflow size={24} color="var(--rl-purple-1)" /><h3>Start with one workflow</h3><p>Prove value with a focused pilot before expanding automation across teams.</p></div></div></div></section>
      <section className={styles.section}><div className={styles.sectionInner}><div className={styles.sectionNarrow}><h2 className="rl-h2">How the readiness session works</h2><p className="rl-lead">A practical path from workflow discovery to a measurable pilot.</p></div><div className={styles.processGrid}>{[{ name: 'Discover', body: "Map repetitive workflows and identify good agent candidates." }, { name: 'Prototype', body: 'Select one real workflow and define the desired outcome.' }, { name: 'Build', body: 'Configure and test the pilot against agreed rules and data.' }, { name: 'Scale', body: 'Expand only after the pilot demonstrates value.' }].map((step, i) => <div key={step.name} className={styles.processStep}><div className={styles.processNum}>{i + 1}</div><h3>{step.name}</h3><p>{step.body}</p></div>)}</div></div></section>
      <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}><div className={styles.sectionInner}><div className={styles.sectionNarrow}><h2 className="rl-h2">Frequently asked questions</h2></div><Accordion items={faqs} /></div></section>
      <section className={styles.section}><div className={styles.sectionNarrow}><h2 className="rl-h2">Ready to identify your first autonomous workflow?</h2><p className="rl-lead">Bring one repetitive process. We’ll help you assess whether an agent is the right fit.</p><TrackedCta href="#lead-form" label="final" className="rl-btn-primary">Book a Readiness Session</TrackedCta></div></section>
    </main>
    <footer style={{ padding: 'var(--rl-space-8) var(--rl-space-6)', borderTop: '1px solid var(--rl-border)', textAlign: 'center' }}><img src="/raven-labs-logo.png" alt="Raven Labs" style={{ width: 130, height: 'auto' }} /><p style={{ color: 'var(--rl-fg-muted)', fontSize: 'var(--rl-body-sm)' }}>AI & digital transformation for Australian business.</p></footer>
  </div>
}
