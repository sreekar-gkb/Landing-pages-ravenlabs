'use client'

import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="shopify-plus-wholesale"
      partnerName="Shopify"
      nav={{ phoneHref: 'tel:1300000000', phoneLabel: 'Give us a call' }}
      heading="Assessment scheduled."
      body="One of our Shopify Plus specialists will reach out within one business day to confirm your call and gather some context about your current setup."
    />
  )
}