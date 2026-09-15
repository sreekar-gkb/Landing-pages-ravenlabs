import { Suspense } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Zap, TrendingUp, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'See Your Building\'s Real Energy Performance | Fulqrom',
  description:
    'Fulqrom analyzes your building\'s energy data to uncover savings, improve NABERS ratings, and optimize operations. Get a free energy assessment.',
  alternates: { canonical: 'https://landing-pages-ravenlabs.vercel.app/fulqrom-asset-intelligence' },
  openGraph: {
    title: 'See Your Building\'s Real Energy Performance | Fulqrom',
    description: 'Fulqrom - Asset intelligence for building energy optimization',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app/fulqrom-asset-intelligence',
  },
}

export default function FulqromPage() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-DEMO"}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "${process.env.NEXT_PUBLIC_GA_ID || "G-DEMO"}");
        `}
      </Script>
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.h1}>
              See Your Building\'s Real Energy Performance — In Real Time
            </h1>
            <p className={styles.subtitle}>
              Fulqrom analyzes your building\'s energy data to uncover savings, improve NABERS ratings, and optimize operations. Know what\'s actually happening with your energy.
            </p>
            <div className={styles.heroCtaContainer}>
              <a href="#lead-form" className={styles.ctaButton}>
                Get a Free Energy Assessment <ArrowRight size={20} />
              </a>
              <p className={styles.heroSubtext}>No credit card required • Takes 2 minutes</p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <BarChart3 size={80} />
              <p>Energy Performance Dashboard</p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.h2}>The Problem Most Buildings Face</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>❌</div>
                <h3>Hidden Energy Waste</h3>
                <p>You don\'t know where your energy is actually going or how much you\'re wasting.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📉</div>
                <h3>Unknown NABERS Performance</h3>
                <p>Your NABERS rating is a mystery. You\'re not sure what it is or how to improve it.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>💰</div>
                <h3>Missed Savings Opportunities</h3>
                <p>Thousands in potential savings are sitting on the table, but you can\'t see them.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⚙️</div>
                <h3>Inefficient Operations</h3>
                <p>Your building is running sub-optimally, and nobody has a clear action plan.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section + " " + styles.sectionAlt}>
          <div className={styles.sectionContent}>
            <h2 className={styles.h2}>Meet Fulqrom: Asset Intelligence for Your Building</h2>
            <p className={styles.sectionLead}>
              Fulqrom connects to your building\'s energy data and turns it into actionable insights. See exactly what\'s happening, why it matters, and what to do about it.
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Zap />
                </div>
                <h3>Real-Time Energy Analysis</h3>
                <p>Live data from your building\'s meters and BMS. See energy flow in real-time, not in retrospect.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <TrendingUp />
                </div>
                <h3>NABERS Rating Clarity</h3>
                <p>Understand your actual NABERS rating and the exact steps to improve it. No guessing.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <CheckCircle />
                </div>
                <h3>Savings Identification</h3>
                <p>Automated analysis finds your biggest energy waste and optimization opportunities.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <BarChart3 />
                </div>
                <h3>Custom Action Plans</h3>
                <p>Get a prioritized roadmap with specific, measurable actions your team can implement.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.h2}>What Our Customers Achieve</h2>
            <div className={styles.resultsGrid}>
              <div className={styles.resultCard}>
                <div className={styles.resultNumber}>15-25%</div>
                <p className={styles.resultLabel}>Energy Cost Reduction</p>
                <p className={styles.resultDesc}>On average within 12 months of implementing recommendations</p>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultNumber}>+2-3</div>
                <p className={styles.resultLabel}>NABERS Points</p>
                <p className={styles.resultDesc}>Improvement in rating through optimization</p>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultNumber}>50+</div>
                <p className={styles.resultLabel}>Hours Saved</p>
                <p className={styles.resultDesc}>Per year on energy analysis and reporting</p>
              </div>
              <div className={styles.resultCard}>
                <div className={styles.resultNumber}>100%</div>
                <p className={styles.resultLabel}>Data Visibility</p>
                <p className={styles.resultDesc}>Know your building\'s energy story completely</p>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Fulqrom</h4>
              <p>Asset intelligence platform for Australian buildings.</p>
              <p className={styles.abn}>ABN: [[PLACEHOLDER: insert real ABN]]</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Links</h4>
              <ul>
                <li><a href="https://www.theravenlabs.com/">Learn More</a></li>
                <li><a href="https://www.theravenlabs.com/privacy-policy/">Privacy</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>📧 info@ravenlabs.com.au</p>
              <p>📞 1300 305 009</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}