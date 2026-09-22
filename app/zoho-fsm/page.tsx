import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  partnerName: 'Zoho',
  partnerLogoSrc: '/partners/zoho.webp',

  nav: {
    phoneHref: 'tel:1300305009',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'Zoho FSM implementation that finally talks to your {CRM and invoicing}',
    subhead:
      "For field service and trade businesses running 10+ technicians: connect Zoho FSM to CRM, Books and Inventory in one rollout — no duct-taped integrations, no double data entry.",
    bullets: ['Free 30-min scoping call', 'Authorised Zoho Partner', 'Live in weeks, not quarters'],
    formHeading: 'Get your Zoho FSM rollout plan',
    formSubhead: "Tell us about your field team — we'll map out the connected build before you spend a dollar.",
    ctaLabel: 'Book My Free Scoping Call',
  },

  trustBar: {
    label: 'Trusted by field service teams across Australia',
    placeholderCount: 4,
  },

  problem: {
    heading: "Zoho FSM is powerful. Alone, it's still another silo.",
    body:
      "Most FSM rollouts stop at the field app: jobs get scheduled and closed out, but the data dead-ends there. Technicians still re-key job notes into the CRM. Invoicing waits on someone exporting a spreadsheet. Stock on the van doesn't match what's in the warehouse. The tool works — the business still runs on manual reconciliation.",
  },

  answer: {
    heading: 'One connected Zoho stack, not a bolt-on app',
    subhead:
      'We implement Zoho FSM as part of your existing (or new) Zoho environment — CRM, Books and Inventory included — so a closed job updates everything downstream automatically.',
    benefits: [
      {
        title: 'Jobs that update your CRM automatically',
        body: 'Every completed job, quote and invoice status flows straight into Zoho CRM — no exporting, no re-typing, no lag between the field and the office.',
        icon: 'refresh',
      },
      {
        title: "Invoicing that doesn't wait on paperwork",
        body: 'Job sign-off in the field triggers the invoice in Zoho Books, with the right tax treatment and payment terms already applied.',
        icon: 'dollar-sign',
      },
      {
        title: 'Scheduling built around real technician capacity',
        body: "Skill-matched, location-aware dispatch that accounts for the jobs already on a tech's board — not just who's free right now.",
        icon: 'clock',
      },
      {
        title: 'Inventory that matches what\'s actually in the van',
        body: 'Stock used on a job is deducted from Zoho Inventory in real time, so reorders are based on fact, not guesswork.',
        icon: 'layers',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote:
          "Before this, our dispatchers were re-entering job data into three different systems. Now a completed job updates the CRM and raises the invoice on its own.",
        name: 'Operations Manager',
        title: 'Field Service Business, Melbourne',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'How we get you live',
    subhead: 'A fixed-scope build, not an open-ended project.',
    steps: [
      {
        title: 'Scoping call (30 min)',
        body: 'We map your current field workflow — from job booking to invoice — and flag every place data currently breaks or duplicates.',
      },
      {
        title: 'Connected build plan',
        body: 'You get a fixed-scope plan showing exactly how FSM, CRM, Books and Inventory will talk to each other before any work starts.',
      },
      {
        title: 'Configuration & data migration',
        body: 'We build the workflows, dispatch rules and integrations, and migrate your existing job and customer data across.',
      },
      {
        title: 'Team training & field trial',
        body: 'Your dispatchers and technicians run real jobs through the new system with us on hand, before it goes live company-wide.',
      },
      {
        title: 'Go-live & 30-day tuning',
        body: 'We monitor the first month of live jobs and tune schedules, automations and reports based on how your team actually works.',
      },
    ],
  },

  faq: {
    heading: 'Questions we get asked before signing off',
    items: [
      {
        q: 'How is this different from just buying Zoho FSM myself?',
        a: 'Zoho FSM is licensed the same either way. What we add is the integration work — connecting it to CRM, Books and Inventory correctly the first time — plus the configuration and training most in-house rollouts don\'t have time to get right.',
      },
      {
        q: 'We already use ServiceM8 — why switch to Zoho FSM?',
        a: "If you're a solo operator or a small crew under 10 people, ServiceM8's simplicity might suit you better. Zoho FSM earns its keep once you need job data to flow into a real CRM and finance system — typically once you're running 10 or more field staff.",
      },
      {
        q: 'How long does an implementation take?',
        a: 'Most rollouts for a single-location field team go live in 4–8 weeks, depending on how much of your CRM and Books setup already exists.',
      },
      {
        q: 'Do you migrate our existing customer and job history?',
        a: 'Yes. Customer records, job history and open work orders are migrated as part of the build, not left behind in your old system.',
      },
      {
        q: 'What does it cost?',
        a: "Zoho FSM licensing follows Zoho's published pricing. Implementation is quoted as a fixed-scope project after the free scoping call — no hourly minimum before you get a plan.",
      },
    ],
  },

  finalCta: {
    heading: 'See exactly how your field data would flow',
    body: "Book a free 30-minute scoping call. We'll show you the specific gaps in your current setup and what a connected Zoho FSM build looks like for your team.",
    ctaLabel: 'Book My Free Scoping Call',
    reassurance: 'No sales pressure. No slide deck.',
  },

  footer: {
    aboutLine:
      'Raven Labs is an Australian technology consultancy helping field service and trade businesses connect Zoho FSM to their CRM, finance and inventory systems.',
    abn: 'ABN 12 345 678 901',
    partnerAttribution:
      'Zoho, Zoho FSM, and other associated marks are trademarks of Zoho Corporation Pvt. Ltd. and/or its affiliates. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-fsm" content={content} />
}
