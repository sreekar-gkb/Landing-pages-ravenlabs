'use client';
// GitHub Advanced Security showcase: an organisation's security overview.
// Select a repo, then an alert. Each alert shows where it was found and the fix path
// (Copilot Autofix, secret rotation or a Dependabot pull request). Resolving an alert updates the counts.
// A Raven Labs illustration of the outcome, not a copy of GitHub's interface. Demo data only.
import { useState } from 'react';

type Sev = 'Critical' | 'High' | 'Moderate' | 'Blocked';
type Alert = {
  id: string; tool: 'CodeQL' | 'Secret scanning' | 'Dependabot'; sev: Sev; title: string; where: string;
  before: string; after: string; action: string; done: string; note: string;
};
type Repo = { id: string; name: string; team: string; alerts: Alert[] };

const REPOS: Repo[] = [
  { id: 'pay', name: 'payments-api', team: 'Payments', alerts: [
    { id: 'p1', tool: 'CodeQL', sev: 'Critical', title: 'SQL query built from user input', where: 'src/orders/search.ts:42',
      before: "db.query(\"SELECT * FROM orders WHERE ref = '\" + req.query.ref + \"'\")", after: "db.query('SELECT * FROM orders WHERE ref = $1', [req.query.ref])",
      action: 'Apply suggested fix', done: 'Fix merged after review. Alert closed.', note: 'Copilot Autofix suggested a parameterised query. A developer reviews it before merge.' },
    { id: 'p2', tool: 'Secret scanning', sev: 'Blocked', title: 'Payment API key in a push', where: 'config/dev.env:3',
      before: 'PAYMENT_API_KEY=pay_live_••••••••••••', after: 'PAYMENT_API_KEY=  # now read from GitHub Actions secrets',
      action: 'Mark key rotated', done: 'Key rotated and moved to repository secrets.', note: 'Push protection stopped this commit before it reached GitHub.' },
    { id: 'p3', tool: 'Dependabot', sev: 'High', title: 'Vulnerable JWT library', where: 'package.json · jsonwebtoken',
      before: '"jsonwebtoken": "8.5.1"', after: '"jsonwebtoken": "9.0.2"',
      action: 'Merge Dependabot PR', done: 'Update merged. Tests passed.', note: 'Dependabot opened a pull request with the patched version.' },
  ] },
  { id: 'web', name: 'web-storefront', team: 'Digital', alerts: [
    { id: 'w1', tool: 'CodeQL', sev: 'High', title: 'Search term rendered as HTML', where: 'app/search/results.ts:18',
      before: 'results.innerHTML = term', after: 'results.textContent = term',
      action: 'Apply suggested fix', done: 'Fix merged after review. Alert closed.', note: 'Copilot Autofix suggested rendering the term as text.' },
    { id: 'w2', tool: 'Dependabot', sev: 'Moderate', title: 'Outdated HTTP client', where: 'package.json · axios',
      before: '"axios": "1.6.0"', after: '"axios": "1.7.4"',
      action: 'Merge Dependabot PR', done: 'Update merged. Tests passed.', note: 'Grouped with two other minor updates in one pull request.' },
  ] },
  { id: 'infra', name: 'infra-terraform', team: 'Platform', alerts: [
    { id: 'i1', tool: 'Secret scanning', sev: 'Critical', title: 'Cloud access key in history', where: 'modules/s3/main.tf · 2023 commit',
      before: 'access_key = "AKIA••••••••••••"', after: 'access_key = var.access_key  # from vault',
      action: 'Mark key rotated', done: 'Key revoked by Platform. Alert closed.', note: 'Found in a commit from 2023. The key must be revoked, not just deleted.' },
  ] },
  { id: 'app', name: 'mobile-app', team: 'Mobile', alerts: [] },
];

const sevStyle = (s: Sev, open: boolean) =>
  !open ? 'bg-white text-[#52525B] border border-[#E5E5EA]' :
  s === 'Critical' || s === 'Blocked' ? 'bg-[#4A00E1] text-white' : s === 'High' ? 'bg-black text-white' : 'bg-white text-[#000000] border border-[#E5E5EA]';

