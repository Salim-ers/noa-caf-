'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useConsent from './useConsent';
import { writeConsent, YES, NO } from '@/lib/consent';
import { P } from '@/lib/data';

/* Le bandeau cookies, et il fait vraiment quelque chose.

   Depuis que les plans viennent de Google Maps, le site dépose des
   traceurs tiers — donc la question doit être posée avant, pas
   après. Tant qu'on n'a pas répondu, aucun cadre Google n'est
   chargé : le pied de page et la page Venir affichent l'adresse et
   un bouton à la place.

   La photo est le cookie de NOA. C'est la blague, et c'est aussi la
   seule illustration honnête du sujet. */

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
        <Image
          src={P.cookie.src}
          alt=""
          width={160}
          height={160}
          sizes="160px"
          quality={80}
        />
      </div>

      <div className="ck-txt">
        <p className="ck-h">Parlons cookies.</p>
        <p>
          Les nôtres sortent du four, chocolat noir et fleur de sel, à 3,50 €.
          Ceux dont on doit vous parler viennent de Google Maps et servent à
          vous suivre. Tant que vous n’avez rien dit, le plan ne se charge pas.
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
