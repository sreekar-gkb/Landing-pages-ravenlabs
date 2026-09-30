// GitHub Advanced Security campaign (Sept 2026).
// Offer: book a demo. Audience: Australian engineering teams, roughly 20–500 developers.
// Proof: only the general Rio's Legacy testimonial is approved; no GitHub-specific proof exists yet.
// Tools marquee intentionally omitted: only GitHub's own logos are available from an official media kit,
// and padding the row with other vendors' logos would break the partner-branding rule.
import type { Campaign } from './_lp/types';

const campaign: Campaign = {
  slug: 'github-advanced-security',
  status: 'live',
  meta: {
    title: 'Raven Labs — GitHub Advanced Security Rollout (Australia)',
    description: 'Book a demo of GitHub Advanced Security with Raven Labs: code scanning, secret scanning and Dependabot set up for Australian engineering teams.',
  },
  partner: { name: 'GitHub', logo: '/github-advanced-security/img/logos-github.png', logoWidth: 350, logoHeight: 80 },
  hero: {
    line1: 'GitHub Advanced Security',
    prefix: 'that turns alerts into',
    rotatingWords: ['Fixes', 'Patches', 'Progress', 'Evidence'],
    lead: 'Raven Labs sets up GitHub code scanning, secret scanning and Dependabot across your organisation, tuned so developers see real issues in their pull requests, not a backlog nobody owns.',
    microcopy: 'Live demo • No obligation • GitHub security specialists',
  },
  form: {
    heroTitle: 'Want to see it on repos like yours?',
    heroSubtitle: 'Tell us about your team. We’ll be in touch within one business day to book a time.',
    segmentLabel: 'Engineering team size',
    segmentOptions: ['Under 20 developers', '20–50 developers', '51–200 developers', '201–500 developers', 'More than 500 developers'],
    goalLabel: 'Primary goal',
    goalOptions: ['Stop secrets reaching our repos', 'Find vulnerabilities in our code', 'Manage open-source dependency risk', 'Meet audit or compliance requirements', 'Not sure / need expert guidance'],
    reassurance: 'Live demo • No obligation • Response within one business day.',
    recaptcha: false,
  },
  showcase: { title: 'See how Raven Labs secures your pull requests' },
  trust: { title: 'Trusted by organisations across Australia.', testimonialIds: ['rios-legacy-ryan-fowler'] },
  problem: {
    title: 'Scanners aren’t the challenge.',
    accent: 'Getting alerts fixed is.',
    lead: 'Switching on GitHub’s security features takes minutes. The hard part is what follows: years of findings at once, credentials already sitting in history, and developers who learn to click past warnings.',
    cards: [
      { icon: 'TriangleAlert', title: 'Alert backlogs nobody owns', body: 'Turning scanning on across every repo surfaces old findings all at once. Without triage and owners, the list only grows.' },
      { icon: 'Lock', title: 'Secrets already in history', body: 'API keys and tokens committed years ago can still work today. Finding them is step one; someone still has to rotate each one.' },
      { icon: 'Boxes', title: 'Open-source risk is hard to trace', body: 'When a new vulnerability is announced, working out which services pull in that package shouldn’t mean a week of searching.' },
      { icon: 'Users', title: 'Developers tune out the noise', body: 'False positives and alerts that live outside the pull request teach engineers to ignore warnings, including the real ones.' },
    ],
  },
  journey: {
    title: 'Your GitHub Advanced Security',
    accent: 'Rollout Journey',
    lead: 'We roll security out in waves, starting with the repos that matter most, so developers get useful findings from the first week instead of a wall of red.',
    steps: [
      { icon: 'ClipboardCheck', title: 'Assess', line: 'Map repos, risks and owners.' },
      { icon: 'ShieldCheck', title: 'Enable', line: 'Switch on scanning in waves.' },
      { icon: 'SlidersHorizontal', title: 'Tune', line: 'Cut noise, set merge rules.' },
      { icon: 'Wrench', title: 'Remediate', line: 'Clear the backlog by risk.' },
      { icon: 'BarChart3', title: 'Govern', line: 'Report, audit and improve.' },
    ],
    ctaLabel: 'Book a demo',
  },
  program: {
    title: 'Your complete GitHub',
    accent: 'Security Program',
    lead: 'What we deliver, from the first repository review to the reports your leadership and auditors will ask for.',
    cards: [
      { title: 'Repository Risk Assessment', image: '/github-advanced-security/img/repo-risk-workshop.jpg', description: 'We review your repos, languages and workflows to decide where scanning should start.', bullets: ['Repo risk ranking', 'Language coverage check', 'Written rollout plan'] },
      { title: 'CodeQL Code Scanning', image: '/github-advanced-security/img/code-scanning-screen.jpg', description: 'Code scanning configured in GitHub Actions, with queries matched to each language you use.', bullets: ['Default or advanced setup', 'Custom query suites', 'Results in pull requests'] },
      { title: 'Secret Scanning & Push Protection', image: '/github-advanced-security/img/secret-scanning-laptop.jpg', description: 'New credentials stopped before they reach GitHub, and old ones tracked down.', bullets: ['Push protection on', 'Custom secret patterns', 'Rotation runbook'] },
      { title: 'Dependabot & Dependency Review', image: '/github-advanced-security/img/dependency-patch-panel.jpg', description: 'Vulnerable packages flagged and patched through pull requests your team can merge.', bullets: ['Dependabot alerts', 'Grouped security updates', 'Dependency review checks'] },
      { title: 'Copilot Autofix Enablement', image: '/github-advanced-security/img/developer-autofix.jpg', description: 'Suggested fixes for code scanning alerts, reviewed by your developers before anything merges.', bullets: ['Autofix switched on', 'Review guidelines', 'Developer walkthrough'] },
      { title: 'Security Overview Reporting', image: '/github-advanced-security/img/security-overview-servers.jpg', description: 'Views that show risk by team and repo, and whether it is trending down.', bullets: ['Org-wide risk view', 'Team ownership', 'Monthly trend report'] },
      { title: 'Rulesets & Developer Training', image: '/github-advanced-security/img/developer-training-room.jpg', description: 'Merge rules, bypass approvals and short sessions so developers know what to do when a check fails.', bullets: ['Branch rulesets', 'Delegated bypass', 'Team training'] },
      { title: 'Ready to get started?', image: '/github-advanced-security/img/pairing-review.jpg', description: 'Book a demo and see how GitHub Advanced Security would run across your repos.', bullets: ['Live walkthrough', 'No obligation', 'Response in one business day'] },
    ],
  },
  faq: {
    image: { src: '/github-advanced-security/img/faq-engineering-office.jpg', alt: 'Software engineers working together at desks in an open office' },
    items: [
      { q: 'Do we need GitHub Enterprise to use Advanced Security?', a: 'Not any more. GitHub now sells it as two products, Secret Protection and Code Security, and organisations on GitHub Team can buy them too. We’ll help you work out which one fits your plan and risks.' },
      { q: 'We use Azure DevOps. Can you still help?', a: 'Yes. GitHub Advanced Security is also available for Azure DevOps. In the demo we can talk through running it there or moving your repos to GitHub.' },
      { q: 'Will scanning slow down our developers?', a: 'Code scanning runs in GitHub Actions alongside your existing checks. We tune when it runs and which findings block a merge, so low-risk alerts don’t hold up releases.' },
      { q: 'Where do our code and alert data go?', a: 'Your code stays in your GitHub organisation. Scans run on GitHub-hosted or your own self-hosted runners, and only people you grant access can see alerts.' },
      { q: 'How long does a rollout take?', a: 'It depends on how many repos and languages you have. We confirm a timeline after the risk assessment, and we usually start with a pilot group of repos.' },
    ],
  },
  closing: {
    title: 'Ready to turn alerts',
    accent: 'into fixes?',
    body: 'Whether you run twenty repos or two thousand, we’ll show you how GitHub Advanced Security would work for your team and where to start. No pressure. Just expert advice from a GitHub security specialist.',
  },
};

export default campaign;
