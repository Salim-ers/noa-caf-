import VenirPage from '@/components/VenirPage';

export const metadata = {
  title: 'Venir',
  description:
    'NOA, 6 rue Mélingue, 75019 Paris. Métro Jourdain ou Pyrénées (ligne 11), près des Buttes-Chaumont. Horaires, plan et itinéraire.',
  alternates: { canonical: '/venir' },
};

export default function Venir() {
  return <VenirPage />;
}
