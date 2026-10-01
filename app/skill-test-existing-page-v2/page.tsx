// app/<slug>/page.tsx: identical for every campaign. Content lives in ./campaign.ts, the visual in ./Showcase.tsx.
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LandingPage } from './_lp/LandingPage';
import Showcase from './Showcase';
import campaign from './campaign';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landing-pages-ravenlabs.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: campaign.meta.title,
  description: campaign.meta.description,
  alternates: { canonical: `${base}/${campaign.slug}` },
  openGraph: { type: 'website', url: `${base}/${campaign.slug}`, title: campaign.meta.title, description: campaign.meta.description, images: campaign.meta.ogImage ? [campaign.meta.ogImage] : undefined },
  twitter: { card: 'summary_large_image', title: campaign.meta.title, description: campaign.meta.description },
  robots: campaign.status === 'live' ? { index: true, follow: true } : { index: false, follow: false },
};

export default function Page() {
  if (campaign.status === 'paused') notFound();
  return <LandingPage campaign={campaign} showcase={<Showcase />} />;
}
