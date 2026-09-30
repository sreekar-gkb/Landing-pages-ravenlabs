import { BarChart3, Boxes, ClipboardCheck, Lock, ShieldCheck, SlidersHorizontal, TriangleAlert, Users, Wrench } from 'lucide-react';
export const ICONS = { BarChart3, Boxes, ClipboardCheck, Lock, ShieldCheck, SlidersHorizontal, TriangleAlert, Users, Wrench } as const;
export type IconName = keyof typeof ICONS;
