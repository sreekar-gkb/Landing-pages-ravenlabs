import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-pages-ravenlabs.vercel.app'),
  title: 'Raven Labs — AI & Digital Transformation for Australian Industry',
  description:
    'Raven Labs delivers CRM, ERP, Business Intelligence, AI Integration and Fulqrom — our asset intelligence platform — for mining, construction, manufacturing and engineering businesses across Australia.',
  openGraph: {
    title: 'Raven Labs — AI & Digital Transformation for Australian Industry',
    description:
      'CRM, ERP, Business Intelligence, AI Integration and Fulqrom asset intelligence for Australian industry.',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app',
  },
  twitter: { card: 'summary' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
