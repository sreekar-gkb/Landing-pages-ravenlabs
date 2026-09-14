import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import { Zap, Target, Workflow, CheckCircle2 } from 'lucide-react'
import LeadForm from '../gpt-6-astra/components/LeadForm'
import Accordion from '../gpt-6-astra/components/Accordion'
import EngagementTracker from '../gpt-6-astra/components/EngagementTracker'
import TrackedCta from '../gpt-6-astra/components/TrackedCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Zoho Zia Agents: Autonomous AI for Your Zoho Ecosystem | Raven Labs',
  description:
    'Deploy autonomous AI agents that execute multi-step tasks across your Zoho apps. Free readiness session for Zoho enterprise customers ready to automate.',
  alternates: { canonical: 'https://landing-pages-ravenlabs.vercel.app/zoho-zia-agents' },
  openGraph: {
    title: 'Zoho Zia Agents: Autonomous AI for Your Zoho Ecosystem | Raven Labs',
    description:
      'Deploy autonomous AI agents that execute multi-step tasks across your Zoho apps. Free readiness session for Zoho enterprise customers ready to automate.',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app/zoho-zia-agents',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'What are Zoho Zia Agents?',
    a: 'Autonomous AI bots that execute multi-step workflows across Zoho\'s 100+ apps without human intervention at each step. They can qualify leads, route support tickets, process invoices, and more — no coding required.',
  },
  {
    q: 'Do we already have access to Zia Agents?',
    a: 'If you\'re on Zoho CRM Enterprise ($40/user/month) or Ultimate ($52/user/month), Zia Agents are included in your license. No extra per-seat fee. You just need to activate and configure them.',
  },
  {
    q: 'Can we build custom agents, or do we have to use pre-built ones?',
    a: 'Both. Zoho provides pre-built agents (Support Specialist, Lead Qualifier, etc.), but you can also build custom agents in Zia Agent Studio without coding. Orchestration lets agents collaborate on complex workflows.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Pre-built agents can go live in days; custom agents usually take 1–2 weeks to design, test, and deploy. Most teams see measurable time savings (per-agent ticket throughput, lead cycle time, etc.) within the first month.',
  },
  {
    q: 'What if our Zoho data is a mess?',
    a: 'Zia Agents work better with clean data, but they can handle moderate inconsistency. Our readiness session includes a data audit — we\'ll tell you what cleanup is worth doing before going live with agents.',
  },
  {
    q: 'Can Zia Agents talk to systems outside Zoho?',
    a: 'Zia Agents live within the Zoho ecosystem and leverage Zoho\'s 100+ apps. Integrations to external systems (Salesforce, Slack, etc.) require connectors, which we can help you scope during the readiness session.',
  },
]

