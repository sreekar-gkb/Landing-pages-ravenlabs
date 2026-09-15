import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  partnerName: 'Zoho',
  partnerLogoSrc: '/partners/zoho.webp',
  nav: {
    phoneHref: 'tel:+61390000000',
    phoneLabel: 'Talk to our team',
  },
  hero: {
    headlineTemplate: 'Turn Repetitive Work into Real Results with Zoho {Zia Agents}',
    subhead: 'Deploy AI-powered automation across your entire Zoho ecosystem — no code, no consultants.',
    bullets: ['Works with CRM, Books, Inventory, Projects, Desk, and more', 'Deploy in days, not months', 'ROI in first 30 days'],
    formHeading: 'Learn how to deploy your first Zia Agent',
    formSubhead: 'Fill out the form and our team will show you exactly how.',
    ctaLabel: 'Learn How to Deploy Your First Zia Agent',
  },
  problem: {
    heading: 'Your best people are stuck doing robot work',
    body: 'Every day, your team spends hours on repetitive tasks: data entry, follow-ups, customer handoffs, report generation. Tasks that should be automated, but your IT backlog is 12 months deep. Zia Agents automate these workflows 24/7, freeing your people to focus on high-value work.',
  },
  answer: {
    heading: 'Deploy AI agents that know your workflows',
    subhead: 'Zoho Zia Agents are autonomous, intelligent agents that live inside your Zoho tools. They learn your data, your rules, your processes — and execute them 24/7 without code.',
    benefits: [
      { icon: 'zap', title: 'Automate without code', body: 'Deploy Zia Agents right from Zoho — anyone familiar with your workflows can set them up. No IT dependency.' },
      { icon: 'trending-up', title: 'Work smarter across Zoho', body: 'Zia Agents operate across CRM, Books, Inventory, Projects, Desk, and more. One agent, your entire business.' },
      { icon: 'shield', title: 'Act on insights in real time', body: 'Agents monitor your data 24/7, spot patterns, execute actions, and escalate exceptions.' },
      { icon: 'dollar-sign', title: 'Free up your best people', body: 'Save 10+ hours per week per employee on repetitive work.' },
    ],
  },
  proof: {
    testimonials: [
      { quote: 'We deployed a Zia Agent to handle sales follow-ups in our CRM. Productivity jumped 40%.', name: 'Tom Richardson', title: 'Operations Manager, eCommerce Business', sample: true },
      { quote: 'Data entry was killing our team. We set up Zia Agents to pull order data and match inventory.', name: 'Priya Nair', title: 'Inventory Director, Manufacturing', sample: true },
      { quote: 'Zia Agent handles tier-1 ticket triage and assigns to the right team. Response times dropped 80%.', name: 'Michael Chen', title: 'Head of Operations, Hospitality Group', sample: true },
    ],
  },
  process: {
    heading: 'From idea to automation in four steps',
    subhead: 'Most teams have their first agent live within a day.',
    steps: [
      { title: 'Identify the workflow', body: 'Pick a repetitive task. Something your team does daily.' },
      { title: 'Configure your Zia Agent', body: "Use Zoho's no-code agent builder. Most agents are live in under an hour." },
      { title: 'Watch it work', body: 'Zia Agent executes 24/7, logs every action, and escalates edge cases.' },
      { title: 'Scale across Zoho', body: 'Deploy agents across teams and workflows. Compound your time savings.' },
    ],
  },
  faq: {
    heading: 'Questions answered',
    items: [
      { q: 'Do we need a developer?', a: 'No. Zia Agents are no-code. Any ops manager or team lead can configure them.' },
      { q: 'Which Zoho apps work with Zia Agents?', a: 'CRM, Books, Inventory, Projects, Desk, and more. They connect across the entire suite.' },
      { q: 'How fast do agents learn our processes?', a: 'Immediately. You define the rules and triggers, and the agent executes them from day one.' },
      { q: 'What happens with edge cases?', a: 'Zia escalates to your team with full context so they can make the decision.' },
      { q: 'Can we run multiple agents?', a: 'Yes. Agents can run in parallel across different workflows and Zoho apps.' },
      { q: 'What does it cost?', a: 'Zia Agents are included in most Zoho plans. Contact us for a custom quote.' },
    ],
  },
  finalCta: {
    heading: "Let's put your first AI agent to work",
    body: 'Talk to our team about which workflows would benefit most from automation.',
    ctaLabel: 'Learn How to Deploy Your First Zia Agent',
    reassurance: 'No sales pressure. Just a look at what fits your workflows.',
  },
  footer: {
    aboutLine: 'Raven Labs is an Authorised Zoho Partner, building automation for Australian teams.',
    abn: '[ABN pending]',
    partnerAttribution: 'Zoho and Zia are trademarks of Zoho Corporation Private Limited and/or its affiliates. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-zia-agents" content={content} />
}
