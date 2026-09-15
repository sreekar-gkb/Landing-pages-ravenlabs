'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function MicrosoftCopilotPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      company: formData.get('company'),
      campaign: 'test-microsoft-copilot',
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        window.location.href = '/test-microsoft-copilot/thanks'
      } else {
        setError('Failed to submit. Please try again.')
      }
    } catch (err) {
      setError('Network error.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F9FE]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="20" fill="#4A00E1" />
              <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
            </svg>
            <span className="font-extrabold text-xl text-black" style={{ fontFamily: 'Poppins' }}>
              Raven <span className="text-[#4A00E1]">Labs</span>
            </span>
          </div>
          <a href="#form" className="rounded-full bg-[#4A00E1] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#6400E1] transition-colors">
            Book Demo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold" style={{ fontFamily: 'Poppins' }}>
              <span className="w-2 h-2 rounded-full bg-[#4A00E1] animate-pulse" />
              Enterprise AI Ready
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-black" style={{ fontFamily: 'Poppins' }}>
              Microsoft 365 Copilot for{' '}
              <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#4A00E1' }}>
                Australian Enterprise
              </span>
            </h1>

            <p className="text-lg text-slate-600" style={{ fontFamily: 'Quicksand' }}>
              Deploy enterprise AI with zero downtime. Expert implementation, dedicated training, and 24/7 support from Australian specialists.
            </p>

            <div className="space-y-3">
              {[
                'Expert deployment from Copilot-certified engineers',
                'Zero-downtime rollout across your organization',
                'Comprehensive team training and ongoing support',
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4A00E1] shrink-0" />
                  <span className="text-base font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div id="form" className="lg:col-span-5">
            <div className="bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-black" style={{ fontFamily: 'Poppins' }}>
                  Book Your Demo
                </h3>
                <p className="text-sm text-slate-500 font-light mt-1" style={{ fontFamily: 'Quicksand' }}>
                  See how Copilot transforms productivity
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Full Name"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-400"
                />
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-400"
                />

                {error && (
                  <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full bg-[#4A00E1] text-white font-bold hover:bg-[#6400E1] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Booking...' : 'Book Demo'} <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-center text-xs text-slate-500 space-y-1 border-t pt-4">
                <p>✓ Free 30-minute strategy session</p>
                <p>✓ Direct with certified Australian engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold" style={{ fontFamily: 'Poppins' }}>
              Why Raven Labs
            </div>
            <h2 className="text-5xl font-black text-black mt-4" style={{ fontFamily: 'Poppins' }}>
              Enterprise Deployment{' '}
              <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#4A00E1' }}>
                Made Simple
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Implementation',
                desc: 'Copilot-certified engineers who understand enterprise deployments and your organization\'s unique needs.',
              },
              {
                title: 'Zero Downtime',
                desc: 'Structured rollout that keeps your teams productive during the entire deployment process.',
              },
              {
                title: 'Local Support',
                desc: '24/7 support from Australian specialists who understand your business context and time zone.',
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8F9FE] border border-slate-200/50">
                <div className="w-12 h-12 rounded-lg bg-[#4A00E1] text-white font-bold flex items-center justify-center text-lg" style={{ fontFamily: 'Poppins' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-lg text-black mt-4" style={{ fontFamily: 'Poppins' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2" style={{ fontFamily: 'Quicksand' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-black mb-2" style={{ fontFamily: 'Poppins' }}>
              Four-Stage Implementation
            </h2>
            <p className="text-slate-600" style={{ fontFamily: 'Quicksand' }}>
              A proven approach from assessment through scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 'Assess', desc: 'Current state analysis' },
              { step: 'Design', desc: 'Deployment planning' },
              { step: 'Deploy', desc: 'Staged rollout' },
              { step: 'Scale', desc: 'Ongoing optimization' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-slate-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl font-black text-[#4A00E1]" style={{ fontFamily: 'Poppins' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-black" style={{ fontFamily: 'Poppins' }}>
                    {item.step}
                  </h4>
                  <p className="text-sm text-slate-600 mt-2" style={{ fontFamily: 'Quicksand' }}>
                    {item.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#4A00E1] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-black" style={{ fontFamily: 'Poppins' }}>
            Ready to Deploy{' '}
            <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: '#4A00E1' }}>
              Enterprise AI?
            </span>
          </h2>
          <p className="text-lg text-slate-600 mt-4 mb-8" style={{ fontFamily: 'Quicksand' }}>
            Transform productivity with Microsoft 365 Copilot
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A00E1] text-white font-bold hover:bg-[#6400E1] transition-colors"
            style={{ fontFamily: 'Poppins' }}
          >
            Book Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#4A00E1" />
                <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
              </svg>
              <span className="font-extrabold text-xl text-black" style={{ fontFamily: 'Poppins' }}>
                Raven <span className="text-[#4A00E1]">Labs</span>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 text-sm font-semibold text-slate-600 text-center md:text-left" style={{ fontFamily: 'Poppins' }}>
              <a href="tel:1300305009" className="hover:text-[#4A00E1] transition-colors">
                1300 305 009
              </a>
              <a href="mailto:info@ravenlabs.com.au" className="hover:text-[#4A00E1] transition-colors">
                info@ravenlabs.com.au
              </a>
              <a
                href="https://theravenlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A00E1] transition-colors"
              >
                theravenlabs.com
              </a>
            </div>
          </div>

          <div className="border-t pt-8 text-xs text-slate-500 text-center" style={{ fontFamily: 'Quicksand' }}>
            <p>© {new Date().getFullYear()} Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="/privacy-policy" className="hover:text-[#4A00E1] transition-colors underline">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#4A00E1] transition-colors underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
