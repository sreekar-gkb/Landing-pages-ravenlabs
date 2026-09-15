import { submitLead } from '@/lib/submit-lead'

async function runDiagnostic() {
  'use server'
  try {
    const result = await submitLead({
      firstName: 'Diagnostic',
      email: 'diagnostic@theravenlabs-verification.com',
      company: 'Diagnostic Co',
      phone: '',
      message: '',
      website: '',
      campaign: 'lead-diagnostic-test',
      utm: {},
    })
    return { threw: false, result }
  } catch (err) {
    return {
      threw: true,
      message: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
      name: err instanceof Error ? err.name : typeof err,
    }
  }
}

export default async function DiagnosticPage() {
  const outcome = await runDiagnostic()
  return (
    <main style={{ padding: 40, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      <h1>submitLead diagnostic</h1>
      {JSON.stringify(outcome, null, 2)}
    </main>
  )
}
