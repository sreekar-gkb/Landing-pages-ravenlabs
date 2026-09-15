'use client'

import type { CampaignContent } from '@/components/template/CampaignContent.types'
import CampaignTemplate from '@/components/template/CampaignTemplate'

const content: CampaignContent = {
  partnerName: 'Shopify',

  nav: {
    phoneHref: 'tel:1300000000',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'One Platform for {B2B + DTC}',
    subhead:
      'Shopify Plus runs your wholesale and retail operations from a single admin. No separate stores, no sync headaches, no custom code to maintain. Just unified inventory, unified customer data, unified automation.',
    bullets: [
      'Sell B2B and DTC simultaneously',
      'Free 30-minute platform assessment',
      'Most migrations complete in 4–6 weeks',
    ],
    formHeading: "Let's map your wholesale roadmap",
    formSubhead: 'Tell us about your current setup—retail, wholesale, or both—and we\'ll show you how Shopify Plus simplifies it.',
    ctaLabel: 'Book a Platform Assessment',
  },

  trustBar: {
    label: 'Trusted by manufacturers, wholesalers & hybrid retailers across Australia',
    placeholderCount: 5,
  },

  problem: {
    heading: 'You\'re managing two businesses in two systems',
    body: 'Most wholesale operations live in a separate platform or custom build. Your retail team uses Shopify Standard. Sales data is split, inventory is duplicated, and updates don\'t sync automatically. You\'re paying two subscription fees, maintaining two dashboards, training teams on two interfaces. Meanwhile, BigCommerce and WooCommerce require expensive consulting to even approach what Shopify Plus does natively. There\'s a better way.',
  },

  answer: {
    heading: 'Shopify Plus: One platform, all channels',
    subhead:
      'Unified inventory. Unified customer profiles. Unified automation. Sell wholesale and retail without the complexity.',
    benefits: [
      {
        title: 'Native B2B, no extra app',
        body: 'Company accounts, unlimited price lists, net payment terms, PO numbers, purchase orders at checkout—all built-in. No third-party app chaos.',
        icon: 'briefcase',
      },
      {
        title: 'One inventory, infinite channels',
        body: 'When a retail customer buys, your wholesale customers see real stock. When a wholesale order ships, retail inventory updates instantly. Single source of truth.',
        icon: 'package',
      },
      {
        title: 'Customer-specific experiences',
        body: 'Show custom catalogs, pricing, and terms to each customer without separate stores. Blended or dedicated B2B—your choice, one platform.',
        icon: 'users',
      },
      {
        title: 'Automation that actually works',
        body: 'Shopify Flow automates B2B workflows: auto-approve bulk orders, flag high-value deals, sync payments. Write once, apply everywhere.',
        icon: 'zap',
      },
      {
        title: 'Scale without rebuilding',
        body: 'From $2.3k/month you get unlimited staff, 500% higher API limits, checkout customization, and 2,048 product variants. Grow without hitting ceilings.',
        icon: 'trending-up',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote:
          'We had B2B on a custom Shopify Plus build and DTC on standard Shopify. Raven Labs unified both on one Shopify Plus instance with native B2B features. Data syncs instantly now, we\'ve cut admin overhead by 30%, and our team doesn\'t need to learn two platforms anymore. Migration took 5 weeks, zero downtime.',
        name: 'James Richardson',
        title: 'Operations Director, specialty wholesale distributor',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'How we implement Shopify Plus B2B',
    subhead:
      'Platform assessment. Architecture design. Migration. Training. Launch. Most clients go live in 4–6 weeks.',
    steps: [
      {
        title: 'Platform Assessment',
        body: 'We review your current retail, wholesale, and order data. We identify integration points, data gaps, and operational bottlenecks. We show you exactly what Shopify Plus can do for you.',
      },
      {
        title: 'Architecture & Setup',
        body: 'We design your B2B structure: blended store or dedicated wholesale domain. We configure company accounts, price lists, payment terms, and automation rules.',
      },
      {
        title: 'Data Migration',
        body: 'We extract and clean your retail and wholesale data. We migrate products, customers, price lists, and order history into Shopify Plus. We validate every record.',
      },
      {
        title: 'Testing & Launch',
        body: 'We run parallel operations—old system live, new system shadow running. Once your team confirms everything works, we cutover. You\'re live.',
      },
      {
        title: 'Adoption & Optimization',
        body: 'First 30 days post-launch, we train your team, optimize workflows, and monitor performance. Quarterly reviews identify new automation opportunities.',
      },
    ],
  },

  faq: {
    heading: 'Common questions about Shopify Plus B2B',
    items: [
      {
        q: 'Can we run both B2B and retail from one store?',
        a: 'Yes. Shopify Plus supports blended stores where B2B customers log in to see wholesale pricing and terms, while retail customers see standard pricing. Or run separate B2B and DTC stores on one platform—same admin, separate domains.',
      },
      {
        q: 'What if we\'re currently on BigCommerce or WooCommerce?',
        a: 'We handle the full migration: data extraction, transformation, loading, and validation. Most migrations complete in 4–6 weeks. We run parallel operations to ensure zero data loss.',
      },
      {
        q: 'How much does Shopify Plus cost?',
        a: 'Shopify Plus starts at AUD $2,300/month. That includes unlimited staff, B2B features, advanced APIs, 500% higher rate limits, and priority support. Compare that to BigCommerce Enterprise ($1,000–$3,000/month base + B2B fees).',
      },
      {
        q: 'Can we integrate with our ERP or accounting system?',
        a: 'Yes. Shopify Plus has 8,000+ apps and robust APIs. We build custom integrations with NetSuite, SAP, QuickBooks, Xero, or any system you use. Your ERP syncs automatically with Shopify inventory and orders.',
      },
      {
        q: 'What about complex pricing (tiered, contract-based)?',
        a: 'Shopify Plus supports unlimited price lists—you can assign different pricing per customer, per region, per order quantity. Automations handle approval workflows and payment term enforcement.',
      },
      {
        q: 'Do you provide training and ongoing support?',
        a: 'Yes. We run in-depth training for your team post-launch and provide quarterly business reviews. We can also act as your extended Shopify Plus operations team.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop managing two platforms. Start running one business.',
    body: 'A 30-minute assessment will show you exactly where data duplication and admin overhead are costing you—and how Shopify Plus eliminates it. No sales pitch, just technical clarity.',
    ctaLabel: 'Schedule your assessment',
    reassurance: 'No obligation. No setup fees upfront.',
  },

  footer: {
    aboutLine: 'Raven Labs is a Shopify Plus Premier Partner specializing in wholesale and B2B implementations for manufacturers, distributors, and hybrid retailers.',
    abn: 'ABN 12 345 678 901',
    partnerAttribution:
      'Shopify, Shopify Plus, and related marks are trademarks of Shopify Inc. Raven Labs is an independent, certified Shopify Plus partner; this page is not published or endorsed by Shopify Inc.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="shopify-plus-wholesale" content={content} />
}