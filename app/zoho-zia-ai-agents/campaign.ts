// Zoho Zia Agents campaign. Built with raven-landing-page-builder v4 (one-shot mode).
// Client-ready version: no placeholders. Unknown facts are stated as what happens in the audit, never invented.
import type { Campaign } from './_lp/types';

const P = '/zoho-zia-ai-agents';

const campaign: Campaign = {
  slug: 'zoho-zia-ai-agents',
  status: 'draft',
  meta: {
    title: 'Raven Labs — Zoho Zia Agents Implementation Partner (Australia)',
    description: 'Put Zoho Zia Agents to work on follow-ups, invoices and service tickets. Book a free 30-minute AI workflow audit with Raven Labs.',
  },
  partner: { name: 'Zoho Zia', logo: `${P}/img/logos-zoho-zia.png`, logoWidth: 265, logoHeight: 128 },
  hero: {
    line1: 'Turn Zoho Zia Agents',
    prefix: 'into real',
    rotatingWords: ['Capacity', 'Speed', 'Revenue', 'Focus'],
    lead: 'Raven Labs designs, builds and governs Zia Agents inside your Zoho apps, so follow-ups, invoice chasing and ticket triage keep moving while your team approves the steps that matter.',
    microcopy: 'Free 30-minute session • No obligation • Zoho AI specialists',
  },
  form: {
    heroTitle: 'Ready to put an agent to work?',
    heroSubtitle: 'Tell us where your team loses time. We’ll be in touch within one business day.',
    segmentLabel: 'Company size',
    segmentOptions: ['1–20 people', '21–100 people', '101–500 people', '500+ people'],
    goalLabel: 'Primary goal',
    goalOptions: ['Automate sales follow-ups', 'Speed up service ticket triage', 'Chase invoices and payments', 'Automate stock and ops tasks', 'Not sure / need expert guidance'],
    reassurance: 'Free 30-minute session • No obligation • Response within one business day.',
    recaptcha: false,
  },
  showcase: { title: 'See how Raven Labs puts Zia Agents to work' },
  tools: {
    title: 'Agents that work across the Zoho apps you already run.',
    subtitle: 'An agent can read a deal in CRM, check an invoice in Books and update a ticket in Desk, all inside your own Zoho account.',
    logos: [
      { src: `${P}/img/logos-zoho-zia.png`, alt: 'Zoho Zia' }, { src: `${P}/img/logos-zoho-crm.png`, alt: 'Zoho CRM' },
      { src: `${P}/img/logos-zoho-desk.png`, alt: 'Zoho Desk' }, { src: `${P}/img/logos-zoho-books.png`, alt: 'Zoho Books' },
      { src: `${P}/img/logos-zoho-inventory.png`, alt: 'Zoho Inventory' }, { src: `${P}/img/logos-zoho-projects.png`, alt: 'Zoho Projects' },
      { src: `${P}/img/logos-zoho-salesiq.png`, alt: 'Zoho SalesIQ' }, { src: `${P}/img/logos-zoho-analytics.png`, alt: 'Zoho Analytics' },
    ],
  },
  trust: { title: 'Trusted by organisations across Australia.', testimonialIds: ['rios-legacy-ryan-fowler'] },
  problem: {
    title: 'AI isn’t the challenge.',
    accent: 'Knowing what to hand over is.',
    lead: 'Most teams have tried an AI assistant and moved on. Agents only pay off when they’re pointed at the right workflows, connected to clean data and given clear limits.',
    cards: [
      { icon: 'Users', title: 'Your best people chase admin', body: 'Follow-ups, reminders and data entry fill the hours your senior staff should spend with customers.' },
      { icon: 'Workflow', title: 'Work stalls between apps', body: 'A deal closes in CRM, but the invoice, the onboarding task and the welcome email all wait for someone.' },
      { icon: 'ShieldCheck', title: 'Nobody trusts a black box', body: 'Leaders won’t let an agent email customers or touch invoices without seeing what it will do first.' },
      { icon: 'Target', title: 'Pilots never reach the team', body: 'A clever demo is easy. Rolling an agent out to a whole team, with training and support, is where most stall.' },
    ],
  },
  journey: {
    title: 'Your Zia Agents',
    accent: 'Rollout Journey',
    lead: 'We start with one workflow that costs you time every day, prove it with your own data, then scale agents across the business with the right guardrails.',
    steps: [
      { icon: 'Search', title: 'Discover', line: 'Find the highest-value workflows.' },
      { icon: 'Workflow', title: 'Design', line: 'Map steps, data and limits.' },
      { icon: 'Bot', title: 'Build', line: 'Configure agents in Zoho.' },
      { icon: 'Rocket', title: 'Launch', line: 'Roll out with your team.' },
      { icon: 'TrendingUp', title: 'Scale', line: 'Add agents, measure results.' },
    ],
    ctaLabel: 'Get Started',
  },
  program: {
    title: 'Your complete Zia Agents',
    accent: 'Automation Program',
    lead: 'Everything your team needs to run AI agents safely inside Zoho, from the first workflow audit to training, governance and ongoing tuning.',
    cards: [
      { title: 'AI Workflow Audit', image: `${P}/img/workflow-audit-whiteboard.jpg`, description: 'We map where your team loses hours and rank which tasks an agent should take first.', bullets: ['Workflow time map', 'Ranked agent shortlist', 'Written quote'] },
      { title: 'Agent Design & Build', image: `${P}/img/agent-build-laptop.jpg`, description: 'Agents configured inside your own Zoho account, using your fields, rules and tone.', bullets: ['Built in your Zoho', 'Your data and rules', 'Tested before launch'] },
      { title: 'Sales Follow-up Agents', image: `${P}/img/sales-followup-pair.jpg`, description: 'Agents that notice quiet deals and draft the next step for your reps.', bullets: ['Stalled-deal alerts', 'Drafted follow-ups', 'Next-step reminders'] },
      { title: 'Service Desk Triage', image: `${P}/img/service-desk-agent.jpg`, description: 'Tickets sorted, tagged and routed before a person picks them up.', bullets: ['Auto-categorised tickets', 'Priority routing', 'Suggested replies'] },
      { title: 'Finance & Invoice Agents', image: `${P}/img/finance-team-table.jpg`, description: 'Overdue invoices chased politely and payments matched in Zoho Books.', bullets: ['Payment reminders', 'Overdue follow-ups', 'Reconciliation prompts'] },
      { title: 'Inventory & Ops Agents', image: `${P}/img/warehouse-forklift.jpg`, description: 'Stock levels watched and reorders prepared for someone to approve.', bullets: ['Low-stock alerts', 'Draft purchase orders', 'Supplier updates'] },
      { title: 'Guardrails & Approvals', image: `${P}/img/governance-briefing.jpg`, description: 'Clear limits on what each agent can do, with people approving sensitive steps.', bullets: ['Human approval steps', 'Activity logs', 'Role-based access'] },
      { title: 'Ready to get started?', image: `${P}/img/team-meeting-bright.jpg`, description: 'Book a free workflow audit and find the first task worth handing to an agent.', bullets: ['Free 30-minute session', 'No obligation', 'Response in one business day'] },
    ],
  },
  faq: {
    image: { src: `${P}/img/open-office-square.jpg`, alt: 'Open-plan office with teams working at their desks' },
    items: [
      { q: 'Do we need Zoho One to use Zia Agents?', a: 'Not necessarily. Which agents you can run depends on your Zoho apps and plan. We check your current licences during the audit, before we recommend anything.' },
      { q: 'Will an agent email customers without us checking?', a: 'Only if you want it to. We set up approval steps so a person reviews anything sensitive, such as customer emails, discounts or invoice changes, before it goes out.' },
      { q: 'How long until our first agent is live?', a: 'It depends on the workflow. A single, well-defined task is much faster than a multi-app process, and we confirm a realistic timeline in writing after the audit.' },
      { q: 'Is our business data kept private?', a: 'Agents run inside your own Zoho account, and we limit each one to the data it needs. We walk you through Zoho’s data-handling terms during the audit.' },
      { q: 'What does it cost?', a: 'It depends on how many workflows and agents you need. After the audit you get a written quote before any work starts.' },
    ],
  },
  closing: {
    title: 'Ready to hand over',
    accent: 'the busywork?',
    body: 'Whether you want one agent chasing invoices or several across sales and service, we’ll help you start with the workflow that pays back first. No pressure. Just expert advice from a Zoho AI specialist.',
  },
};

export default campaign;
