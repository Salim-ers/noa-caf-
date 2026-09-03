import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Notre histoire',
  description: 'NOA, café indépendant du 19e arrondissement de Paris, fondé par Noémie. Pâtisserie faite sur place.',
  alternates: { canonical: '/histoire' },
};

export default function Histoire() {
  return (
    <div className="page">
      <section className="pad head-pad">
        <Fit className="ttl" weight={900} max={480}>Notre histoire</Fit>
      </section>
      <section className="hist">
        <div>
          <p className="lede">
            Un café indépendant du 19<sup>e</sup>, fondé par Noémie.<br />
            La pâtisserie est faite sur place.
          </p>
          <p className="note" style={{ marginTop: 28 }}>
            Le reste de l&apos;histoire doit venir de Noémie. Rien n&apos;a été écrit à sa place :
            les récits qui circulent en ligne viennent de tiers, pas de NOA.
          </p>
        </div>
        <Reveal><Photo slot="15" ratio="4 / 5" sizes="(max-width:1000px) 100vw, 40vw" /></Reveal>
      </section>
    </div>
  );
}
