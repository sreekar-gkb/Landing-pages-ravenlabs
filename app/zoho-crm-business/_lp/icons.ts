import { BarChart3, Clock, Compass, GraduationCap, Handshake, Layers, Link2, Settings, TrendingUp } from 'lucide-react';
export const ICONS = { BarChart3, Clock, Compass, GraduationCap, Handshake, Layers, Link2, Settings, TrendingUp } as const;
export type IconName = keyof typeof ICONS;
