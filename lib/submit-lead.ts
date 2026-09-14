'use server'

import { leadSchema, type LeadInput } from './lead-schema'

export type SubmitLeadResult = { ok: true } | { ok: false; error: string }

// Posts a validated lead to the shared Google Apps Script webhook that appends
// a row to the "Landing Page Leads" Google Sheet. Until LEAD_WEBHOOK_URL is set
// in the Vercel project's environment variables, this logs server-side and
// still returns success so the UX can be tested end-to-end before the sheet
// integration is wired up — swap in the real webhook URL before real ad spend.
export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: 'Please check the highlighted fields and try again.' }
  }
  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.website) {
    return { ok: true }
  }

  const payload = {
    timestamp: new Date().toISOString(),
    campaign: parsed.data.campaign,
    firstName: parsed.data.firstName,
    email: parsed.data.email,
    company: parsed.data.company,
    phone: parsed.data.phone || '',
    message: parsed.data.message || '',
    ...parsed.data.utm,
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    // eslint-disable-next-line no-console
    console.warn('[submitLead] LEAD_WEBHOOK_URL is not set — lead was not persisted:', payload)
    return { ok: true }
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      return { ok: false, error: 'Something went wrong on our end. Please try again in a moment.' }
    }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error — please check your connection and try again.' }
  }
}
