'use client';
import Image from './Img';
import * as Accordion from './accordion';
import { Plus } from 'lucide-react';
import type { Campaign } from './types';
import { Reveal } from './Reveal';

export function FaqSection({ faq }: { faq: Campaign['faq'] }) {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 className="text-center text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">Frequently asked questions</h2></Reveal>
        <div className="mt-10 grid items-center gap-8 md:mt-[72px] lg:grid-cols-[498px_minmax(0,1fr)] lg:gap-14 lg:px-6">
          <Reveal>
            <Image src={faq.image.src} alt={faq.image.alt} width={498} height={498} className="aspect-square w-full rounded-3xl object-cover shadow-[0_20px_50px_-20px_rgba(86,0,224,.35)]" />
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion.Root type="single" collapsible defaultValue="item-0">
              {faq.items.map((it, i) => (
                <Accordion.Item key={it.q} value={`item-${i}`} className="border-b border-[#E5E5EA]">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6">
                      <span className="text-lg font-medium leading-6 tracking-[-0.4px] transition-colors group-hover:text-[#4A00E1] md:text-2xl md:leading-[30px]">{it.q}</span>
                      <Plus size={16} className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45" aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden motion-safe:animate-[fadeIn_.25s_ease-out]">
                    <p className="pb-6 pr-8 text-sm leading-[21px] text-[#52525B] md:text-base md:leading-6">{it.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
