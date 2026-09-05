'use client';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import Hours from '@/components/Hours';
import MapFrame from '@/components/MapFrame';
import { Bean } from '@/components/Glyph';
import { SITE, P } from '@/lib/data';

/* Refaite. Ce qu'on veut savoir en chemin : à quoi ça ressemble
   depuis la rue, quelle station, quelle sortie, combien de minutes à
   pied. Les deux stations sont sur la 11, et Jourdain est la plus
   proche — c'est écrit, pas sous-entendu. */

const METRO = [
  {
    line: '11',
    station: 'Jourdain',
    walk: '2 min à pied',
    detail: 'Sortie rue de Belleville, puis la première à gauche.',
    near: true,
  },
  {
    line: '11',
    station: 'Pyrénées',
    walk: '6 min à pied',
    detail: 'Remontez la rue de Belleville vers le nord.',
  },
];

const BUS = [
  { line: '26', detail: 'Arrêt Pyrénées – Botzaris' },
  { line: '60', detail: 'Arrêt Jourdain' },
];

export default function VenirPage() {
  return (
    <div className="page venir">
      <section className="venir-top">
        <Reveal kind="clip" className="venir-shot">
          <Photo photo={P.facade} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 44vw" priority />
        </Reveal>

        <div className="venir-id">
          <p className="lbl">Venir</p>
          <Reveal>
            <h1 className="venir-addr">
              {SITE.street}
              <br />
              {SITE.city}
              <Bean className="bean-inline" />
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="venir-sub">
              Quartier Jourdain, à deux rues des Buttes-Chaumont. Le store vert
              se voit de loin.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="venir-cta">
            <a className="venir-go" href={SITE.maps} target="_blank" rel="noopener noreferrer">
              Ouvrir l’itinéraire <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="metro" aria-labelledby="metro-t">
        <Doodles behind tone="oak" />
        <h2 className="lbl metro-t" id="metro-t">En métro</h2>

        <ul className="metro-list">
          {METRO.map((m, i) => (
            <Reveal as="li" key={m.station} delay={i * 0.06} className={m.near ? 'near' : ''}>
              <span className="metro-line" aria-label={`Ligne ${m.line}`}>{m.line}</span>
              <span className="metro-body">
                <span className="metro-station">{m.station}</span>
                <span className="metro-detail">{m.detail}</span>
              </span>
              <span className="metro-walk">{m.walk}</span>
            </Reveal>
          ))}
        </ul>

        <div className="metro-bus">
          <h3 className="lbl">En bus</h3>
          <ul>
            {BUS.map((b) => (
              <li key={b.line}>
                <span className="bus-line">{b.line}</span>
                <span>{b.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="venir-hours" aria-labelledby="venir-h">
        <Hours size="lg" id="venir-h" />
      </section>

      <section className="venir-map" aria-label="Plan">
        <MapFrame title="Plan — 6 rue Mélingue, Paris 19e" />
      </section>
    </div>
  );
}
