import Fit from '@/components/Fit';
import Visit from '@/components/Visit';

export const metadata = {
  title: 'Venir',
  description:
    'NOA, 6 rue Mélingue, 75019 Paris. Métro Jourdain ou Pyrénées (ligne 11), près des Buttes-Chaumont. Horaires et itinéraire.',
  alternates: { canonical: '/venir' },
};

export default function Venir() {
  return (
    <div className="page">
      <section className="pad head-pad">
        <Fit className="ttl" weight={900} max={480}>Venir</Fit>
      </section>
      <Visit />
    </div>
  );
}
