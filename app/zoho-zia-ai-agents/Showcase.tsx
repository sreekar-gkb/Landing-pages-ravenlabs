'use client';
// Zia Agents showcase: four agents working across Zoho apps. The selected agent's run log shows
// each step, and sensitive steps wait for a person to approve them. Demo data, labelled
// "Illustrative data". Customer names are fictional.
import { useEffect, useState } from 'react';
import { useReducedMotion } from './_lp/motion';
import { Check, Clock, Pencil, ShieldCheck } from 'lucide-react';

type Step = { time: string; app: string; text: string; kind: 'done' | 'approval' };
type Agent = { id: string; name: string; app: string; base: number; rate: number; idle?: boolean; steps: Step[];
  approval?: { summary: string; draft: string; after: string } };

const AGENTS: Agent[] = [
  { id: 'invoice', name: 'Invoice chaser', app: 'Books', base: 7, rate: 0,
    steps: [
      { time: '09:02', app: 'Books', text: 'Found 3 invoices more than 14 days overdue', kind: 'done' },
      { time: '09:02', app: 'CRM', text: 'Checked each account for open disputes. None found', kind: 'done' },
      { time: '09:03', app: 'Books', text: 'Drafted a friendly reminder for Harbourside Fitouts, $4,280', kind: 'approval' },
    ],
    approval: { summary: 'Send payment reminder to Harbourside Fitouts', after: 'Reminder sent. Follow-up scheduled in 7 days',
      draft: 'Hi Sam, a quick reminder that invoice INV-2291 for $4,280 was due on 12 September. You can pay online using the link below. Let us know if anything is holding it up. Thanks, Accounts team' } },
  { id: 'followup', name: 'Follow-up agent', app: 'CRM', base: 18, rate: 1,
    steps: [
      { time: '08:40', app: 'CRM', text: 'Flagged 5 deals with no activity for 9+ days', kind: 'done' },
      { time: '08:41', app: 'CRM', text: 'Drafted next-step emails and assigned them to each rep', kind: 'done' },
      { time: '08:41', app: 'Projects', text: 'Created a kickoff task for the Coastline Dental deal marked won', kind: 'done' },
    ] },
  { id: 'triage', name: 'Ticket triage', app: 'Desk', base: 42, rate: 2,
    steps: [
      { time: '09:10', app: 'Desk', text: 'Categorised 12 new tickets: billing, access, delivery', kind: 'done' },
      { time: '09:10', app: 'Desk', text: 'Routed 2 urgent tickets to the on-call lead', kind: 'done' },
      { time: '09:11', app: 'Desk', text: 'Suggested replies for 7 common questions', kind: 'done' },
    ] },
  { id: 'stock', name: 'Stock reorder', app: 'Inventory', base: 3, rate: 0, idle: true,
    steps: [
      { time: '07:30', app: 'Inventory', text: 'Checked stock levels across 2 warehouses', kind: 'done' },
      { time: '07:31', app: 'Inventory', text: '4 items below reorder point. Draft purchase order prepared', kind: 'approval' },
    ],
    approval: { summary: 'Raise purchase order for 4 low-stock items', after: 'Purchase order PO-1187 sent to supplier',
      draft: 'PO draft: 40 × M8 anchor bolts, 25 × sealant cartridges, 12 × safety gloves (L), 6 × pallet wrap. Preferred supplier: Southern Industrial. Delivery to Warehouse 2.' } },
];

