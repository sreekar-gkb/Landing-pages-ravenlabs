import {
  BarChart3,
  Smartphone,
  Users,
  Boxes,
  Megaphone,
  Bot,
  Headset,
  Code2,
  Compass,
  Layers,
  Hammer,
  TrendingUp,
  Phone,
  Check,
} from 'lucide-react'
import styles from './page.module.css'

const services = [
  {
    icon: Bot,
    name: 'AI Integration',
    blurb: 'Automate workflows and connect predictive insight into daily operations.',
    href: 'https://www.theravenlabs.com/services/ai-integration/',
  },
  {
    icon: BarChart3,
    name: 'Business Intelligence',
    blurb: 'Turn raw operational data into dashboards your team actually uses.',
    href: 'https://www.theravenlabs.com/services/business-intelligence/',
  },
  {
    icon: Users,
    name: 'CRM',
    blurb: 'Customer systems built around how your teams actually sell and serve.',
    href: 'https://www.theravenlabs.com/services/crm/',
  },
  {
    icon: Boxes,
    name: 'ERP',
    blurb: 'Bring finance, inventory and operations into one connected system.',
    href: 'https://www.theravenlabs.com/services/erp/',
  },
  {
    icon: Megaphone,
    name: 'Digital Marketing',
    blurb: 'SEO and demand generation that puts you in front of the right buyers.',
    href: 'https://www.theravenlabs.com/services/digital-marketing/',
  },
  {
    icon: Headset,
    name: 'Managed IT Support',
    blurb: 'Round-the-clock monitoring so problems get caught before they cost you.',
    href: 'https://www.theravenlabs.com/services/managed-it-support/',
  },
  {
    icon: Smartphone,
    name: 'Mobile Apps',
    blurb: 'iOS and Android builds designed around real field and floor workflows.',
    href: 'https://www.theravenlabs.com/services/mobile-apps/',
  },
  {
    icon: Code2,
    name: 'Web Development',
    blurb: 'Fast, conversion-ready sites — from corporate to e-commerce.',
    href: 'https://www.theravenlabs.com/services/web-development/',
  },
]

const problems = [
  {
    title: "We don't know where to start with AI.",
    body: 'An AI readiness assessment and a strategic roadmap — from opportunity identification through to implementation.',
  },
  {
    title: 'Our data is scattered and inconsistent.',
    body: "We consolidate, clean and structure your data so it's accurate and ready for AI-driven decisions.",
  },
  {
    title: "We can't measure the ROI of our AI initiatives.",
    body: 'We define the metrics that matter, tying outcomes directly to revenue, time saved and performance.',
  },
  {
    title: "We're unsure which platforms are right for us.",
    body: 'From Microsoft to Zoho ecosystems, we assess your use case and budget before recommending a stack.',
  },
]

const process = [
  { icon: Compass, name: 'Discover', body: 'Rapid workshops to uncover constraints and opportunities.' },
  { icon: Layers, name: 'Prototype', body: 'Clickable demos within weeks — see the value before you commit.' },
  { icon: Hammer, name: 'Build', body: 'Agile delivery of production-grade software and models.' },
  { icon: TrendingUp, name: 'Scale', body: 'Continuous optimisation and feature expansion as you grow.' },
]

