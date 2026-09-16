'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, Target, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export interface StepItem {
  num: string;
  name: string;
  title: string;
  desc: string;
  timeline?: string;
  deliverables?: string[];
}

const defaultSteps: StepItem[] = [
  {
    num: "01",
    name: "Assess",
    title: "Diagnostic Audit & Architecture Review",
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

export function ProcessStepper({
  tag = "Implementation Framework",
  headline = "5 Stages from Day One to Compounded ROI.",
  subhead = "A battle-tested deployment methodology that guarantees full adoption and zero pipeline downtime.",
  steps = defaultSteps
}: {
  tag?: string;
  headline?: string;
  subhead?: string;
  steps?: StepItem[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = steps[activeIdx] || steps[0];

  return (
    <section className="py-20 bg-[#F8F9FE] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E8FF] text-[#4A00E1] text-xs font-bold uppercase tracking-wider font-['Poppins']">
            {tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins']">
            {headline}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Quicksand'] leading-relaxed">
            {subhead}
          </p>
        </div>

        {/* Stepper Timeline Navigation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Connecting Track Line */}
          <div className="hidden sm:block absolute top-7 left-10 right-10 h-0.5 bg-slate-200 -z-0" />

          <div className={`grid grid-cols-2 sm:grid-cols-${steps.length} gap-4 sm:gap-6 relative z-10 justify-items-center`}>
            {steps.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="group flex flex-col items-center cursor-pointer transition-all duration-200 focus:outline-none"
                >
                  {/* Circular Node */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                      isActive
                        ? "bg-[#4A00E1] text-white ring-4 ring-[#4A00E1]/20 shadow-xl scale-110"
                        : "bg-white border-2 border-slate-200 text-slate-600 group-hover:border-[#4A00E1] group-hover:text-[#4A00E1] shadow-sm"
                    } font-['Poppins']`}
                  >
                    {step.num}
                  </div>

                  {/* Stage Label */}
                  <span
                    className={`mt-2.5 text-xs sm:text-sm font-bold transition-colors font-['Poppins'] ${
                      isActive ? "text-[#4A00E1]" : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {step.name}
                  </span>

                  {/* Active Underline Pill */}
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 mt-1.5 ${
                      isActive ? "w-8 bg-[#4A00E1]" : "w-0 bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Detail Card */}
        <div className="bg-white border border-slate-200/90 shadow-xl rounded-[28px] p-6 sm:p-10 max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F3E8FF] text-[#4A00E1] font-['Poppins']">
                Stage {current.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
                {current.title}
              </h3>
            </div>
            {current.timeline && (
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 font-['Poppins'] bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#4A00E1]" />
                <span>{current.timeline}</span>
              </div>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-['Quicksand'] font-medium">
            {current.desc}
          </p>

          {current.deliverables && current.deliverables.length > 0 && (
            <div className="pt-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 font-['Poppins']">
                Stage Deliverables & Verification
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.deliverables.map((deliv, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-2xl bg-[#F8F9FE] border border-slate-200/80 flex items-start gap-2.5 hover:border-[#4A00E1]/30 transition-colors"
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
