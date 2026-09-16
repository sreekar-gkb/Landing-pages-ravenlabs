import { ArrowRight, Phone, Mail, Globe, MapPin, ShieldCheck } from 'lucide-react';
import { RavenLabsLogo } from './RavenLabsLogo';

export function Footer({
  ctaHeadline = "Ready to transform your enterprise operations?",
  ctaSubhead = "Join leading Australian enterprises accelerating productivity with Raven Labs.",
  buttonText = "Schedule Strategy Session",
  formId = "#lead-form"
}: {
  ctaHeadline?: string;
  ctaSubhead?: string;
  buttonText?: string;
  formId?: string;
}) {
  return (
    <>
      {/* Pre-Footer Action Banner */}
      <section className="py-16 bg-[#0B0C10] text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4A00E1]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6400E1]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F3E8FF] text-xs font-bold uppercase tracking-wider font-['Poppins'] border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F3E8FF]" />
            <span>Guaranteed Zero Pipeline Disruption</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-['Poppins']">
            {ctaHeadline}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-['Quicksand']">
            {ctaSubhead}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={formId}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A00E1] hover:bg-[#6400E1] text-white font-bold text-base shadow-xl shadow-[#4A00E1]/30 transition-all font-['Poppins'] group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:1300305009"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all font-['Poppins']"
            >
              <Phone className="w-4 h-4" />
              <span>Call 1300 305 009</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Legal Footer */}
      <footer className="border-t border-slate-200 bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <RavenLabsLogo />

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 font-['Poppins']">
              <a href="tel:1300305009" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>1300 305 009</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href="mailto:info@ravenlabs.com.au" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>info@ravenlabs.com.au</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href="https://theravenlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition-colors flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>theravenlabs.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-['Quicksand']">
            <div className="flex items-center gap-2 text-center md:text-left">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                © {new Date().getFullYear()} Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000 | Sydney Operations. ABN 84 659 123 456.
              </span>
            </div>

            <div className="flex items-center gap-6 font-medium">
              <a href="https://theravenlabs.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="https://theravenlabs.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A00E1] transition underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
