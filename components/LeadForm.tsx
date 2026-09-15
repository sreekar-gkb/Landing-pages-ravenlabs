'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { submitLead } from '@/lib/submit-lead'

type LeadFormProps = {
  campaign: string
  redirectPath?: string
}

export default function LeadForm({ campaign, redirectPath }: LeadFormProps) {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = new FormData(e.currentTarget)
    const result = await submitLead({
      firstName: String(form.get('firstName') || ''),
      email: String(form.get('email') || ''),
      company: String(form.get('company') || ''),
      phone: String(form.get('phone') || ''),
      message: String(form.get('message') || ''),
      website: String(form.get('website') || ''),
      campaign,
      utm: {
        utm_source: searchParams.get('utm_source') || undefined,
        utm_medium: searchParams.get('utm_medium') || undefined,
        utm_campaign: searchParams.get('utm_campaign') || undefined,
        utm_term: searchParams.get('utm_term') || undefined,
        utm_content: searchParams.get('utm_content') || undefined,
        gclid: searchParams.get('gclid') || undefined,
      },
    })

    if (result.ok) {
      setStatus('success')
      e.currentTarget.reset()
      window.location.href = redirectPath || `/${campaign}/thanks`
      return
    }

    setStatus('error')
    setError(result.error)
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
          {status === 'submitting' ? 'Submitting…' : 'Book a Readiness Session'}
        </button>
      </div>
    </form>
  )
}
