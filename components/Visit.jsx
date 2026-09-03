'use client';
import Reveal from './Reveal';
import useNow from './useNow';
import { SITE, HOURS } from '@/lib/data';

/* Address, hours, directions. On a phone this is the part people
   came for, so it stays plain text and one link out to the map. */

export default function Visit() {
  const { idx, open } = useNow();

  return (
    <section className="visit band-green" aria-labelledby="visit-t">
      <div>
        <h2 className="lbl" id="visit-t">Venir</h2>
        <Reveal>
          <p className="addr">
            {SITE.street}
            <br />
            {SITE.city}
          </p>
        </Reveal>
        <p className="visit-metro">Métro {SITE.metro}</p>
        <p className="visit-go">
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
            Itinéraire <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>

      <div>
        <p className="lbl">
          Horaires
          {open !== null && <span className="visit-now">{open ? ' — ouvert' : ' — fermé'}</span>}
        </p>
        <ul className="hrs">
          {HOURS.map((h, i) => (
            <li key={h.d} className={i === idx ? 'now' : ''}>
              <span>{h.d}</span>
              <span>
                {h.o} – {h.c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
