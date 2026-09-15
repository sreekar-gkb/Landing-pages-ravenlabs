import type { Metadata } from 'next'
import { CheckCircle2, ArrowRight, PhoneCall, ShieldCheck, Sparkles, Database, Users, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Microsoft Copilot Studio Deployment & Engineering | Raven Labs Australia',
  description: 'Certified Australian engineers deploying custom Copilot Studio autonomous agents with zero pipeline risk. Book a strategy session today.',
  alternates: { canonical: 'https://landing-pages-ravenlabs.vercel.app/raven-copilot-studio-ai' },
  openGraph: {
    title: 'Microsoft Copilot Studio Deployment & Engineering | Raven Labs Australia',
    description: 'Certified Australian engineers deploying custom Copilot Studio autonomous agents with zero pipeline risk.',
    type: 'website',
    url: 'https://landing-pages-ravenlabs.vercel.app/raven-copilot-studio-ai',
  }
}

export default function CopilotStudioPage() {
  const trustBullets = [
    'Australian certified AI solutions architects (Melbourne & Sydney)',
    'Enterprise data governance & RBAC security built-in',
    'Fixed-scope 14-day production pilot with SLA guarantee'
  ]

  const features = [
    {
      id: '01',
      title: 'Workflow Automation',
      desc: 'Connect Copilot Studio to SAP, Salesforce, and custom SQL databases for zero-touch resolution.'
    },
    {
      id: '02',
      title: 'Autonomous Multi-Agent',
      desc: 'Orchestrate specialized AI agents for procurement, IT support, and customer operations.'
    },
    {
      id: '03',
      title: 'Enterprise Guardrails',
      desc: 'Strict zero-retention privacy filters preventing unauthorized corporate data exposure.'
    },
    {
      id: '04',
      title: 'Telemetry & Auditing',
      desc: 'Full token-level observability, hallucination monitoring, and executive ROI dashboards.'
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8F9FE', minHeight: '100vh', color: '#18181B', fontFamily: 'Poppins, system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg style={{ width: '36px', height: '36px' }} viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#4A00E1" />
                <path d="M30 22H56C68.1503 22 78 31.8497 78 44C78 52.8257 72.7845 60.4431 65.3163 63.8562L76.5 78H60.5L50.5 65H44V78H30V22ZM44 35V52H55C59.4183 52 63 48.4183 63 44C63 39.5817 59.4183 36 55 36L44 35Z" fill="white" />
                <path d="M52 38L61 44L52 48V38Z" fill="#7900E1" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '22px', color: '#000000', letterSpacing: '-0.5px' }}>
                Raven <span style={{ color: '#4A00E1' }}>Labs</span>
              </span>
            </div>
            <span style={{ height: '24px', width: '1px', backgroundColor: '#CBD5E1' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="https://cdn.simpleicons.org/microsoft" alt="Microsoft" style={{ height: '20px', width: 'auto' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Microsoft Copilot Studio Partner</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="tel:1300305009" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#475569', textDecoration: 'none' }}>
              <PhoneCall style={{ width: '14px', height: '14px', color: '#4A00E1' }} />
              <span>1300 305 009</span>
            </a>
            <a href="#lead-form" style={{ backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '10px 22px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 12px rgba(74, 0, 225, 0.25)' }}>
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '60px 24px', background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(74,0,225,0.12), rgba(255,255,255,0))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#F3E8FF', border: '1px solid rgba(121, 0, 225, 0.2)', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#4A00E1' }} />
              <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Official Microsoft AI Deployment
              </span>
            </div>

            <h1 style={{ fontSize: '48px', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1px', margin: 0 }}>
              Deploy Custom Microsoft Copilot Studio <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>with zero pipeline risk.</span>
            </h1>

            <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Build, test, and operationalize enterprise-grade autonomous agents connected securely to your Australian business infrastructure.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '8px' }}>
              {trustBullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 style={{ width: '14px', height: '14px', color: '#4A00E1' }} />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div id="lead-form" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#4A00E1', textTransform: 'uppercase', letterSpacing: '1px' }}>Priority Response Within 1 Business Day</span>
              <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '6px 0 4px 0', color: '#000000' }}>Request Copilot Strategy Session</h3>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Direct with Certified Australian Microsoft Solutions Architects</p>
            </div>

            <form action="/api/submit-lead" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="hidden" name="campaign" value="raven-copilot-studio-ai" />

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#334155', marginBottom: '6px' }}>Full Name</label>
                <input type="text" name="fullName" required placeholder="Alex Morgan" style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 14px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#334155', marginBottom: '6px' }}>Work Email</label>
                <input type="email" name="workEmail" required placeholder="alex@company.com.au" style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 14px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#334155', marginBottom: '6px' }}>Company Size</label>
                <select name="companySize" required style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid #CBD5E1', padding: '0 14px', fontSize: '14px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
                  <option value="">Select organization size...</option>
                  <option value="1-50">1 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-1000">201 - 1,000 employees</option>
                  <option value="1000+">1,000+ enterprise employees</option>
                </select>
              </div>

              <button type="submit" style={{ backgroundColor: '#4A00E1', color: '#FFFFFF', height: '48px', borderRadius: '9999px', border: 'none', fontWeight: 700, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 6px 16px rgba(74, 0, 225, 0.3)' }}>
                <span>Request Strategy Session</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
            </form>

            <p style={{ fontSize: '11px', textAlign: 'center', color: '#94A3B8', marginTop: '14px', marginBottom: 0 }}>
              Free 30-min strategy session . Direct with certified Australian engineers . No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Enterprise Capabilities</span>
            <h2 style={{ fontSize: '36px', fontWeight: 900, margin: '8px 0 12px 0', color: '#000000' }}>
              Engineered for <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>Rapid Autonomous Scale.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>Deploy certified Copilot Studio architecture without configuration debt or security vulnerabilities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {features.map((f) => (
              <div key={f.id} style={{ backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#4A00E1' }}>CAPABILITY {f.id}</span>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#000000', margin: 0 }}>{f.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#4A00E1" />
                <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '20px', color: '#000000' }}>
                Raven <span style={{ color: '#4A00E1' }}>Labs</span>
              </span>
            </div>

            <div style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: 600, color: '#64748B' }}>
              <a href="tel:1300305009" style={{ color: '#64748B', textDecoration: 'none' }}>1300 305 009</a>
              <span>.</span>
              <a href="mailto:info@ravenlabs.com.au" style={{ color: '#64748B', textDecoration: 'none' }}>info@ravenlabs.com.au</a>
              <span>.</span>
              <a href="https://theravenlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: '#64748B', textDecoration: 'none' }}>theravenlabs.com</a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#94A3B8' }}>
            <p style={{ margin: 0 }}>� 2026 Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000 | Sydney Operations.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="/privacy-policy" style={{ color: '#94A3B8', textDecoration: 'underline' }}>Privacy Policy</a>
              <a href="/terms" style={{ color: '#94A3B8', textDecoration: 'underline' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}