import Image from 'next/image'
import Nav from '@/components/Nav'
import LeadForm from '@/components/LeadForm'
import Accordion from '@/components/Accordion'
import TrackedCta from '@/components/TrackedCta'
import TestimonialCarousel from './TestimonialCarousel'
import type { CampaignContent, Partner } from './CampaignContent.types'
import styles from './CampaignTemplate.module.css'

type Props = {
  campaign: string
  content: CampaignContent
  partner?: Partner
}

/** Renders {curly braces} in a headline template as accent-coloured text. */
function Headline({ template }: { template: string }) {
  const parts = template.split(/(\{[^}]+\})/g)
  return (
    <h1 className="rl-display">
      {parts.map((part, i) =>
        part.startsWith('{') && part.endsWith('}') ? (
          <span key={i} className={styles.heroAccent}>{part.slice(1, -1)}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </h1>
  )
}

export default function CampaignTemplate({ campaign, content, partner }: Props) {
  const { nav, hero, trustBar, problem, answer, proof, process, faq, finalCta, footer } = content

  return (
    <>
      <Nav partner={partner} phone={nav?.phoneHref} phoneLabel={nav?.phoneLabel} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <Headline template={hero.headlineTemplate} />
            <p className="rl-lead">{hero.subhead}</p>
            {hero.bullets && hero.bullets.length > 0 && (
              <ul className={styles.heroBullets}>
                {hero.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
          <div className={styles.formCard}>
            <h2>{hero.formHeading}</h2>
            <p>{hero.formSubhead}</p>
            <LeadForm campaign={campaign} redirectPath={`/${campaign}/thanks`} />
          </div>
        </div>
      </section>

      {trustBar && <div className={styles.trustBar}>{trustBar.label}</div>}

      <section className={styles.section}>
        <div className={styles.sectionNarrow} style={{ textAlign: 'center' }}>
          <h2 className="rl-h2">{problem.heading}</h2>
          <p className="rl-lead">{problem.body}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <h2 className="rl-h2">{answer.heading}</h2>
          {answer.subhead && <p className="rl-lead">{answer.subhead}</p>}
          <div className={styles.benefitsGrid}>
            {answer.benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {proof && proof.testimonials.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <TestimonialCarousel testimonials={proof.testimonials} />
          </div>
        </section>
      )}

      {process && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <h2 className="rl-h2">{process.heading}</h2>
            {process.subhead && <p className="rl-lead">{process.subhead}</p>}
            <div className={styles.processGrid}>
              {process.steps.map((s, i) => (
                <div key={s.title} className={styles.processStep}>
                  <div className={styles.processNumber}>{i + 1}</div>
                  <h3 className="rl-h4">{s.title}</h3>
                  <p style={{ color: 'var(--rl-fg-muted)', fontSize: 'var(--rl-body-sm)' }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faq && (
        <section className={styles.section}>
          <div className={styles.sectionNarrow}>
            <h2 className="rl-h2">{faq.heading}</h2>
            <Accordion items={faq.items} />
          </div>
        </section>
      )}

      <section className={styles.finalCta}>
        <h2 className="rl-h2">{finalCta.heading}</h2>
        <p>{finalCta.body}</p>
        <div className={styles.finalCtaButton}>
          <TrackedCta href="#top" label={finalCta.ctaLabel} campaign={campaign} className="rl-btn-secondary">
            {finalCta.ctaLabel}
          </TrackedCta>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Image src="/raven-labs-logo-white.png" alt="Raven Labs" width={130} height={46} className={styles.footerLogo} />
          <div className={styles.footerBottom}>
            © {new Date().getFullYear()} Raven Labs Pty Ltd · Melbourne, Australia ·{' '}
            <a href="/privacy" style={{ color: 'inherit' }}>Privacy</a> ·{' '}
            <a href="/terms" style={{ color: 'inherit' }}>Terms</a>
          </div>
          {footer.partnerAttribution && (
            <p className={styles.footerAttribution}>{footer.partnerAttribution}</p>
          )}
        </div>
      </footer>
    </>
  )
}
