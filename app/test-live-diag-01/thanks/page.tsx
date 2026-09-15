import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Raven Labs',
  description: 'Confirmation page'
}

export default function ThanksPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#4A00E1' }}>Thank You!</h1>
      <p>We will contact you shortly.</p>
    </main>
  )
}