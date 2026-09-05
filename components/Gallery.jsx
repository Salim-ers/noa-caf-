import Photo from './Photo';
import Reveal from './Reveal';
import { P } from '@/lib/data';

/* Ordonné, pas éparpillé. Un grand plan, puis une paire, puis un
   triptyque — trois temps qu'on sent, au lieu de photographies
   lâchées à des décalages arbitraires. Toutes les lignes tombent sur
   la même grille et les images restent grandes.

   Rien que le lieu ici : aucune assiette, aucune tasse, pas même la
   vitrine à pâtisseries — la nourriture a ses propres pages. Et
   aucune photo ne sert deux fois. */

const ROWS = [
  { k: 'wide', items: [{ photo: P.facade, ratio: '16 / 9', sizes: '100vw' }] },
  {
    k: 'pair',
    items: [
      { photo: P.counter, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 50vw' },
      { photo: P.interior, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 50vw' },
    ],
  },
  {
    k: 'trio',
    items: [
      { photo: P.window, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
      { photo: P.terrace, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
      { photo: P.hero, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="gal">
      {ROWS.map((row, r) => (
        <div className={`gal-${row.k}`} key={r}>
          {row.items.map((it, i) => (
            <Reveal key={it.photo.src} kind="clip" delay={i * 0.06}>
              <Photo photo={it.photo} ratio={it.ratio} sizes={it.sizes} />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
