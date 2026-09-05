import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Notre histoire',
  description:
    'NOA, café indépendant du 19e à Paris, ouvert en 2024 par Noémie Gerardin après quatre ans dans le marketing. Pâtisserie faite sur place, chiens bienvenus.',
  alternates: { canonical: '/histoire' },
};

/* Rien n'est inventé ici. Le récit tient à ce qui est public et
   attribuable : le registre des sociétés pour la date et la forme,
   la presse et le compte TikTok de Noémie pour le reste. Aucune
   citation ne lui est prêtée — elle raconte déjà tout elle-même. */

export default function Histoire() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Notre histoire</Fit>
      </section>

      <section className="story">
        <Reveal className="story-lede">
          <p>
            NOA a ouvert en 2024, rue Mélingue.
            <br />
            Avant, Noémie faisait du marketing.
            <Bean className="bean-inline" />
          </p>
        </Reveal>

        <Reveal kind="clip" className="story-shot-a">
          <Photo photo={P.brunch} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 44vw" />
        </Reveal>

        <div className="story-text">
          <Reveal>
            <p>
              Noémie Gerardin a passé quatre ans chez Tiptoe, dans le marketing. Elle
              en est partie pour ouvrir un café. Pas en parallèle, pas en test : elle
              y a mis ses économies, sans plan B.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              La société NOA est immatriculée le 15 juin 2024. Entre les deux, il y a
              eu les travaux, les essais de recettes, les ratés. Elle a tout filmé et
              tout publié sur TikTok, y compris ce qui n’allait pas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              C’est ce qui explique la salle des premiers jours. Les gens qui
              poussaient la porte avaient déjà vu le chantier : ils ne découvraient
              pas une adresse, ils venaient voir en vrai un endroit qu’ils suivaient
              depuis des mois.
            </p>
          </Reveal>
        </div>

        <Reveal kind="clip" className="story-shot-b">
          <Photo photo={P.case} ratio="1 / 1" sizes="(max-width: 900px) 100vw, 40vw" />
        </Reveal>

        <div className="story-text story-text-b">
          <Reveal>
            <p>
              Le lieu tient en une salle. Murs clairs, bois blond, quelques tables
              rondes, des lanternes en papier. C’est petit, et c’est voulu.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              La pâtisserie est faite sur place et change avec les jours : carrot
              cake, brownie matcha, cookie, banana bread. Ce qu’il y a est écrit à la
              main sur la vitrine.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Les chiens sont les bienvenus. Le week-end, les ordinateurs restent
              fermés : on vient pour s’asseoir et parler.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.coffeeWide} sizes="100vw" />
      </Reveal>
    </div>
  );
}
