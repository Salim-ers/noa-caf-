import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Le lieu',
  description:
    'La salle de NOA, rue Mélingue dans le 19e : murs clairs, bois, une salle courte. Et le salon d’à côté, désormais ouvert. Chiens bienvenus.',
  alternates: { canonical: '/lieu' },
};

/* Aucune assiette ni tasse en gros plan sur cette page : elle parle
   du lieu, pas de la carte. */

const SALLE = [
  { photo: P.interior, ratio: '4 / 5' },
  { photo: P.counterTall, ratio: '4 / 5' },
];

const SALON = [
  { photo: P.salonVue, ratio: '4 / 5' },
  { photo: P.salonCadre, ratio: '4 / 5' },
  { photo: P.salonLanterne, ratio: '4 / 5' },
];

const RUE = [
  { photo: P.devanture, ratio: '1 / 1' },
  { photo: P.salleTables, ratio: '1 / 1' },
  { photo: P.vitrineLogo, ratio: '1 / 1' },
];

export default function Lieu() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Le lieu</Fit>
      </section>

      <section className="aside" style={{ paddingTop: 0 }}>
        <Doodles behind tone="oak" />
        <p className="lede">
          Du bois clair, des lanternes,
          <br />
          et de la place pour s’asseoir.
        </p>
      </section>

      <div className="gal">
        <div className="gal-wide">
          <Reveal kind="clip">
            <Photo photo={P.interiorWide} sizes="100vw" />
          </Reveal>
        </div>

        <div className="gal-pair">
          {SALLE.map((it, i) => (
            <Reveal key={it.photo.src} kind="clip" delay={i * 0.06}>
              <Photo photo={it.photo} ratio={it.ratio} sizes="(max-width: 800px) 100vw, 50vw" />
            </Reveal>
          ))}
        </div>

        <div className="gal-trio">
          {RUE.map((it, i) => (
            <Reveal key={it.photo.src} kind="clip" delay={i * 0.06}>
              <Photo photo={it.photo} ratio={it.ratio} sizes="(max-width: 800px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Le local voisin est ouvert. */}
      <section className="open" aria-labelledby="open-t">
        <Doodles behind tone="oak" />

        <div className="open-say">
          <p className="lbl" id="open-t">C’est ouvert</p>
          <Reveal>
            <h2>
              Heureux de vous annoncer
              <br />
              que le salon d’à côté
              <br />
              est ouvert.
              <Bean className="bean-inline" />
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="open-p">
              Un canapé, une table basse, des livres et une grande lanterne. De
              quoi rester plus longtemps que le temps d’un café.
            </p>
          </Reveal>
        </div>

        <Reveal kind="clip" className="open-shot">
          <Photo photo={P.salonLarge} sizes="100vw" />
        </Reveal>

        <div className="open-grid">
          {SALON.map((it, i) => (
            <Reveal key={it.photo.src} kind="clip" delay={i * 0.06}>
              <Photo photo={it.photo} ratio={it.ratio} sizes="(max-width: 800px) 100vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
