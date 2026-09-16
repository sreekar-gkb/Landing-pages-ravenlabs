import type { Metadata } from 'next';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Phone,
  Layers,
  Lock,
  Workflow,
  BarChart3,
  HelpCircle,
} from 'lucide-react';
import { RavenLabsLogo } from '@/components/RavenLabsLogo';
import LeadForm from '@/components/LeadForm';
import { ShowcaseSimulation } from '@/components/ShowcaseSimulation';
import { ProcessStepper } from '@/components/ProcessStepper';
import { FeatureGrid } from '@/components/FeatureGrid';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import Accordion from '@/components/Accordion';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Microsoft Copilot Implementation Australia | Raven Labs',
  description:
    'Deploy Microsoft 365 Copilot with certified Australian enterprise engineers. Zero downtime rollout, role-based enablement, and guaranteed team adoption.',
};

export default function MicrosoftCopilotPage() {
  const faqItems = [
    {
      q: "How does Raven Labs guarantee 99%+ user adoption?",
      a: "Rather than generic technical training, we conduct role-specific enablement sessions with custom prompt playbooks tailored to your sales, finance, operations, and leadership workflows."
    },
    {
      q: "How long does a standard enterprise rollout take?",
      a: "Our structured 5-stage deployment framework takes most mid-market and enterprise organizations from initial diagnostic audit to full company-wide production rollout in 4 to 6 weeks."
    },
    {
      q: "How is our sensitive enterprise data protected?",
      a: "Microsoft Copilot operates strictly within your Microsoft 365 tenant boundary. Raven Labs implements strict data loss prevention (DLP), sensitivity labels, and role-based access control (RBAC) to ensure total sovereign data governance."
    },
    {
      q: "Are all support and implementation engineers based in Australia?",
      a: "Yes. 100% of our implementation team, solution architects, and support engineers are located in Melbourne and Sydney, providing direct support during Australian business hours."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FE] text-slate-900 font-['Quicksand'] selection:bg-[#4A00E1] selection:text-white">
      {/* 1. Co-branded Sticky Glass Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <RavenLabsLogo
            partnerName="Microsoft Partner"
            partnerLogo="https://cdn.simpleicons.org/microsoft"
          />

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:1300305009"
              className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#4A00E1] transition font-['Poppins']"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A00E1]" />
              <span>1300 305 009</span>
            </a>

            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#4A00E1] hover:bg-[#6400E1] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#4A00E1]/20 transition-all font-['Poppins'] group"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section (58% / 42%) */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-ambient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy (7 cols = ~58%) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pulsing Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#4A00E1]/20 shadow-xs text-xs font-bold text-[#4A00E1] font-['Poppins']">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A00E1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A00E1]" />
                </span>
                <span>Raven Labs Certified Enterprise Implementation</span>
              </div>

              {/* H1 with Playfair Italic Serif Accent */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-['Poppins'] leading-[1.1]">
                Deploy Microsoft Copilot{' '}
                <span className="font-serif italic font-normal text-[#4A00E1]">
                  with zero pipeline downtime.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-['Quicksand'] max-w-2xl">
                Eliminate licensing waste and workflow confusion. Our certified Australian engineers design, secure, and roll out Copilot with role-specific enablement that drives 99.4% team adoption.
              </p>

              {/* 3 Benefit Checks */}
              <div className="pt-2 space-y-3">
                {[
                  "Microsoft-certified Australian engineers on-site & remote",
                  "Strict data governance, DLP & sovereign Australian compliance",
                  "Role-based prompt engineering playbooks for immediate productivity"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A00E1]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 font-['Quicksand']">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Metrics Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Poppins']">50+</div>
                  <div className="text-[11px] text-slate-500 font-['Quicksand']">Enterprise Rollouts</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#4A00E1] font-['Poppins']">99.4%</div>
                  <div className="text-[11px] text-slate-500 font-['Quicksand']">User Adoption Rate</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-['Poppins']">100%</div>
                  <div className="text-[11px] text-slate-500 font-['Quicksand']">Australian Specialists</div>
                </div>
              </div>
            </div>

            {/* Right Lead Capture Form (5 cols = ~42%) */}
            <div className="lg:col-span-5">
              <LeadForm
                campaign="test-microsoft-copilot"
                title="Book Your Copilot Demo"
                subhead="Free 30-minute architecture & readiness session with certified Australian engineers."
                buttonText="Schedule Readiness Session"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. macOS Showcase Simulation Banner */}
      <ShowcaseSimulation
        promptChip="Ask Copilot: 'Summarize deal pipeline bottlenecks and generate Q4 executive briefing'"
        systemStatus="Raven Labs Microsoft 365 Copilot Engine Active"
        automations={[
          {
            title: "Automated Meeting Intelligence",
            desc: "Transcribe executive Teams calls, distill key action items, and sync tasks directly to Dynamics 365.",
            metric: "8.4 hrs",
            metricLabel: "Saved per manager / week",
            tag: "Teams + CRM"
          },
          {
            title: "Executive Pipeline Briefings",
            desc: "Auto-synthesize multi-source revenue spreadsheets and generate formatted slide decks in seconds.",
            metric: "5.2x",
            metricLabel: "Faster reporting cycle",
            tag: "Excel + PowerPoint"
          },
          {
            title: "Sovereign DLP Governance",
            desc: "Strict tenant-level permission boundaries ensuring sensitive financial and HR files remain locked.",
            metric: "100%",
            metricLabel: "Audit compliance",
            tag: "Security Hardened"
          }
        ]}
      />

      {/* 4. Ecosystem Integration Strip */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-500 font-['Poppins']">
            Seamlessly Integrated Across Your Microsoft Stack
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            {[
              { name: "Microsoft Teams", logo: "https://cdn.simpleicons.org/microsoftteams" },
              { name: "Microsoft Outlook", logo: "https://cdn.simpleicons.org/microsoftoutlook" },
              { name: "Microsoft Excel", logo: "https://cdn.simpleicons.org/microsoftexcel" },
              { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi" },
              { name: "SharePoint", logo: "https://cdn.simpleicons.org/microsoft" }
            ].map((tool, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#F8F9FE] border border-slate-200/80 hover:border-[#4A00E1]/30 transition-all hover:scale-105 shadow-2xs"
              >
                <img src={tool.logo} alt={tool.name} className="h-7 w-auto object-contain" />
                <span className="text-xs font-bold text-slate-700 font-['Poppins']">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 2x2 Adoption Challenge vs Solution Grid */}
      <section className="py-20 bg-[#F8F9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
              Why Traditional Rollouts Fail
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-['Poppins']">
              The Raven Labs <span className="font-serif italic font-normal text-[#4A00E1]">Adoption Advantage.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-['Quicksand']">
              Most AI initiatives fail due to lack of workflow integration and unstructured training. Here is how we fix it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Lock,
                title: "Security & Over-Permissioning Risk",
                desc: "Copilot can expose sensitive data if permissions aren't properly configured. Raven Labs audits and locks down SharePoint and OneDrive boundaries before launch."
              },
              {
                icon: Users,
                title: "Low User Adoption & License Waste",
                desc: "Purchasing licenses without role-specific training leads to shelfware. We build department-tailored prompt playbooks for immediate team productivity."
              },
              {
                icon: Workflow,
                title: "Unintegrated Workflow Bottlenecks",
                desc: "Using AI in silos produces fragmented results. We connect Copilot to your CRM, ERP, and communication channels for autonomous end-to-end execution."
              },
              {
                icon: BarChart3,
                title: "Lack of Measurable ROI Telemetry",
                desc: "Executives need proof of ROI. We configure usage analytics dashboards to measure time saved, prompt effectiveness, and task completion rates."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4 hover:border-[#4A00E1]/40 transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-['Poppins']">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-['Quicksand']">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Interactive 5-Stage Process Stepper */}
      <ProcessStepper />

      {/* 7. 4-Column Photo Feature Grid */}
      <FeatureGrid />

      {/* 8. Testimonial Pull-Quote Carousel */}
      <TestimonialCarousel />

      {/* 9. 2-Column FAQ Section */}
      <section className="py-20 bg-[#F8F9FE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column Reassurance Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
                FAQ & Support
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-['Poppins']">
                Frequently Asked <span className="font-serif italic font-normal text-[#4A00E1]">Questions.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-['Quicksand']">
                Everything you need to know about enterprise Microsoft Copilot deployment with Raven Labs.
              </p>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#4A00E1]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-['Poppins']">Direct Australian Support</h4>
                    <p className="text-xs text-slate-500 font-['Quicksand']">Certified engineers on call</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-['Quicksand']">
                  Speak directly with a Melbourne-based implementation lead today to evaluate your readiness.
                </p>
                <a
                  href="tel:1300305009"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#4A00E1] hover:underline font-['Poppins']"
                >
                  <span>Call 1300 305 009</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column Accordions */}
            <div className="lg:col-span-7">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Direct Contact Pre-Footer & Legal Footer */}
      <Footer
        ctaHeadline="Ready to roll out Microsoft Copilot with zero downtime?"
        ctaSubhead="Schedule your 30-minute technical readiness assessment with certified Australian engineers today."
        buttonText="Book Readiness Session"
        formId="#lead-form"
      />
    </main>
  );
}
