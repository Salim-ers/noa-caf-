import Link from 'next/link';
import Photo from './Photo';
import Reveal from './Reveal';
import { withO } from './Glyph';
import { FAVORIS } from '@/lib/data';

/* Photograph, then name, then photograph, then name. The picture
   is never put in a box and the name is never put under a picture
   like a caption — they alternate and take turns being the loud
   one. An item with no NOA photograph yet is carried by the type
   alone rather than by a stand-in. */

export default function Favoris() {
  return (
    <section className="favs band-green" aria-labelledby="favs-t">
      <h2 className="lbl favs-lbl" id="favs-t">Les favoris</h2>

      {FAVORIS.map((f, i) => (
        <article
          key={f.n.join(' ')}
          className={`fav${f.photo ? '' : ' fav-solo'}${i % 2 ? ' fav-alt' : ''}`}
        >
          {f.photo && (
            <Reveal kind="clip" className="fav-shot">
              <Photo
                photo={f.photo}
                ratio={i % 2 ? '4 / 5' : '1 / 1'}
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </Reveal>
          )}
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

      <Reveal className="favs-more">
        <Link href="/carte">Voir la carte</Link>
      </Reveal>
    </section>
  );
}
