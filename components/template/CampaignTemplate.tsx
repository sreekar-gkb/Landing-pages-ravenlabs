import Image from 'next/image'
import LeadForm from '@/components/LeadForm'
import Accordion from '@/components/Accordion'
import TrackedCta from '@/components/TrackedCta'
import EngagementTracker from '@/components/EngagementTracker'
import TestimonialCarousel from './TestimonialCarousel'
import type { CampaignContent } from './CampaignContent.types'
import styles from './CampaignTemplate.module.css'

type Props = {
  /** The campaign slug — used for tracking, the lead form, and the thanks-page redirect. */
  campaign: string
  content: CampaignContent
}

/**
 * The fixed Raven Labs campaign template, modeled on https://copilot.theravenlabs.com/.
 *
 * DO NOT fork this component per campaign. Every campaign page.tsx should be a thin wrapper
 * that imports this template and supplies a CampaignContent object — see
 * SKILL.md Phase 5 and assets/campaign-page-example.tsx for the exact pattern.
 */
export default function CampaignTemplate({ campaign, content }: Props) {
  const [before, accent, after] = splitOnAccent(content.hero.headlineTemplate)

  return (
    <>
      <EngagementTracker campaign={campaign} />

      {/* ---------- Nav ---------- */}
      <header className={styles.nav}>
        <div className={`rl-container ${styles.navInner}`}>
          <div className={styles.cobrand}>
            <Image src="/raven-labs-logo.png" alt="Raven Labs" width={140} height={40} priority style={{ height: 36, width: 'auto' }} />
            {content.partnerName && (
              <>
                <span className={styles.cobrandDivider} aria-hidden />
                <span className={styles.partnerName}>{content.partnerName}</span>
              </>
            )}
          </div>
          <TrackedCta href={content.nav.phoneHref} label="nav_phone" campaign={campaign} className="rl-btn-primary">
            {content.nav.phoneLabel}
          </TrackedCta>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <div className={`rl-container ${styles.heroInner}`}>
            <div>
              <h1 className="rl-display">
                {before}
                {accent && <span className={styles.heroAccent}>{accent}</span>}
                {after}
              </h1>
              <p className="rl-lead">{content.hero.subhead}</p>
              <ul className={styles.heroBullets} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {content.hero.bullets.map((b, i) => (
                  <li key={b}>
                    {b}
                    {i < content.hero.bullets.length - 1 && <span className={styles.heroBulletDot}>•</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.formCard}>
              <h2 className={`rl-h3 ${styles.formHeading}`}>{content.hero.formHeading}</h2>
              <p className={styles.formSubhead}>{content.hero.formSubhead}</p>
              <LeadForm campaign={campaign} redirectPath={`/${campaign}/thanks`} ctaLabel={content.hero.ctaLabel} />
            </div>
          </div>
        </section>

        {/* ---------- Trust bar (optional) ---------- */}
        {content.trustBar && (
          <section className={styles.trustBar}>
            <div className="rl-container">
              <p className={styles.trustLabel}>{content.trustBar.label}</p>
              <div className={styles.trustSkeletons}>
                {Array.from({ length: content.trustBar.placeholderCount ?? 5 }).map((_, i) => (
                  <div key={i} className={styles.trustSkeleton} aria-hidden />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- Problem ---------- */}
        <section className={styles.problem}>
          <div className={`rl-container ${styles.problemInner}`}>
            <h2 className="rl-h2">{content.problem.heading}</h2>
            <p className="rl-lead" style={{ marginBottom: 0 }}>{content.problem.body}</p>
          </div>
        </section>

        {/* ---------- Answer / benefits ---------- */}
        <section className={styles.answer}>
          <div className="rl-container">
            <div className={styles.answerHead}>
              <h2 className="rl-h2">{content.answer.heading}</h2>
              <p className="rl-lead" style={{ marginBottom: 0 }}>{content.answer.subhead}</p>
            </div>
            <div className={styles.benefitGrid}>
              {content.answer.benefits.map((b) => (
                <div key={b.title} className={styles.benefitCard}>
                  <div className={styles.benefitTitle}>{b.title}</div>
                  <div className={styles.benefitBody}>{b.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Proof / testimonial carousel ---------- */}
        {content.proof.testimonials.length > 0 && (
          <section className={styles.proof}>
            <div className="rl-container-narrow">
              <p className={styles.proofEyebrow}>What clients say</p>
              <TestimonialCarousel testimonials={content.proof.testimonials} />
            </div>
          </section>
        )}

        {/* ---------- Process ---------- */}
        <section className={styles.process}>
          <div className="rl-container">
            <div className={styles.processHead}>
              <h2 className="rl-h2">{content.process.heading}</h2>
              <p className="rl-lead" style={{ marginBottom: 0 }}>{content.process.subhead}</p>
            </div>
            <div className={styles.processGrid}>
              <div className={styles.processLine} aria-hidden />
              {content.process.steps.map((s, i) => (
                <div key={s.title} className={styles.processStep}>
                  <div className={styles.processBadge}>
                    <span className="rl-h3" style={{ margin: 0, color: 'var(--rl-accent)' }}>{i + 1}</span>
                  </div>
                  <div className={styles.processTitle}>{s.title}</div>
                  <div className={styles.processBody}>{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={styles.faq}>
          <div className={`rl-container ${styles.faqInner}`}>
            <h2 className={`rl-h2 ${styles.faqHead}`}>{content.faq.heading}</h2>
            <Accordion items={content.faq.items} />
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className={styles.finalCta}>
          <div className="rl-container-narrow">
            <h2 className="rl-h2">{content.finalCta.heading}</h2>
            <p className={styles.finalCtaBody}>{content.finalCta.body}</p>
            <TrackedCta href="#top" label="final_cta" campaign={campaign} className={`rl-btn-primary ${styles.finalCtaButton}`}>
              {content.finalCta.ctaLabel}
            </TrackedCta>
            <p className={styles.finalCtaReassurance}>{content.finalCta.reassurance}</p>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className={styles.footer}>
        <div className="rl-container">
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogoRow}>
                <Image src="/raven-labs-logo-white.png" alt="" width={28} height={28} aria-hidden style={{ height: 28, width: 'auto' }} />
                <span className={styles.footerBrandName}>Raven Labs</span>
              </div>
              <p className={styles.footerAbout}>{content.footer.aboutLine}</p>
            </div>
            <div>
              <div className={styles.footerColLabel}>Contact</div>
              <a href={content.nav.phoneHref} className={styles.footerLink}>{content.nav.phoneLabel}</a>
              <a href="mailto:hello@theravenlabs.com" className={styles.footerLink}>hello@theravenlabs.com</a>
            </div>
            <div>
              <div className={styles.footerColLabel}>Company</div>
              <a href="/privacy" className={styles.footerLink}>Privacy</a>
              <a href="/terms" className={styles.footerLink}>Terms</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>© {new Date().getFullYear()} Raven Labs Pty Ltd · ABN {content.footer.abn} · Melbourne, Australia</div>
          </div>
          {content.footer.partnerAttribution && (
            <div className={styles.footerAttribution}>{content.footer.partnerAttribution}</div>
          )}
        </div>
      </footer>
    </>
  )
}

/** Splits "Turn Copilot into real {Results}" into ["Turn Copilot into real ", "Results", ""]. */
function splitOnAccent(template: string): [string, string | null, string] {
  const match = template.match(/^(.*)\{(.+)\}(.*)$/)
  if (!match) return [template, null, '']
  const [, before, accent, after] = match
  return [before, accent, after]
}
