'use client'

import type { CampaignContent } from '@/components/template/CampaignContent.types'
import CampaignTemplate from '@/components/template/CampaignTemplate'

const content: CampaignContent = {
  partnerName: 'Microsoft',
  partnerLogoSrc: '/partners/microsoft-365.webp',

  nav: {
    phoneHref: 'tel:1300000000',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'CRM that speaks {Microsoft}',
    subhead:
      'Dynamics 365 Sales integrates natively with Teams, Outlook, Power BI, and SharePoint—no bridges, no custom APIs, no friction. Your enterprise, connected.',
    bullets: [
      'Works like Microsoft 365 (because it is)',
      '45-min discovery call, no obligation',
      'Typical ROI within 90 days of go-live',
    ],
    formHeading: "Let's map your Dynamics 365 strategy",
    formSubhead: "We'll assess your current setup, identify integration gaps, and build a phased implementation roadmap.",
    ctaLabel: 'Book a Discovery Call',
  },

  trustBar: {
    label: 'Trusted by manufacturing, professional services & enterprise operations across Australia',
    placeholderCount: 5,
  },

  problem: {
    heading: 'You\'re wasting time stitching Microsoft products together',
    body: 'Your sales team lives in Outlook. Your operations live in Excel or SAP. Your data sits in multiple databases. Meanwhile, Salesforce requires custom integration work at every turn—expensive, fragile, and still not native. If you\'re already on Microsoft 365, you\'re paying twice: once for integration glue, again for a CRM that doesn\'t speak your language. Dynamics 365 is different—it was built to be Microsoft.',
  },

  answer: {
    heading: 'Dynamics 365 Sales: CRM inside your Microsoft ecosystem',
    subhead:
      'No custom integrations. No Zapier workflows. Just seamless, native collaboration across your entire technology stack.',
    benefits: [
      {
        title: 'One data model, one truth',
        body: 'Dataverse sits beneath Dynamics 365, Power Apps, and Power Automate. Your sales data, service data, finance data—all connected natively. No ETL nightmares.',
        icon: 'database',
      },
      {
        title: 'Outlook + Teams + Sales = one workflow',
        body: 'Your team doesn\'t need to leave Outlook to see deals, log activities, or chase follow-ups. Teams bots surface insights in real time. It\'s how they already work.',
        icon: 'mail',
      },
      {
        title: 'AI that your CTO understands',
        body: 'Copilot integrates natively. Power BI dashboards pull live data without API delays. Machine learning predictions run on Dataverse, not a separate data warehouse.',
        icon: 'zap',
      },
      {
        title: 'ERP + CRM on one database',
        body: 'Finance, operations, sales, service—all on the same data model. Manufacturing and supply-chain teams see the same pipeline your sales team is chasing.',
        icon: 'layers',
      },
      {
        title: 'Lower TCO for Microsoft shops',
        body: 'No integration consulting fees. No ongoing API maintenance. No third-party middleware licenses. Your IT team manages one stack.',
        icon: 'trending-down',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote:
          'We spent 18 months fighting Salesforce integrations with our SAP backend. Switched to Dynamics 365 and had finance-to-sales visibility within 6 weeks. The native integration saved us $200k in consulting alone, plus 2 FTEs in ongoing API management.',
        name: 'Michael Chen',
        title: 'CTO, mid-market manufacturing',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'How we implement Dynamics 365 at enterprise scale',
    subhead:
      'Phased approach. Your team stays productive. Go-live in 12–16 weeks for most enterprise deployments.',
    steps: [
      {
        title: 'Discovery & Architecture',
        body: 'We map your current sales process, data flows, and Microsoft ecosystem footprint. We design the Dataverse schema, identify integration points, and set go-live success criteria.',
      },
      {
        title: 'Configuration & Automation',
        body: 'We build your sales processes, lead workflows, and pipeline management inside Dynamics 365. We connect Teams, Power Automate, and Power BI—all native, no custom code.',
      },
      {
        title: 'Data Migration & Cutover',
        body: 'We migrate historical data from your legacy CRM or spreadsheets into Dataverse. We validate completeness, reconcile, and run parallel runs with your team.',
      },
      {
        title: 'Adoption & Optimization',
        body: 'First 90 days post-launch, we monitor adoption, refine workflows, and train power users. Quarterly reviews identify new integration opportunities.',
      },
    ],
  },

  faq: {
    heading: 'Common questions about Dynamics 365',
    items: [
      {
        q: 'How does Dynamics 365 compare to Salesforce?',
        a: 'Salesforce is powerful for pure sales complexity. Dynamics 365 wins when you need ERP integration, native Microsoft ecosystem alignment, or lower TCO for enterprises already on Office 365. For manufacturing and operations-heavy businesses, Dynamics 365 often requires less custom integration work.',
      },
      {
        q: 'Can we migrate from Salesforce or another CRM?',
        a: 'Yes. We handle data extraction, mapping, transformation, and load. Most migrations complete in 6–8 weeks. We validate completeness before cutover and run parallel systems during transition.',
      },
      {
        q: 'Do we need special IT skills to run Dynamics 365?',
        a: 'Dynamics 365 uses Power Platform (Power Automate, Power Apps, Power BI)—Microsoft standard tools. If your IT team knows Azure or .NET, the learning curve is shallow. Less proprietary language than Salesforce Apex.',
      },
      {
        q: 'How does it integrate with our ERP?',
        a: 'If you\'re on Dynamics 365 Finance & Operations, it\'s one unified platform. If you\'re on SAP or Oracle, we build integrations via Azure integration services—far simpler than Salesforce-to-ERP bridges.',
      },
      {
        q: 'What\'s the total cost of ownership?',
        a: 'Dynamics 365 Sales Premium is ~AUD $225/user/month. Enterprise implementations typically cost $150k–$400k depending on complexity. Compare that to Salesforce ($180–$280/user/month) + $300k+ integration consulting.',
      },
      {
        q: 'What support do you provide after go-live?',
        a: 'We provide 90-day adoption support, ongoing optimization quarterly, and priority support for process improvements and advanced customization. Many clients extend us as their part-time Dynamics 365 operations team.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop building bridges. Start building business.',
    body: 'A 45-minute discovery call will show you exactly where integration friction exists today—and how Dynamics 365 eliminates it. No sales pitch, just technical clarity.',
    ctaLabel: 'Schedule your discovery session',
    reassurance: 'No long-term commitment. No setup fees upfront.',
  },

  footer: {
    aboutLine: 'Raven Labs is a Microsoft-certified Dynamics 365 implementation partner based in Australia.',
    abn: 'ABN 12 345 678 901',
    partnerAttribution:
      'Microsoft, Dynamics 365, Microsoft 365, Power Platform, and related marks are trademarks of Microsoft Corporation. Raven Labs is an independent, certified Microsoft partner; this page is not published or endorsed by Microsoft Corporation.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="dynamics-365-crm" content={content} />
}