import Reveal from './Reveal';
import { Bean } from './Glyph';
import { REVIEWS, SITE } from '@/lib/data';

/* The score, then what people actually wrote. No cards, no avatars,
   no imitation of Google's interface — the quotes sit in two columns
   and the whitespace does the separating.

   Each one carries where it came from. English reviews keep their
   lang attribute so a screen reader switches voice instead of
   reading English with a French accent. */

export default function Reviews() {
  return (
    <section className="revs band-green" aria-labelledby="revs-t">
      <h2 className="sr" id="revs-t">Ce qu’on en dit</h2>

      <Reveal className="revs-score">
        <p className="revs-n">
          {SITE.rating}
          <span aria-hidden="true"> ★</span>
        </p>
        <p className="lbl">{SITE.reviews} avis Google</p>
        <Bean className="revs-bean" />
      </Reveal>

      <div className="revs-q">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.t} delay={(i % 2) * 0.06}>
            <figure>
              <blockquote lang={r.lang || 'fr'}>{r.t}</blockquote>
              <figcaption className="lbl">{r.src}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
