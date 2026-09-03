'use client';
import { useState, useEffect } from 'react';
import { HOURS } from '@/lib/data';

/* Open / closed, computed in Paris time. Renders closed on the server
   then corrects on mount, so the markup never mismatches. */
export default function useNow() {
  const [t, setT] = useState(null);
  useEffect(() => {
    setT(new Date());
    const i = setInterval(() => setT(new Date()), 60000);
    return () => clearInterval(i);
  }, []);

  if (!t) return { idx: -1, open: null, today: null };
  const paris = new Date(t.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  const idx = (paris.getDay() + 6) % 7;
  const h = paris.getHours() + paris.getMinutes() / 60;
  const today = HOURS[idx];
  return { idx, open: h >= today.open[0] && h < today.open[1], today };
}
