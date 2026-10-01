import type { Metadata } from 'next';
import Script from 'next/script';
import { company } from '../_lp/company';
import campaign from '../campaign';
import { ThanksName } from './ThanksName';

export const metadata: Metadata = { title: `Thanks | ${campaign.meta.title}`, robots: { index: false, follow: false } };

const adsId = process.env.NEXT_PUBLIC_ADS_ID;
const adsLabel = process.env[`NEXT_PUBLIC_ADS_LABEL_${campaign.slug.replace(/-/g, '_').toUpperCase()}`];

export default function Thanks() {
  return (
    <main className="lp-root mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-24 font-[family-name:var(--font-inter-tight)]">
      <h1 className="text-4xl font-semibold tracking-[-0.8px]">Thanks<ThanksName />. We’ll be in touch within one business day.</h1>
      <ol className="mt-8 space-y-3 text-lg text-[#52525B]">
        <li>1. A Raven Labs specialist reviews your details.</li>
        <li>2. We call you to arrange a time that suits.</li>
        <li>3. You get a clear plan and a fixed-price quote.</li>
      </ol>
      <p className="mt-8 text-lg">Can’t wait? Call <a className="font-semibold text-[#4A00E1]" href={`tel:${company.phone_tel}`}>{company.phone_display}</a>.</p>
      <a href={company.website} className="mt-10 inline-flex h-12 w-fit items-center rounded-full border border-[#E5E5EA] px-6 font-medium hover:border-[#4A00E1]">Back to theravenlabs.com</a>
      <Script id="lp-conversion" strategy="afterInteractive">{`
        window.gtag && window.gtag('event','generate_lead',{campaign:'${campaign.slug}'});
        ${adsId && adsLabel ? `window.gtag && window.gtag('event','conversion',{send_to:'${adsId}/${adsLabel}'});` : ''}
      `}</Script>
    </main>
  );
}
