import Link from 'next/link';
import Photo from './Photo';
import Reveal from './Reveal';
import Fit from './Fit';
import { withO, Bean } from './Glyph';
import { FAVORIS } from '@/lib/data';

/* Four products, two by two. The alternating version left half the
   green empty on every row — a photograph on one side and a hole on
   the other. Here each product is a picture with its name right
   under it, so the column is full all the way down.

   The pictures grow a little under the cursor. The zoom lives on the
   image inside its frame, which stays put, so nothing on the page
   moves when you point at one. */

export default function Favoris() {
  return (
    <section className="favs band-green" aria-labelledby="favs-t">
      <div className="favs-head">
        <Fit as="h2" id="favs-t" max={340}>Les favoris</Fit>
        <Bean className="favs-bean" />
      </div>

      <div className="favs-grid">
        {FAVORIS.map((f) => (
          <article className="fav" key={f.n.join(' ')}>
            <Reveal kind="clip" className="fav-shot">
              <Photo photo={f.photo} ratio="1 / 1" sizes="(max-width: 800px) 100vw, 34vw" />
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
