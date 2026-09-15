'use client'

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
    headlineTemplate: 'Enterprise CRM Features, {No Enterprise Price Tag}',
    subhead:
      'Zoho CRM gives you the automation, customization, and insights you need to grow—at a fraction of what Salesforce or HubSpot charge.',
    bullets: [
      'Works with tools you already use',
      '30-min strategy session, no cost',
      'Most customers see ROI within 60 days',
    ],
    formHeading: "Let's discuss your CRM strategy",
    formSubhead: "Tell us about your current setup, and we'll show you how Zoho can streamline it.",
    ctaLabel: 'Book a Free Session',
  },

  trustBar: {
    label: 'Trusted by hospitality, retail, manufacturing & services businesses across Australia',
    placeholderCount: 5,
  },

  problem: {
    heading: 'Your current setup is costing you more than you realize',
    body: 'Most SMBs are trapped in one of two scenarios: Either you\'re overpaying for Salesforce or HubSpot and leaving advanced features untouched, or you\'re juggling separate tools for sales, customer data, and support—losing deals in the gaps. Spreadsheets don\'t scale. Neither do email-only workflows. And scattered data means nobody really knows what\'s happening with your customers.',
  },

  answer: {
    heading: 'Zoho CRM is different',
    subhead:
      'Built specifically for teams that want real sophistication without burning budget on unused features.',
    benefits: [
      {
        title: 'Automate what should be automated',
        body: 'Lead scoring, follow-up workflows, and deal progression happen while your team focuses on relationships. Your data stays clean. Your pipeline stays hot.',
        icon: 'zap',
      },
      {
        title: 'See everything in one place',
        body: 'Sales, customer service, and marketing data connected. Real visibility into who\'s engaging, what\'s closing, and where deals get stuck.',
        icon: 'eye',
      },
      {
        title: 'Customize without breaking the bank',
        body: 'Unlike HubSpot\'s limited customization, Zoho lets you reshape workflows, fields, and dashboards to match exactly how you work—without hiring developers.',
        icon: 'settings',
      },
      {
        title: 'Pay for what you use',
        body: 'Most businesses save 60–70% versus their previous CRM within year one. Scale users and features as you grow.',
        icon: 'trending-down',
      },
      {
        title: 'AI that actually helps',
        body: 'Zia predicts which leads will close, suggests next steps, and flags deals at risk. Not sci-fi. Just smarter decisions.',
        icon: 'brain',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote:
          'We were on HubSpot and getting charged per contact for features we weren\'t even using. Switched to Zoho and cut our CRM costs by $800/month while actually getting better automation and reporting.',
        name: 'Sarah Mitchell',
        title: 'Operations Manager, Luxury Hospitality Group',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'How we implement Zoho for your business',
    subhead:
      'Most setups take 2–3 weeks. You\'ll own it completely, and your team will actually use it.',
    steps: [
      {
        title: 'Strategy Session',
        body: 'We map your current customer journey, identify where deals stall, and align Zoho\'s features to your priorities—not the other way around.',
      },
      {
        title: 'Smart Setup',
        body: 'We configure Zoho to match your workflows: lead capture, assignment, scoring, automation, and integrations with your existing tools (accounting, email, support, etc.).',
      },
      {
        title: 'Team Training',
        body: 'Your team learns how to use Zoho in your real processes—not generic training. We show them why each feature matters and how it saves them time daily.',
      },
      {
        title: 'Ongoing Optimization',
        body: 'First 90 days, we monitor adoption and refine workflows. You get a quarterly review to catch new opportunities and keep your CRM earning its place.',
      },
    ],
  },

  faq: {
    heading: 'Common questions about Zoho CRM',
    items: [
      {
        q: 'Is Zoho CRM as powerful as Salesforce?',
        a: 'Zoho has 95% of the features most businesses actually need. Salesforce excels if you have complex, multi-org requirements and dedicated admins. For mid-market and growing SMBs, Zoho is more powerful per dollar.',
      },
      {
        q: 'How long does implementation take?',
        a: 'Most businesses go live in 2–4 weeks. Complexity varies—simple single-team setups can be faster; multi-department or heavily customized workflows take longer.',
      },
      {
        q: 'Can we integrate Zoho with our existing tools?',
        a: 'Yes. Zoho integrates with QuickBooks, Xero, Slack, Microsoft Teams, Shopify, Google Workspace, and 600+ other apps. We build custom integrations for anything off the shelf.',
      },
      {
        q: 'What if we\'re currently on HubSpot or Salesforce?',
        a: 'Migration is straightforward. We handle data mapping, contact import, and configuration. Most customers are fully migrated in 2–3 weeks with zero data loss.',
      },
      {
        q: 'How much does Zoho CRM cost?',
        a: 'From $14/user/month (Standard) to $65/user/month (Ultimate). Most SMBs pay $400–$1,200/month for their entire team—a fraction of Salesforce or HubSpot.',
      },
      {
        q: 'Do you offer ongoing support after launch?',
        a: 'Yes. We provide quarterly business reviews, ongoing optimization, and priority support for strategy and complex customization.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop overpaying for CRM. Start closing more deals.',
    body: 'A free 30-minute session is a low-risk way to see if Zoho makes sense for your team. We\'ll review your current setup, identify where you\'re losing money, and show you exactly what Zoho can do.',
    ctaLabel: 'Book your session',
    reassurance: 'No sales pressure. No obligation.',
  },

  footer: {
    aboutLine: 'Raven Labs is an Australian CRM specialist and authorised Zoho partner.',
    abn: 'ABN 12 345 678 901',
    partnerAttribution:
      'Zoho, Zoho CRM, and related marks are trademarks of Zoho Corporation PVT. LTD. and/or its affiliates. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho Corporation.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-crm-business" content={content} />
}