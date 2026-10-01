'use client';
// app/<slug>/Showcase.tsx: the campaign's product-specific showcase visual (default export).
// This one is the approved Zoho IoT visual: live plant zones, one asset drifting out of range, and a detail panel.
// Approved on the design canvas (Sept 2026). Demo data only, labelled "Illustrative data".
import { useEffect, useState } from 'react';
import { useReducedMotion } from './_lp/motion';

type Zone = { id: string; name: string; alert?: boolean; asset: string; range: string; status: string; note: string; spark: string;
  rows: [string, (t: number) => string][] };
const w = (t: number, b: number, a: number, ph: number) => b + a * Math.sin(t * 0.9 + ph);
const ZONES: Zone[] = [
  { id: 'a', name: 'Line A packaging', asset: 'Conveyor motor', range: 'Normal range 35–48 °C', status: 'Normal', note: 'Within its normal range for the last 14 days.', spark: '0,44 30,42 60,45 90,43 120,44 150,41 180,43 210,42 240,44 270,42 300,43',
    rows: [['Conveyor motor', (t) => `${w(t, 41, 0.6, 0).toFixed(1)} °C`], ['Sealer', (t) => `${w(t, 182, 1.4, 1).toFixed(0)} °C`]] },
  { id: 'b', name: 'Line B filling', asset: 'Filler pump', range: 'Normal range 2.8–3.6 bar', status: 'Normal', note: 'Pressure steady across both shifts today.', spark: '0,40 30,43 60,41 90,44 120,40 150,42 180,45 210,41 240,43 270,40 300,42',
    rows: [['Filler pump', (t) => `${w(t, 3.2, 0.05, 2).toFixed(2)} bar`], ['Line speed', (t) => `${w(t, 118, 2, 0.5).toFixed(0)}/min`]] },
  { id: 'c', name: 'Cold store', asset: 'Room temp', range: 'Required 0–4 °C', status: 'Normal', note: 'Logged every minute for your food safety records.', spark: '0,46 30,45 60,47 90,44 120,46 150,45 180,43 210,46 240,45 270,44 300,46',
    rows: [['Room temp', (t) => `${w(t, 2.8, 0.1, 1).toFixed(1)} °C`], ['Door open', () => '0 min']] },
  { id: 'd', name: 'Compressor room', alert: true, asset: 'Compressor 2', range: 'Normal up to 7.1 mm/s', status: 'Rising', note: 'Rising for 42 minutes. A job is already in Zoho Desk for the on-shift technician.', spark: '0,64 25,62 50,65 75,60 100,61 125,57 150,58 175,52 200,45 225,38 250,30 275,23 300,16',
    rows: [['Compressor 2', (t) => `${w(t, 7.8, 0.08, 0).toFixed(1)} mm/s`], ['Compressor 1', (t) => `${w(t, 2.1, 0.05, 3).toFixed(1)} mm/s`]] },
  { id: 'e', name: 'Boiler house', asset: 'Flue temp', range: 'Normal range 150–180 °C', status: 'Normal', note: 'Gas use tracked per shift for energy reporting.', spark: '0,42 30,44 60,41 90,43 120,42 150,45 180,42 210,40 240,43 270,44 300,42',
    rows: [['Flue temp', (t) => `${w(t, 164, 1, 0).toFixed(0)} °C`], ['Gas use', (t) => `${w(t, 36, 0.8, 1).toFixed(1)} m³/h`]] },
  { id: 'f', name: 'Dispatch', asset: 'Forklift charger', range: 'Normal range 0–8 kW', status: 'Normal', note: 'Charging load moved to off-peak hours.', spark: '0,48 30,46 60,40 90,36 120,38 150,44 180,47 210,45 240,39 270,37 300,41',
    rows: [['Forklift charger', (t) => `${w(t, 6.4, 0.2, 2).toFixed(1)} kW`], ['Dock door 3', () => 'Closed']] },
];

export default function Showcase() {
  const [t, setT] = useState(0);
  const [sel, setSel] = useState('d');
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const i = setInterval(() => setT((x) => x + 1), 1500); return () => clearInterval(i); }, [reduce]);
  const z = ZONES.find((x) => x.id === sel)!;
  return (
    <div className="flex flex-col gap-4 p-4 text-left md:gap-5 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">Plant overview</div>
          <div className="flex items-center gap-2 text-sm text-[#52525B]"><span className="h-2 w-2 rounded-full bg-[#4A00E1] motion-safe:animate-pulse" />Live readings. Select a zone.</div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-[#E5E5EA] px-3 py-1 text-xs font-medium text-[#52525B]">Illustrative data</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3">
        {ZONES.map((zn) => {
          const on = zn.id === sel;
          return (
            <button key={zn.id} type="button" aria-pressed={on} onClick={() => setSel(zn.id)}
              className={`flex flex-col gap-2.5 rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] md:p-3.5 ${zn.alert ? 'border-[#4A00E1] bg-[#F0EBFF]' : 'border-[#E5E5EA] bg-white hover:border-[#4A00E1]/40'} ${on ? (zn.alert ? 'ring-2 ring-[#4A00E1]' : 'ring-2 ring-black') : ''}`}>
              <span className="text-sm font-semibold">{zn.name}</span>
              {zn.rows.map(([n, v], ri) => {
                const hot = zn.alert && n === zn.asset;
                // Mobile: primary reading only, label above value. sm+: both readings on one line each.
                return (
                  <span key={n} className={`${ri > 0 ? 'hidden sm:flex' : 'flex'} flex-col items-start gap-0.5 text-xs sm:flex-row sm:items-center sm:justify-between sm:gap-2 ${hot ? 'font-semibold text-[#4A00E1]' : 'text-[#52525B]'}`}>
                    <span className="flex items-center gap-1.5 whitespace-nowrap"><span className={`h-2 w-2 shrink-0 rounded-full ${hot ? 'bg-[#4A00E1] motion-safe:animate-[lp-pulse-ring_2s_ease-out_infinite]' : 'bg-black'}`} />{n}</span>
                    <span className={`whitespace-nowrap pl-3.5 tabular-nums sm:pl-0 ${hot ? '' : 'text-[#000000]'}`}>{v(t)}</span>
                  </span>
                );
              })}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 rounded-2xl bg-[#F5F4FA] p-4 md:grid md:grid-cols-[300px_minmax(0,1fr)] md:items-center md:gap-7 md:p-5">
        <div>
          <svg viewBox="0 0 300 80" className="h-20 w-full max-w-[300px]" role="img" aria-label={`${z.asset} trend over the last 90 minutes`}>
            {z.alert && <line x1="0" y1="30" x2="300" y2="30" stroke="#A1A1AA" strokeDasharray="4 4" />}
            <polyline key={z.id} points={z.spark} fill="none" stroke="#4A00E1" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" className="lp-draw motion-safe:animate-[lp-draw_1.8s_ease-out_.6s_forwards]" />
          </svg>
          <div className="flex justify-between text-xs text-[#52525B]"><span>90 min ago</span><span>Now</span></div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3"><span className="font-semibold">{z.asset}</span>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${z.alert ? 'bg-[#4A00E1] text-white' : 'bg-white text-[#000000]'}`}>{z.status}</span></div>
          <div className="flex flex-wrap items-baseline gap-2.5"><span className="text-[26px] font-semibold tabular-nums text-[#4A00E1]">{z.rows[0][1](t)}</span><span className="text-xs text-[#52525B]">{z.range}</span></div>
          <p className="text-sm text-[#52525B]">{z.note}</p>
        </div>
      </div>
    </div>
  );
}
