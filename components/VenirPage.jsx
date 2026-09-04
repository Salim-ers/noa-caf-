'use client';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import Hours from '@/components/Hours';
import { SITE, P } from '@/lib/data';

/* Refaite. L'ancienne page répétait mot pour mot le pied de page.
   Celle-ci répond aux questions qu'on se pose vraiment en chemin :
   à quoi ça ressemble depuis la rue, quelle sortie de métro, est-ce
   que c'est ouvert maintenant, est-ce que je peux venir avec le
   chien. Le plan est grand, pas une vignette. */

const ACCESS = [
  ['Métro', 'Jourdain ou Pyrénées, ligne 11'],
  ['Quartier', 'Jourdain, à deux pas des Buttes-Chaumont'],
  ['Chiens', 'Bienvenus, en salle comme en terrasse'],
  ['Ordinateurs', 'En semaine oui. Le week-end, on les laisse fermés'],
];

export default function VenirPage() {
  return (
    <div className="page venir">
      <section className="venir-top">
        <Reveal kind="clip" className="venir-shot">
          <Photo photo={P.heroWide} sizes="100vw" priority />
        </Reveal>

        <div className="venir-id">
          <p className="lbl">Venir</p>
          <Reveal>
            <h1 className="venir-addr">
              {SITE.street}
              <br />
              {SITE.city}
            </h1>
          </Reveal>
          <Reveal delay={0.06} className="venir-cta">
            <a className="venir-go" href={SITE.maps} target="_blank" rel="noopener noreferrer">
              Ouvrir l’itinéraire <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="venir-hours" aria-labelledby="venir-h">
        <Doodles behind />
        <Hours size="lg" id="venir-h" />
      </section>

      <section className="venir-access">
        <dl>
          {ACCESS.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.05}>
              <dt className="lbl">{k}</dt>
              <dd>{v}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="venir-map" aria-label="Plan">
        <iframe
          src={SITE.map}
          title="Plan — 6 rue Mélingue, Paris 19e"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
