import Link from 'next/link';
import Photo from './Photo';
import Reveal from './Reveal';
import Fit from './Fit';
import { withO, Bean } from './Glyph';
import { FAVORIS } from '@/lib/data';

/* Four products across, and the row does not sit level: the second
   and fourth drop, so the eye travels instead of scanning a table.
   Each picture grows a little under the cursor, inside a frame that
   stays put, so pointing at one moves nothing else. */

export default function Favoris() {
  return (
    <section className="favs band-green" aria-labelledby="favs-t">
      <div className="favs-head">
        <Fit as="h2" id="favs-t" max={340}>Les favoris</Fit>
        <Bean className="favs-bean" />
      </div>

      <div className="favs-row">
        {FAVORIS.map((f, i) => (
          <article className={`fav${i % 2 ? ' fav-drop' : ''}`} key={f.n.join(' ')}>
            <Reveal kind="clip" className="fav-shot" delay={i * 0.07}>
              <Photo photo={f.photo} ratio="4 / 5" sizes="(max-width: 800px) 50vw, 23vw" />
            </Reveal>
            <Reveal className="fav-name" delay={i * 0.07 + 0.05}>
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
