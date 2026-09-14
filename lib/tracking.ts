'use client'

// Shared tracking helpers. Every function no-ops safely if the relevant
// env var isn't set, so campaigns work before analytics are wired up.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID
export const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag(...args)
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gtag('event', name, params)
}

export function trackCtaClick(campaign: string, label: string) {
  trackEvent('cta_click', { campaign, cta_label: label })
}

export function trackConversion(campaign: string, conversionLabel?: string) {
  trackEvent('generate_lead', { campaign })
  if (ADS_ID && conversionLabel) {
    gtag('event', 'conversion', { send_to: `${ADS_ID}/${conversionLabel}` })
  }
}

// Call once per page from a small client component to wire up scroll/engagement events.
export function initEngagementTracking(campaign: string) {
  if (typeof window === 'undefined') return () => {}

  let firedScroll75 = false
  const onScroll = () => {
    if (firedScroll75) return
    const scrolled = window.scrollY + window.innerHeight
    const total = document.documentElement.scrollHeight
    if (total > 0 && scrolled / total >= 0.75) {
      firedScroll75 = true
      trackEvent('scroll_75', { campaign })
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  const engagedTimer = setTimeout(() => {
    trackEvent('engaged_session', { campaign })
  }, 60_000)

  return () => {
    window.removeEventListener('scroll', onScroll)
    clearTimeout(engagedTimer)
  }
}
