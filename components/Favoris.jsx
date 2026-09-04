import Link from 'next/link';
import Photo from './Photo';
import Reveal from './Reveal';
import { withO, Bean } from './Glyph';
import { FAVORIS } from '@/lib/data';

/* Four products, two by two. The alternating version left half the
   green empty on every row — a photograph on one side and a hole on
   the other. Here each product is a big picture with its name right
   under it, so the column is full all the way down and the green
   reads as a ground rather than as a gap. */

export default function Favoris() {
  return (
    <section className="favs band-green" aria-labelledby="favs-t">
      <div className="favs-head">
        <h2 className="lbl" id="favs-t">Les favoris</h2>
        <Bean className="favs-bean" />
      </div>

      <div className="favs-grid">
        {FAVORIS.map((f, i) => (
          <article className="fav" key={f.n.join(' ')}>
            <Reveal kind="clip" className="fav-shot">
              <Photo
                photo={f.photo}
                ratio="4 / 5"
                sizes="(max-width: 800px) 100vw, 46vw"
              />
            </Reveal>
            <Reveal className="fav-name" delay={0.05}>
              <h3>
                {f.n.map((line) => (
                  <span key={line}>{withO(line)}</span>
                ))}
              </h3>
              {f.d && <p>{f.d}</p>}
            </Reveal>
          </article>
        ))}
      </div>

      <Reveal className="favs-more">
        <Link href="/carte">
          Voir toute la carte <span aria-hidden="true">→</span>
        </Link>
      </Reveal>
    </section>
  );
}
