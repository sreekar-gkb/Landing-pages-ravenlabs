import type { Metadata } from 'next'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You! — Fulqrom Assessment',
  description: 'Your free energy assessment request has been received.',
}

export default function ThanksPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #f8f9fe 0%, #ffffff 100%)',
      fontFamily: 'var(--font-poppins, Poppins, sans-serif)'
    }}>
      <div style={{
        maxWidth: '600px',
        backgroundColor: 'white',
        padding: '60px 40px',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border: '1px solid #e0e0e0'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, rgba(74, 0, 225, 0.1) 0%, rgba(100, 0, 225, 0.1) 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          color: '#4A00E1'
        }}>
          <CheckCircle size={48} />
        </div>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 15px 0'
        }}>
          Assessment Received! ✅
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#555',
          margin: '0 0 30px 0',
          lineHeight: '1.6'
        }}>
          Thank you! Check your email for your personalized assessment within 24 hours.
        </p>
        <a href="https://www.theravenlabs.com/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #4A00E1 0%, #6400E1 100%)',
          color: 'white',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          textDecoration: 'none',
          marginTop: '30px'
        }}>
          Learn More <ArrowRight size={20} />
        </a>
        <p style={{
          fontSize: '14px',
          color: '#666',
          marginTop: '30px'
        }}>
          📧 info@ravenlabs.com.au | 📞 1300 305 009
        </p>
      </div>
    </div>
  )
}