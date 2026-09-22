import type { CampaignContent } from '@/components/template/CampaignContent.types'
import CampaignTemplate from '@/components/template/CampaignTemplate'

const content: CampaignContent = {
  partnerName: 'Zoho',
  partnerLogoSrc: '/partners/zoho.webp',

  nav: {
    phoneHref: 'tel:1300000000',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'Real-time field visibility without {enterprise complexity}',
    subhead: 'Zoho Field Service Management for plumbing, electrical, HVAC and home service teams.',
    bullets: [
      'Free 15-day trial — no credit card required',
      'One platform: scheduling, dispatch, mobile app, invoicing',
      'Starts at $30/month (pay only for appointments)',
    ],
    formHeading: 'Get your free 15-day trial',
    formSubhead: 'Raven Labs can help you set it up this week.',
    ctaLabel: 'Start my free trial',
  },

  trustBar: {
    label: 'Trusted by service teams across Australia',
  },

  problem: {
    heading: 'Your field team is scattered. Your office is blind.',
    body: 'Plumbers, electricians, and HVAC contractors spend their day juggling spreadsheets, phone calls, and separate apps. No one knows where the next job is, how long it will take, or if the customer is happy until it is too late. You are paying for coordination chaos — missed appointments, double-booked technicians, invoices weeks late. The bigger you grow, the worse it gets.',
  },

  answer: {
    heading: 'One platform. Complete visibility.',
    subhead: 'Zoho Field Service Management gives your team — office and field — real-time sync, smart scheduling, and payment capture on the spot.',
    benefits: [
      {
        title: 'Schedule once. Everyone sees it.',
        body: 'Dispatch jobs to technicians by skill, location, and availability. Technicians see job details, customer history, and routing on mobile — offline and online. No double-booking, no chaos.',
        icon: 'map',
      },
      {
        title: 'Stop chasing invoices.',
        body: 'Generate invoices from completed work orders. Accept payment — cash, card, digital wallet — right there on the job. Reconcile in seconds, not weeks.',
        icon: 'receipt',
      },
      {
        title: 'No app fatigue.',
        body: 'If you are already using Zoho CRM or Zoho Books, FSM fits into the same ecosystem. One login. One data source. No API headaches.',
        icon: 'layers',
      },
      {
        title: 'Built for teams, not enterprises.',
        body: 'Affordable pricing by appointment — not per user or per month. Scales with you. Australian support, no lag.',
        icon: 'users',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote: 'Most businesses struggle with app fatigue. Zoho FSM eliminates the need for expensive middleware or messy API connections between your sales, service, and finance departments.',
        name: 'Ansline',
        title: 'Telecommunications, 4.0/5 review',
        sample: true,
      },
      {
        quote: 'The reporting and live tracking features are really great. It helps with managing our field services teams efficiently.',
        name: 'Verified FSM user',
        title: 'Capterra, Australia',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'From spreadsheets to real-time visibility in 4 steps.',
    subhead: 'This week, not months. No seven-figure implementation bill.',
    steps: [
      {
        title: 'Trial setup',
        body: 'Start your free 15-day trial. Raven Labs will show you how Zoho FSM plugs into your existing CRM, books, and email — if you already use them.',
      },
      {
        title: 'Your team, your rules',
        body: 'Map your work types, custom fields, and automation rules. Zoho FSM moves as fast as your business does. No phase-three delays.',
      },
      {
        title: 'Technicians go live',
        body: 'Technicians download the mobile app, sign in, and see their first job. Live tracking, offline access, and payment capture — day one.',
      },
      {
        title: 'Real-time profit',
        body: 'Track technician utilization, invoice faster, and cut admin hours. After 15 days, you will know if it is paying for itself.',
      },
    ],
  },

  faq: {
    heading: 'Questions about Zoho FSM?',
    items: [
      {
        q: 'How much does Zoho FSM cost?',
        a: 'Pricing is appointment-based, starting at $30 per month. You only pay for the appointments your team completes. No surprise seat-license creep.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. Technicians download job details once, go offline at the job site, and sync updates when they reconnect. Perfect for rural and remote work.',
      },
      {
        q: 'Can I integrate it with my existing tools?',
        a: 'Yes. Zoho FSM connects natively to Zoho CRM, Zoho Books, Zoho Desk, and standard integrations (Zapier, webhooks). Raven Labs handles the plumbing.',
      },
      {
        q: 'How fast can we go live?',
        a: 'Most teams are live within 1–2 weeks. Your free trial starts immediately — no contracts, no sales delay.',
      },
      {
        q: 'What if we use Salesforce or a different CRM?',
        a: 'Zoho FSM still works. We will set up APIs or Zapier connections to sync customer and job data. Raven Labs has built those bridges before.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop managing field services on spreadsheets.',
    body: 'Fifteen days, free. See it in action. If it does not work, you have lost nothing but gained the answer.',
    ctaLabel: 'Start your free trial',
    reassurance: 'No implementation fees. No hidden minimums. Cancel anytime.',
  },

  footer: {
    aboutLine: 'Raven Labs is an authorised Zoho partner specializing in CRM, field service, and business automation for Australian service teams.',
    abn: 'ABN 12 658 839 055',
    partnerAttribution: 'Zoho, Zoho FSM, and related marks are trademarks of Zoho Corporation and/or its affiliates. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-fsm" content={content} />
}