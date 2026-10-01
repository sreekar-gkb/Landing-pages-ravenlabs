'use client';
// Minimal stand-in for @radix-ui/react-accordion (same Root/Item/Header/Trigger/Content API, single mode).
import { createContext, useContext, useState, type ReactNode } from 'react';
const Ctx = createContext<{ open: string | null; set: (v: string | null) => void; collapsible?: boolean }>({ open: null, set: () => {} });
const ItemCtx = createContext('');
export function Root({ defaultValue, collapsible, children }: { type?: string; collapsible?: boolean; defaultValue?: string; children: ReactNode }) {
  const [open, set] = useState<string | null>(defaultValue ?? null);
  return <Ctx.Provider value={{ open, set, collapsible }}><div>{children}</div></Ctx.Provider>;
}
export function Item({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  const { open } = useContext(Ctx);
  return <ItemCtx.Provider value={value}><div className={className} data-state={open === value ? 'open' : 'closed'}>{children}</div></ItemCtx.Provider>;
}
export function Header({ children }: { children: ReactNode }) { return <h3>{children}</h3>; }
export function Trigger({ className, children }: { className?: string; children: ReactNode }) {
  const { open, set, collapsible } = useContext(Ctx); const v = useContext(ItemCtx); const isOpen = open === v;
  return <button type="button" className={className} aria-expanded={isOpen} aria-controls={`acc-${v}`} data-state={isOpen ? 'open' : 'closed'}
    onClick={() => set(isOpen ? (collapsible ? null : v) : v)}>{children}</button>;
}
export function Content({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useContext(Ctx); const v = useContext(ItemCtx); const isOpen = open === v;
  return <div id={`acc-${v}`} role="region" hidden={!isOpen} data-state={isOpen ? 'open' : 'closed'} className={className}>{children}</div>;
}