export default function Showcase() {
  const [repo, setRepo] = useState('pay');
  const [sel, setSel] = useState('p1');
  const [fixed, setFixed] = useState<Record<string, boolean>>({});
  const r = REPOS.find((x) => x.id === repo)!;
  const a = r.alerts.find((x) => x.id === sel) ?? r.alerts[0];
  const open = (rp: Repo) => rp.alerts.filter((x) => !fixed[x.id]).length;
  const total = REPOS.reduce((n, rp) => n + open(rp), 0);
  const pick = (id: string) => { setRepo(id); const first = REPOS.find((x) => x.id === id)!.alerts[0]; setSel(first ? first.id : ''); };

  return (
    <div className="flex flex-col gap-4 p-4 text-left md:gap-5 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">Security overview</div>
          <div className="flex items-center gap-2 text-sm text-[#52525B]">
            <span className="h-2 w-2 rounded-full bg-[#4A00E1] motion-safe:animate-pulse" />
            <span aria-live="polite"><span className="font-semibold tabular-nums text-[#000000]">{total}</span> open alerts. Select a repo.</span>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-[#E5E5EA] px-3 py-1 text-xs font-medium text-[#52525B]">Illustrative data</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
        {REPOS.map((rp) => {
          const on = rp.id === repo; const n = open(rp);
          const hot = rp.alerts.some((x) => !fixed[x.id] && (x.sev === 'Critical' || x.sev === 'Blocked'));
          return (
            <button key={rp.id} type="button" aria-pressed={on} onClick={() => pick(rp.id)}
              className={`flex min-h-[44px] flex-col gap-1.5 rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(86,0,224,.25)] md:p-3.5 ${hot ? 'border-[#4A00E1] bg-[#F0EBFF]' : 'border-[#E5E5EA] bg-white hover:border-[#4A00E1]/40'} ${on ? (hot ? 'ring-2 ring-[#4A00E1]' : 'ring-2 ring-black') : ''}`}>
              <span className="truncate font-mono text-[13px] font-semibold">{rp.name}</span>
              <span className="flex items-center justify-between gap-2 text-xs text-[#52525B]">
                <span>{rp.team}</span>
                <span className={`tabular-nums ${hot ? 'font-semibold text-[#4A00E1]' : 'text-[#000000]'}`}>{n === 0 ? 'Clear' : `${n} open`}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#F5F4FA] p-3 md:grid md:min-h-[270px] md:grid-cols-[280px_minmax(0,1fr)] md:gap-5 md:p-5">
        {r.alerts.length === 0 ? (
          <div className="col-span-2 flex flex-col items-center justify-center gap-2 py-10 text-center">
            <span className="text-base font-semibold">No open alerts in {r.name}</span>
            <span className="max-w-sm text-sm text-[#52525B]">Code scanning, secret scanning and Dependabot are on. New findings appear in pull requests before merge.</span>
          </div>
        ) : (<>
          <ul className="flex flex-col gap-2" aria-label={`Alerts in ${r.name}`}>
            {r.alerts.map((al) => {
              const on = al.id === a.id; const isOpen = !fixed[al.id];
              return (
                <li key={al.id}>
                  <button type="button" aria-pressed={on} onClick={() => setSel(al.id)}
                    className={`flex min-h-[44px] w-full flex-col gap-1 rounded-xl border bg-white p-3 text-left transition ${on ? 'border-[#4A00E1]' : 'border-[#E5E5EA] hover:border-[#4A00E1]/40'}`}>
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-xs text-[#52525B]">{al.tool}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${sevStyle(al.sev, isOpen)}`}>{isOpen ? al.sev : 'Resolved'}</span>
                    </span>
                    <span className={`text-sm font-semibold ${isOpen ? '' : 'text-[#52525B] line-through'}`}>{al.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {a && (
            <div className="flex min-w-0 flex-col gap-3 rounded-xl bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold">{a.title}</span>
                <span className="font-mono text-xs text-[#52525B]">{a.where}</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#E5E5EA] font-mono text-[12px] leading-5" role="img" aria-label={`Code change: before ${a.before}, after ${a.after}`}>
                <div className={`flex gap-2 overflow-x-auto whitespace-pre px-3 py-2 ${fixed[a.id] ? 'text-[#52525B] line-through' : 'bg-[#F0EBFF] text-[#000000]'}`}><span className="select-none text-[#4A00E1]">−</span>{a.before}</div>
                <div className="flex gap-2 overflow-x-auto whitespace-pre border-t border-[#E5E5EA] px-3 py-2 text-[#000000]"><span className="select-none font-semibold">+</span>{a.after}</div>
              </div>
              <p className="text-sm text-[#52525B]">{fixed[a.id] ? a.done : a.note}</p>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                {fixed[a.id] ? (
                  <button type="button" onClick={() => setFixed((f) => ({ ...f, [a.id]: false }))}
                    className="inline-flex h-11 items-center rounded-full border border-[#E5E5EA] px-5 text-sm font-medium transition hover:border-[#4A00E1]">Reset demo</button>
                ) : (
                  <button type="button" onClick={() => setFixed((f) => ({ ...f, [a.id]: true }))}
                    className="inline-flex h-11 items-center rounded-full bg-[#4A00E1] px-5 text-sm font-medium text-white transition hover:bg-[#3D00BA]">{a.action}</button>
                )}
                <span className="text-xs text-[#52525B]">{fixed[a.id] ? 'Resolved' : a.tool === 'CodeQL' ? 'Needs developer review' : a.tool === 'Secret scanning' ? 'Owner: ' + r.team : 'Checks passing'}</span>
              </div>
            </div>
          )}
        </>)}
      </div>
    </div>
  );
}
