'use client'

import { trackCtaClick } from '@/lib/tracking'

export default function TrackedCta({
  href,
  label,
  className,
  children,
}: {
  href: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className={className} onClick={() => trackCtaClick('gpt-6-astra', label)}>
      {children}
    </a>
  )
}
