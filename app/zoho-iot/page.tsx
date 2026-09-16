import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  partnerName: 'Zoho',
  partnerLogoSrc: '/partners/zoho.webp',

  nav: {
    phoneHref: 'tel:1300000000',
    phoneLabel: 'Give us a call',
  },

  hero: {
    headlineTemplate: 'Turn facility sensors into {Real-time decisions}',
    subhead: 'Monitor equipment, predict failures, and optimise costs in real time — without replacing your existing systems.',
    bullets: [
      'Real-time monitoring dashboard',
      'Pre-built industry templates',
      'No system rip-and-replace',
    ],
    formHeading: 'See Zoho IoT in action',
    formSubhead: 'One of the Raven Labs team will walk you through a live demo tailored to your facility.',
    ctaLabel: 'Book a demo',
  },

  trustBar: {
    label: 'Trusted by Australian operations teams',
  },

  problem: {
    heading: 'Your sensors are collecting data. Your team is flying blind.',
    body: 'Without integrated monitoring, you\'re managing facilities on intuition instead of insight. Slow response to failures. Missed cost optimisation opportunities. Compliance risk. Most IoT vendors sell complexity—long implementation cycles, vendor lock-in, and engineering overhead. You need answers fast.',
  },

  answer: {
    heading: 'Real-time facility intelligence built on Zoho',
    subhead: 'Zoho IoT connects sensor data directly to your CRM and business workflows. No separate platform. No data silos.',
    benefits: [
      {
        title: 'Live equipment monitoring',
        body: 'Stream sensor data into a single dashboard. Temperature, pressure, utilisation, anomalies—all in real time.',
        icon: 'gauge',
      },
      {
        title: 'Predict before failure',
        body: 'Catch equipment degradation before it stops production. Automated alerts trigger maintenance workflows instantly.',
        icon: 'alert',
      },
      {
        title: 'Integrate with your Zoho stack',
        body: 'If you use Zoho CRM or ERP, IoT data flows straight in. No API wrestling. No duplicate entry.',
        icon: 'zap',
      },
      {
        title: 'Industry templates, ready to go',
        body: 'Manufacturing, smart buildings, warehouses—pre-built sensor configurations and rules. Hours to deploy, not months.',
        icon: 'layers',
      },
      {
        title: 'Cost visibility on demand',
        body: 'Track energy consumption, utilisation, maintenance spend by equipment or facility. Real numbers, not estimates.',
        icon: 'dollar-sign',
      },
    ],
  },

  proof: {
    testimonials: [
      {
        quote: 'We cut unplanned downtime by 35% in the first six months. Zoho IoT gave us the visibility to predict problems instead of react to them.',
        name: 'Sarah Mitchell',
        title: 'Operations Manager, manufacturing facility, Victoria',
        sample: true,
      },
    ],
  },

  process: {
    heading: 'Your path to real-time facility intelligence',
    subhead: 'From kickoff to live monitoring in weeks, not quarters.',
    steps: [
      {
        title: 'Assess your facility',
        body: 'We map your equipment, identify critical monitoring points, and recommend sensor placement based on your specific operation.',
      },
      {
        title: 'Connect sensors & data sources',
        body: 'Deploy Zoho-native connectors or integrate existing IoT hardware. Stream data into your Zoho workspace in real time.',
      },
      {
        title: 'Build your monitoring rules',
        body: 'Set thresholds, alerts, and automated workflows. When equipment hits a limit, your team is notified—and actions trigger automatically.',
      },
      {
        title: 'Optimise and scale',
        body: 'Review insights, refine rules, add sensors as ROI compounds. Maintenance becomes predictive. Costs drop. Uptime climbs.',
      },
    ],
  },

  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        q: 'Does Zoho IoT work with our existing sensors and hardware?',
        a: 'Yes. Zoho IoT integrates with most major sensor brands and industrial protocols (Modbus, MQTT, OPC-UA). If you have existing hardware, we connect it. If you need new sensors, we recommend industry-standard options.',
      },
      {
        q: 'How long does implementation take?',
        a: 'Simple deployments (single facility, 5–10 monitoring points) are often live in 2–4 weeks. Complex operations may take 8–12 weeks. Most of the time is assessment and configuration, not software setup.',
      },
      {
        q: 'Is our data secure?',
        a: 'Zoho operates Australian data centres with ISO 27001 certification. All data in transit is encrypted. Access controls are role-based and audit-logged.',
      },
      {
        q: 'What if we don\'t use other Zoho products yet?',
        a: 'Zoho IoT works standalone. But if you use Zoho CRM for customer service or Zoho ERP for operations, IoT data plugs directly in—no extra integrations needed.',
      },
      {
        q: 'How much does it cost?',
        a: 'Pricing is based on sensors monitored and data volume. Most mid-market facilities see ROI within 6–9 months through reduced downtime and energy optimisation. We provide a transparent quote after the assessment.',
      },
    ],
  },

  finalCta: {
    heading: 'Stop managing by guesswork. Start making data-driven decisions.',
    body: 'Book a 30-minute demo with the Raven Labs team. We\'ll show you exactly how Zoho IoT fits your facility and what your first wins could look like.',
    ctaLabel: 'Book a demo',
    reassurance: 'No sales pitch. No lengthy presentations. Just real answers.',
  },

  footer: {
    aboutLine: 'Raven Labs is an authorised Zoho Partner based in Melbourne, delivering CRM, ERP, and automation solutions to Australian industry.',
    abn: 'ABN 61 633 267 080',
    partnerAttribution: 'Zoho, Zoho IoT, and related marks are trademarks of Zoho Corporation. Raven Labs is an independent, authorised Zoho partner; this page is not published or endorsed by Zoho Corporation.',
  },
}

export default function Page() {
  return <CampaignTemplate campaign="zoho-iot" content={content} />
}