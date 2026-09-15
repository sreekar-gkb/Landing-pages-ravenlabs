import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  nav: {
    phoneHref: 'tel:+61390000000',
    phoneLabel: 'Talk to our team',
  },
  hero: {
    headlineTemplate: "Know Your Building's Real Value — Before NABERS {Does}",
    subhead: 'Predict energy ratings, prevent costly surprises, and maximise property value with real-time building intelligence.',
    bullets: ['Real-time BMS integration', 'NABERS-verified predictions', '150+ Australian properties'],
    formHeading: 'Get your free NABERS report',
    formSubhead: "Tell us about your building. We'll reply within one business day.",
    ctaLabel: 'Get Your Free NABERS Report',
  },
  trustBar: {
    label: 'Used by 150+ Australian properties, connected to 500+ buildings, NABERS-verified predictions',
    placeholderCount: 5,
  },
  problem: {
    heading: 'Your NABERS audit is coming. Are you ready?',
    body: "Most facility teams don't see their rating drop until the audit report lands. By then, it's too late — you're scrambling to explain why energy costs spiralled, or watching your building's value take a hit in the market. Data is fragmented across BMS, utilities, and spreadsheets, energy spend climbs without clear action points, and you can't defend lease terms or refinancing decisions with hard data.",
  },
  answer: {
    heading: 'Continuous intelligence that stops surprises',
    subhead: "Fulqrom integrates your building's real-time data — BMS sensors, utility bills, weather, occupancy — and applies NABERS logic to show you exactly where your rating stands right now. Not in six months. Not at audit. Today.",
    benefits: [
      { icon: 'trending-up', title: 'Predict your NABERS rating', body: 'See rating trends weeks or months before the official audit. Adjust operations, fix inefficiencies, and hit your target.' },
      { icon: 'zap', title: 'Turn data into action', body: 'Real-time alerts show exactly which systems are costing you points. Facility teams know what to prioritise.' },
      { icon: 'dollar-sign', title: 'Prove ROI on every retrofit', body: 'Before-and-after data validates every energy project. No more guessing what impact that new HVAC actually delivered.' },
      { icon: 'shield', title: 'Defend your valuation', body: 'Buyers, tenants, and lenders want proof. Show NABERS trends, energy efficiency gains, and concrete improvements.' },
    ],
  },
  proof: {
    testimonials: [
      {
        quote: 'Fulqrom showed us our NABERS rating three weeks before the official audit. We had time to fix the chiller scheduling issue that would have cost us half a star.',
        name: 'Jamie Chen',
        title: 'Facilities Manager, 45-storey office tower, Sydney CBD',
        sample: true,
      },
      {
        quote: "We were blind to our energy spend patterns. Fulqrom's alerts caught an HVAC fault in the North wing that was costing $12K/month. We fixed it in two days.",
        name: 'Marcus Rodriguez',
        title: 'Operations Director, Retail Centre, Melbourne',
        sample: true,
      },
      {
        quote: 'Our tenant negotiations used to rely on generic energy benchmarks. Now we show actual data — NABERS trends, efficiency gains, real numbers.',
        name: 'Sarah Patel',
        title: 'Asset Manager, Mixed-use Development, Brisbane',
        sample: true,
      },
    ],
  },
  process: {
    heading: 'From data to decisions in four steps',
    subhead: 'Most buildings are connected and generating insight within a week.',
    steps: [
      { title: 'Connect your building', body: 'Link Fulqrom to your BMS, smart meters, and utility accounts. Most integrations are live in under a week.' },
      { title: 'Get baseline intelligence', body: 'Fulqrom analyses 90 days of operational data to calculate your current NABERS equivalent and identify top-impact improvements.' },
      { title: 'Act on real-time insights', body: 'Facility teams get daily briefings: rating trends, anomalies, and specific actions to lift performance.' },
      { title: 'Verify audit-ready gains', body: "Track improvements month-on-month. By audit day, you'll know your actual rating — with zero surprises." },
    ],
  },
  faq: {
    heading: 'Questions answered',
    items: [
      { q: "How accurate is Fulqrom's NABERS prediction?", a: 'Fulqrom applies NABERS methodology to your real operational data. Predictions are typically within ±0.3 stars of the official audit, verified across 150+ buildings in our network.' },
      { q: 'What buildings does Fulqrom work with?', a: 'Office towers, retail centres, hospitality properties, industrial buildings, mixed-use developments — any building with accessible BMS or utility data.' },
      { q: 'How long does it take to see value?', a: 'Baseline intelligence lands in the first week. Actionable insights start in week two. Rating improvements typically show within 4–8 weeks of changes.' },
      { q: 'Will Fulqrom work with our existing systems?', a: 'Yes. Fulqrom integrates with BMS platforms (Honeywell, Tridium, Beckhoff), smart meters, and utility data APIs.' },
      { q: "What happens if our building doesn't have a smart BMS?", a: 'We can work with utility bills and sub-metering alone for directional insights. For full predictive power, a basic BMS connection or IoT sensor package accelerates ROI.' },
      { q: 'How much does Fulqrom cost?', a: 'Pricing is based on building size and data complexity. Most commercial properties see ROI in 6–12 months. Contact us for a custom quote.' },
    ],
  },
  finalCta: {
    heading: "See your building's real NABERS potential",
    body: 'Get a free baseline report showing your current rating, top 10 improvement opportunities, and projected gains.',
    ctaLabel: 'Get Your Free NABERS Report',
    reassurance: "No commitment. Just your building's real numbers.",
  },
  footer: {
    aboutLine: "Fulqrom is Raven Labs' building intelligence platform — part of the Raven Labs family of AI-powered business solutions.",
    abn: '[ABN pending]',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="fulqrom" content={content} />
}
