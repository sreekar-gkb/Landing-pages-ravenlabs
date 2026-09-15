import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Test Campaign | Raven Labs',
  description: 'Live test verification for deployment pipeline'
}

export default function DiagnosticPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#4A00E1' }}>? Diagnostic Test Page Live</h1>
      <p>Tested in real-time by Antigravity AI.</p>
    </main>
  )
}