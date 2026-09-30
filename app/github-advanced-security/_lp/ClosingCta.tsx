import { Mail, Phone } from 'lucide-react';
import type { Campaign } from './types';
import { company } from './company';
import { LeadForm } from './LeadForm';
import { Reveal } from './Reveal';

export function ClosingCta({ campaign }: { campaign: Campaign }) {
  const c = campaign.closing;
  const row = (href: string, icon: React.ReactNode, label: string, value: string) => (
    <a href={href} className="flex items-center gap-3.5 text-[#000000]">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A00E1]/10 text-[#4A00E1]">{icon}</span>
      <span className="flex flex-col"><span className="text-xs uppercase tracking-widest text-[#52525B]">{label}</span><span className="text-lg font-semibold">{value}</span></span>
    </a>
  );
  return (
    <section id="closing-form" className="bg-white px-5 pb-24 pt-16 md:px-8 md:pb-40 md:pt-28">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[443px_minmax(0,1fr)] lg:gap-16 lg:px-4">
        <div>
          <h2 className="text-[30px] font-semibold leading-[34px] tracking-[-0.6px] md:text-5xl md:leading-[52.8px] md:tracking-[-0.96px]">{c.title}<br /><span className="text-[#4A00E1]">{c.accent}</span></h2>
          <p className="mt-6 text-base text-[#52525B] md:text-lg md:leading-[28.8px]">{c.body}</p>
          <div className="mt-8 space-y-4 border-t border-[#E5E5EA] pt-6">
            {row(`tel:${company.phone_tel}`, <Phone size={18} aria-hidden="true" />, 'Call', company.phone_display)}
            {row(`mailto:${company.email}`, <Mail size={18} aria-hidden="true" />, 'Email', company.email)}
          </div>
        </div>
        <div className="rounded-3xl border border-[#E5E5EA] bg-white p-5 shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] md:p-10">
          <LeadForm campaign={campaign} variant="closing" />
        </div>
      </Reveal>
    </section>
  );
}
