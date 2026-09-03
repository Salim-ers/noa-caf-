import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Notre histoire',
  description:
    'NOA, café indépendant du 19e arrondissement de Paris, ouvert par Noémie Gerardin. Pâtisserie faite sur place.',
  alternates: { canonical: '/histoire' },
};

export default function Histoire() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Notre histoire</Fit>
      </section>

      <section className="hist">
        <div>
          <p className="lede">
            Noémie Gerardin a passé quatre ans dans le marketing.
            <br />
            Puis elle a ouvert NOA, rue Mélingue.
            <br />
            La pâtisserie est faite sur place.
          </p>
        </div>
        <Reveal kind="clip">
          <Photo photo={P.case} ratio="4 / 5" sizes="(max-width: 1000px) 100vw, 42vw" />
        </Reveal>
      </section>
    </div>
  );
}
