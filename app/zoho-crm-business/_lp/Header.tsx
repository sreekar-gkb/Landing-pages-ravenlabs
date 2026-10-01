'use client';
import { useEffect, useState } from 'react';
import Image from './Img';
import { Phone } from 'lucide-react';
import { company } from './company';
import type { Campaign } from './types';

export function Header({ partner }: { partner: Campaign['partner'] }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 font-poppins transition-all duration-300 ${scrolled ? 'border-b border-[#E5E5EA]/60 bg-white/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:h-[105px] md:px-8">
        <a href={company.website} className="flex items-center gap-3 md:gap-5" aria-label={`Raven Labs and ${partner.name}`}>
          <Image src="/zoho-crm-business/img/brand-raven-labs-logo.png" alt="Raven Labs" width={121} height={40} className="h-7 w-auto md:h-10" priority />
          <span className="h-[30px] w-px bg-[#D4D4D8] md:h-12" />
          <Image src={partner.logo} alt={partner.name} width={partner.logoWidth} height={partner.logoHeight} className="h-7 w-auto md:h-10" priority />
        </a>
        <a href={`tel:${company.phone_tel}`} data-cta="header-call"
           className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4A00E1] text-white transition-colors hover:bg-[#3D00BA] md:h-14 md:w-auto md:gap-1.5 md:rounded-full md:px-8 md:text-base md:font-medium"
           aria-label={`Call ${company.phone_display}`}>
          <Phone size={16} aria-hidden="true" />
          <span className="hidden md:inline">Give us a call</span>
        </a>
      </div>
    </header>
  );
}
