/** The full content shape every campaign supplies to CampaignTemplate. */

export type Partner = {
  name: string
  /** Path under /public, e.g. '/partners/zoho.webp'. Omit for text-only co-brand. */
  logoSrc?: string
}

export type Testimonial = {
  quote: string
  name: string
  title: string
  /** Set true when this is realistic placeholder content, not an approved real quote.
   *  The template renders an honest "sample content" caption whenever any testimonial has this set. */
  sample?: boolean
}

export type ProcessStep = {
  title: string
  body: string
}

export type FaqItem = {
  q: string
  a: string
}

export type CampaignContent = {
  nav?: {
    phoneHref?: string
    phoneLabel?: string
  }
  hero: {
    /** Use {curly braces} around the one phrase that renders in the brand accent colour,
     *  e.g. "Turn Copilot into real {Results}" */
    headlineTemplate: string
    subhead: string
    bullets?: string[]
    formHeading: string
    formSubhead: string
    ctaLabel: string
  }
  trustBar?: {
    label: string
  }
  problem: {
    heading: string
    body: string
  }
  answer: {
    heading: string
    subhead?: string
    benefits: { title: string; body: string }[]
  }
  proof?: {
    testimonials: Testimonial[]
  }
  process?: {
    heading: string
    subhead?: string
    steps: ProcessStep[]
  }
  faq?: {
    heading: string
    items: FaqItem[]
  }
  finalCta: {
    heading: string
    body: string
    ctaLabel: string
  }
  footer: {
    /** Required whenever partnerName is set or a third-party brand is named in the copy. */
    partnerAttribution?: string
  }
}
