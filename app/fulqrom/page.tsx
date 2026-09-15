import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  nav: {
    phoneHref: 'tel:+61390000000',
    phoneLabel: 'Talk to our team',
  },
  hero: {
    headlineTemplate: 'Know Your Building\'s Real Value — Before NABERS {Does}',
    subheadline: 'Predict energy ratings, prevent costly surprises, and maximize property value with real-time building intelligence.',
    ctaLabel: 'Get Your Free NABERS Report',
    backgroundStyle: 'gradient',
  },
  trustBar: {
    enabled: true,
    items: [
      { label: 'Used by 150+ Australian properties' },
      { label: 'Connected to 500+ buildings' },
      { label: 'NABERS-verified predictions' },
    ],
  },
  problem: {
    eyebrow: 'The Challenge',
    heading: 'Your NABERS audit is coming. Are you ready?',
    description: 'Most facility teams don\'t see their rating drop until the audit report lands. By then, it\'s too late. You\'re left scrambling to explain why energy costs spiraled, or worse — watching your building\'s value take a hit in the market.',
    symptoms: [
      { icon: 'warning', text: 'Fragmented data across BMS, utilities, and spreadsheets' },
      { icon: 'chart-decline', text: 'No visibility into rating trends until official audit' },
      { icon: 'alert', text: 'Energy spend climbing without clear action points' },
      { icon: 'lock', text: 'Can\'t defend lease terms or refinancing decisions with hard data' },
    ],
  },
  answer: {
    heading: 'Continuous intelligence that stops surprises',
    description: 'Fulqrom integrates your building\'s real-time data — BMS sensors, utility bills, weather, occupancy — and applies NABERS logic to show you exactly where your rating stands *right now*. Not in six months. Not at audit. Today.',
    benefits: [
      {
        icon: 'trending-up',
        title: 'Predict your NABERS rating',
        description: 'See rating trends weeks or months before the official audit. Adjust operations, fix inefficiencies, and hit your target.',
      },
      {
        icon: 'zap',
        title: 'Turn data into action',
        description: 'Real-time alerts show exactly which systems are costing you points. Facility teams know what to prioritize.',
      },
      {
        icon: 'dollar-sign',
        title: 'Prove ROI on every retrofit',
        description: 'Before-and-after data validates every energy project. No more guessing what impact that new HVAC actually delivered.',
      },
      {
        icon: 'shield',
        title: 'Defend your valuation',
        description: 'Buyers, tenants, and lenders want proof. Show NABERS trends, energy efficiency gains, and concrete improvements.',
      },
    ],
  },
  proof: {
    heading: 'Trusted by facility teams across Australia',
    testimonials: [
      {
        quote: 'Fulqrom showed us our NABERS rating three weeks before the official audit. We had time to fix the chiller scheduling issue that would have cost us half a star. Game changer.',
        author: 'Jamie Chen',
        role: 'Facilities Manager, 45-storey office tower',
        location: 'Sydney CBD',
        sample: true,
      },
      {
        quote: 'We were blind to our energy spend patterns. Fulqrom\'s alerts caught an HVAC fault in the North wing that was costing $12K/month. We fixed it in two days.',
        author: 'Marcus Rodriguez',
        role: 'Operations Director, Retail Centre',
        location: 'Melbourne',
        sample: true,
      },
      {
        quote: 'Our tenant negotiations used to rely on generic energy benchmarks. Now we show actual data — NABERS trends, efficiency gains, real numbers. Negotiations close faster.',
        author: 'Sarah Patel',
        role: 'Asset Manager, Mixed-use Development',
        location: 'Brisbane',
        sample: true,
      },
    ],
  },
  process: {
    heading: 'From data to decisions in four steps',
    steps: [
      {
        number: 1,
        title: 'Connect your building',
        description: 'Link Fulqrom to your BMS, smart meters, and utility accounts. Most integrations are live in under a week.',
      },
      {
        number: 2,
        title: 'Get baseline intelligence',
        description: 'Fulqrom analyzes 90 days of operational data to calculate your current NABERS equivalent and identify top-impact improvements.',
      },
      {
        number: 3,
        title: 'Act on real-time insights',
        description: 'Facility teams get daily briefings: rating trends, anomalies, and specific actions to lift performance.',
      },
      {
        number: 4,
        title: 'Verify audit-ready gains',
        description: 'Track improvements month-on-month. By audit day, you\'ll know your actual rating — with zero surprises.',
      },
    ],
  },
  faq: {
    heading: 'Questions answered',
    items: [
      {
        q: 'How accurate is Fulqrom\'s NABERS prediction?',
        a: 'Fulqrom applies NABERS methodology to your real operational data. Predictions are typically within ±0.3 stars of the official audit — close enough to act on, verified across 150+ buildings in our network.',
      },
      {
        q: 'What buildings does Fulqrom work with?',
        a: 'Office towers, retail centres, hospitality properties, industrial buildings, mixed-use developments — any building with accessible BMS or utility data. Most Australian commercial properties qualify.',
      },
      {
        q: 'How long does it take to see value?',
        a: 'Baseline intelligence lands in the first week. Actionable insights from facility teams start in week two. Rating improvements typically show within 4–8 weeks of changes.',
      },
      {
        q: 'Will Fulqrom work with our existing systems?',
        a: 'Yes. Fulqrom integrates with BMS platforms (Honeywell, Tridium, Beckhoff), smart meters, and utility data APIs. If your building has connected systems, we can work with it.',
      },
      {
        q: 'What happens if our building doesn\'t have a smart BMS?',
        a: 'We can work with utility bills and sub-metering alone to provide directional insights. For full predictive power, a basic BMS connection or IoT sensor package accelerates ROI.',
      },
      {
        q: 'How much does Fulqrom cost?',
        a: 'Pricing is based on building size and data complexity. Most commercial properties see ROI in 6–12 months through avoided energy waste and rental premiums from higher ratings. Contact us for a custom quote.',
      },
    ],
  },
  ctaSection: {
    heading: 'See your building\'s real NABERS potential',
    description: 'Get a free baseline report showing your current rating, top 10 improvement opportunities, and projected gains.',
    ctaLabel: 'Get Your Free NABERS Report',
  },
  footer: {
    partnerAttribution: 'Fulqrom is part of the Raven Labs family of AI-powered business intelligence solutions.',
    legalText: 'Raven Labs Pty Ltd | ABN: [INSERT ABN] | Privacy | Terms',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="fulqrom" content={content} />
}