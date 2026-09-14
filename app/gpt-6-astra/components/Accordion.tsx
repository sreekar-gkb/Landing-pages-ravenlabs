'use client'

import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Accordion.module.css'

type Item = { q: string; a: string }

export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const open = openIndex === i
        const buttonId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={item.q} className={styles.item}>
            <h3 className={styles.itemHeading}>
              <button
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className={styles.trigger}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronDown size={20} className={open ? styles.iconOpen : styles.icon} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              style={{ maxHeight: open ? '400px' : '0px' }}
            >
              <p className={styles.answer}>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
