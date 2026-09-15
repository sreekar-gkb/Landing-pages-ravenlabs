import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  partnerName: 'Zoho',
  partnerLogoSrc: '/partners/zoho.webp',
  nav: { phoneHref: 'tel:1300000000', phoneLabel: 'Give us a call' },
  hero: {
    headlineTemplate: "You're already paying for Zia. You're using {20%} of it.",
    subhead: 'Raven Labs audits your Zoho CRM AI setup and switches on the features already sitting idle in your licence.',
    bullets: ['Free 30-minute audit', 'No re-platform', 'Authorised Zoho Partner'],
    formHeading: 'Book your Zia audit',
    formSubhead: "Tell us about your setup. We'll reply within one business day.",
    ctaLabel: 'Book my audit',
  },
  trustBar: { label: 'Trusted by Australian teams running Zoho CRM Enterprise and Zoho One', placeholderCount: 5 },
  problem: {
    heading: 'Zia ships with 22 AI capabilities. Most teams use one.',
    body: 'A 2026 audit of 12 Australian accounts found the same pattern every time: lead scoring on, sixteen other features idle.',
  },
  answer: {
    heading: 'We find what is idle and turn on what is worth it',
    subhead: 'A two-week sprint, not a re-platform.',
    benefits: [
      { title: 'Two-week sprint', body: 'Audit, prioritise, configure.' },
      { title: 'Trained on your data', body: 'Lead scoring tuned to your pipeline.' },
      { title: 'Zoho-certified', body: 'Authorised partner, not a generalist integrator.' },
    ],
  },
  proof: {
    testimonials: [
      { quote: 'We had no idea churn prediction existed. Live within the sprint.', name: 'Daniel Osei', title: 'Head of Sales Ops, Meridian Freight', sample: true },
    ],
  },
  process: {
    heading: 'From audit to a smarter CRM in about two weeks',
    subhead: 'Every deployment follows the same phases.',
    steps: [
      { title: 'Audit', body: 'Review current Zia configuration.' },
      { title: 'Prioritise', body: 'Rank by leverage against your pipeline.' },
      { title: 'Configure', body: 'Two-week sprint turning on the highest-value features.' },
      { title: 'Measure', body: 'Check in at 30 and 90 days.' },
    ],
  },
  faq: {
    heading: 'Questions before booking',
    items: [
      { q: 'Do we need a specific Zoho plan?', a: 'Zia requires Enterprise or above, or Zoho One.' },
      { q: 'Is this a re-platform?', a: 'No — this works within your existing setup.' },
    ],
  },
  finalCta: {
    heading: 'Find out what is idle in your Zia licence',
    body: 'A short call to map which of the 22 features are worth switching on.',
    ctaLabel: 'Book a consultation',
    reassurance: 'No sales pressure. No slide deck.',
  },
  footer: {
    aboutLine: 'Raven Labs builds SaaS for the physical world.',
    abn: '[ABN pending]',
    partnerAttribution: 'Zoho, Zia, and Zoho CRM are trademarks of Zoho Corporation Private Limited and/or its affiliates. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-zia-readiness-test" content={content} />
}