export default function Showcase() {
  const [sel, setSel] = useState('invoice');
  const [t, setT] = useState(0);
  const [state, setState] = useState<Record<string, 'pending' | 'editing' | 'approved'>>({ invoice: 'pending', stock: 'pending' });
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const i = setInterval(() => setT((x) => x + 1), 3000); return () => clearInterval(i); }, [reduce]);

  const agent = AGENTS.find((a) => a.id === sel)!;
  const st = state[agent.id];
  const status = (a: Agent) => (a.approval && state[a.id] !== 'approved') ? 'Needs approval' : a.idle ? 'Idle' : 'Running';

  return (
    <div className="flex flex-col gap-4 p-4 text-left md:gap-5 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">Agent activity</div>
          <div className="flex items-center gap-2 text-sm text-[#52525B]"><span className="h-2 w-2 rounded-full bg-[#4A00E1] motion-safe:animate-pulse" />Today. Select an agent.</div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-[#E5E5EA] px-3 py-1 text-xs font-medium text-[#52525B]">Illustrative data</span>
      </div>

      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)] md:gap-5">
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-1">
          {AGENTS.map((a) => {
            const on = a.id === sel; const s = status(a);
            return (
              <button key={a.id} type="button" aria-pressed={on} onClick={() => setSel(a.id)}
                className={`flex flex-col gap-1.5 rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] ${s === 'Needs approval' ? 'border-[#4A00E1] bg-[#F0EBFF]' : 'border-[#E5E5EA] bg-white hover:border-[#4A00E1]/40'} ${on ? (s === 'Needs approval' ? 'ring-2 ring-[#4A00E1]' : 'ring-2 ring-black') : ''}`}>
                <span className="flex items-center justify-between gap-2"><span className="text-sm font-semibold">{a.name}</span>
                  <span className="rounded-full bg-[#F5F4FA] px-2 py-0.5 text-[11px] font-medium text-[#52525B]">{a.app}</span></span>
                <span className={`flex items-center gap-1.5 text-xs ${s === 'Needs approval' ? 'font-semibold text-[#4A00E1]' : 'text-[#52525B]'}`}>
                  <span className={`h-2 w-2 shrink-0 rounded-full ${s === 'Needs approval' ? 'bg-[#4A00E1] motion-safe:animate-[lp-pulse-ring_2s_ease-out_infinite]' : s === 'Idle' ? 'bg-[#E5E5EA]' : 'bg-black'}`} />
                  {s} · <span className="tabular-nums">{a.base + a.rate * t}</span> tasks
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-[#F5F4FA] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="font-semibold">{agent.name}: run log</span>
            <span className="text-xs text-[#52525B]">Zoho {agent.app}</span>
          </div>
          <ol className="space-y-2">
            {agent.steps.map((s, i) => {
              const waiting = s.kind === 'approval' && st !== 'approved';
              return (
                <li key={i} className={`flex gap-3 rounded-xl p-3 text-sm ${waiting ? 'border border-[#4A00E1] bg-white' : 'bg-white'}`}>
                  <span className="w-11 shrink-0 tabular-nums text-[#52525B]">{s.time}</span>
                  <span className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="flex items-start gap-2">
                      {waiting ? <Clock size={16} className="mt-0.5 shrink-0 text-[#4A00E1]" aria-hidden="true" /> : <Check size={16} className="mt-0.5 shrink-0 text-[#000000]" aria-hidden="true" />}
                      <span className={waiting ? 'font-medium text-[#000000]' : ''}>{s.text}</span>
                    </span>
                    {waiting && agent.approval && (
                      <span className="flex flex-col gap-2">
                        {st === 'editing' && (
                          <span className="rounded-lg border border-[#E5E5EA] bg-[#F5F4FA] p-3 text-[13px] leading-5 text-[#52525B]">{agent.approval.draft}</span>
                        )}
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#4A00E1]"><ShieldCheck size={14} aria-hidden="true" />Waiting for your approval</span>
                          <span className="ml-auto flex gap-2">
                            <button type="button" onClick={() => setState({ ...state, [agent.id]: st === 'editing' ? 'pending' : 'editing' })}
                              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#E5E5EA] bg-white px-3.5 text-xs font-medium transition hover:border-[#4A00E1] hover:text-[#4A00E1]">
                              <Pencil size={13} aria-hidden="true" />{st === 'editing' ? 'Hide draft' : 'Review draft'}
                            </button>
                            <button type="button" onClick={() => setState({ ...state, [agent.id]: 'approved' })}
                              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#4A00E1] px-3.5 text-xs font-medium text-white transition hover:bg-[#3D00BA] active:scale-[.98]">
                              <Check size={13} aria-hidden="true" />Approve
                            </button>
                          </span>
                        </span>
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
            {agent.approval && st === 'approved' && (
              <li className="flex gap-3 rounded-xl bg-white p-3 text-sm motion-safe:animate-[fadeIn_.4s_ease-out]">
                <span className="w-11 shrink-0 tabular-nums text-[#52525B]">now</span>
                <span className="flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#4A00E1]" aria-hidden="true" />
                  <span><span className="font-medium">Approved by you.</span> {agent.approval.after}</span></span>
              </li>
            )}
          </ol>
          {agent.approval && st === 'approved' && (
            <button type="button" onClick={() => setState({ ...state, [agent.id]: 'pending' })} className="mt-3 text-xs font-medium text-[#52525B] underline-offset-4 hover:text-[#4A00E1] hover:underline">Reset demo</button>
          )}
        </div>
      </div>
    </div>
  );
}
