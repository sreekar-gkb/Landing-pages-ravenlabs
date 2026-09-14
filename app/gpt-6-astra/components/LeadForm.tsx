'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { submitLead } from '@/lib/submit-lead'
import { trackConversion } from '@/lib/tracking'
import styles from './LeadForm.module.css'

const formSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  email: z.string().trim().email('Enter a valid work email'),
  company: z.string().trim().min(1, 'Company is required'),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
  website: z.string().max(0).optional(), // honeypot
})
type FormValues = z.infer<typeof formSchema>

const CAMPAIGN = 'gpt-6-astra'

export default function LeadForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) })

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null)
    const utm = {
      utm_source: searchParams.get('utm_source') || undefined,
      utm_medium: searchParams.get('utm_medium') || undefined,
      utm_campaign: searchParams.get('utm_campaign') || undefined,
      utm_term: searchParams.get('utm_term') || undefined,
      utm_content: searchParams.get('utm_content') || undefined,
      gclid: searchParams.get('gclid') || undefined,
    }
    const result = await submitLead({ ...values, campaign: CAMPAIGN, utm })
    if (!result.ok) {
      setSubmitError(result.error)
      return
    }
    trackConversion(CAMPAIGN, process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL_GPT_6_ASTRA)
    router.push(`/${CAMPAIGN}/thanks`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            {...register('firstName')}
          />
          {errors.firstName && (
            <span id="firstName-error" className={styles.error} role="alert">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <span id="email-error" className={styles.error} role="alert">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          autoComplete="organization"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
          {...register('company')}
        />
        {errors.company && (
          <span id="company-error" className={styles.error} role="alert">
            {errors.company.message}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" type="tel" inputMode="tel" autoComplete="tel" {...register('phone')} />
      </div>

      {/* Honeypot — hidden from real users, visible to bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <button type="submit" className="rl-btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Book a Readiness Session'}
      </button>

      {submitError && (
        <p className={styles.submitError} role="alert">
          {submitError}
        </p>
      )}

      <p className={styles.fineprint}>
        By submitting, you agree to our{' '}
        <a href="https://theravenlabs.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        . We reply within one business day.
      </p>
    </form>
  )
}
