'use client'

import { useState } from 'react'
import { submitLead } from '@/lib/submit-lead'

type LeadFormProps = {
  campaign: string
  redirectPath?: string
  /** Button label — defaults to the original hardcoded text so any existing page.tsx that
   *  doesn't pass this prop keeps working exactly as before. */
  ctaLabel?: string
}

function getTrackingParams() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
    gclid: params.get('gclid') || undefined,
  }
}

export default function LeadForm({ campaign, redirectPath, ctaLabel = 'Book a Readiness Session' }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setError('')

    const form = new FormData(e.currentTarget)
    try {
      const result = await submitLead({
        firstName: String(form.get('firstName') || ''),
        email: String(form.get('email') || ''),
        company: String(form.get('company') || ''),
        phone: String(form.get('phone') || ''),
        message: String(form.get('message') || ''),
        website: String(form.get('website') || ''),
        campaign,
        utm: getTrackingParams(),
      })

      if (result.ok) {
        setStatus('success')
        e.currentTarget.reset()
        window.location.assign(redirectPath || `/${campaign}/thanks`)
        return
      }

      setStatus('error')
      setError(result.error)
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') return <p role="status">Thanks — we received your request.</p>

  return (
    <form onSubmit={onSubmit} noValidate>
      <div style={{ display: 'grid', gap: 'var(--rl-space-4)' }}>
        <label>
          First name
          <input name="firstName" required autoComplete="given-name" />
        </label>
        <label>
          Work email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Company
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          Phone <span>(optional)</span>
          <input name="phone" autoComplete="tel" />
        </label>
        <label>
          What would you like to automate? <span>(optional)</span>
          <textarea name="message" rows={3} />
        </label>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-10000px', opacity: 0 }}
        />
        {status === 'error' && (
          <p role="alert" style={{ color: '#b42318', margin: 0 }}>
            {error}
          </p>
        )}
        <button className="rl-btn-primary" type="submit" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : ctaLabel}
        </button>
      </div>
    </form>
  )
}
