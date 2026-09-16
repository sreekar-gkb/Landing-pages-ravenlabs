'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { submitLead } from '@/lib/submit-lead';

interface LeadFormProps {
  campaign: string;
  title?: string;
  subhead?: string;
  buttonText?: string;
  ctaLabel?: string;
  redirectPath?: string;
}

function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
    gclid: params.get('gclid') || undefined,
  };
}

export default function LeadForm({
  campaign,
  title = "Book your strategy session",
  subhead = "See how our engineers transform your team productivity with zero downtime.",
  buttonText,
  ctaLabel,
  redirectPath,
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const submitButtonText = buttonText || ctaLabel || "Request Strategy Session";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    const formEl = e.currentTarget;
    setStatus('submitting');
    setError('');

    const form = new FormData(formEl);
    try {
      const result = await submitLead({
        firstName: String(form.get('firstName') || ''),
        email: String(form.get('email') || ''),
        company: String(form.get('company') || ''),
        phone: String(form.get('phone') || ''),
        message: String(form.get('message') || ''),
        website: String(form.get('website') || ''),
        campaign,
        utm: getTrackingParams(),
      });

      if (result.ok) {
        setStatus('success');
        formEl.reset();
        window.location.assign(redirectPath || `/${campaign}/thanks`);
        return;
      }

      setStatus('error');
      setError(result.error);
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again or call 1300 305 009.');
    }
  }

  return (
    <div id="lead-form" className="bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 sm:p-8 space-y-5">
      <div className="space-y-1">
        <span className="text-[11px] font-bold text-[#4A00E1] uppercase tracking-widest font-['Poppins']">
          Response Within 1 Business Day
        </span>
        <h3 className="text-2xl font-bold text-slate-900 font-['Poppins'] tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-['Quicksand']">
          {subhead}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 font-['Quicksand']" noValidate>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
            Full Name *
          </label>
          <input
            type="text"
            name="firstName"
            required
            autoComplete="name"
            placeholder="Alex Morgan"
            className="w-full h-11 sm:h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#4A00E1] focus:ring-2 focus:ring-[#4A00E1]/20 focus:outline-none transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="alex@company.com.au"
            className="w-full h-11 sm:h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#4A00E1] focus:ring-2 focus:ring-[#4A00E1]/20 focus:outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
              Company *
            </label>
            <input
              type="text"
              name="company"
              required
              autoComplete="organization"
              placeholder="Company Pty Ltd"
              className="w-full h-11 sm:h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#4A00E1] focus:ring-2 focus:ring-[#4A00E1]/20 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
              Phone <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="0400 000 000"
              className="w-full h-11 sm:h-12 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#4A00E1] focus:ring-2 focus:ring-[#4A00E1]/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Honeypot field for bot protection */}
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-10000px', opacity: 0 }}
        />

        {error && (
          <div className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl flex items-center gap-2">
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full h-13 sm:h-14 rounded-full bg-[#4A00E1] hover:bg-[#6400E1] active:scale-[0.99] text-white font-bold text-base shadow-lg shadow-[#4A00E1]/25 transition-all flex items-center justify-center gap-2 font-['Poppins'] group disabled:opacity-60 cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Securing Your Session...</span>
            </>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 font-['Quicksand'] text-center">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
        <span>Free 30-min strategy session • Certified Australian engineers • Zero obligation</span>
      </div>
    </div>
  );
}
