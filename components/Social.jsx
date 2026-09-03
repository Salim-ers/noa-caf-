import Photo from './Photo';
import Reveal from './Reveal';
import { SOCIAL, SITE } from '@/lib/data';

/* NOA is already a picture feed before it is a website, so the
   handle is set at display size and the photographs run edge to
   edge under it. These are NOA's own pictures, not a mock-up of
   their grid — no fake posts, no counts, no invented captions. */

export default function Social() {
  return (
    <section className="soc" aria-labelledby="soc-t">
      <Reveal>
        <h2 id="soc-t">
          <a className="soc-h" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
            {SITE.handle}
          </a>
        </h2>
      </Reveal>

      <div className="soc-grid">
        {SOCIAL.map((photo, i) => (
          <Reveal key={photo.src} kind="clip" delay={(i % 3) * 0.05}>
            <Photo photo={photo} ratio="1 / 1" sizes="(max-width: 800px) 33vw, 16vw" />
          </Reveal>
        ))}
      </div>

      <Reveal className="soc-cta">
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
          Suivre NOA <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </section>
  );
}
