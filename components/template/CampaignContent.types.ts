// The single source of truth for what a campaign page can customise.
// If a field isn't here, it isn't customisable — that's the point of a fixed template.
// Add a field here (deliberately, for every campaign) rather than letting one campaign's
// page.tsx build its own bespoke section.

export type CampaignContent = {
  /** Cobrand text shown next to the Raven Labs logo in the nav, e.g. "Zoho", "Shopify".
   *  Omit for campaigns with no third-party partner reference (e.g. Fulqrom).
   *  See SKILL.md Section 8 before using a partner name — text only, never a logo graphic,
   *  unless authorisation has been explicitly confirmed. */
  partnerName?: string;

  nav: {
    phoneHref: string; // e.g. "tel:1300000000"
    phoneLabel: string; // e.g. "1300 000 000" or "Give us a call"
  };

  hero: {
    /** The headline, with {accent} marking the single phrase to render in the brand accent
     *  colour. Example: "Turn Microsoft 365 Copilot into real {Results}" */
    headlineTemplate: string;
    subhead: string;
    /** Short trust bullets under the CTA, e.g. ["Free 30-minute session", "No obligation"] */
    bullets: string[];
    formHeading: string;
    formSubhead: string;
    ctaLabel: string;
  };

  /** Optional — omit the whole section if there's nothing genuine to show yet. */
  trustBar?: {
    label: string;
    /** Number of skeleton placeholder marks to render if real logos aren't supplied. */
    placeholderCount?: number;
  };

  problem: {
    heading: string;
    body: string;
  };

  answer: {
    heading: string;
    subhead: string;
    benefits: { title: string; body: string }[]; // 3–5 items
  };

  proof: {
    /** One rotating quote at a time, matching the reference site's carousel pattern —
     *  never a static 3-up grid, see SKILL.md anti-slop notes. */
    testimonials: { quote: string; name: string; title: string; sample?: boolean }[];
  };

  process: {
    heading: string;
    subhead: string;
    /** Exactly 4 or 5 steps — matches the reference site's step count. */
    steps: { title: string; body: string }[];
  };

  faq: {
    heading: string;
    items: { q: string; a: string }[]; // 4–6 items, rendered via the shared Accordion
  };

  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
    reassurance: string; // e.g. "No sales pressure. No slide deck."
  };

  footer: {
    aboutLine: string; // one sentence, e.g. "Raven Labs builds SaaS for the physical world."
    abn: string; // "[ABN pending]" is an acceptable literal value, not a content violation
    /** Required whenever a third-party trademark (partnerName above, or named anywhere in
     *  the copy) appears on the page. See SKILL.md Section 8. */
    partnerAttribution?: string;
  };
};
