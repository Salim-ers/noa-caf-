import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Le lieu',
  description:
    'La salle de NOA, rue Mélingue dans le 19e : murs clairs, bois, banquettes vertes. Un café de quartier près des Buttes-Chaumont, chiens bienvenus.',
  alternates: { canonical: '/lieu' },
};

const G = [
  ['g1', '04', '3 / 4', 'green'],
  ['g2', '02', '16 / 9', 'paper'],
  ['g3', '13', '1 / 1', 'green'],
  ['g4', '03', '3 / 4', 'paper'],
  ['g5', '14', '3 / 4', 'green'],
  ['g6', '05', '3 / 2', 'paper'],
];

export default function Lieu() {
  return (
    <div className="page">
      <section className="pad head-pad">
        <Fit className="ttl" weight={900} max={480}>Le lieu</Fit>
      </section>
      <section className="pad split" style={{ paddingTop: 0 }}>
        <p className="lede">
          Murs clairs, bois, banquettes vertes.<br />
          Les tables sont serrées. C&apos;est voulu.
        </p>
        <p className="lbl" style={{ opacity: .5 }}>Rue Mélingue · Paris 19<sup>e</sup></p>
      </section>

      <div className="gal">
        {G.map(([cls, slot, ratio, tone], i) => (
          <Reveal key={cls} className={cls} delay={(i % 2) * 0.05}>
            <Photo slot={slot} ratio={ratio} tone={tone} sizes="(max-width:760px) 100vw, 50vw" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
