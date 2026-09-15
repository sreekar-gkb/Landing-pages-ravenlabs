import ThanksTemplate from '@/components/template/ThanksTemplate'

export default function ThanksPage() {
  return (
    <ThanksTemplate
      campaign="template-test-fulqrom"
      nav={{ phoneHref: 'tel:1300000000', phoneLabel: 'Give us a call' }}
      heading="Thanks — we're on it."
      body="One of the Fulqrom team will be in touch within one business day."
    />
  )
}
