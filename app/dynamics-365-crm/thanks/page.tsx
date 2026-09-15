'use client'

import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="dynamics-365-crm"
      partnerName="Microsoft"
      partnerLogoSrc="/partners/microsoft-365.webp"
      nav={{ phoneHref: 'tel:1300000000', phoneLabel: 'Give us a call' }}
      heading="Thanks for reaching out."
      body="One of our Microsoft-certified solutions architects will contact you within one business day to discuss your Dynamics 365 strategy."
    />
  )
}