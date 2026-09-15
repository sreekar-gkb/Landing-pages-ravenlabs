import type { Metadata } from 'next'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consultation Confirmed | Microsoft Copilot Studio - Raven Labs Australia',
  description: 'Your strategy session request has been received.'
}

export default function ThanksPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'Poppins, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '540px', width: '100%', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '40px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
          <CheckCircle2 style={{ width: '36px', height: '36px', color: '#4A00E1' }} />
        </div>
        <span style={{ fontSize: '12px', fontWeight: 800, color: '#4A00E1', textTransform: 'uppercase', letterSpacing: '1px' }}>Strategy Session Confirmed</span>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#000000', margin: '8px 0 12px 0' }}>We have received your request!</h1>
        <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, marginBottom: '28px' }}>
          A Certified Microsoft Solutions Architect from our Melbourne engineering team will review your requirements and reach out within 1 business day.
        </p>
        <a href="/raven-copilot-studio-ai" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '12px 28px', borderRadius: '9999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
          <span>Return to Campaign</span>
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </a>
      </div>
    </div>
  )
}