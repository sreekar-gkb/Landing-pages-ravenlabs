import CampaignTemplate from '@/components/template/CampaignTemplate'
import type { CampaignContent } from '@/components/template/CampaignContent.types'

const content: CampaignContent = {
  nav: { phoneHref: 'tel:1300000000', phoneLabel: 'Call us' },
  hero: {
    headlineTemplate: 'Pre-flight check {Works}',
    subhead: 'This campaign uses the correct field names and should deploy successfully.',
    bullets: ['Correct schema', 'Passes build check'],
    formHeading: 'Test form',
    formSubhead: 'Testing the valid path.',
    ctaLabel: 'Submit',
  },
  problem: { heading: 'Test problem', body: 'Test body' },
  answer: { heading: 'Test answer', subhead: 'Test subhead', benefits: [{ title: 'Benefit', body: 'Body' }] },
  proof: { testimonials: [] },
  process: { heading: 'Test process', subhead: 'Test', steps: [{ title: 'Step', body: 'Body' }] },
  faq: { heading: 'Test FAQ', items: [{ q: 'Question?', a: 'Answer.' }] },
  finalCta: { heading: 'Test CTA', body: 'Test body', ctaLabel: 'Go', reassurance: 'No pressure' },
  footer: { aboutLine: 'Test', abn: '[ABN pending]' },
}

export default function Page() {
  return <CampaignTemplate campaign="preflight-test-valid" content={content} />
}
