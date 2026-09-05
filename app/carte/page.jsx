import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Doodles from '@/components/Doodles';
import { Bean } from '@/components/Glyph';
import { MENU, MENU_NOTES, P } from '@/lib/data';

export const metadata = {
  title: 'La carte',
  description:
    'La carte de NOA, coffee shop Paris 19e : espresso, matcha, chaï, petit déjeuner scandinave, tartine NOA, carrot cake, brownie matcha et cookies faits maison. Prix en euros.',
  alternates: { canonical: '/carte' },
};

/* Prix à la française : virgule décimale, espace insécable avant le
   signe, et pas de décimales inutiles — la carte imprimée écrit 10,
   pas 10,00. */
function price(p) {
  const n = Number.isInteger(p) ? String(p) : p.toFixed(2).replace('.', ',');
  return `${n} €`;
}

export default function Carte() {
  return (
    <div className="page">
      <section className="head head-mid">
        <Fit as="h1" max={470}>La carte</Fit>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.cardWide} sizes="100vw" priority />
      </Reveal>

      {/* Une colonne centrée avec l'intitulé dans la marge, comme sur
          la carte posée sur les tables. */}
      <section className="menu-wrap">
        <Doodles behind tone="oak" />

        <div className="menu">
          {MENU.map((cat) => (
            <section
              className={`menu-cat${cat.accent === 'blue' ? ' menu-blue' : cat.accent ? ' menu-sun' : ''}`}
              key={cat.id}
            >
              <div className="menu-side">
                <h2 className="menu-h">{cat.label}</h2>
                {cat.shot && P[cat.shot] && (
                  <Reveal kind="clip" className="menu-thumb">
                    <Photo
                      photo={P[cat.shot]}
                      ratio="1 / 1"
                      sizes="(max-width: 800px) 30vw, 132px"
                    />
                  </Reveal>
                )}
              </div>
              <ul>
                {cat.items.map((it, i) => (
                  <Reveal as="li" key={it.n} delay={i * 0.03}>
                    <span className="mi-n">
                      {it.n}
                      {it.d && <em>{it.d}</em>}
                    </span>
                    <span className="mi-dots" aria-hidden="true" />
                    <span className="mi-p">{price(it.price)}</span>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}

          <p className="menu-notes">
            {MENU_NOTES.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
