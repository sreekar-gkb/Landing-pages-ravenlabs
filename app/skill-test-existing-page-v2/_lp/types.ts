// Typed content contract for one landing page. Every campaign file in /campaigns
// must satisfy this type; the components render nothing that isn't here.
import type { IconName } from './icons';
export type { IconName };

export interface Campaign {
  slug: string;                       // kebab-case, contains the primary keyword
  status: 'draft' | 'live' | 'paused';
  meta: {
    title: string;                    // "Raven Labs — Zoho IoT Monitoring Partner (Australia)"
    description: string;              // ≤155 chars: keyword + offer + audience
    ogImage?: string;                 // /<slug>/og.jpg (1200×630)
  };
  partner: { name: string; logo: string; logoWidth: number; logoHeight: number };
  hero: {
    line1: string;                    // "Turn your Zoho IoT data"
    prefix: string;                   // "into real"
    rotatingWords: [string, string, string, string];
    lead: string;
    microcopy: string;                // only true statements about the offer
  };
  form: {
    heroTitle: string;
    heroSubtitle: string;
    segmentLabel: string;             // "Site type" | "Company size"
    segmentOptions: string[];
    goalLabel: string;                // "Primary goal"
    goalOptions: string[];            // last option: "Not sure / need expert guidance"
    reassurance: string;              // closing form line, e.g. "Free 30-minute session • No obligation • Response within one business day."
    recaptcha: boolean;               // show the reCAPTCHA note only if it's wired up
  };
  showcase: { title: string; video?: { src: string; poster: string } };
  tools?: { title: string; subtitle: string; logos: { src: string; alt: string }[] };
  trust: { title: string; testimonialIds: string[] };   // ids from lib/proof-library.json
  problem: {
    title: string; accent: string; lead: string;
    cards: [ProblemCard, ProblemCard, ProblemCard, ProblemCard];
  };
  journey: {
    title: string; accent: string; lead: string;
    steps: [Step, Step, Step, Step, Step];
    ctaLabel: string;
  };
  program: {
    title: string; accent: string; lead: string;
    cards: ProgramCard[];             // exactly 8; the 8th is "Ready to get started?"
  };
  faq: { image: { src: string; alt: string }; items: { q: string; a: string }[] };
  closing: { title: string; accent: string; body: string };
}

export interface ProblemCard { icon: IconName; title: string; body: string }
export interface Step { icon: IconName; title: string; line: string }
export interface ProgramCard { title: string; image: string; description: string; bullets: [string, string, string] }
