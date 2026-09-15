import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Quicksand } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-pages-ravenlabs.vercel.app'),
  title: 'Raven Labs — AI & Digital Transformation for Australian Industry',
  description:
    'Raven Labs delivers CRM, ERP, Business Intelligence, AI Integration and Fulqrom asset intelligence for Australian industry.',
  openGraph: {
    title: 'Raven Labs — AI & Digital Transformation for Australian Industry',
    description:
      'CRM, ERP, Business Intelligence and AI Integration for Australian industry.',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app',
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${poppins.variable} ${quicksand.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
