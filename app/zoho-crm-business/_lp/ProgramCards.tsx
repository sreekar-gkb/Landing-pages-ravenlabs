'use client';
import { useState } from 'react';
import Image from './Img';
import { Check } from 'lucide-react';
import type { Campaign } from './types';
import { Reveal } from './Reveal';

// 3D flip cards. Hover flips on pointer devices; tap/Enter toggles aria-pressed for touch and keyboard.
export function ProgramCards({ program }: { program: Campaign['program'] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <h2 className="mb-6 text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{program.title}<br /><span className="text-[#4A00E1]">{program.accent}</span></h2>
          <p className="text-base text-[#52525B] md:text-lg md:leading-[28.8px]">{program.lead}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-4">
          {program.cards.map((c, i) => {
            const n = String(i + 1).padStart(2, '0');
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.08} className="h-[378px]">
                <button type="button" className="lp-flip block h-full w-full text-left" aria-pressed={open === i}
                  aria-label={`${c.title}: ${open === i ? 'hide' : 'show'} details`} onClick={() => setOpen(open === i ? null : i)}>
                  <div className="lp-flip-inner relative h-full w-full">
                    <div className="lp-face absolute inset-0 overflow-hidden rounded-2xl border border-[#E5E5EA] shadow-[0_10px_30px_-10px_rgba(0,0,0,.15)]">
                      <Image src={c.image} alt="" fill sizes="(min-width:1024px) 276px, (min-width:640px) 50vw, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/70" />
                      <span className="absolute left-[18px] top-[18px] rounded-full bg-white/90 px-3 py-0.5 font-mono text-xs tracking-widest text-[#000000]">{n}</span>
                      <span className="absolute inset-x-6 bottom-6 font-poppins text-xl font-semibold leading-[26px] tracking-[-0.2px] text-white">{c.title}</span>
                    </div>
                    <div className="lp-face lp-back absolute inset-0 flex flex-col gap-3.5 rounded-2xl border border-[#E5E5EA] bg-white p-7 shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)]">
                      <span className="font-mono text-xs tracking-widest text-[#4A00E1]">{n}</span>
                      <span className="font-poppins text-[22px] font-semibold leading-7 tracking-[-0.2px]">{c.title}</span>
                      <p className="text-base leading-[26px] text-[#52525B]">{c.description}</p>
                      <ul className="space-y-2.5">
                        {c.bullets.map((b) => <li key={b} className="flex items-start gap-2.5 text-[15px] leading-[22px]"><Check size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-[#4A00E1]" aria-hidden="true" />{b}</li>)}
                      </ul>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
