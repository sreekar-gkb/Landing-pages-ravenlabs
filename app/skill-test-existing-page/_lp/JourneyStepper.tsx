'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from './motion';
import type { Campaign } from './types';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function JourneyStepper({ journey }: { journey: Campaign['journey'] }) {
  const [s, setS] = useState(0);
  const [tick, setTick] = useState(0);             // bump to restart the timer after a click
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-80px' });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || reduce) return;
    const t = setInterval(() => setS((x) => (x + 1) % journey.steps.length), 2500);
    return () => clearInterval(t);
  }, [inView, reduce, tick, journey.steps.length]);
  const pick = (i: number) => { setS(i); setTick((x) => x + 1); };
  const pct = s / (journey.steps.length - 1);

  return (
    <section className="overflow-hidden bg-white px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{journey.title}<br /><span className="text-[#4A00E1]">{journey.accent}</span></h2>
          <p className="text-base text-[#52525B] md:text-lg md:leading-[28.8px]">{journey.lead}</p>
        </Reveal>

        <ol className="relative mt-10 flex flex-col gap-7 md:mt-16 md:grid md:grid-cols-5 md:gap-0">
          {/* track + fill: vertical on mobile, horizontal on desktop */}
          <span aria-hidden="true" className="absolute left-[31px] top-8 bottom-8 w-0.5 bg-[#E5E5EA] md:left-[10%] md:right-[10%] md:top-[31px] md:bottom-auto md:h-0.5 md:w-auto" />
          <span aria-hidden="true" className="absolute left-[31px] top-8 w-0.5 bg-[#4A00E1] transition-all duration-500 md:hidden" style={{ height: `calc((100% - 64px) * ${pct})` }} />
          <span aria-hidden="true" className="absolute left-[10%] top-[31px] hidden h-0.5 bg-[#4A00E1] transition-all duration-500 md:block" style={{ width: `calc(80% * ${pct})` }} />
          {journey.steps.map((st, i) => {
            const done = i <= s; const on = i === s;
            return (
              <li key={st.title} className="relative flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:px-2 md:text-center">
                <button type="button" onClick={() => pick(i)} aria-label={st.title} aria-current={on ? 'step' : undefined}
                  className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 hover:border-[#4A00E1] ${done ? 'border-[#4A00E1] bg-[#4A00E1] text-white' : 'border-[#E5E5EA] bg-white text-[#52525B]'} ${on ? 'scale-110 shadow-[0_0_24px_rgba(74,0,225,.5)]' : ''}`}>
                  <Icon name={st.icon} size={26} />
                </button>
                <div className="space-y-1 pt-1.5 md:mt-6 md:space-y-2 md:pt-0">
                  <div className={`font-mono text-sm tracking-widest transition-colors duration-500 ${on ? 'text-[#4A00E1]' : 'text-[#52525B]'}`}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 className={`font-poppins text-[22px] font-semibold leading-7 tracking-[-0.6px] transition-colors duration-500 md:text-2xl md:leading-8 ${on ? 'text-[#000000]' : 'text-[#000000]/70'}`}>{st.title}</h3>
                  <p className="text-[15px] leading-[22px] text-[#52525B] md:text-base">{st.line}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-8 flex justify-center gap-1.5 md:mt-12" aria-hidden="true">
          {journey.steps.map((st, i) => <span key={st.title} className={`h-1.5 rounded-full transition-all duration-300 ${i === s ? 'w-7 bg-[#4A00E1]' : 'w-1.5 bg-[#E5E5EA]'}`} />)}
        </div>
        <div className="mt-8 flex justify-center md:mt-14">
          <a href="#closing-form" data-cta="journey" className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#4A00E1] px-8 font-semibold text-white transition-colors hover:bg-[#3D00BA] md:w-auto">{journey.ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