const partners = [
  { name: 'Microsoft 365', file: 'microsoft-365.webp', href: 'https://theravenlabs.com/microsoft/' },
  { name: 'Zoho', file: 'zoho.webp', href: 'https://theravenlabs.com/zoho/' },
  { name: 'Employment Hero', file: 'employment-hero.webp', href: 'https://theravenlabs.com/employment/' },
  { name: 'Simpro', file: 'simpro.webp', href: 'https://theravenlabs.com/simpro/' },
  { name: 'RingCentral', file: 'ringcentral.webp', href: 'https://theravenlabs.com/ringcentral/' },
]

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/raven-labs-logo.png" alt="Raven Labs" className={styles.navLogo} />
        <div className={styles.navRight}>
          <a href="tel:1300305009" className={styles.navPhone}>
            <Phone size={16} /> 1300 305 009
          </a>
          <a className="rl-btn-primary" href="https://www.theravenlabs.com/contact-us/">
            Get in touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>AI &amp; Digital Transformation</p>
          <h1 className="rl-display">
            Systems built for <span className={styles.accent}>Australian industry</span>.
          </h1>
          <p className="rl-lead">
            CRM, ERP, Business Intelligence and AI integration for mining, construction,
            manufacturing and engineering teams — plus Fulqrom, our own asset intelligence
            platform.
          </p>
          <div className={styles.heroCtas}>
            <a className="rl-btn-primary" href="https://www.theravenlabs.com/contact-us/">
              Get in touch
            </a>
            <a className="rl-btn-secondary" href="https://www.theravenlabs.com">
              Visit the full site
            </a>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className={styles.trustBar}>
        <p className={styles.trustLabel}>Featured Partners</p>
        <div className={styles.trustLogos}>
          {partners.map((p) => (
            <a key={p.name} href={p.href} aria-label={p.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/partners/${p.file}`} alt={p.name} />
            </a>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <h2 className="rl-h2">Common problems we solve</h2>
            <p className="rl-lead">
              Businesses face similar challenges implementing AI and digital systems. Here&apos;s
              where we typically start.
            </p>
          </div>
          <div className={styles.problemsGrid}>
            {problems.map((p) => (
              <div key={p.title} className={styles.problemCard}>
                <h3 className="rl-h3">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section} style={{ background: 'var(--rl-gray-50)' }}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <h2 className="rl-h2">End-to-end services</h2>
            <p className="rl-lead">
              From strategic assessment to implementation and scaling — one team across every
              system you run on.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <a key={s.name} href={s.href} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <s.icon size={20} />
                </div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FULQROM FEATURE */}
      <section className={styles.fulqrom}>
        <div className={styles.fulqromInner}>
          <div>
            <span className={styles.fulqromTag}>Flagship Product</span>
            <h2 className="rl-h2">Fulqrom — asset intelligence for the built environment.</h2>
            <p className={`${styles.lede} rl-lead`}>
              Our own SaaS platform for building owners and operators: reduce energy costs,
              manage documentation and assets, and support monetary assessments for maintenance.
            </p>
            <ul className={styles.fulqromList}>
              <li>
                <Check size={20} /> Portfolio-wide energy and consumption tracking
              </li>
              <li>
                <Check size={20} /> Centralised documentation and asset records
              </li>
              <li>
                <Check size={20} /> Data-backed maintenance and valuation support
              </li>
            </ul>
            <a className="rl-btn-primary" style={{ background: '#ffffff', color: 'var(--rl-purple-1)' }} href="https://www.theravenlabs.com/contact-us/">
              Ask about Fulqrom
            </a>
          </div>
          <div className={styles.fulqromCard}>
            <h3>Built for</h3>
            <ul>
              <li>
                <strong>Mining</strong>
                Infrastructure-heavy sites that depend on reliable, measurable outcomes.
              </li>
              <li>
                <strong>Construction</strong>
                Documentation and asset tracking across long project lifecycles.
              </li>
              <li>
                <strong>Manufacturing</strong>
                Energy and maintenance visibility across plant portfolios.
              </li>
              <li>
                <strong>Engineering</strong>
                Asset valuation support grounded in real operating data.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHead}>
            <h2 className="rl-h2">Our proven path to impact</h2>
            <p className="rl-lead">A systematic approach that turns ideas into production-ready systems.</p>
          </div>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <div key={step.name} className={styles.processStep}>
                <div className={styles.processNum}>{i + 1}</div>
                <h3>{step.name}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <h2 className="rl-h2">Let&apos;s turn your biggest challenge into your next win.</h2>
        <p>One conversation is all it takes. Tell us where you&apos;re stuck — we&apos;ll show you how to move forward.</p>
        <div className={styles.finalCtaBtns}>
          <a className="rl-btn-primary" href="https://www.theravenlabs.com/contact-us/">
            Get in touch
          </a>
          <a className={styles.btnGhostDark} href="https://www.theravenlabs.com">
            Visit the full site
          </a>
        </div>
      </section>

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
          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <ul>
                <li><a href="https://www.theravenlabs.com/services/ai-integration/">AI Integration</a></li>
                <li><a href="https://www.theravenlabs.com/services/business-intelligence/">Business Intelligence</a></li>
                <li><a href="https://www.theravenlabs.com/services/crm/">CRM</a></li>
                <li><a href="https://www.theravenlabs.com/services/erp/">ERP</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><a href="https://theravenlabs.com/about/">About</a></li>
                <li><a href="https://www.theravenlabs.com/case-studies/">Case Studies</a></li>
                <li><a href="https://www.theravenlabs.com/blog/">Blog</a></li>
                <li><a href="https://theravenlabs.com/contact-us/">Contact</a></li>
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
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Raven Labs. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <a href="https://theravenlabs.com/privacy-policy/">Privacy</a>
            <a href="https://theravenlabs.com/terms/">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
