import Reveal from './Reveal';
import { REVIEWS, SITE } from '@/lib/data';

/* The score, and three sentences people actually wrote. No cards,
   no avatars, no imitation of Google's interface. */

export default function Reviews() {
  return (
    <section className="revs band-green" aria-labelledby="revs-t">
      <h2 className="sr" id="revs-t">Avis Google</h2>
      <Reveal className="revs-score">
        <p>
          {SITE.rating}
          <span aria-hidden="true"> ★</span>
        </p>
        <p className="lbl">{SITE.reviews} avis Google</p>
      </Reveal>

      <div className="revs-q">
        {REVIEWS.map((r, i) => (
          <Reveal key={r} delay={i * 0.06}>
            <blockquote>{r}</blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
