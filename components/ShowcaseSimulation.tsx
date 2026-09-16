'use client';

import { Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface AutomationCard {
  title: string;
  desc: string;
  metric?: string;
  metricLabel?: string;
  tag?: string;
}

interface ShowcaseSimulationProps {
  promptChip?: string;
  automations?: AutomationCard[];
  systemStatus?: string;
}

export function ShowcaseSimulation({
  promptChip = 'Ask Copilot: "Generate quarterly executive forecast with pipeline risk flags"',
  automations = [
    {
      title: "Automated Lead Enrichment",
      desc: "Instantly score, enrich, and prioritize incoming inbound inquiries with verified firmographic data.",
      metric: "82%",
      metricLabel: "Time saved per rep",
      tag: "Active 24/7"
    },
    {
      title: "Real-Time Meeting Intelligence",
      desc: "Auto-extract action items, sentiment score customer feedback, and sync directly to enterprise CRM.",
      metric: "4.8x",
      metricLabel: "Faster deal follow-ups",
      tag: "Live Sync"
    },
    {
      title: "Autonomous Workflow Triggers",
      desc: "Route contracts, trigger approval hierarchies, and update stakeholders across Microsoft 365 stack.",
      metric: "99.4%",
      metricLabel: "Compliance accuracy",
      tag: "Verified"
    }
  ],
  systemStatus = "Raven Labs Enterprise Engine Active",
}: ShowcaseSimulationProps) {
  return (
    <section className="py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4A00E1]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6400E1]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* macOS Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/30" />
                <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30" />
              </div>
              <span className="text-xs font-mono font-medium text-slate-500 pl-2 border-l border-slate-200">
                {systemStatus}
              </span>
            </div>

            {/* Pulsing Prompt Pill */}
            <div className="px-4 py-1.5 rounded-full bg-[#F8F9FE] border border-[#4A00E1]/20 shadow-sm text-xs font-bold text-[#4A00E1] flex items-center gap-2 font-['Poppins']">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A00E1] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A00E1]" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#4A00E1]" />
              <span className="truncate max-w-[280px] sm:max-w-md">{promptChip}</span>
            </div>
          </div>

          {/* 3 Automation Simulation Cards */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {automations.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#F8F9FE] to-white border border-slate-200/80 hover:border-[#4A00E1]/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#4A00E1] font-['Poppins']">
                    Automation 0{idx + 1}
                  </span>
                  {item.tag && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-slate-900 text-lg font-['Poppins'] tracking-tight group-hover:text-[#4A00E1] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Quicksand']">
                  {item.desc}
                </p>

                {item.metric && (
                  <div className="pt-3 border-t border-slate-100 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 font-['Poppins']">
                      {item.metric}
                    </span>
                    <span className="text-xs text-slate-500 font-['Quicksand']">
                      {item.metricLabel}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
