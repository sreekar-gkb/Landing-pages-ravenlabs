// Zoho CRM for business: Raven Labs campaign (replaces the earlier /zoho-crm-business page).
// Offer: book a live Zoho CRM demo. Audience: Australian SMBs, manufacturers and professional services.
// Bracketed text = placeholders a human must supply before launch.
import type { Campaign } from './_lp/types';

const S = '/zoho-crm-business';

const campaign: Campaign = {
  slug: 'zoho-crm-business',
  status: 'live',
  meta: {
    title: 'Raven Labs — Zoho CRM Implementation Partner (Australia)',
    description: 'Book a live Zoho CRM demo with Raven Labs, an Authorised Zoho Partner. Built for Australian SMBs, manufacturers and professional services firms.',
  },
  partner: { name: 'Zoho CRM', logo: `${S}/logos/zoho-crm.png`, logoWidth: 309, logoHeight: 128 },
  hero: {
    line1: 'Turn your Zoho CRM',
    prefix: 'into real',
    rotatingWords: ['Pipeline', 'Visibility', 'Follow-up', 'Momentum'],
    lead: 'Raven Labs sets up Zoho CRM around how your team actually sells, then connects it to your quoting, invoicing and support so every lead, deal and customer sits in one place.',
    microcopy: 'Live demo with a specialist • No obligation • Authorised Zoho Partner',
  },
  form: {
    heroTitle: 'Ready to see Zoho CRM in action?',
    heroSubtitle: 'Tell us a bit about your business and we’ll arrange your demo within one business day.',
    segmentLabel: 'Your industry',
    segmentOptions: ['Professional services', 'Manufacturing & industrial', 'Wholesale & distribution', 'Construction & trades', 'Other'],
    goalLabel: 'Primary goal',
    goalOptions: ['Move off spreadsheets', 'Switch from another CRM', 'Fix pipeline visibility', 'Connect CRM to finance and support', 'Not sure / need expert guidance'],
    reassurance: 'Live Zoho CRM demo • No obligation • Response within one business day.',
    recaptcha: false,
  },
  showcase: { title: 'See how Raven Labs runs your pipeline' },
  tools: {
    title: 'Built around the Zoho apps your team already uses.',
    subtitle: 'Zoho CRM connects to the rest of the Zoho suite, so a won deal flows through to the invoice, the stock and the support ticket.',
    logos: [
      { src: `${S}/logos/zoho-crm.png`, alt: 'Zoho CRM' }, { src: `${S}/logos/zoho-books.png`, alt: 'Zoho Books' },
      { src: `${S}/logos/zoho-desk.png`, alt: 'Zoho Desk' }, { src: `${S}/logos/zoho-analytics.png`, alt: 'Zoho Analytics' },
      { src: `${S}/logos/zoho-creator.png`, alt: 'Zoho Creator' }, { src: `${S}/logos/zoho-inventory.png`, alt: 'Zoho Inventory' },
      { src: `${S}/logos/zoho-fsm.png`, alt: 'Zoho FSM' },
    ],
  },
  trust: { title: 'Trusted by organisations across Australia.', testimonialIds: ['rios-legacy-ryan-fowler'] },
  problem: {
    title: 'The CRM isn’t the challenge.',
    accent: 'Getting it used is.',
    lead: 'Most businesses already own a list of customers somewhere. The trouble starts when that list lives in five inboxes and three spreadsheets, and nobody can say what happens next on a deal.',
    cards: [
      { icon: 'Layers', title: 'Customer data lives everywhere', body: 'Contacts sit in inboxes, spreadsheets and phones. Nobody has the full picture before a call.' },
      { icon: 'Clock', title: 'Follow-ups depend on memory', body: 'A quote goes out and the next step lives in someone’s head. Deals go quiet without anyone noticing.' },
      { icon: 'Handshake', title: 'Quotes live outside the CRM', body: 'Pricing is built in another tool, so sales, finance and delivery work from different numbers.' },
      { icon: 'BarChart3', title: 'Forecasts are guesswork', body: 'Without a consistent pipeline, leadership can’t tell which deals are real or where the next quarter comes from.' },
    ],
  },
  journey: {
    title: 'Your Zoho CRM',
    accent: 'Implementation Journey',
    lead: 'Every team sells a little differently. Our framework maps your real sales process first, then configures Zoho CRM to match it and brings your people along.',
    steps: [
      { icon: 'Compass', title: 'Discover', line: 'Map how you sell today.' },
      { icon: 'Settings', title: 'Configure', line: 'Build your pipeline and fields.' },
      { icon: 'Link2', title: 'Connect', line: 'Link email, finance and support.' },
      { icon: 'GraduationCap', title: 'Train', line: 'Teach each role its own workflow.' },
      { icon: 'TrendingUp', title: 'Optimise', line: 'Review reports and refine.' },
    ],
    ctaLabel: 'Get Started',
  },
  program: {
    title: 'Your complete Zoho CRM',
    accent: 'Implementation Program',
    lead: 'Everything your team needs to sell from one system, from the first process workshop to training, reporting and ongoing support.',
    cards: [
      { title: 'Sales Process Workshop', image: `${S}/site-assessment-walkthrough.jpg`, description: 'We sit with your team and map how a lead becomes a paying customer today.', bullets: ['Documented sales process', 'Pipeline stage design', 'Fixed-price quote'] },
      { title: 'Data Migration & Cleanup', image: `${S}/control-cabinet-wiring.jpg`, description: 'Move contacts and deals out of spreadsheets or your old CRM without carrying the mess along.', bullets: ['Duplicate removal', 'Field mapping', 'Test import first'] },
      { title: 'Pipeline & Automation', image: `${S}/robotic-line.jpg`, description: 'Stages, tasks and reminders that keep every deal moving without chasing.', bullets: ['Stage-based tasks', 'Follow-up reminders', 'Lead assignment rules'] },
      { title: 'Quoting & Invoicing Links', image: `${S}/food-production-line.jpg`, description: 'A won deal flows to Zoho Books so sales and finance share the same numbers.', bullets: ['Quotes from the CRM', 'Zoho Books sync', 'Product price lists'] },
      { title: 'Email & Calendar Setup', image: `${S}/assembly-team.jpg`, description: 'Conversations and meetings recorded against the right contact automatically.', bullets: ['Email in the timeline', 'Calendar sync', 'Shared inbox rules'] },
      { title: 'Dashboards & Forecasting', image: `${S}/machine-touch-panel.jpg`, description: 'The views your leadership team checks every week, built on your own pipeline.', bullets: ['Pipeline by stage', 'Rep activity views', 'Forecast reports'] },
      { title: 'Team Training & Adoption', image: `${S}/solar-roof-aerial.jpg`, description: 'Role-based training so each person learns only what they use day to day.', bullets: ['Role-based sessions', 'Quick reference guides', 'Post-launch check-in'] },
      { title: 'Ready to get started?', image: `${S}/bright-factory-floor.jpg`, description: 'Book a live demo and see Zoho CRM set up for a business like yours.', bullets: ['Live demo with a specialist', 'No obligation', 'Response in one business day'] },
    ],
  },
  faq: {
    image: { src: `${S}/process-pipework-square.jpg`, alt: 'Industrial plant with process pipework and machinery' },
    items: [
      { q: 'We use spreadsheets today. Can you move us over?', a: 'Yes. We clean and map your existing contacts, accounts and deals, run a test import for you to check, then load everything into Zoho CRM before your team goes live.' },
      { q: 'Can you migrate us from another CRM?', a: 'Yes. We map your current fields and history to Zoho CRM, so the notes and deal records your team relies on come with you. We confirm what moves across during the demo.' },
      { q: 'Does Zoho CRM connect to our accounting software?', a: 'It connects natively to Zoho Books, and we can integrate other finance tools. We confirm the right approach for your setup once we see how you quote and invoice today.' },
      { q: 'How long does implementation take?', a: 'It depends on how many users, pipelines and integrations are involved. We confirm a timeline in writing after the demo and the sales process workshop.' },
      { q: 'Is our customer data secure?', a: 'Your data sits in your own Zoho account, which you own and control. You choose which Zoho data centre region your account is hosted in when it is created, and we help you check what suits your business.' },
    ],
  },
  closing: {
    title: 'Ready to see Zoho CRM',
    accent: 'built around you?',
    body: 'Whether you’re replacing spreadsheets or switching from another CRM, we’ll show you how your sales process would run in Zoho. No pressure. Just expert advice from a Zoho CRM specialist.',
  },
};

export default campaign;
