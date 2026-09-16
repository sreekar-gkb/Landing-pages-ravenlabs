'use client'

import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="postgres-enterprise-db"
      partnerName="PostgreSQL"
      nav={{ phoneHref: 'tel:1300305009', phoneLabel: 'Give us a call' }}
      heading="Thanks for reaching out."
      body="One of our PostgreSQL specialists will contact you within one business day to schedule your consultation and discuss your database migration path."
    />
  )
}