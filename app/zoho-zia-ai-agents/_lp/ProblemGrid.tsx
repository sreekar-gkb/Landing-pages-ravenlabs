import type { Campaign } from './types';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function ProblemGrid({ problem }: { problem: Campaign['problem'] }) {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{problem.title} <span className="text-[#4A00E1]">{problem.accent}</span></h2>
          <p className="text-base text-[#52525B] md:text-lg md:leading-[28.8px]">{problem.lead}</p>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-[886px] gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          {problem.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-[#E5E5EA] bg-white p-6 transition hover:border-[#4A00E1]/40 hover:shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] md:p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4A00E1]/10 text-[#4A00E1]"><Icon name={c.icon} size={22} /></div>
                <h3 className="mb-3 text-xl font-semibold tracking-[-0.24px] md:text-2xl">{c.title}</h3>
                <p className="text-[#52525B]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
