'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Shield, Gauge } from 'lucide-react'

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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="20" fill="#4A00E1" />
              <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
            </svg>
            <span className="text-sm font-bold text-slate-900">Raven Labs</span>
          </div>
          <a href="#form" className="px-5 py-2 bg-[#4A00E1] text-white text-sm font-semibold rounded-full hover:bg-[#6400E1] transition-colors">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-slate-900 leading-tight mb-6">
              Turn Microsoft 365 Copilot <span className="text-[#4A00E1] border-b-4 border-[#4A00E1]">into real</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most organizations leave Copilot licences unused. We turn unused productivity into trained, confident teams with zero disruption to your business.
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Expert deployment from certified engineers',
              'Zero-downtime rollout across your organization',
              '24/7 support from Australian specialists',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#4A00E1] mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div>
            <a href="#form" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A00E1] text-white font-semibold rounded-full hover:bg-[#6400E1] transition-colors">
              Book Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Form Card */}
        <div id="form" className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Book your demo</h3>
          <p className="text-sm text-slate-600 mb-6">See how Copilot transforms your team</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              required
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-500"
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#4A00E1] focus:outline-none text-slate-900 placeholder-slate-500"
            />

            {error && <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-[#4A00E1] text-white font-semibold hover:bg-[#6400E1] disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Booking...' : 'Get Started'}
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-4 pt-4 border-t">
            Free 30-minute strategy session with certified engineers
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-slate-700 leading-relaxed italic mb-6">
            "The professionalism and dedication of the Raven Labs team is outstanding. Every detail was managed with precision and their continued support journey together has been invaluable."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4A00E1] to-blue-600 rounded-full"></div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">Sarah Mitchell</p>
              <p className="text-sm text-slate-600">CIO, Enterprise Tech Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Approach</h2>
          <p className="text-lg text-slate-600">Five core phases to transform Copilot into team productivity</p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {[
            { icon: Gauge, label: 'Assess', desc: 'Current state analysis' },
            { icon: Users, label: 'Plan', desc: 'Deployment strategy' },
            { icon: Zap, label: 'Train', desc: 'Role-based training' },
            { icon: CheckCircle2, label: 'Validate', desc: 'Adoption tracking' },
            { icon: TrendingUp, label: 'Optimize', desc: 'Continuous improvement' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#4A00E1]" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'Expert Team',
                desc: 'Microsoft-certified engineers with 50+ enterprise deployments',
              },
              {
                title: 'Zero Downtime',
                desc: 'Structured rollout keeps your teams productive throughout',
              },
              {
                title: 'Australian Support',
                desc: 'Local specialists, 24/7 support in your time zone',
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to transform your team?</h2>
        <p className="text-lg text-slate-600 mb-8">Join leading Australian enterprises deploying Copilot successfully</p>
        <a
          href="#form"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A00E1] text-white font-bold rounded-full hover:bg-[#6400E1] transition-colors text-lg"
        >
          Book Your Demo <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#4A00E1" />
                <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
              </svg>
              <span className="font-bold text-slate-900">Raven Labs</span>
            </div>

            <div className="flex gap-8 text-sm font-semibold text-slate-600">
              <a href="tel:1300305009" className="hover:text-[#4A00E1] transition-colors">
                1300 305 009
              </a>
              <a href="mailto:info@ravenlabs.com.au" className="hover:text-[#4A00E1] transition-colors">
                info@ravenlabs.com.au
              </a>
              <a href="https://theravenlabs.com" target="_blank" className="hover:text-[#4A00E1] transition-colors">
                theravenlabs.com
              </a>
            </div>
          </div>

          <div className="border-t pt-8 text-xs text-slate-600 text-center">
            <p>© {new Date().getFullYear()} Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
