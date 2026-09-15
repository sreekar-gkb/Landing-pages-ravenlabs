'use client'

import { useState } from 'react'

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'grid', gap: '1px', borderTop: '1px solid var(--rl-border)' }}>
      {items.map((item, i) => (
        <div key={item.q} style={{ borderBottom: '1px solid var(--rl-border)' }}>
          <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 20, textAlign: 'left', padding: '1.25rem 0', border: 0, background: 'transparent', cursor: 'pointer', font: 'inherit', fontWeight: 600 }}>
            <span>{item.q}</span><span aria-hidden="true">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div style={{ padding: '0 0 1.25rem', color: 'var(--rl-fg-muted)', lineHeight: 1.6 }}>{item.a}</div>}
        </div>
      ))}
    </div>
  )
}
