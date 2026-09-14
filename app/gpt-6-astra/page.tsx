import { Suspense } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Zap, ShieldCheck, Workflow, Check } from 'lucide-react'
import LeadForm from './components/LeadForm'
import Accordion from './components/Accordion'
import EngagementTracker from './components/EngagementTracker'
import TrackedCta from './components/TrackedCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'GPT-6 Astra: What It Can Do In Real Time | Raven Labs',
  description:
    'GPT-6 Astra is live. See what it actually does in real time, and get a free readiness session to evaluate safe deployment for your business.',
  alternates: { canonical: 'https://landing-pages-ravenlabs.vercel.app/gpt-6-astra' },
  openGraph: {
    title: 'GPT-6 Astra: What It Can Do In Real Time | Raven Labs',
    description:
      'GPT-6 Astra is live. See what it actually does in real time, and get a free readiness session to evaluate safe deployment for your business.',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app/gpt-6-astra',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Is Raven Labs affiliated with OpenAI?',
    a: "No. Raven Labs is an independent AI and digital transformation consultancy. We help Australian businesses evaluate, integrate and deploy third-party models like GPT-6 Astra — we're not OpenAI and don't resell its products directly.",
  },
  {
    q: 'What does "real time" actually mean for GPT-6 Astra?',
    a: 'It means Astra can navigate live software the way a person does — browsers, spreadsheets, internal tools — and complete multi-step work as it goes, rather than just describing what to do. OpenAI\'s own benchmarks show it completing tasks roughly twice as fast as its predecessor.',
  },
  {
    q: 'How much does this cost?',
    a: "API access is priced per token by OpenAI directly (roughly 2.5x their prior flagship model at launch). Our readiness session is free — it's a working session to figure out if and where Astra fits your operations before you spend anything.",
  },
  {
    q: "We've never used AI in our operations before — is this too early for us?",
    a: "That's exactly who the readiness session is for. We audit your data and workflows first, because AI without a data foundation is a guess. We build the foundation, then recommend a pilot — not a company-wide rollout on day one.",
  },
  {
    q: 'Is it safe? I heard it has serious cybersecurity capability.',
    a: "OpenAI classifies Astra at their 'Critical' cybersecurity threshold, which is precisely why access is staged and gated for enterprise use. That's a reason to bring in deployment guidance, not a reason to avoid the model — we help you scope safe, supervised use rather than open-ended access.",
  },
  {
    q: 'What happens after I submit the form?',
    a: "We'll reply within one business day to book a 30-minute readiness session. There's no obligation and no sales pressure — if it's not a fit, we'll tell you plainly.",
  },
]

