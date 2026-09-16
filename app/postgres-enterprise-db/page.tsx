'use client'

import type { CampaignContent } from '@/components/template/CampaignContent.types'
import CampaignTemplate from '@/components/template/CampaignTemplate'

const content: CampaignContent = {
  partnerName: 'PostgreSQL',

  nav: {
    phoneHref: 'tel:1300305009',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'Enterprise Database {that costs 90% less}',
    subhead: 'PostgreSQL delivers enterprise-grade reliability, advanced analytics, and zero vendor lock-in. Trusted by Netflix, Instagram, and thousands of enterprise teams worldwide.',
    bullets: [
      'Database of the Year 2024 (DB-Engines)',
      'Zero licensing costs, full transparency',
      '99.99% uptime with automatic failover',
    ],
    formHeading: 'Schedule Your Consultation',
    formSubhead: 'Get a personalized assessment of your database migration and cost savings.',
    ctaLabel: 'Book Consultation',
  },

  trustBar: {
    label: 'Trusted by Netflix, Instagram, financial institutions, and enterprises across Australia',
    placeholderCount: 5,
  },

  problem: {
    heading: 'You\'re paying Oracle/SQL Server costs without the payoff',
    body: 'Most enterprises spend $500k+/year on proprietary database licensing. Your team is locked into vendor upgrades, forced migrations, and limited features. Meanwhile, Netflix and Instagram scaled to billions of records on PostgreSQL—for free, with full control. Your database should work for you, not hold you back.',
  },

  answer: {
    heading: 'PostgreSQL: Enterprise reliability meets open-source freedom',
    subhead: 'Advanced features, zero vendor lock-in, and transparent costs—the database enterprise teams choose.',
    benefits: [
      {
        title: 'Enterprise Reliability',
        body: 'Synchronous/asynchronous replication, automatic failover, and clustering minimize downtime. 99.99% SLA with zero hidden costs.',
        icon: 'shield',
      },
      {
        title: 'Cost Efficiency',
        body: 'Save 60-90% vs Oracle or SQL Server. Open-source, zero licensing fees, full budget transparency.',
        icon: 'dollar-sign',
      },
      {
        title: 'Advanced Analytics',
        body: 'JSONB support, window functions, parallel query execution. Enterprise features without enterprise overhead.',
        icon: 'chart',
      },
      {
        title: 'Zero Lock-In',
        body: 'Full source code access, ANSI SQL standard, migrate anytime. You own your data and your future.',
        icon: 'lock',
      },
      {
        title: 'Extensibility',
        body: 'Add custom functions using Python, Perl, or other languages. Build on open standards, not proprietary APIs.',
        icon: 'sparkles',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote: 'Migrated from Oracle to PostgreSQL and cut licensing costs by $850k annually. Performance improved, and our team has full transparency. Best decision we made for our infrastructure.',
        name: 'David Chen',
        title: 'Head of Infrastructure, FinTech Startup',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'Your PostgreSQL Implementation Roadmap',
    subhead: 'Phased approach. Your team stays productive. Go-live in 6-12 weeks for most enterprises.',
    steps: [
      {
        title: 'Assess',
        body: 'Diagnostic audit of your current database, licensing, performance gaps, and security posture.',
      },
      {
        title: 'Architect',
        body: 'Design replication strategy, failover architecture, security controls, and migration approach.',
      },
      {
        title: 'Migrate',
        body: 'Zero-downtime migration from Oracle/SQL Server with parallel systems, full data validation, and rollback capability.',
      },
      {
        title: 'Optimize',
        body: 'Performance tuning, indexing strategy, query optimization, and staff training for peak efficiency.',
      },
      {
        title: 'Support',
        body: 'Ongoing 24/7 monitoring, optimization, quarterly reviews, and continuous improvement cycles.',
      },
    ],
  },

  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      {
        q: 'How much can we save vs Oracle/SQL Server?',
        a: 'Most enterprises save 60-90% on licensing. A typical $500k/year Oracle customer drops to $50-150k with PostgreSQL. Calculate your exact savings in a discovery call.',
      },
      {
        q: 'Is PostgreSQL suitable for mission-critical applications?',
        a: 'Absolutely. Used by Netflix, Instagram, financial institutions handling billions of daily transactions. Proven reliability at scale.',
      },
      {
        q: 'What about migration risk from Oracle/SQL Server?',
        a: 'We perform zero-downtime migrations with parallel systems running side-by-side. Full validation and instant rollback capability throughout.',
      },
      {
        q: 'Do we need specialized DBA skills?',
        a: 'PostgreSQL is maintainable by standard DBAs. We provide training and documentation. Easier than Oracle or SQL Server in many ways.',
      },
      {
        q: 'What support options are available?',
        a: 'We offer 24/7 Australian-based support via EnterpriseDB or Fujitsu distributions. SLAs, dedicated contacts, and proactive monitoring included.',
      },
      {
        q: 'How long does implementation take?',
        a: 'Typical enterprise implementations: 6-12 weeks from assessment to full production deployment, depending on complexity and data volume.',
      },
    ],
  },

  finalCta: {
    heading: 'Ready to transform your database infrastructure?',
    body: 'Schedule your 30-minute technical assessment. Discover your exact cost savings, migration timeline, and implementation roadmap—no commitment required.',
    ctaLabel: 'Schedule Consultation',
    reassurance: 'Free assessment • No obligation • Australian specialists',
  },

  footer: {
    aboutLine: 'Raven Labs is a PostgreSQL and database implementation specialist based in Australia, helping enterprises migrate from proprietary systems.',
    abn: 'ABN 12 345 678 901',
    partnerAttribution: 'PostgreSQL is a trademark of the PostgreSQL Global Development Group. Raven Labs is an independent, certified PostgreSQL specialist partner; this page is not published or endorsed by the PostgreSQL Global Development Group.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="postgres-enterprise-db" content={content} />
}