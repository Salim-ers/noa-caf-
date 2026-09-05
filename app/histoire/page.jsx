import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'Notre histoire',
  description:
    'NOA, café indépendant du 19e à Paris, ouvert en 2024 par Noémie. Pâtisserie faite sur place, chiens bienvenus.',
  alternates: { canonical: '/histoire' },
};

/* Le récit reste sur le café, pas sur la personne : pas de nom
   d'entreprise, pas de date d'immatriculation, rien sur ses
   finances. Ce qui est raconté ici, Noémie le raconte déjà
   elle-même, et aucune citation ne lui est prêtée. */

export default function Histoire() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Notre histoire</Fit>
      </section>

      <section className="story">
        <Doodles behind tone="oak" />

        <div className="story-top">
          <Reveal kind="clip" className="story-portrait">
            <Photo photo={P.noemie} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
          </Reveal>

          <div className="story-intro">
            <Reveal>
              <p className="story-lede">
                NOA a ouvert en 2024, rue Mélingue.
                <Bean className="bean-inline" />
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Avant, Noémie travaillait dans le marketing. Elle en est partie
                pour ouvrir un café — celui-ci.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Elle a tout montré au fil des mois : les travaux, les essais de
                recettes, ce qui ratait. Les gens ont suivi le chantier bien
                avant de pousser la porte.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                C’est pour ça que la salle des premiers jours n’était pas vide.
                Ceux qui entraient ne découvraient pas une adresse : ils venaient
                voir en vrai un endroit qu’ils suivaient depuis longtemps.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="story-bot">
          <div className="story-more">
            <Reveal>
              <p>
                Une salle, du bois clair, quelques tables rondes. La pâtisserie
                est faite sur place et change avec les jours — ce qu’il y a est
                écrit à la main sur la vitrine.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Les chiens sont les bienvenus. Le week-end, les ordinateurs
                restent fermés : on vient pour s’asseoir et parler.
              </p>
            </Reveal>
          </div>

          <Reveal kind="clip" className="story-shot">
            <Photo photo={P.counter} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 42vw" />
          </Reveal>
        </div>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.coffeeWide} sizes="100vw" />
      </Reveal>
    </div>
  );
}
