import Image from './Img';
import { Facebook, Instagram, Linkedin, Phone, Twitter, Youtube } from 'lucide-react';
import { company } from './company';

const SOCIAL = [
  ['linkedin', 'LinkedIn', Linkedin], ['instagram', 'Instagram', Instagram], ['youtube', 'YouTube', Youtube],
  ['facebook', 'Facebook', Facebook], ['x', 'X', Twitter],
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const legal = [company.abn && `ABN ${company.abn}`, company.registered_address].filter(Boolean).join(' · ');
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <Image src="/skill-test-existing-page/img/brand-raven-labs-logo-white.png" alt="Raven Labs" width={121} height={40} className="h-9 w-auto md:h-10" />
        <a href={`tel:${company.phone_tel}`} className="inline-flex items-center gap-2 text-lg transition-colors hover:text-[#C9B6FF]"><Phone size={18} aria-hidden="true" />{company.phone_display}</a>
        <div className="flex gap-2.5">
          {SOCIAL.map(([k, label, I]) => (
            <a key={k} href={company.socials[k]} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 transition hover:border-[#4A00E1] hover:bg-[#4A00E1] hover:text-white"><I size={16} aria-hidden="true" /></a>
          ))}
        </div>
        <div className="flex flex-col gap-1 text-sm text-white/70 md:items-end">
          <span>{company.copyright.replace('{year}', String(year))}</span>
          <span className="flex gap-4">{legal && <span>{legal}</span>}<a href={company.privacy_url} className="underline-offset-4 hover:underline">Privacy</a><a href={company.terms_url} className="underline-offset-4 hover:underline">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}