export default function ZohoZiaAgentsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Zoho Zia Agents Readiness & Deployment',
        description:
          'Strategic assessment and deployment support for Zoho enterprise customers deploying autonomous AI agents across their ecosystem.',
        areaServed: 'AU',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://theravenlabs.com/#business',
          name: 'Raven Labs',
          url: 'https://theravenlabs.com',
          telephone: '1300 305 009',
          email: 'info@ravenlabs.com.au',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Melbourne',
            addressRegion: 'VIC',
            addressCountry: 'AU',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div>
      <Script
        id="ldjson-schema-zoho-zia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <EngagementTracker campaign="zoho-zia-agents" />

      <a href="#main" className="rl-skip-link">
        Skip to main content
      </a>

      <nav className={styles.nav}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/raven-labs-logo.png" alt="Raven Labs" className={styles.navLogo} />
        <TrackedCta href="#lead-form" label="nav" className="rl-btn-primary">
          Book a Readiness Session
        </TrackedCta>
      </nav>

      <main id="main">
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>Already In Your Zoho License</span>
              <h1 className="rl-h1">Zoho Zia Agents: autonomous AI across your ecosystem</h1>
              <p className={styles.heroSub}>
                Multi-step workflows that execute without stopping. Lead qualification, support automation, invoice processing, compliance checks — all running 24/7 inside the Zoho apps you already use.
              </p>
              <ul className={styles.heroBullets}>
                <li>
                  <CheckCircle2 size={16} /> Included in Zoho CRM Enterprise & Ultimate plans
                </li>
                <li>
                  <CheckCircle2 size={16} /> Execute workflows across 100+ Zoho apps
                </li>
                <li>
                  <CheckCircle2 size={16} /> Pre-built agents ready in days, custom agents in weeks
                </li>
              </ul>
            </div>
            <div className={styles.formCard} id="lead-form">
              <h2>Book your readiness session</h2>
              <p>30 minutes. No obligation. We reply within one business day.</p>
              <Suspense fallback={null}>
                <LeadForm />
              </Suspense>
            </div>
          </div>
        </header>

        {/* TRUST BAR */}
        <section className={styles.trustBar}>
          <p className={styles.trustLabel}>Official Zoho Partner</p>
          <div className={styles.trustLogos}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/zoho.webp" alt="Zoho" style={{ height: 50, width: 'auto' }} />
            <span style={{ fontSize: 'var(--rl-body-sm)', color: 'var(--rl-gray-400)' }}>
              Raven Labs is an authorized Zoho implementation partner
            </span>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={styles.section}>
          <div className={styles.sectionNarrow}>
            <h2 className="rl-h2">Your teams are drowning in repetitive work.</h2>
            <p className="rl-lead">
              A Zoho CRM Enterprise customer handles 500 support tickets a week. 60% are questions your knowledge base could answer. A sales team qualifies 200 leads monthly; 40% fail basic criteria. A finance team codes invoices by hand. These aren't edge cases — they're the default workflow at every Zoho customer.
            </p>
          </div>

          <div className={styles.statStrip}>
            <div className={styles.stat}>
              <div className={styles.statNum}>100+</div>
              <div className={styles.statLabel}>Zoho apps Zia Agents can integrate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>0</div>
              <div className={styles.statLabel}>Coding required to build custom agents</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>24/7</div>
              <div className={styles.statLabel}>Agents work without human intervention</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>No Extra Fee</div>
              <div className={styles.statLabel}>Included in your existing CRM license</div>
            </div>
          </div>
        </section>

        {/* ANSWER */}
        <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionNarrow}>
              <h2 className="rl-h2">Zia Agents: work that stays finished</h2>
              <p className="rl-lead">
                Autonomous workflows that follow rules you set. Qualify leads by scoring, route support tickets by category, auto-process invoices by vendor, flag compliance risk — then move on. No waiting for human approval; no bottleneck at each step.
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <Zap size={24} color="var(--rl-purple-1)" />
                <h3>Execute and forget</h3>
                <p>Agents run 24/7 inside Zoho. No server setup, no background jobs to monitor — it just works.</p>
              </div>
              <div className={styles.benefitCard}>
                <Target size={24} color="var(--rl-purple-1)" />
                <h3>Cross-app intelligence</h3>
                <p>Agents pull context from anywhere in your Zoho ecosystem. Detect churn risk in CRM, then flag it in support. Process invoice, auto-code in Books.</p>
              </div>
              <div className={styles.benefitCard}>
                <Workflow size={24} color="var(--rl-purple-1)" />
                <h3>No coding, orchestration included</h3>
                <p>Build in Zia Agent Studio (no code). Agents collaborate on multi-step workflows. Hierarchy them (manager agent overseeing specialists).</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF POINT */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div style={{ maxWidth: 800, marginInline: 'auto' }}>
              <h2 className="rl-h2">Real deployment, real numbers</h2>
              <div style={{ marginTop: 'var(--rl-space-8)' }}>
                <h3 className="rl-h3" style={{ marginBottom: 'var(--rl-space-4)', color: 'var(--rl-purple-1)' }}>
                  Enterprise SaaS Platform — Support Automation
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--rl-space-6)', marginBottom: 'var(--rl-space-8)' }}>
                  <div>
                    <h4 style={{ fontSize: 'var(--rl-body-sm)', fontWeight: 600, color: 'var(--rl-gray-400)', textTransform: 'uppercase', marginBottom: 'var(--rl-space-3)' }}>
                      The Challenge
                    </h4>
                    <p style={{ fontSize: 'var(--rl-body)', lineHeight: 1.6, color: 'var(--rl-fg-muted)', margin: 0 }}>
                      200+ support tickets per week. 35% stuck in manual qualification queue. 4-hour average first-response time. Growing ticket volume but no budget for new headcount.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'var(--rl-body-sm)', fontWeight: 600, color: 'var(--rl-gray-400)', textTransform: 'uppercase', marginBottom: 'var(--rl-space-3)' }}>
                      The Solution
                    </h4>
                    <p style={{ fontSize: 'var(--rl-body)', lineHeight: 1.6, color: 'var(--rl-fg-muted)', margin: 0 }}>
                      Deployed Zia Agents in Zoho Desk to auto-triage by category and severity, auto-escalate based on keywords, and suggest knowledge-base answers for common questions.
                    </p>
                  </div>
                </div>
                <div style={{ backgroundColor: 'var(--rl-gray-50)', border: '1px solid var(--rl-border)', borderRadius: 'var(--rl-radius-lg)', padding: 'var(--rl-space-6)' }}>
                  <h4 style={{ fontSize: 'var(--rl-body-sm)', fontWeight: 600, color: 'var(--rl-gray-400)', textTransform: 'uppercase', marginBottom: 'var(--rl-space-4)', margin: 0 }}>
                    Results (First 6 Weeks)
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--rl-space-6)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--rl-h2)', fontWeight: 700, color: 'var(--rl-purple-1)', lineHeight: 1, marginBottom: 'var(--rl-space-2)' }}>
                        43%
                      </div>
                      <p style={{ fontSize: 'var(--rl-body-sm)', color: 'var(--rl-fg-muted)', margin: 0, lineHeight: 1.5 }}>
                        Reduction in qualification backlog (eliminated 1 FTE workload)
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--rl-h2)', fontWeight: 700, color: 'var(--rl-purple-1)', lineHeight: 1, marginBottom: 'var(--rl-space-2)' }}>
                        92 min
                      </div>
                      <p style={{ fontSize: 'var(--rl-body-sm)', color: 'var(--rl-fg-muted)', margin: 0, lineHeight: 1.5 }}>
                        Average first response (58% faster; was 4 hours)
                      </p>
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--rl-h2)', fontWeight: 700, color: 'var(--rl-purple-1)', lineHeight: 1, marginBottom: 'var(--rl-space-2)' }}>
                        +27%
                      </div>
                      <p style={{ fontSize: 'var(--rl-body-sm)', color: 'var(--rl-fg-muted)', margin: 0, lineHeight: 1.5 }}>
                        Ticket resolution rate, zero additional headcount
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionNarrow}>
              <h2 className="rl-h2">How the readiness session works</h2>
              <p className="rl-lead">Four steps, the same process behind every Raven Labs engagement.</p>
            </div>
            <div className={styles.processGrid}>
              {[
                { name: 'Discover', body: 'Map your team\'s repetitive workflows. Identify which are good agent candidates.' },
                { name: 'Prototype', body: 'Run a proof-of-concept agent on a real workflow in your Zoho instance.' },
                { name: 'Build', body: 'Deploy pre-built or custom agents, scoped to a pilot set of users.' },
                { name: 'Scale', body: 'Expand across teams once the pilot proves ROI on your numbers.' },
              ].map((step, i) => (
                <div key={step.name} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <h3>{step.name}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionNarrow}>
              <h2 className="rl-h2">Questions worth asking before you commit</h2>
            </div>
            <div style={{ maxWidth: 720, marginInline: 'auto', marginTop: 'var(--rl-space-8)' }}>
              <Accordion items={faqs} />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <h2 className="rl-h2">See what Zia Agents can actually do for your teams.</h2>
          <p>30 minutes. No obligation. No pressure to buy anything.</p>
          <TrackedCta href="#lead-form" label="final" className="rl-btn-primary">
            Book a Readiness Session
          </TrackedCta>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/raven-labs-logo.png" alt="Raven Labs" className={styles.footerLogo} />
            <p className={styles.footerBlurb}>
              Helping organisations navigate their AI and digital transformation journey with clarity and confidence.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li><a href="https://theravenlabs.com/about/">About</a></li>
              <li><a href="https://www.theravenlabs.com/case-studies/">Case Studies</a></li>
              <li><a href="https://theravenlabs.com/contact-us/">Contact</a></li>
              <li><a href="/campaigns">All campaigns</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li>Melbourne, VIC, Australia</li>
              <li><a href="tel:1300305009">1300 305 009</a></li>
              <li><a href="mailto:info@ravenlabs.com.au">info@ravenlabs.com.au</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Raven Labs. All rights reserved. ABN [[PLACEHOLDER: insert real ABN]].</span>
          <div className={styles.footerLinks}>
            <a href="https://theravenlabs.com/privacy-policy/">Privacy</a>
            <a href="https://theravenlabs.com/terms/">Terms</a>
          </div>
        </div>
        <p className={styles.disclosure}>
          Raven Labs is an official Zoho implementation partner. Zia and Zoho Zia Agents are products of Zoho Corporation. Raven Labs is not affiliated with, endorsed by, or an official subsidiary of Zoho Corporation.
        </p>
      </footer>
    </div>
  )
}
