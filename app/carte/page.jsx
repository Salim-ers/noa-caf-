import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { MENU, P } from '@/lib/data';

export const metadata = {
  title: 'La carte',
  description:
    'La carte de NOA, coffee shop Paris 19e : café de spécialité, matcha, petit-déjeuner scandinave, brownie matcha et cookies faits maison.',
  alternates: { canonical: '/carte' },
};

const SHOTS = [P.coffee, P.matcha, P.toast];

function price(p) {
  return typeof p === 'number' ? `${p.toFixed(2).replace('.', ',')} €` : null;
}

export default function Carte() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>La carte</Fit>
      </section>

      <div className="carte-vis">
        {SHOTS.map((photo, i) => (
          <Reveal key={photo.src} kind="clip" delay={i * 0.05}>
            <Photo photo={photo} ratio="1 / 1" sizes="(max-width: 760px) 100vw, 33vw" />
          </Reveal>
        ))}
      </div>

      <section className="menu-wrap band-green">
        <div className="menu">
          {MENU.map((cat) => (
            <div key={cat.id}>
              <h2 className="menu-h">{cat.label}</h2>
              <ul>
                {cat.items.map((it) => (
                  <li key={it.n}>
                    <span className="mi-n">
                      {it.n}
                      {it.d && <em> — {it.d}</em>}
                    </span>
                    {price(it.price) && <span className="mi-p">{price(it.price)}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
