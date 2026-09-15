'use client'

import type { ReactNode } from 'react'
import { trackCtaClick } from '@/lib/tracking'

type TrackedCtaProps = {
  href: string
  label: string
  campaign: string
  className?: string
  children: ReactNode
}

export default function TrackedCta({ href, label, campaign, className, children }: TrackedCtaProps) {
  return (
    <a href={href} className={className} onClick={() => trackCtaClick(campaign, label)}>
      {children}
    </a>
  )
}
