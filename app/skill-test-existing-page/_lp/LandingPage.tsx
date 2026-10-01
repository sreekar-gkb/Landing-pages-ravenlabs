import './lp.css';
import type { ReactNode } from 'react';
import type { Campaign } from './types';
import { getTestimonials } from './proof';
import { interTight, poppins } from './fonts';
import { Header } from './Header';
import { Hero } from './Hero';
import { ToolsMarquee } from './ToolsMarquee';
import { TrustCarousel } from './TrustCarousel';
import { ProblemGrid } from './ProblemGrid';
import { JourneyStepper } from './JourneyStepper';
import { ProgramCards } from './ProgramCards';
import { FaqSection } from './FaqSection';
import { ClosingCta } from './ClosingCta';
import { Footer } from './Footer';

// The whole page. Campaigns change content + the showcase visual, never this order.
export function LandingPage({ campaign, showcase }: { campaign: Campaign; showcase: ReactNode }) {
  if (campaign.program.cards.length !== 8) throw new Error('program.cards must contain exactly 8 cards');
  return (
    <div className={`lp-root ${interTight.variable} ${poppins.variable} bg-white font-[family-name:var(--font-inter-tight)] text-[#000000] antialiased`}>
      <Header partner={campaign.partner} />
      <main>
        <Hero campaign={campaign} showcase={showcase} />
        {campaign.tools && <ToolsMarquee tools={campaign.tools} />}
        <TrustCarousel title={campaign.trust.title} testimonials={getTestimonials(campaign.trust.testimonialIds)} />
        <ProblemGrid problem={campaign.problem} />
        <JourneyStepper journey={campaign.journey} />
        <ProgramCards program={campaign.program} />
        <FaqSection faq={campaign.faq} />
        <ClosingCta campaign={campaign} />
      </main>
      <Footer />
    </div>
  );
}
