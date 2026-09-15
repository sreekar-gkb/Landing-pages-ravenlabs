import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="zoho-zia-agents"
      partnerName="Zoho"
      partnerLogoSrc="/partners/zoho.webp"
      nav={{ phoneHref: 'tel:+61390000000', phoneLabel: 'Talk to our team' }}
      heading="Thanks — we're on it."
      body="One of the Raven Labs team will be in touch within one business day to show you how to deploy your first Zia Agent."
    />
  )
}
