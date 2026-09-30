'use client';
import { useEffect, useState } from 'react';
export function ThanksName() {
  const [n, setN] = useState('');
  useEffect(() => { try { setN(sessionStorage.getItem('lp_first_name') || ''); } catch {} }, []);
  return n ? <>, {n}</> : null;
}
