'use client'

import React from 'react'
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react'

export default function ThanksPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: "'Poppins', system-ui, sans-serif" }}>
      <div style={{ maxWidth: '580px', width: '100%', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '32px', padding: '48px', textAlign: 'center', boxShadow: '0 24px 48px rgba(0,0,0,0.06)' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
          <CheckCircle2 style={{ width: '40px', height: '40px', color: '#4A00E1' }} />
        </div>
        
        <span style={{ fontSize: '12px', fontWeight: 800, color: '#4A00E1', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Strategy Session Confirmed
        </span>
        
        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#000000', margin: '8px 0 14px 0', letterSpacing: '-0.5px' }}>
          We have received your briefing!
        </h1>
        
        <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '32px' }}>
          A Certified Microsoft Solutions Architect from our Melbourne engineering office will review your company size, goals, and technical requirements and contact you within 1 business day.
        </p>

        <div style={{ backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', borderRadius: '18px', padding: '20px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <PhoneCall style={{ width: '18px', height: '18px', color: '#4A00E1' }} />
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>Need immediate support? Call 1300 305 009</span>
        </div>

        <a href="/raven-copilot-studio-ai" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '14px 32px', borderRadius: '9999px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', boxShadow: '0 8px 20px rgba(74, 0, 225, 0.3)' }}>
          <span>Return to Campaign</span>
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </a>
      </div>
    </div>
  )
}