import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Gallery from '@/components/Gallery';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Le lieu',
  description:
    'La salle de NOA, rue Mélingue dans le 19e : murs clairs, bois, une salle courte et un store vert. Le local voisin finit ses travaux. Chiens bienvenus.',
  alternates: { canonical: '/lieu' },
};

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

      {/* Le local d'à côté. Formulation à confirmer par NOA : le
          message dit que les travaux se terminent, sans annoncer de
          date d'ouverture, faute d'en connaître une. */}
      <section className="soon" aria-labelledby="soon-t">
        <Reveal kind="clip" className="soon-shot">
          <Photo photo={P.lounge} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 46vw" />
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
    </div>
  );
}
