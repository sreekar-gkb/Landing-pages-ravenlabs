import Image from './Img';
import type { Campaign } from './types';
import { Reveal } from './Reveal';

export function ToolsMarquee({ tools }: { tools: NonNullable<Campaign['tools']> }) {
  const row = (hidden: boolean) => tools.logos.map((l, i) => (
    <div key={`${hidden}-${i}`} className="flex h-28 min-w-[200px] items-center justify-center px-4 py-5" aria-hidden={hidden || undefined}>
      <Image src={l.src} alt={hidden ? '' : l.alt} width={224} height={64} className="h-16 w-56 object-contain transition-transform duration-300 hover:scale-105" />
    </div>
  ));
  return (
    <section className="overflow-hidden border-y border-[#E5E5EA] bg-white py-12 md:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{tools.title}</h2>
        <p className="mt-4 text-base text-[#52525B] md:text-lg">{tools.subtitle}</p>
      </Reveal>
      <div className="lp-marquee relative mt-6 overflow-hidden md:mt-12">
        <div className="lp-marquee-track flex w-max animate-[lp-marquee_36s_linear_infinite]">{row(false)}{row(true)}</div>
      </div>
    </section>
  );
}
