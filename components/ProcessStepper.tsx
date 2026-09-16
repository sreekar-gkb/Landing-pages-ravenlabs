'use client';

import { useState } from 'react';
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react';

interface Step {
  num: string;
  name: string;
  title: string;
  desc: string;
  timeline?: string;
  deliverables?: string[];
}

const defaultSteps: Step[] = [
  {
    num: "01",
    name: "Assess",
    title: "Technical Diagnostic & Readiness Audit",
    desc: "We evaluate existing software infrastructure, data architecture, security policies, and team workflows to establish clear benchmarks.",
    timeline: "Week 1",
    deliverables: ["Infrastructure & licensing review", "Security & data governance blueprint", "Measurable ROI & KPI roadmap"]
  },
  {
    num: "02",
    name: "Plan",
    title: "Architecture & Integration Strategy",
    desc: "Our certified engineers configure security controls, API connectors, role-based access, and pilot user groups with zero system downtime.",
    timeline: "Week 2",
    deliverables: ["Role-based access matrix", "Sandbox testing environment", "Executive change management plan"]
  },
  {
    num: "03",
    name: "Enable",
    title: "Role-Based Enablement & Training",
    desc: "Hands-on workshops tailored to executive, operational, and sales teams to accelerate immediate high-confidence adoption.",
    timeline: "Weeks 3-4",
    deliverables: ["Custom prompt & workflow playbooks", "Departmental training sessions", "Real-time user feedback loops"]
  },
  {
    num: "04",
    name: "Deploy",
    title: "Production Rollout & Go-Live",
    desc: "Seamless company-wide deployment with Australian specialist oversight, active telemetry monitoring, and instant support.",
    timeline: "Week 5",
    deliverables: ["Full enterprise activation", "24/7 Australian engineer support", "Adoption tracking telemetry"]
  },
  {
    num: "05",
    name: "Optimise",
    title: "Continuous Telemetry & ROI Scaling",
    desc: "Ongoing optimization reviews, capability updates, and performance tuning to ensure your investment compounds over time.",
    timeline: "Ongoing",
    deliverables: ["Monthly executive adoption reporting", "Workflow refinement sprints", "Quarterly feature roadmap reviews"]
  }
];

export function ProcessStepper({ steps = defaultSteps }: { steps?: Step[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = steps[activeIdx] || steps[0];

  return (
    <section className="py-20 bg-[#F8F9FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
            Implementation Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-['Poppins']">
            5 Stages from Day One to <span className="font-serif italic font-normal text-[#4A00E1]">Compounded ROI.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Quicksand']">
            A battle-tested deployment methodology that guarantees full adoption and zero pipeline downtime.
          </p>
        </div>

        {/* Stepper Buttons Bar */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-4 -z-0" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`group flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer text-center ${
                  idx === activeIdx
                    ? "bg-white shadow-xl border-2 border-[#4A00E1] scale-105"
                    : "bg-white/70 hover:bg-white border border-slate-200 shadow-sm"
                }`}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full text-xs font-bold flex items-center justify-center transition-all mb-2 ${
                    idx === activeIdx
                      ? "bg-[#4A00E1] text-white ring-4 ring-[#4A00E1]/20 shadow-md"
                      : "bg-slate-100 text-slate-600 group-hover:bg-[#F3E8FF] group-hover:text-[#4A00E1]"
                  } font-['Poppins']`}
                >
                  {step.num}
                </div>
                <span
                  className={`text-xs font-bold transition font-['Poppins'] ${
                    idx === activeIdx ? "text-[#4A00E1]" : "text-slate-700"
                  }`}
                >
                  {step.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Details Card */}
        <div className="bg-white border border-slate-200/90 shadow-xl rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F3E8FF] text-[#4A00E1] font-['Poppins']">
                Stage {current.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
                {current.title}
              </h3>
            </div>
            {current.timeline && (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 font-['Poppins'] bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#4A00E1]" />
                <span>{current.timeline}</span>
              </div>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-['Quicksand']">
            {current.desc}
          </p>

          {current.deliverables && (
            <div className="pt-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
                Stage Deliverables & Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.deliverables.map((deliv, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-xl bg-[#F8F9FE] border border-slate-200 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4A00E1] mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800 font-['Quicksand']">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
