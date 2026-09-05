'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useConsent from './useConsent';
import { CookieDrawing } from './Glyph';
import { writeConsent, YES, NO } from '@/lib/consent';

/* Le bandeau cookies, et il fait vraiment quelque chose.

   Depuis que les plans viennent de Google Maps, le site dépose des
   traceurs tiers — donc la question doit être posée avant, pas
   après. Tant qu'on n'a pas répondu, aucun cadre Google n'est
   chargé : le pied de page et la page Venir affichent l'adresse et
   un bouton à la place.

   Le cookie est dessiné, pas photographié : la vraie photographie
   rendait la blague trop littérale, et un trait tient mieux à côté
   des autres dessins du site. */

export default function Consent() {
  const consent = useConsent();
  const [shown, setShown] = useState(false);

  /* on laisse passer l'écran d'ouverture avant de demander */
  useEffect(() => {
    if (consent !== null) return;
    const t = setTimeout(() => setShown(true), 2200);
    return () => clearTimeout(t);
  }, [consent]);

  if (consent !== null || !shown) return null;

  return (
    <aside className="ck" role="dialog" aria-label="Cookies">
      <div className="ck-shot">
        <CookieDrawing />
      </div>

      <div className="ck-txt">
        <p className="ck-h">Parlons cookies.</p>
        <p>
          Les nôtres sortent du four. Ceux-là viennent de Google Maps, se
          digèrent beaucoup moins bien, et servent surtout à vous suivre. Tant
          que vous n’avez rien dit, le plan ne se charge pas.
        </p>
        <p className="ck-more">
          <Link href="/cookies">Ce qu’ils font exactement</Link>
        </p>
      </div>

      <div className="ck-acts">
        <button type="button" className="ck-yes" onClick={() => writeConsent(YES)}>
          Accepter
        </button>
        <button type="button" className="ck-no" onClick={() => writeConsent(NO)}>
          Sans façon
        </button>
      </div>
    </aside>
  );
}
