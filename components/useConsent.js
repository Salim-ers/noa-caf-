'use client';
import { useEffect, useState } from 'react';
import { EVENT, readConsent } from '@/lib/consent';

/* undefined tant que le navigateur n'a pas lu le stockage, puis
   null si rien n'a été choisi, sinon 'yes' ou 'no'. La distinction
   compte : elle évite d'ouvrir le bandeau pendant le premier rendu,
   avant de savoir si la question a déjà été posée. */
export default function useConsent() {
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    setValue(readConsent());
    const onChange = (e) => setValue(e.detail ?? readConsent());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  return value;
}
