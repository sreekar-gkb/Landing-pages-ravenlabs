// APPROVED REFERENCE CAMPAIGN (design canvas, Sept 2026).
// Use it as the quality bar for tone, specificity and length. Don't copy its sentences
// into other campaigns.
// Bracketed text = placeholders a human must supply before launch (lint_page.py reports them).
import type { Campaign } from './_lp/types';

const campaign: Campaign = {
  slug: 'skill-test-existing-page',
  status: 'paused',
  meta: {
    title: 'Raven Labs — Zoho IoT Monitoring Partner (Australia)',
    description: 'Connect your existing sensors to Zoho IoT with Raven Labs. Book a free 30-minute site assessment for Australian manufacturing and cold storage sites.',
    ogImage: '/skill-test-existing-page/img/og.jpg',
  },
  partner: { name: 'Zoho IoT', logo: '/skill-test-existing-page/img/logos-zoho-iot.png', logoWidth: 262, logoHeight: 128 },
  hero: {
    line1: 'Skill test: version TWO',
    prefix: 'into real',
    rotatingWords: ['Uptime', 'Savings', 'Safety', 'Visibility'],
    lead: 'Raven Labs connects the sensors and PLCs already on your floor to Zoho IoT, then turns every abnormal reading into a maintenance job your team sees straight away.',
    microcopy: 'Free 30-minute session • No obligation • Zoho IoT specialists',
  },
  form: {
    heroTitle: 'Ready to see your plant in real time?',
    heroSubtitle: 'Tell us a bit about your site. We’ll be in touch within one business day.',
    segmentLabel: 'Site type',
    segmentOptions: ['Manufacturing', 'Food & cold storage', 'Warehousing & logistics', 'Commercial buildings', 'Other'],
    goalLabel: 'Primary goal',
    goalOptions: ['Reduce unplanned downtime', 'Monitor energy use', 'Automate compliance records', 'Connect existing sensors to Zoho', 'Not sure / need expert guidance'],
    reassurance: 'Free 30-minute session • No obligation • Response within one business day.',
    recaptcha: false,
  },
  showcase: { title: 'See how Raven Labs monitors your plant' },
  tools: {
    title: 'Built around the Zoho apps your team already uses.',
    subtitle: 'Zoho IoT readings flow straight into the Zoho tools you already run, so every alert has somewhere useful to go.',
    logos: [
      { src: '/skill-test-existing-page/img/logos-zoho-iot.png', alt: 'Zoho IoT' }, { src: '/skill-test-existing-page/img/logos-zoho-crm.png', alt: 'Zoho CRM' },
      { src: '/skill-test-existing-page/img/logos-zoho-desk.png', alt: 'Zoho Desk' }, { src: '/skill-test-existing-page/img/logos-zoho-analytics.png', alt: 'Zoho Analytics' },
      { src: '/skill-test-existing-page/img/logos-zoho-creator.png', alt: 'Zoho Creator' }, { src: '/skill-test-existing-page/img/logos-zoho-books.png', alt: 'Zoho Books' },
      { src: '/skill-test-existing-page/img/logos-zoho-inventory.png', alt: 'Zoho Inventory' }, { src: '/skill-test-existing-page/img/logos-zoho-fsm.png', alt: 'Zoho FSM' },
    ],
  },
  trust: { title: 'Trusted by organisations across Australia.', testimonialIds: ['rios-legacy-ryan-fowler', 'placeholder-1', 'placeholder-2'] },
  problem: {
    title: 'Sensors aren’t the challenge.',
    accent: 'Acting on the data is.',
    lead: 'Most plants already collect the readings they need. What’s missing is a way to spot problems early, tell the right person and keep a record, without adding another system to check.',
    cards: [
      { icon: 'TriangleAlert', title: 'Failures show up as downtime', body: 'Most faults give warning signs for hours or days. Without monitoring, the first sign is a stopped line.' },
      { icon: 'Database', title: 'Data sits inside the machines', body: 'Sensors and PLCs already collect readings, but nobody sees them until someone walks past a panel.' },
      { icon: 'Factory', title: 'Every site works differently', body: 'Packaging, cold storage and plant rooms each need their own ranges, alerts and people to notify.' },
      { icon: 'TrendingUp', title: 'Leaders can’t see the cost', body: 'Without per-asset data, it’s hard to prove where energy and maintenance money is actually going.' },
    ],
  },
  journey: {
    title: 'Your Zoho IoT',
    accent: 'Rollout Journey',
    lead: 'Every site starts in a different place. Our rollout framework connects your equipment, sets sensible alerts and turns live data into part of everyday work.',
    steps: [
      { icon: 'ClipboardCheck', title: 'Assess', line: 'Walk the floor and map assets.' },
      { icon: 'Plug', title: 'Connect', line: 'Wire up your sensors.' },
      { icon: 'SlidersHorizontal', title: 'Configure', line: 'Set ranges, rules and alerts.' },
      { icon: 'Rocket', title: 'Launch', line: 'Go live, shift by shift.' },
      { icon: 'TrendingUp', title: 'Optimise', line: 'Tune, measure and grow.' },
    ],
    ctaLabel: 'Get Started',
  },
  program: {
    title: 'Your complete Zoho IoT',
    accent: 'Monitoring Program',
    lead: 'Everything your site needs to run on live data, from the first assessment to alerts, dashboards and long-term support.',
    cards: [
      { title: 'Site & Asset Assessment', image: '/skill-test-existing-page/img/site-assessment-walkthrough.jpg', description: 'A walk-through of your floor to find the assets that cost most when they fail.', bullets: ['Critical asset register', 'Connectivity check per asset', 'Fixed-price quote'] },
      { title: 'Sensor & Gateway Integration', image: '/skill-test-existing-page/img/control-cabinet-wiring.jpg', description: 'Connect the sensors and PLCs you already have, and fill only the gaps.', bullets: ['Modbus, MQTT & OPC-UA', 'Secure edge gateways', 'Gap sensors where needed'] },
      { title: 'Predictive Maintenance Alerts', image: '/skill-test-existing-page/img/robotic-line.jpg', description: 'Catch drifting readings long before they stop the line.', bullets: ['Normal ranges per asset', 'Trend-based alerts', 'Escalation rules'] },
      { title: 'Energy Monitoring', image: '/skill-test-existing-page/img/solar-roof-aerial.jpg', description: 'See energy use per machine and per shift, not one monthly bill.', bullets: ['Per-asset consumption', 'Peak-load visibility', 'Shift comparisons'] },
      { title: 'Compliance Logging', image: '/skill-test-existing-page/img/food-production-line.jpg', description: 'Temperatures and conditions recorded automatically for audits.', bullets: ['Cold chain records', 'Audit-ready exports', 'Breach notifications'] },
      { title: 'Live Shift Dashboards', image: '/skill-test-existing-page/img/machine-touch-panel.jpg', description: 'The views supervisors check at the start of every shift.', bullets: ['Site and line views', 'Asset health at a glance', 'Mobile access'] },
      { title: 'Zoho Desk & CRM Workflows', image: '/skill-test-existing-page/img/assembly-team.jpg', description: 'Every alert becomes a job with the reading attached.', bullets: ['Auto-created work orders', 'Technician assignment', 'Asset history in CRM'] },
      { title: 'Ready to get started?', image: '/skill-test-existing-page/img/bright-factory-floor.jpg', description: 'Book a site assessment and find out what your equipment can already tell you.', bullets: ['Free 30-minute session', 'No obligation', 'Response in one business day'] },
    ],
  },
  faq: {
    image: { src: '/skill-test-existing-page/img/process-pipework-square.jpg', alt: 'Industrial plant with process pipework and machinery' },
    items: [
      { q: 'Do we need to replace our existing sensors?', a: 'No. Most industrial sensors and PLCs can be read over Modbus, MQTT or OPC-UA. We connect what you have and only recommend new sensors where a critical asset has no data today.' },
      { q: 'We don’t use Zoho yet. Does that matter?', a: 'No. Zoho IoT can run on its own with email alerts. If you add Zoho Desk or CRM later, your asset history is already there.' },
      { q: 'How long until we see live readings?', a: '[X weeks] from the site assessment for most sites, depending on how many assets and gateways are involved.' },
      { q: 'Is our operational data secure?', a: 'Your data sits in your own Zoho account, which you own and control. [Confirm hosting region with Zoho before launch.]' },
    ],
  },
  closing: {
    title: 'Ready to see your plant',
    accent: 'in real time?',
    body: 'Whether you’re monitoring one line or a whole portfolio of sites, we’ll help you build a practical roadmap. No pressure. Just expert advice from a Zoho IoT specialist.',
  },
};

export default campaign;
