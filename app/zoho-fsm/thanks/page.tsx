import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="zoho-fsm"
      partnerName="Zoho"
      partnerLogoSrc="/partners/zoho.webp"
      nav={{ phoneHref: 'tel:1300305009', phoneLabel: 'Give us a call' }}
      heading="Thanks — we're on it."
      body="One of the Raven Labs team will be in touch within one business day to book your Zoho FSM scoping call."
    />
  )
}
