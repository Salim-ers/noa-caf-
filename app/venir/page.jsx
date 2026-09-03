import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Visit from '@/components/Visit';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Venir',
  description:
    'NOA, 6 rue Mélingue, 75019 Paris. Métro Jourdain ou Pyrénées (ligne 11), près des Buttes-Chaumont. Horaires et itinéraire.',
  alternates: { canonical: '/venir' },
};

export default function Venir() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Venir</Fit>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.terrace} ratio="16 / 9" sizes="100vw" className="bleed-lg" />
        <Photo photo={P.terrace} ratio="4 / 5" sizes="100vw" className="bleed-sm" />
      </Reveal>

      <Visit />
    </div>
  );
}
