import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Gallery from '@/components/Gallery';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Le lieu',
  description:
    'La salle de NOA, rue Mélingue dans le 19e : murs clairs, bois, une salle courte et un store vert. Et le local voisin, qui finit ses travaux. Chiens bienvenus.',
  alternates: { canonical: '/lieu' },
};

/* Aucune assiette et aucune tasse sur cette page : ni dans la galerie
   de la salle, ni dans celle du nouveau local. Les photographies où
   une boisson ou un plat apparaît sont gardées pour La carte et
   Notre histoire. */

/* salleTables est deja dans la galerie du haut : c'est la salle
   d'origine, pas le local voisin. */
const SALON = [
  { photo: P.salonVue, ratio: '4 / 5' },
  { photo: P.salonCadre, ratio: '4 / 5' },
  { photo: P.vitrineLogo, ratio: '4 / 5' },
];

export default function Lieu() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Le lieu</Fit>
      </section>

      <section className="aside" style={{ paddingTop: 0 }}>
        <p className="lede">
          Murs clairs, bois, une salle courte.
          <br />
          Petit, et c’est voulu.
        </p>
      </section>

      <Gallery />

      {/* Le local d'à côté. La formulation dit que les travaux se
          terminent, sans annoncer de date : NOA n'en a pas donné. */}
      <section className="soon" aria-labelledby="soon-t">
        <Reveal kind="clip" className="soon-shot">
          <Photo photo={P.salonLanterne} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 46vw" />
        </Reveal>

        <div className="soon-txt">
          <p className="lbl" id="soon-t">Bientôt</p>
          <Reveal>
            <h2>
              À gauche,
              <br />
              le local voisin
              <br />
              finit ses travaux.
              <Bean className="bean-inline" />
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="soon-p">
              Un canapé, une table basse, des livres. De quoi rester plus
              longtemps que le temps d’un café.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="salon">
        <Reveal kind="clip" className="salon-lead">
          <Photo photo={P.salonLarge} ratio="16 / 10" sizes="100vw" />
        </Reveal>

        <div className="salon-grid">
          {SALON.map((it, i) => (
            <Reveal key={it.photo.src} kind="clip" delay={(i % 2) * 0.06}>
              <Photo photo={it.photo} ratio={it.ratio} sizes="(max-width: 800px) 50vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
