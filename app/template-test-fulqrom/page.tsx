import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  nav: { phoneHref: 'tel:1300000000', phoneLabel: 'Give us a call' },
  hero: {
    headlineTemplate: 'See your building\'s energy waste in {5 minutes}',
    subhead: 'Fulqrom unifies your BMS and IoT meter data into one dashboard, so facility managers catch waste before it hits the power bill.',
    bullets: ['Free 15-minute demo', 'No obligation', 'NABERS-ready'],
    formHeading: 'Book your Fulqrom demo',
    formSubhead: 'Tell us about your building. We will reply within one business day.',
    ctaLabel: 'Book my demo',
  },
  trustBar: { label: 'Trusted by teams across Australia', placeholderCount: 5 },
  problem: {
    heading: 'The plant running overnight costs you six weeks of NABERS by the time you catch it.',
    body: 'Your BMS shows one story. Your submeters show another. The bill arrives after the damage is done.',
  },
  answer: {
    heading: 'Fulqrom watches everything at once.',
    subhead: 'One dashboard. Every energy story your building tells.',
    benefits: [
      { title: 'Live fault detection', body: 'After-hours waste and HVAC drift surface the moment they happen.' },
      { title: 'BMS plus IoT, unified', body: 'Stop reconciling three data sources across your portfolio.' },
      { title: 'NABERS-ready reporting', body: 'Report structures built for how NABERS actually assesses.' },
    ],
  },
  proof: { testimonials: [{ quote: 'We found a fault costing $18,000 a year in the first week.', name: 'Sample Client', title: 'Facility Manager', sample: true }] },
  process: {
    heading: 'Live insights in five steps.',
    subhead: 'Most buildings are up within a week.',
    steps: [
      { title: 'Connect', body: 'We read from your existing BMS and meters.' },
      { title: 'See', body: 'Live dashboard ranks every system by waste.' },
      { title: 'Fix', body: 'Alerts route to whoever can action them.' },
      { title: 'Report', body: 'NABERS submissions populate from real data.' },
      { title: 'Improve', body: 'Continuous tuning against your target.' },
    ],
  },
  faq: {
    heading: 'Questions before you start.',
    items: [
      { q: 'Do I need to replace my BMS?', a: 'No, Fulqrom reads from your existing BMS alongside it.' },
      { q: 'How long does setup take?', a: 'Most buildings are live within a week.' },
    ],
  },
  finalCta: {
    heading: 'See what your building has been hiding.',
    body: 'Fifteen minutes. A live look at your building\'s data.',
    ctaLabel: 'Book my demo',
    reassurance: 'No sales pressure. No slide deck.',
  },
  footer: { aboutLine: 'Raven Labs builds SaaS for the physical world.', abn: '[ABN pending]' },
}

export default function Page() {
  return <CampaignTemplate campaign="template-test-fulqrom" content={content} />
}
