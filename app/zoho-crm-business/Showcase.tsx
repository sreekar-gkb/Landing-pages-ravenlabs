'use client';
// Showcase for Zoho CRM: a four-stage pipeline board with one stalled deal and the automated follow-up.
// Raven Labs illustration of the outcome, not a copy of Zoho's UI. Demo data only, labelled "Illustrative data".
import { useState } from 'react';

type Stage = 'New' | 'Qualified' | 'Proposal' | 'Won';
type Deal = { id: string; name: string; owner: string; value: number; stage: Stage; note: string; stalled?: boolean };
const STAGES: Stage[] = ['New', 'Qualified', 'Proposal', 'Won'];
const DEALS: Deal[] = [
  { id: 'd1', name: 'Website enquiry: fit-out quote', owner: 'Priya', value: 18000, stage: 'New', note: 'Assigned to Priya by region. First-contact task due today.' },
  { id: 'd2', name: 'Referral: annual service plan', owner: 'Tom', value: 32000, stage: 'New', note: 'Referral source recorded. Intro email logged to the contact.' },
  { id: 'd3', name: 'Trade show lead: racking supply', owner: 'Mia', value: 54000, stage: 'Qualified', note: 'Discovery call booked. Budget and timing captured on the deal.' },
  { id: 'd4', name: 'Existing client: second site', owner: 'Tom', value: 76000, stage: 'Qualified', note: 'Linked to the parent account, so past orders are visible.' },
  { id: 'd5', name: 'Maintenance contract renewal', owner: 'Priya', value: 41000, stage: 'Proposal', stalled: true,
    note: 'Quote sent 9 days ago with no reply. Zoho CRM sends a reminder to the contact, creates a call task for Priya and flags the deal in the weekly report.' },
  { id: 'd6', name: 'Distributor onboarding pack', owner: 'Mia', value: 63000, stage: 'Proposal', note: 'Quote opened twice this week. Next step: pricing call on Thursday.' },
  { id: 'd7', name: 'Retainer: monthly advisory', owner: 'Tom', value: 28000, stage: 'Won', note: 'Won deal creates the invoice in Zoho Books and a kickoff task for delivery.' },
  { id: 'd8', name: 'Equipment servicing agreement', owner: 'Priya', value: 47000, stage: 'Won', note: 'Handed to delivery with the full deal history attached.' },
];
const aud = (n: number) => `$${n.toLocaleString('en-AU')}`;

export default function Showcase() {
  const [filter, setFilter] = useState<'All' | Stage>('All');
  const [sel, setSel] = useState('d5');
  const deal = DEALS.find((d) => d.id === sel)!;
  return (
    <div className="flex flex-col gap-4 p-4 text-left md:gap-5 md:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">Sales pipeline</div>
          <div className="flex items-center gap-2 text-sm text-[#52525B]"><span className="h-2 w-2 rounded-full bg-[#4A00E1] motion-safe:animate-pulse" />Select a deal to see what happens next.</div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-[#E5E5EA] px-3 py-1 text-xs font-medium text-[#52525B]">Illustrative data</span>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter pipeline by stage">
        {(['All', ...STAGES] as const).map((s) => (
          <button key={s} type="button" aria-pressed={filter === s} onClick={() => setFilter(s)}
            className={`min-h-[44px] rounded-full border px-4 text-sm font-medium transition ${filter === s ? 'border-[#4A00E1] bg-[#4A00E1] text-white' : 'border-[#E5E5EA] bg-white text-[#000000] hover:border-[#4A00E1]/40'}`}>{s}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
        {STAGES.map((st) => {
          const deals = DEALS.filter((d) => d.stage === st);
          const dim = filter !== 'All' && filter !== st;
          return (
            <div key={st} className={`flex flex-col gap-2 rounded-xl bg-[#F5F4FA] p-2.5 transition-opacity md:p-3 ${dim ? 'opacity-40' : ''}`}>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold">{st}</span>
                <span className="text-xs tabular-nums text-[#52525B]">{deals.length} deals</span>
              </div>
              <div className="text-xs font-semibold tabular-nums">{aud(deals.reduce((a, d) => a + d.value, 0))}</div>
              {deals.map((d) => {
                const on = d.id === sel;
                return (
                  <button key={d.id} type="button" aria-pressed={on} onClick={() => setSel(d.id)}
                    className={`flex min-h-[44px] flex-col gap-1 rounded-lg border p-2.5 text-left text-xs transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] ${d.stalled ? 'border-[#4A00E1] bg-[#F0EBFF]' : 'border-[#E5E5EA] bg-white'} ${on ? (d.stalled ? 'ring-2 ring-[#4A00E1]' : 'ring-2 ring-black') : ''}`}>
                    <span className="font-semibold leading-snug">{d.name}</span>
                    <span className="flex items-center justify-between gap-2 text-[#52525B]"><span>{d.owner}</span><span className="tabular-nums text-[#000000]">{aud(d.value)}</span></span>
                    {d.stalled && <span className="flex items-center gap-1.5 font-semibold text-[#4A00E1]"><span className="h-2 w-2 rounded-full bg-[#4A00E1] motion-safe:animate-pulse" />No activity in 9 days</span>}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 rounded-2xl bg-[#F5F4FA] p-4 md:flex-row md:items-center md:justify-between md:gap-7 md:p-5" aria-live="polite">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-semibold">{deal.name}</span>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${deal.stalled ? 'bg-[#4A00E1] text-white' : 'bg-white text-[#000000]'}`}>{deal.stalled ? 'Needs attention' : deal.stage}</span>
          </div>
          <p className="max-w-[640px] text-sm text-[#52525B]">{deal.note}</p>
        </div>
        <div className="text-[26px] font-semibold tabular-nums text-[#4A00E1]">{aud(deal.value)}</div>
      </div>
    </div>
  );
}