export default function GptAstraPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'GPT-6 Astra Readiness & Integration',
        description:
          'Readiness assessment and integration support for businesses evaluating GPT-6 Astra, from OpenAI.',
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
        id="ldjson-schema-gpt-6-astra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <EngagementTracker campaign="gpt-6-astra" />

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
              <span className={styles.eyebrow}>Just launched · 3 September 2026</span>
              <h1 className="rl-h1">GPT-6 Astra: what it can do in real time</h1>
              <p className={styles.heroSub}>
                OpenAI&apos;s newest model doesn&apos;t just answer questions — it works live inside
                browsers, spreadsheets and internal tools, completing multi-step tasks as it goes.
                We help Australian mining, construction, manufacturing and engineering businesses
                work out where it actually fits — and deploy it safely.
              </p>
              <ul className={styles.heroBullets}>
                <li>
                  <Check size={16} /> Free 30-minute readiness session, no obligation
                </li>
                <li>
                  <Check size={16} /> Independent assessment — we&apos;re not reselling OpenAI credits
                </li>
                <li>
                  <Check size={16} /> Built for regulated, infrastructure-heavy operations
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
          <p className={styles.trustLabel}>Raven Labs is an authorised partner for</p>
          <div className={styles.trustLogos}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/microsoft-365.webp" alt="Microsoft 365" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/zoho.webp" alt="Zoho" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/employment-hero.webp" alt="Employment Hero" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/simpro.webp" alt="Simpro" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/partners/ringcentral.webp" alt="RingCentral" />
          </div>
        </section>

        {/* PROBLEM */}
        <section className={styles.section}>
          <div className={styles.sectionNarrow}>
            <h2 className="rl-h2">A new model launches every few months. Most never get evaluated.</h2>
            <p className="rl-lead">
              Frontier AI capability moves faster than most operations teams can evaluate it —
              so businesses either ignore it entirely, or adopt it without a data foundation and
              get an expensive lesson in why that doesn&apos;t work.
            </p>
          </div>

          <div className={styles.statStrip}>
            <div className={styles.stat}>
              <div className={styles.statNum}>~2x</div>
              <div className={styles.statLabel}>Faster task completion vs. OpenAI&apos;s prior flagship model*</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>1.05M</div>
              <div className={styles.statLabel}>Token context window</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>Live</div>
              <div className={styles.statLabel}>Works inside real browsers and tools, not just chat</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>Staged</div>
              <div className={styles.statLabel}>Gated rollout due to Critical-level cyber capability</div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: 'var(--rl-caption)', color: 'var(--rl-gray-400)', marginTop: 'var(--rl-space-4)' }}>
            *Per OpenAI&apos;s published OSWorld 2.0 and Mind2Web benchmark results at launch.
          </p>
        </section>

        {/* ANSWER / BENEFITS */}
        <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionNarrow}>
              <h2 className="rl-h2">The Raven Labs approach</h2>
              <p className="rl-lead">
                We audit, pilot and deploy — in that order. No company-wide rollout on day one.
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <Zap size={24} color="var(--rl-purple-1)" />
                <h3>See it live, on your workflow</h3>
                <p>We run a real task from your operations through Astra in the readiness session — not a generic demo.</p>
              </div>
              <div className={styles.benefitCard}>
                <ShieldCheck size={24} color="var(--rl-purple-1)" />
                <h3>Safety scoped to your risk profile</h3>
                <p>Astra&apos;s cybersecurity capability is significant enough that OpenAI gates it. We scope access and guardrails before anyone touches production systems.</p>
              </div>
              <div className={styles.benefitCard}>
                <Workflow size={24} color="var(--rl-purple-1)" />
                <h3>A data foundation first</h3>
                <p>If your data is scattered, Astra will amplify that mess, not fix it. We consolidate and structure it before recommending a pilot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionNarrow}>
              <h2 className="rl-h2">How the readiness session works</h2>
              <p className="rl-lead">Four steps, the same process behind every Raven Labs engagement.</p>
            </div>
            <div className={styles.processGrid}>
              {[
                { name: 'Discover', body: 'A 30-minute session to map your workflows and data readiness.' },
                { name: 'Prototype', body: 'A clickable demo against a real task from your operations.' },
                { name: 'Build', body: 'A scoped, supervised pilot — not a company-wide rollout.' },
                { name: 'Scale', body: 'Expand only once the pilot proves out on your own numbers.' },
              ].map((step, i) => (
                <div key={step.name} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <h3>{step.name}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>

            <div className={styles.callout}>
              <h3>A note on proof</h3>
              <p>
                GPT-6 Astra launched on 3 September 2026 — this campaign is deliberately early. We
                don&apos;t have a completed Astra case study yet, so we&apos;re not going to invent one.
                [[PLACEHOLDER: swap in a real client outcome once the first Astra engagement completes.]]
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}>
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
          <h2 className="rl-h2">See what GPT-6 Astra can actually do for you.</h2>
          <p>30 minutes. No obligation. No pressure to buy anything from us or from OpenAI.</p>
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
              Helping organisations navigate their AI and digital transformation journey with
              clarity and confidence.
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
          Raven Labs is an independent AI and digital transformation consultancy. GPT-6 Astra is a
          product of OpenAI; Raven Labs is not affiliated with, endorsed by, or an official partner
          of OpenAI. &quot;GPT-6 Astra&quot; is referenced for identification purposes only.
        </p>
      </footer>
    </div>
  )
}
