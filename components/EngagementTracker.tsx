'use client'

import { useEffect } from 'react'
import { initEngagementTracking } from '@/lib/tracking'

export default function EngagementTracker({ campaign }: { campaign: string }) {
  useEffect(() => initEngagementTracking(campaign), [campaign])
  return null
}
