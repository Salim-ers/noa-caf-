import Photo from './Photo';
import Reveal from './Reveal';
import { P } from '@/lib/data';

/* No carousel, no equal cells. Seven photographs at five different
   sizes, each starting on its own row and then pulled back up so
   the column edges never line up twice. The gaps are part of it. */

const PLATES = [
  { k: 'g1', photo: P.interior, ratio: '3 / 2', sizes: '(max-width: 800px) 100vw, 66vw' },
  { k: 'g2', photo: P.coffee, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 30vw' },
  { k: 'g3', photo: P.toast, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 40vw' },
  { k: 'g4', photo: P.dog, ratio: '3 / 2', sizes: '(max-width: 800px) 100vw, 54vw' },
  { k: 'g5', photo: P.counter, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 56vw' },
  { k: 'g6', photo: P.window, ratio: '4 / 5', sizes: '(max-width: 800px) 100vw, 30vw' },
  { k: 'g7', photo: P.terrace, ratio: '16 / 9', sizes: '100vw' },
];

export default function Gallery() {
  return (
    <div className="gal">
      {PLATES.map(({ k, photo, ratio, sizes }) => (
        <Reveal key={k} kind="clip" className={`gal-i ${k}`}>
          <Photo photo={photo} ratio={ratio} sizes={sizes} />
        </Reveal>
      ))}
    </div>
  );
}
