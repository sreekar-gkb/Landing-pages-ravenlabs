'use client'

import { useEffect, useState } from 'react'
import type { Testimonial } from './CampaignContent.types'

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [i, setI] = useState(0)
  const hasSample = testimonials.some((t) => t.sample)

  useEffect(() => {
    if (testimonials.length < 2) return
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [testimonials.length])

  if (testimonials.length === 0) return null
  const current = testimonials[i]

  return (
    <div style={{ textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
      <blockquote style={{ fontFamily: 'var(--rl-font-display)', fontSize: 'var(--rl-h3)', margin: 0, lineHeight: 1.4 }}>
        &ldquo;{current.quote}&rdquo;
      </blockquote>
      <div style={{ marginTop: 'var(--rl-space-6)', fontWeight: 600 }}>{current.name}</div>
      <div style={{ color: 'var(--rl-fg-muted)', fontSize: 'var(--rl-body-sm)' }}>{current.title}</div>
      {testimonials.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 'var(--rl-space-6)' }}>
          {testimonials.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              aria-current={n === i}
              style={{
                width: n === i ? 24 : 8, height: 8, borderRadius: 999, border: 0, cursor: 'pointer',
                background: n === i ? 'var(--rl-accent)' : 'var(--rl-border)', transition: 'width 180ms ease',
              }}
            />
          ))}
        </div>
      )}
      {hasSample && (
        <p style={{ marginTop: 'var(--rl-space-6)', fontSize: 'var(--rl-caption)', color: 'var(--rl-fg-muted)' }}>
          Sample content — replaced with approved client quotes before launch.
        </p>
      )}
    </div>
  )
}
