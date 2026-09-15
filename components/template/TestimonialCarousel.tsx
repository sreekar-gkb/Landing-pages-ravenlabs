'use client'

import { useEffect, useState, useCallback } from 'react'
import styles from './CampaignTemplate.module.css'
import type { CampaignContent } from './CampaignContent.types'

type Props = { testimonials: CampaignContent['proof']['testimonials'] }

export default function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((n) => (n + 1) % testimonials.length), [testimonials.length])

  useEffect(() => {
    if (paused || testimonials.length < 2) return
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [paused, next, testimonials.length])

  if (testimonials.length === 0) return null
  const current = testimonials[index]
  const anySample = testimonials.some((t) => t.sample)

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <blockquote className={styles.proofQuote}>&ldquo;{current.quote}&rdquo;</blockquote>
      <div className={styles.proofPerson}>
        <div className={styles.proofName}>{current.name}</div>
        <div className={styles.proofTitle}>{current.title}</div>
      </div>
      {testimonials.length > 1 && (
        <div className={styles.proofDots} role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-current={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              className={styles.proofDot}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
      {anySample && <p className={styles.proofSample}>Sample testimonials — replaced with approved client quotes before launch.</p>}
    </div>
  )
}
