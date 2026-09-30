import type { ReactNode } from 'react';
import type { Campaign } from './types';
import { RotatingWord } from './RotatingWord';
import { LeadForm } from './LeadForm';
import { Reveal } from './Reveal';

export function Hero({ campaign, showcase }: { campaign: Campaign; showcase: ReactNode }) {
  const { hero, form } = campaign;
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-[104px] md:pb-28 md:pt-[180px]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <h1 className="mb-6 text-[1.6rem] font-semibold leading-[1.25] text-[#000000] min-[420px]:text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.85rem] xl:text-[3rem]">
                <span className="block">{hero.line1}</span>
                <span>{hero.prefix} <RotatingWord words={hero.rotatingWords} /></span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}><p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-[#52525B] md:text-lg md:leading-[28.8px] lg:mx-0">{hero.lead}</p></Reveal>
            <Reveal delay={0.2}><p className="text-sm text-[#52525B]">{hero.microcopy}</p></Reveal>
          </div>
          <Reveal delay={0.3} className="flex w-full justify-center lg:justify-end">
            <div id="hero-form" className="w-full max-w-[380px] rounded-3xl border border-[#E5E5EA] bg-white p-5 text-left shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] sm:p-6 md:p-8">
              <h2 className="text-xl font-semibold tracking-[-0.4px]">{form.heroTitle}</h2>
              <p className="mb-5 mt-1 text-sm text-[#52525B]">{form.heroSubtitle}</p>
              <LeadForm campaign={campaign} variant="hero" />
            </div>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-16 max-w-[960px] md:mt-20">
          <h2 className="mb-6 text-center text-[22px] font-semibold leading-7 tracking-[-0.75px] md:mb-10 md:text-3xl md:leading-9">{campaign.showcase.title}</h2>
          <div className="overflow-hidden rounded-2xl border border-[#E5E5EA] bg-white shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] md:rounded-3xl">
            {campaign.showcase.video
              ? <video className="h-auto w-full object-cover" src={campaign.showcase.video.src} poster={campaign.showcase.video.poster} autoPlay muted loop playsInline />
              : showcase}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
