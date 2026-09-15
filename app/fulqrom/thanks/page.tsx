import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="fulqrom"
      partnerName={undefined}
      nav={{ phoneHref: 'tel:+61390000000', phoneLabel: 'Give us a call' }}
      heading="Thanks — we're on it."
      body="One of the Raven Labs team will be in touch within one business day with your free NABERS baseline report and recommendations."
    />
  )
}