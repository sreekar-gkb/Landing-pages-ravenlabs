'use server'

import { leadSchema, type LeadInput } from './lead-schema'

export type SubmitLeadResult = { ok: true } | { ok: false; error: string }

async function postWebhook(payload: Record<string, unknown>, webhookUrl: string) {
  let lastError: unknown

  for (let attempt = 1; attempt <= 3; attempt++) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
        signal: controller.signal,
      })

      if (response.ok) return true
      lastError = new Error(`Webhook returned HTTP ${response.status}`)
    } catch (error) {
      lastError = error
    } finally {
      clearTimeout(timeout)
    }

    if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 500))
  }

  console.error('[submitLead] webhook failed after retries', lastError)
  return false
}

export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: 'Please check the highlighted fields and try again.' }
  }

  // Honeypot tripped — pretend success so bots do not learn the field is a trap.
  if (parsed.data.website) return { ok: true }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('[submitLead] LEAD_WEBHOOK_URL is not configured')
    return { ok: false, error: 'Lead capture is temporarily unavailable. Please try again shortly.' }
  }

  const payload = {
    timestamp: new Date().toISOString(),
    campaign: parsed.data.campaign,
    firstName: parsed.data.firstName,
    email: parsed.data.email,
    company: parsed.data.company,
    phone: parsed.data.phone || '',
    message: parsed.data.message || '',
    ...(parsed.data.utm || {}),
  }

  const delivered = await postWebhook(payload, webhookUrl)
  return delivered
    ? { ok: true }
    : { ok: false, error: 'We could not submit your request. Please try again in a moment.' }
}
