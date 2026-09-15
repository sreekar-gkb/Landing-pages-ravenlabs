import ThanksTemplate from '@/components/template/ThanksTemplate'
export default function ThanksPage() {
  return <ThanksTemplate campaign="preflight-test-valid" nav={{ phoneHref: 'tel:1300000000', phoneLabel: 'Call us' }} heading="Thanks" body="Test" />
}
