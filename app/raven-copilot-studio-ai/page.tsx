'use client'

import React, { useState } from 'react'
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Database,
  Users,
  Cpu,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Layers,
  FileText,
  BarChart3,
  Workflow,
  Lock,
  Headphones,
  Award
} from 'lucide-react'

export default function RavenCopilotLandingPage() {
  const [activeMockupTab, setActiveMockupTab] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  const mockupTabs = [
    {
      id: '01',
      app: 'COPILOT IN WORD',
      title: 'Draft enterprise proposals in seconds.',
      prompt: 'Draft an RFP response citing our Melbourne ISO-27001 data policy',
      snippetTitle: 'Executive Proposal Summary - Rio Logistics',
      snippetContent: 'Synthesizing historical tender wins and security frameworks... Generated a 4-page tailored pitch deck with automated compliance citations in 4.2 seconds.',
      metric: '82% faster document generation'
    },
    {
      id: '02',
      app: 'COPILOT IN EXCEL',
      title: 'Instant predictive revenue forecasting.',
      prompt: 'Forecast Q4 cashflow across Sydney & Melbourne operations assuming 12% growth',
      snippetTitle: 'Multi-Scenario Revenue Model',
      snippetContent: 'Identified $420k variance in procurement spend. Dynamic sensitivity matrix built with live SQL data connectors.',
      metric: '100% automated financial modeling'
    },
    {
      id: '03',
      app: 'COPILOT IN TEAMS',
      title: 'Real-time executive meeting synthesis.',
      prompt: "Summarize key action items, assignees, and deadlines from today's leadership standup",
      snippetTitle: 'Action Matrix & Delegation Brief',
      snippetContent: 'Extracted 7 deliverables, linked Jira tickets automatically, and dispatched calendar invites to department leads.',
      metric: 'Zero lost follow-ups'
    },
    {
      id: '04',
      app: 'POWER AUTOMATE & AGENTS',
      title: 'Autonomous cross-platform multi-agent flows.',
      prompt: 'Trigger procurement approval flow in SAP when invoice matches PO criteria',
      snippetTitle: 'Autonomous Procurement Agent',
      snippetContent: 'Authenticated via Azure Entra ID RBAC. Multi-agent flow routed approval, logged audit trail, and notified finance in Teams.',
      metric: 'Zero manual data re-entry'
    }
  ]

  const roadmapSteps = [
    {
      num: '01',
      name: 'Assess',
      title: 'Diagnostic Readiness Audit',
      badge: 'Week 1',
      desc: 'We inspect your M365 licensing, SharePoint permissions, data hygiene, and security posture to ensure zero data leak risk before enabling AI.',
      deliverables: ['Data Governance & Tenant Audit', 'Licensing Optimization Report', 'Executive AI Roadmap']
    },
    {
      num: '02',
      name: 'Architect',
      title: 'Security & Access Architecture',
      badge: 'Week 2',
      desc: 'Configuring Microsoft Purview sensitivity labels, restricted access sites, and custom Copilot Studio agent connectors tailored to your operations.',
      deliverables: ['Purview DLP Configuration', 'Copilot Studio Agent Schemas', 'RBAC Permission Hardening']
    },
    {
      num: '03',
      name: 'Train',
      title: 'Role-Based Team Enablement',
      badge: 'Weeks 3-4',
      desc: 'Hands-on interactive workshops for sales, finance, operations, and HR teams with role-specific prompt libraries that guarantee immediate adoption.',
      deliverables: ['Custom Company Prompt Library', 'Live Departmental Masterclasses', 'Certified Internal AI Champions']
    },
    {
      num: '04',
      name: 'Launch',
      title: 'Piloted Organization Rollout',
      badge: 'Week 5',
      desc: 'Staged departmental activation with continuous telemetry monitoring, user sentiment tracking, and daily office hours support with certified engineers.',
      deliverables: ['Phased User Provisioning', 'Live Helpdesk & Slack/Teams Triage', 'Early Win Showcase Reporting']
    },
    {
      num: '05',
      name: 'Optimise',
      title: 'SLA Support & Telemetry ROI',
      badge: 'Ongoing',
      desc: 'Continuous monitoring of token consumption, adoption heatmaps, workflow fine-tuning, and monthly executive ROI steering committee reporting.',
      deliverables: ['Monthly Value & ROI Dashboards', 'New Feature Release Training', 'Dedicated Australian AI Engineer']
    }
  ]

  const capabilityCards = [
    {
      id: '01',
      title: 'Role-Based Enablement Workshops',
      desc: 'Tailored training modules for Sales, Finance, Legal, and Operations that turn casual users into daily power users.',
      icon: <Users style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '02',
      title: 'Custom Enterprise Prompt Library',
      desc: 'Over 150 tested, brand-compliant prompt templates built specifically around Australian enterprise workflows and reporting standards.',
      icon: <FileText style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '03',
      title: 'Internal AI Champions Program',
      desc: 'We identify and certify internal super-users across each business department to drive sustainable, viral peer adoption.',
      icon: <Award style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '04',
      title: 'Purview & Zero-Trust Governance',
      desc: 'Lock down sensitive payroll, HR, and client files with automated sensitivity labels so Copilot never indexes restricted data.',
      icon: <Lock style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '05',
      title: 'Token Telemetry & ROI Dashboards',
      desc: 'Track active user frequency, hours saved per employee, and ROI metrics with custom Power BI dashboards for your board.',
      icon: <BarChart3 style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '06',
      title: 'Copilot Studio Agent Studio',
      desc: 'Build autonomous agents that connect Copilot to SAP, Salesforce, Jira, and custom SQL databases for zero-touch workflows.',
      icon: <Cpu style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '07',
      title: 'Dedicated Australian Specialist',
      desc: 'Direct access to senior solutions architects based in Melbourne and Sydney with guaranteed 1-hour SLA escalation response.',
      icon: <Headphones style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    },
    {
      id: '08',
      title: '14-Day Production Pilot Guarantee',
      desc: 'Rapid proof-of-value deployment with 25 key users to prove measurable time savings before full enterprise commitment.',
      icon: <ShieldCheck style={{ width: '22px', height: '22px', color: '#4A00E1' }} />
    }
  ]

  const testimonials = [
    {
      quote: 'The professionalism and technical precision of Raven Labs is extraordinary. They audited our 350-seat Microsoft 365 environment, locked down data permissions, and delivered departmental training that got 94% of our staff active on Copilot in under 3 weeks.',
      author: 'Ryan Fowler',
      role: 'Chief Executive Officer',
      company: "Rio's Legacy / Vanguard Industrial",
      location: 'Melbourne VIC'
    },
    {
      quote: 'We were terrified of data leakage before rolling out Copilot. Raven Labs configured our Microsoft Purview policies and built a custom Copilot Studio agent for our estimating team that cut proposal drafting time from 2 days to 45 minutes.',
      author: 'Sarah Jenkins',
      role: 'Chief Technology Officer',
      company: 'Apex Infrastructure Partners',
      location: 'Sydney NSW'
    },
    {
      quote: 'Their hands-on training sessions were a game changer. Instead of generic slides, Raven Labs showed our finance team how to automate reconciliation models right inside Excel. The ROI was clear within the first 14 days.',
      author: 'Marcus Tremaine',
      role: 'Head of Digital Transformation',
      company: 'Pacific Mining & Engineering',
      location: 'Perth WA'
    }
  ]

  const faqs = [
    {
      q: 'What is included in the Free 30-Minute Copilot Strategy Session?',
      a: 'You will meet directly with a Certified Australian Microsoft Solutions Architect (not a salesperson). We review your current Microsoft 365 licensing, evaluate your data security readiness in SharePoint/Teams, identify top 3 high-ROI automation use cases for your business, and provide a clear 14-day deployment roadmap.'
    },
    {
      q: 'How do you prevent Copilot from exposing sensitive HR or executive data?',
      a: 'We implement Microsoft Purview sensitivity labeling and SharePoint Restricted Access Control (RAC) before user rollout. This ensures employees can only query data they already have explicit RBAC clearance for, completely preventing accidental visibility of payroll, leadership memos, or client financials.'
    },
    {
      q: 'Do we need Microsoft Copilot Studio, or is standard M365 Copilot enough?',
      a: 'Standard Microsoft 365 Copilot works out-of-the-box inside Word, Excel, Teams, and Outlook. Copilot Studio is needed if you want autonomous custom agents that connect directly to third-party databases (Salesforce, SAP, Jira, ERPs) or execute multi-step automated workflows.'
    },
    {
      q: 'How quickly can our Australian business see measurable ROI?',
      a: 'Our clients typically see measurable time savings (averaging 5.4 hours saved per employee per week) within the first 14 days of role-based training. We set up automated Power BI telemetry dashboards from day one to track user frequency and hours returned to the business.'
    },
    {
      q: 'Are your engineers based locally in Australia?',
      a: 'Yes, 100%. Our senior AI solutions architects and engineering team are based in Melbourne (Level 4, 150 Collins St) and Sydney. All consulting, data security audits, and live training sessions are conducted in Australian time zones (AEST/AEDT).'
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8F9FE', minHeight: '100vh', color: '#18181B', fontFamily: "'Poppins', system-ui, -apple-system, sans-serif" }}>
      {/* 1. Co-Branded Sticky Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg style={{ width: '38px', height: '38px' }} viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="22" fill="#4A00E1" />
                <path d="M30 22H56C68.1503 22 78 31.8497 78 44C78 52.8257 72.7845 60.4431 65.3163 63.8562L76.5 78H60.5L50.5 65H44V78H30V22ZM44 35V52H55C59.4183 52 63 48.4183 63 44C63 39.5817 59.4183 36 55 36L44 35Z" fill="white" />
                <path d="M52 38L61 44L52 48V38Z" fill="#7900E1" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '22px', color: '#000000', letterSpacing: '-0.5px' }}>
                Raven <span style={{ color: '#4A00E1' }}>Labs</span>
              </span>
            </div>
            
            <span style={{ height: '24px', width: '1px', backgroundColor: '#CBD5E1' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="https://cdn.simpleicons.org/microsoft" alt="Microsoft" style={{ height: '18px', width: 'auto' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#334155', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Microsoft Copilot Partner</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="tel:1300305009" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 18px', borderRadius: '9999px', backgroundColor: '#F1F5F9', color: '#334155', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
              <PhoneCall style={{ width: '15px', height: '15px', color: '#4A00E1' }} />
              <span>1300 305 009</span>
            </a>
            <a href="#lead-form" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '11px 24px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 14px rgba(74, 0, 225, 0.28)' }}>
              <span>Book Consultation</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section with Ambient Mesh & Floating 5-Field Form Card */}
      <section style={{ padding: '60px 24px 80px 24px', background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(74,0,225,0.14), rgba(255,255,255,0))' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#F3E8FF', border: '1px solid rgba(121, 0, 225, 0.25)', width: 'fit-content' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#4A00E1' }} />
              <span style={{ color: '#4A00E1', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Official Microsoft AI Deployment
              </span>
            </div>

            <h1 style={{ fontSize: '50px', fontWeight: 900, lineHeight: 1.12, letterSpacing: '-1px', margin: 0, color: '#000000' }}>
              Turn Microsoft 365 Copilot into real <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>Growth.</span>
            </h1>

            <p style={{ fontSize: '18px', color: '#64748B', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              Empower your Australian workforce with certified Microsoft Copilot adoption, custom Copilot Studio autonomous agents, and enterprise data governance with zero pipeline risk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 style={{ width: '15px', height: '15px', color: '#4A00E1' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Free 30-min strategy session directly with certified Australian solutions architects</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 style={{ width: '15px', height: '15px', color: '#4A00E1' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Zero data leakage guarantee with automated Microsoft Purview DLP & RBAC audits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 style={{ width: '15px', height: '15px', color: '#4A00E1' }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Fixed-scope 14-day production pilot with transparent SLA guarantees</span>
              </div>
            </div>
          </div>

          <div id="lead-form" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '28px', padding: '36px', boxShadow: '0 24px 48px rgba(0, 0, 0, 0.08)' }}>
            <div style={{ marginBottom: '22px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#4A00E1', textTransform: 'uppercase', letterSpacing: '1px' }}>Priority Response Within 1 Business Day</span>
              <h3 style={{ fontSize: '26px', fontWeight: 900, margin: '6px 0 4px 0', color: '#000000', letterSpacing: '-0.5px' }}>Get Started with Copilot</h3>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Book your private executive briefing with Australian Microsoft specialists</p>
            </div>

            <form action="/api/submit-lead" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="hidden" name="campaign" value="raven-copilot-studio-ai" />

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#334155', marginBottom: '6px', letterSpacing: '0.5px' }}>Full Name *</label>
                <input type="text" name="fullName" required placeholder="Alex Morgan" style={{ width: '100%', height: '46px', borderRadius: '12px', border: '1px solid #CBD5E1', padding: '0 16px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#334155', marginBottom: '6px', letterSpacing: '0.5px' }}>Work Email *</label>
                <input type="email" name="workEmail" required placeholder="alex@company.com.au" style={{ width: '100%', height: '46px', borderRadius: '12px', border: '1px solid #CBD5E1', padding: '0 16px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#334155', marginBottom: '6px', letterSpacing: '0.5px' }}>Phone Number *</label>
                <input type="tel" name="phoneNumber" required placeholder="0400 000 000" style={{ width: '100%', height: '46px', borderRadius: '12px', border: '1px solid #CBD5E1', padding: '0 16px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#334155', marginBottom: '6px', letterSpacing: '0.5px' }}>Company Size *</label>
                  <select name="companySize" required style={{ width: '100%', height: '46px', borderRadius: '12px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
                    <option value="">Select size...</option>
                    <option value="1-50">1 - 50 staff</option>
                    <option value="51-200">51 - 200 staff</option>
                    <option value="201-1000">201 - 1,000</option>
                    <option value="1000+">1,000+ enterprise</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#334155', marginBottom: '6px', letterSpacing: '0.5px' }}>Primary Goal *</label>
                  <select name="primaryGoal" required style={{ width: '100%', height: '46px', borderRadius: '12px', border: '1px solid #CBD5E1', padding: '0 12px', fontSize: '13px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
                    <option value="">Select goal...</option>
                    <option value="Adoption Training">Team Adoption</option>
                    <option value="Security Governance">Security & Purview</option>
                    <option value="Copilot Studio Agents">Custom Agents</option>
                    <option value="License Audit">Licensing Audit</option>
                  </select>
                </div>
              </div>

              <button type="submit" style={{ backgroundColor: '#4A00E1', color: '#FFFFFF', height: '52px', borderRadius: '9999px', border: 'none', fontWeight: 800, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(74, 0, 225, 0.32)', marginTop: '6px' }}>
                <span>Get Started</span>
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </button>
            </form>

            <p style={{ fontSize: '12px', textAlign: 'center', color: '#94A3B8', marginTop: '16px', marginBottom: 0 }}>
              Free 30-minute session • Direct with certified Australian engineers • No obligation
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive App Showcase / Preview Mockup Banner */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 80px 24px' }}>
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '32px', padding: '36px', boxShadow: '0 20px 48px rgba(0, 0, 0, 0.06)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingBottom: '24px', borderBottom: '1px solid #F1F5F9' }}>
            {mockupTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveMockupTab(idx)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  border: idx === activeMockupTab ? '1px solid #4A00E1' : '1px solid #E2E8F0',
                  backgroundColor: idx === activeMockupTab ? '#F3E8FF' : '#FFFFFF',
                  color: idx === activeMockupTab ? '#4A00E1' : '#64748B',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{tab.id}</span>
                <span>•</span>
                <span>{tab.app}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', paddingTop: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#4A00E1', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {mockupTabs[activeMockupTab].app}
              </span>
              <h3 style={{ fontSize: '32px', fontWeight: 900, color: '#000000', margin: 0, lineHeight: 1.2 }}>
                {mockupTabs[activeMockupTab].title}
              </h3>
              <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                Certified prompt workflows and agent integrations designed to deliver immediate time savings for your business.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', width: 'fit-content' }}>
                <Sparkles style={{ width: '16px', height: '16px', color: '#4A00E1' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B' }}>{mockupTabs[activeMockupTab].metric}</span>
              </div>
            </div>

            <div style={{ backgroundColor: '#0F172A', borderRadius: '20px', padding: '24px', color: '#FFFFFF', boxShadow: '0 16px 36px rgba(15, 23, 42, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '9999px', backgroundColor: '#10B981' }} />
                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#94A3B8', marginLeft: '8px' }}>Copilot Enterprise Session • Active</span>
              </div>

              <div style={{ paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '12px', color: '#A78BFA', fontWeight: 700 }}>Prompt:</span>
                  <span style={{ fontSize: '13px', color: '#E2E8F0' }}>&ldquo;{mockupTabs[activeMockupTab].prompt}&rdquo;</span>
                </div>

                <div style={{ backgroundColor: '#1E293B', borderRadius: '14px', padding: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#34D399' }} />
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#FFFFFF' }}>{mockupTabs[activeMockupTab].snippetTitle}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                    {mockupTabs[activeMockupTab].snippetContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrated Logo Cloud Bar */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '40px 24px', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Seamlessly integrated into the tools your Australian enterprise relies on
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <img src="https://cdn.simpleicons.org/microsoft" alt="Microsoft 365" style={{ height: '22px' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>Microsoft 365</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <img src="https://cdn.simpleicons.org/microsoftteams" alt="Teams" style={{ height: '22px' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>Microsoft Teams</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <Workflow style={{ width: '22px', height: '22px', color: '#0066FF' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>Power Automate</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <Layers style={{ width: '22px', height: '22px', color: '#742774' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>Power Platform</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <img src="https://cdn.simpleicons.org/microsoftazure" alt="Azure" style={{ height: '22px' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>Azure OpenAI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.85 }}>
              <Database style={{ width: '22px', height: '22px', color: '#008272' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#334155' }}>SharePoint Syntex</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-Stage Interactive Adoption Stepper */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8F9FE' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Proven Adoption Framework</span>
            <h2 style={{ fontSize: '40px', fontWeight: 900, margin: '8px 0 12px 0', color: '#000000', letterSpacing: '-0.5px' }}>
              Our 5-Stage <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>Deployment Roadmap.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>
              A structured, predictable implementation model engineered by Australian specialists to eliminate risk and maximize immediate ROI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
            {roadmapSteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 0'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '9999px',
                    backgroundColor: idx === activeStep ? '#4A00E1' : '#FFFFFF',
                    color: idx === activeStep ? '#FFFFFF' : '#64748B',
                    border: idx === activeStep ? '4px solid #F3E8FF' : '1px solid #CBD5E1',
                    boxShadow: idx === activeStep ? '0 8px 18px rgba(74, 0, 225, 0.3)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px',
                    fontWeight: 800
                  }}
                >
                  {step.num}
                </div>
                <span style={{ fontSize: '13px', fontWeight: idx === activeStep ? 800 : 600, color: idx === activeStep ? '#4A00E1' : '#64748B' }}>
                  {step.name}
                </span>
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '28px', padding: '40px', boxShadow: '0 20px 48px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '9999px', backgroundColor: '#F3E8FF', color: '#4A00E1', fontSize: '11px', fontWeight: 800, marginBottom: '12px' }}>
                  STAGE {roadmapSteps[activeStep].num} • {roadmapSteps[activeStep].badge}
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#000000', margin: '0 0 14px 0' }}>
                  {roadmapSteps[activeStep].title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                  {roadmapSteps[activeStep].desc}
                </p>
                <a href="#lead-form" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '12px 26px', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                  <span>Deploy Stage {roadmapSteps[activeStep].num}</span>
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </a>
              </div>

              <div style={{ backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '28px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
                  Guaranteed Deliverables
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {roadmapSteps[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '9999px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircle2 style={{ width: '14px', height: '14px', color: '#4A00E1' }} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 8-Card Rich Capabilities Grid */}
      <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Full Service Spectrum</span>
            <h2 style={{ fontSize: '40px', fontWeight: 900, margin: '8px 0 12px 0', color: '#000000', letterSpacing: '-0.5px' }}>
              Engineered for <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>Rapid Autonomous Scale.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>
              Structured adoption and engineering modules that prevent security debt, employee hesitation, and underutilized licenses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {capabilityCards.map((c) => (
              <div
                key={c.id}
                style={{
                  backgroundColor: '#F8F9FE',
                  border: '1px solid #E2E8F0',
                  borderRadius: '24px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {c.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#4A00E1' }}>{c.id}</span>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#000000', margin: 0 }}>{c.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Centered Client Testimonial Carousel */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8F9FE', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Verified Client Proof</span>
          <h2 style={{ fontSize: '36px', fontWeight: 900, margin: '8px 0 36px 0', color: '#000000' }}>
            Trusted by Leaders Across Australia
          </h2>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '32px', padding: '48px', boxShadow: '0 20px 48px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#1E293B', fontStyle: 'italic', margin: '0 0 28px 0', fontWeight: 500 }}>
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#000000' }}>{testimonials[activeTestimonial].author}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#4A00E1' }}>{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}</span>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>{testimonials[activeTestimonial].location}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                style={{ width: '40px', height: '40px', borderRadius: '9999px', backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ChevronLeft style={{ width: '20px', height: '20px', color: '#334155' }} />
              </button>

              <div style={{ display: 'flex', gap: '6px' }}>
                {testimonials.map((_, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => setActiveTestimonial(tIdx)}
                    style={{
                      height: '6px',
                      width: tIdx === activeTestimonial ? '28px' : '8px',
                      borderRadius: '9999px',
                      backgroundColor: tIdx === activeTestimonial ? '#4A00E1' : '#CBD5E1',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                style={{ width: '40px', height: '40px', borderRadius: '9999px', backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ChevronRight style={{ width: '20px', height: '20px', color: '#334155' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Split-Screen FAQ Accordion Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
          <div>
            <span style={{ color: '#4A00E1', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Enterprise Clarity</span>
            <h2 style={{ fontSize: '38px', fontWeight: 900, margin: '8px 0 16px 0', color: '#000000', letterSpacing: '-0.5px' }}>
              Frequently Asked <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 400, color: '#4A00E1' }}>Questions.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
              Everything Australian business leaders need to know about licensing, data privacy, and rollout timelines.
            </p>

            <div style={{ backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#000000' }}>Have specific technical questions?</span>
              <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Speak directly with our senior Australian solutions architecture team.</p>
              <a href="#lead-form" style={{ color: '#4A00E1', fontSize: '13px', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Schedule Consultation</span>
                <ArrowRight style={{ width: '14px', height: '14px' }} />
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} style={{ backgroundColor: '#F8F9FE', border: '1px solid #E2E8F0', borderRadius: '18px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === fIdx ? -1 : fIdx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#000000', paddingRight: '12px' }}>{faq.q}</span>
                  {openFaq === fIdx ? (
                    <ChevronUp style={{ width: '20px', height: '20px', color: '#4A00E1', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown style={{ width: '20px', height: '20px', color: '#64748B', flexShrink: 0 }} />
                  )}
                </button>
                {openFaq === fIdx && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Bottom High-Conversion Hero Banner */}
      <section style={{ backgroundColor: '#18181B', color: '#FFFFFF', padding: '80px 24px', borderTop: '1px solid #27272A' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Ready to unlock real enterprise growth?
          </span>
          <h2 style={{ fontSize: '42px', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>
            Deploy Microsoft Copilot with certified Australian specialists today.
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
            Join leading Australian enterprises who have automated operations, locked down data security, and delivered 5.4+ hours saved per employee each week.
          </p>
          <a href="#lead-form" style={{ backgroundColor: '#4A00E1', color: '#FFFFFF', padding: '14px 36px', borderRadius: '9999px', fontSize: '15px', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(74, 0, 225, 0.4)' }}>
            <span>Book Your Free 30-Min Strategy Session</span>
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </a>
        </div>
      </section>

      {/* 10. Legal & Compliant Footer */}
      <footer style={{ backgroundColor: '#0F172A', color: '#94A3B8', borderTop: '1px solid #1E293B', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="20" fill="#4A00E1" />
                <path d="M30 22H56C68 22 78 32 78 44C78 53 73 60 65 64L76 78H60L50 65H44V78H30V22ZM44 35V52H55C59 52 63 48 63 44C63 40 59 36 55 36L44 35Z" fill="white" />
              </svg>
              <span style={{ fontWeight: 800, fontSize: '20px', color: '#FFFFFF' }}>
                Raven <span style={{ color: '#A78BFA' }}>Labs</span>
              </span>
            </div>

            <div style={{ display: 'flex', gap: '22px', fontSize: '13px', fontWeight: 600, color: '#94A3B8' }}>
              <a href="tel:1300305009" style={{ color: '#E2E8F0', textDecoration: 'none' }}>1300 305 009</a>
              <span>•</span>
              <a href="mailto:info@ravenlabs.com.au" style={{ color: '#E2E8F0', textDecoration: 'none' }}>info@ravenlabs.com.au</a>
              <span>•</span>
              <a href="https://theravenlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E2E8F0', textDecoration: 'none' }}>theravenlabs.com</a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', fontSize: '12px', color: '#64748B' }}>
            <p style={{ margin: 0 }}>© 2026 Raven Labs Australia. Level 4, 150 Collins St, Melbourne VIC 3000 | Sydney Operations.</p>
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