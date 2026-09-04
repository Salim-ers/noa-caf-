'use client';
import useConsent from './useConsent';
import { writeConsent, YES } from '@/lib/consent';
import { SITE } from '@/lib/data';

/* Le plan ne part chez Google qu'une fois l'accord donné. Sans lui,
   la place est tenue par l'adresse et deux boutons : afficher le
   plan ici, ou partir directement sur l'itinéraire, qui ne charge
   rien tant qu'on ne clique pas.

   Le bouton « Afficher le plan » vaut accord : c'est le même choix
   que dans le bandeau, pris au moment où il sert. */

export default function MapFrame({ title, className = '' }) {
  const consent = useConsent();

  if (consent === YES) {
    return (
      <iframe
        className={className}
        src={SITE.map}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className={`mapoff ${className}`.trim()}>
      <p className="mapoff-a">
        {SITE.street}
        <br />
        {SITE.city}
      </p>
      <p className="mapoff-w">
        Le plan vient de Google, qui dépose des traceurs.
      </p>
      <p className="mapoff-b">
        <button type="button" onClick={() => writeConsent(YES)}>
          Afficher le plan
        </button>
        <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
          Itinéraire <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  );
}
