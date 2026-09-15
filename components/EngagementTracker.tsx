'use client'

import { useEffect } from 'react'
import { trackPageView } from '@/lib/tracking'

export default function EngagementTracker({ campaign }: { campaign: string }) {
  useEffect(() => {
    trackPageView(campaign)
  }, [campaign])
  return null
}
