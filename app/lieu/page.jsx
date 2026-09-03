import Fit from '@/components/Fit';
import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Le lieu',
  description:
    'La salle de NOA, rue Mélingue dans le 19e : murs clairs, bois, une salle courte et un store vert. Un café de quartier près des Buttes-Chaumont, chiens bienvenus.',
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
    </div>
  );
}
