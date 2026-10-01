'use client';
import { useState } from 'react';
import Image from './Img';
import { AnimatePresence, motion } from './motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from './proof';
import { Reveal } from './Reveal';

export function TrustCarousel({ title, testimonials }: { title: string; testimonials: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length);
  return (
    <section className="bg-[#F5F4FA]/40 px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal><h2 className="mb-10 text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:mb-[72px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{title}</h2></Reveal>
        <div className="min-h-[260px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure key={t.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <blockquote className="mx-auto mb-10 max-w-3xl text-2xl font-medium leading-snug text-[#000000] md:text-3xl">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex flex-col items-center">
                {t.logo && <Image src={t.logo} alt={t.company} width={202} height={56} className="mb-3 h-14 w-auto object-contain" />}
                <span className="font-semibold">{t.name}{t.role ? `, ${t.role}` : ''}</span>
                <span className="text-sm text-[#52525B]">{t.company}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        {testimonials.length > 1 && (
          <div className="mt-12 flex items-center justify-center gap-5">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E5EA] transition-colors hover:border-[#4A00E1] hover:bg-[#4A00E1] hover:text-white"><ChevronLeft size={18} /></button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((x, k) => (
                <button key={x.id} type="button" onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} aria-current={k === i || undefined}
                  className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-[#4A00E1]' : 'w-2 bg-[#E5E5EA] hover:bg-[#52525B]/40'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E5EA] transition-colors hover:border-[#4A00E1] hover:bg-[#4A00E1] hover:text-white"><ChevronRight size={18} /></button>
          </div>
        )}
      </div>
    </section>
  );
}
