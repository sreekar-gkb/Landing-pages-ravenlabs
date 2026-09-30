'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronDown, Loader2 } from 'lucide-react';
import type { Campaign } from './types';
import { company } from './company';
import { submitLead } from '@/lib/submit-lead';

type Variant = 'hero' | 'closing';
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as const;

function readAttribution() {
  const out: Record<string, string> = {};
  try {
    const p = new URLSearchParams(window.location.search);
    UTM.forEach((k) => { const v = p.get(k) || sessionStorage.getItem('lp_' + k); if (v) { out[k] = v; sessionStorage.setItem('lp_' + k, v); } });
  } catch { /* storage may be blocked */ }
  out.page_url = window.location.href;
  return out;
}

export function LeadForm({ campaign, variant }: { campaign: Campaign; variant: Variant }) {
  const router = useRouter();
  const f = campaign.form;
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'done'>('idle');
  // Review builds (NEXT_PUBLIC_LP_PREVIEW=1) simulate submission so reviewers can test the flow
  // without sending fake leads to the CRM webhook.
  const preview = process.env.NEXT_PUBLIC_LP_PREVIEW === '1';
  const [errors, setErrors] = useState<Record<string, string>>({});
  const started = useRef(false);
  const attribution = useRef<Record<string, string>>({});
  useEffect(() => { attribution.current = readAttribution(); }, []);

  const closing = variant === 'closing';
  const input = `w-full rounded-xl border border-[#E5E5EA] bg-white px-3 text-base md:text-sm placeholder:text-[#52525B] transition focus:border-[#4A00E1] focus:outline-none focus:ring-[3px] focus:ring-[#4A00E1]/15 ${closing ? 'h-12' : 'h-11'}`;
  const label = closing ? 'text-xs font-medium uppercase tracking-widest' : 'sr-only';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.fullName || data.fullName.trim().length < 2) errs.fullName = 'Enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail || '')) errs.workEmail = 'Enter a work email like jane@company.com.au.';
    if (!/^[+\d][\d\s()-]{7,14}$/.test(data.phone || '')) errs.phone = 'Enter a phone number like 0412 345 678.';
    if (!data.segment) errs.segment = `Choose a ${f.segmentLabel.toLowerCase()}.`;
    if (!data.goal) errs.goal = 'Choose a goal.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('sending');
    if (preview) { await new Promise((r) => setTimeout(r, 900)); setStatus('done'); return; }
    try {
      // Bundled mode: main's existing server action (lib/submit-lead.ts) forwards to LEAD_WEBHOOK_URL.
      const a = attribution.current;
      const r = await submitLead({ firstName: data.fullName, email: data.workEmail, company: 'Not asked on form', phone: data.phone,
        message: `${f.segmentLabel}: ${data.segment} | ${f.goalLabel}: ${data.goal} | Form: ${variant} | Page: ${a.page_url || ''}`,
        website: data.company_website || '', campaign: campaign.slug,
        utm: { utm_source: a.utm_source, utm_medium: a.utm_medium, utm_campaign: a.utm_campaign, utm_term: a.utm_term, utm_content: a.utm_content, gclid: a.gclid } });
      if (!r.ok) throw new Error(r.error);
      try { sessionStorage.setItem('lp_first_name', data.fullName.split(' ')[0]); } catch {}
      router.push(`/${campaign.slug}/thanks`);
    } catch { setStatus('error'); }
  }

  const onFocus = () => { if (!started.current) { started.current = true; (window as any).gtag?.('event', 'form_start', { campaign: campaign.slug, location: variant }); } };
  const err = (k: string) => errors[k] ? <p id={`${variant}-${k}-err`} className="mt-1 text-xs text-[#4A00E1]">{errors[k]}</p> : null;
  const aria = (k: string) => ({ 'aria-invalid': !!errors[k] || undefined, 'aria-describedby': errors[k] ? `${variant}-${k}-err` : undefined });
  const select = (name: 'segment' | 'goal', lab: string, placeholder: string, opts: string[]) => (
    <div className={closing ? 'space-y-2.5' : ''}>
      <label htmlFor={`${variant}-${name}`} className={label}>{lab}</label>
      <div className="relative">
        <select id={`${variant}-${name}`} name={name} defaultValue="" className={`${input} cursor-pointer appearance-none pr-9`} {...aria(name)}>
          <option value="" disabled>{placeholder}</option>
          {opts.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#52525B]" aria-hidden="true" />
      </div>
      {err(name)}
    </div>
  );
  const text = (name: string, lab: string, type: string, ph: string, ac: string) => (
    <div className={closing ? 'space-y-2.5' : ''}>
      <label htmlFor={`${variant}-${name}`} className={label}>{lab}</label>
      <input id={`${variant}-${name}`} name={name} type={type} placeholder={ph} autoComplete={ac} className={input} {...aria(name)} />
      {err(name)}
    </div>
  );

  if (status === 'done') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4A00E1] text-white"><Check size={26} aria-hidden="true" /></span>
        <p className="text-lg font-semibold">Thanks, we’ve got your details</p>
        <p className="text-sm text-[#52525B]">Preview mode: no data was sent. On the live page this goes to /{campaign.slug}/thanks.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-1 text-sm font-medium text-[#4A00E1] underline-offset-4 hover:underline">Try the form again</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className={closing ? 'space-y-5' : 'space-y-3'}>
      <div className="sr-only" aria-hidden="true"><label htmlFor={`${variant}-hp`}>Leave empty</label><input id={`${variant}-hp`} name="company_website" tabIndex={-1} autoComplete="off" /></div>
      <div className={closing ? 'grid gap-5 sm:grid-cols-2' : 'space-y-3'}>
        {text('fullName', 'Full name', 'text', closing ? 'Jane Smith' : 'Full name', 'name')}
        {text('workEmail', 'Work email', 'email', closing ? 'jane@company.com.au' : 'Work email', 'email')}
      </div>
      {text('phone', 'Phone number', 'tel', closing ? '0412 345 678' : 'Phone number', 'tel')}
      {select('segment', f.segmentLabel, closing ? `Select ${f.segmentLabel.toLowerCase()}` : f.segmentLabel, f.segmentOptions)}
      {select('goal', f.goalLabel, closing ? 'What are you trying to achieve?' : f.goalLabel, f.goalOptions)}
      <button type="submit" disabled={status === 'sending'} data-cta={`${variant}-submit`}
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A00E1] font-medium text-white transition hover:bg-[#3D00BA] active:scale-[.98] disabled:opacity-80 ${closing ? 'h-14' : 'h-12'}`}>
        {status === 'sending' ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" />Sending</>) : 'Get Started'}
      </button>
      {status === 'error' && <p role="alert" className="text-center text-sm text-[#4A00E1]">Something went wrong. Call us on {company.phone_display} or try again.</p>}
      {closing && <p className="text-center text-sm text-[#52525B]">{f.reassurance}</p>}
      {f.recaptcha && <p className="text-center text-[11px] leading-4 text-[#52525B]">Protected by reCAPTCHA. Google <a className="underline" href="https://policies.google.com/privacy">Privacy</a> &amp; <a className="underline" href="https://policies.google.com/terms">Terms</a>.</p>}
    </form>
  );
}
