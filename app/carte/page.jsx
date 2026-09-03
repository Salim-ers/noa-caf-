import Fit from '@/components/Fit';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { MENU } from '@/lib/data';

export const metadata = {
  title: 'La carte',
  description:
    'La carte de NOA, coffee shop Paris 19e : café de spécialité, matcha, petit-déjeuner scandinave, brownie matcha et cookies faits maison.',
  alternates: { canonical: '/carte' },
};

const VIS = [
  { slot: '10', n: 'Flat white', tone: 'paper' },
  { slot: '11', n: 'Matcha', tone: 'green' },
  { slot: '12', n: 'Avocado toast', tone: 'paper' },
];

export default function Carte() {
  return (
    <div className="page">
      <section className="pad head-pad">
        <Fit className="ttl" weight={900} max={480}>La carte</Fit>
      </section>

      <div className="carte-vis">
        {VIS.map((v, i) => (
          <Reveal key={v.slot} delay={i * 0.05}>
            <Photo slot={v.slot} ratio="1 / 1" tone={v.tone} sizes="(max-width:760px) 100vw, 33vw" />
            <p className="cv-n">{v.n}</p>
          </Reveal>
        ))}
      </div>

      <section className="pad">
        <div className="menu">
          {MENU.map((cat) => (
            <div key={cat.id} className="menu-c">
              <h2 className="menu-h">{cat.label}</h2>
              <ul>
                {cat.items.map((it) => (
                  <li key={it.n}>
                    <span className="mi-n">{it.n}{it.d && <em> — {it.d}</em>}</span>
                    <span className="mi-p">
                      {it.price == null ? '—' : `${it.price.toFixed(2).replace('.', ',')} €`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="note">
          Carte partielle. Seuls les produits cités publiquement figurent ici, sans tarif :
          NOA n&apos;a publié aucun prix officiel.
        </p>
      </section>
    </div>
  );
}
