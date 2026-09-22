import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  nav: {
    phoneHref: 'tel:1300000000',
    phoneLabel: 'Give us a call'
  },
  hero: {
    headlineTemplate: 'Turn JIRA chaos into streamlined {ticket workflows}',
    subhead: 'Reduce manual ticket work, eliminate bottlenecks, scale without hiring — Raven\'s automation experts show you how.',
    bullets: [
      'Free 30-min workflow audit',
      'No obligation to proceed',
      'Australian-based expertise'
    ],
    formHeading: 'Let\'s audit your JIRA workflow',
    formSubhead: 'Tell us what\'s slowing your team down.',
    ctaLabel: 'Book your audit'
  },
  problem: {
    heading: 'JIRA works. Your workflow doesn\'t.',
    body: 'You\'ve got JIRA running, but tickets pile up. Manual handoffs between teams eat time. Escalations get missed. Your team spends half the day moving tickets, not solving problems. The tool isn\'t the problem — the workflow is.'
  },
  answer: {
    heading: 'Streamline without replacing',
    subhead: 'We don\'t sell you a new platform. We optimize the one you\'ve got.',
    benefits: [
      {
        title: 'Automation that sticks',
        body: 'Eliminate repetitive manual steps. Tickets route themselves. Escalations trigger automatically. Your team gets hours back every week.',
        icon: 'zap'
      },
      {
        title: 'Bottleneck destruction',
        body: 'Identify the exact workflows slowing you down. Clear backlogs. Get throughput up. Watch cycle time drop.',
        icon: 'trending-up'
      },
      {
        title: 'Scale without headcount',
        body: 'Do more with the team you have. Automation handles the noise so your engineers focus on high-value work.',
        icon: 'chart'
      },
      {
        title: 'Built for JIRA',
        body: 'We speak JIRA natively — custom fields, workflows, integrations, automation rules. No workarounds. No compromise.',
        icon: 'wrench'
      }
    ]
  },
  proof: {
    testimonials: [
      {
        quote: 'We cut ticket processing time by 40% in the first month. The automation caught things we were manually checking. Raven didn\'t just fix JIRA — they fixed our process.',
        name: 'Sarah Chen',
        title: 'Operations Manager, FinTech SaaS',
        sample: true
      },
      {
        quote: 'Every team has a different workflow. Raven understood ours and built automation that works, not against us. That\'s rare.',
        name: 'Marcus Williams',
        title: 'Tech Lead, Logistics',
        sample: true
      },
      {
        quote: 'We were looking at replacing JIRA. Raven showed us we just needed to automate half our manual steps. Saved us six months of migration chaos.',
        name: 'Priya Kapoor',
        title: 'Director of Engineering, Retail Platform',
        sample: true
      }
    ]
  },
  process: {
    heading: 'How we optimize your JIRA in four steps',
    subhead: 'From audit to live automation — typically complete in 2–3 weeks.',
    steps: [
      {
        title: 'Audit your workflows',
        body: 'We map every ticket journey, spot the manual steps, find the delays. You\'ll see exactly where time is being lost.'
      },
      {
        title: 'Design automation',
        body: 'We build the rules, custom fields, and integrations that replace manual work. No guess-and-check — every rule targets a real bottleneck.'
      },
      {
        title: 'Test and refine',
        body: 'Live testing with your real workflows. We catch edge cases, tweak automation, train your team.'
      },
      {
        title: 'Deploy and measure',
        body: 'Go live. Track metrics. Prove the impact — time saved, tickets processed, cycle time reduction.'
      }
    ]
  },
  faq: {
    heading: 'Questions about JIRA automation',
    items: [
      {
        q: 'Will this disrupt our team\'s workflow?',
        a: 'No. We map your current workflows first and build automation around them. You\'re not changing how you work — you\'re just removing the manual parts.'
      },
      {
        q: 'How long does automation typically take to implement?',
        a: 'Most workflows are automated within 2–3 weeks. It depends on complexity, but we typically start showing results within the first week.'
      },
      {
        q: 'What if we have custom fields or complex workflows?',
        a: 'Perfect — that\'s where we excel. We\'ve optimized everything from simple ticket routing to multi-step approval chains across teams.'
      },
      {
        q: 'Do you handle JIRA integrations with other tools?',
        a: 'Yes. We integrate JIRA with Slack, Microsoft Teams, Zapier, webhooks, and custom APIs. If it connects, we can automate it.'
      },
      {
        q: 'What happens if automation breaks something?',
        a: 'We test everything in a staging environment first. You see it working before it touches production. We also provide support for 30 days post-launch.'
      },
      {
        q: 'Can this integrate with our other systems?',
        a: 'Yes — we connect JIRA to your existing stack: ERPs, CRMs, BI tools, Fulqrom automation, and custom databases.'
      }
    ]
  },
  finalCta: {
    heading: 'Stop managing tickets. Start automating them.',
    body: 'One 30-minute conversation shows you where your JIRA workflow is leaking time and what automation could do for your team.',
    ctaLabel: 'Book your workflow audit',
    reassurance: 'Free audit. No slides. No obligation.'
  },
  footer: {
    aboutLine: 'Raven Labs is an Australian automation consultancy helping teams scale with JIRA, Zoho, Shopify, and custom integrations.',
    abn: '[ABN pending]'
  }
}

export default function Page() {
  return <CampaignTemplate campaign="jira-ticket-automation" content={content} />
}