import Photo from './Photo';
import Reveal from './Reveal';
import { P } from '@/lib/data';

/* Ordered, not scattered. A wide plate, then a matched pair, then a
   wide plate, then a triptych — four beats you can feel, instead of
   photographs dropped at odd offsets down the page. Every row lines
   up on the same grid and the images stay big. */

const ROWS = [
  { k: 'wide', items: [{ photo: P.terrace, ratio: '16 / 9', sizes: '100vw' }] },
  {
    k: 'pair',
    items: [
      { photo: P.counter, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 50vw' },
      { photo: P.window, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 50vw' },
    ],
  },
  { k: 'wide', items: [{ photo: P.toast, ratio: '16 / 9', sizes: '100vw' }] },
  {
    k: 'trio',
    items: [
      { photo: P.dog, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
      { photo: P.matcha, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
      { photo: P.coffee, ratio: '1 / 1', sizes: '(max-width: 800px) 100vw, 33vw' },
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
