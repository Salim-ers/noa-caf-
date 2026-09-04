import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import { Bean } from '@/components/Glyph';
import { MENU, P } from '@/lib/data';

export const metadata = {
  title: 'La carte',
  description:
    'La carte de NOA, coffee shop Paris 19e : café de spécialité, matcha, petit-déjeuner scandinave, carrot cake, brownie matcha et cookies faits maison.',
  alternates: { canonical: '/carte' },
};

/* Prix en euros, virgule décimale, espace insécable avant le signe —
   la typographie française, pas celle du navigateur. Un prix absent
   n'affiche rien plutôt qu'un tiret : NOA ne les a pas tous confirmés
   et une case vide se lit mieux qu'un trou balisé. */
function price(p) {
  if (typeof p !== 'number') return null;
  return `${p.toFixed(2).replace('.', ',')} €`;
}

export default function Carte() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>La carte</Fit>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.cardWide} sizes="100vw" priority />
      </Reveal>

      <section className="menu-wrap">
        <Doodles behind tone="oak" />

        <div className="menu">
          {MENU.map((cat) => (
            <section className="menu-cat" key={cat.id}>
              <h2 className="menu-h">
                {cat.label}
                <Bean className="menu-bean" />
              </h2>
              <ul>
                {cat.items.map((it, i) => (
                  <Reveal as="li" key={it.n} delay={i * 0.04}>
                    <span className="mi-n">
                      {it.n}
                      {it.d && <em> — {it.d}</em>}
                    </span>
                    <span className="mi-dots" aria-hidden="true" />
                    {price(it.price) && <span className="mi-p">{price(it.price)}</span>}
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
