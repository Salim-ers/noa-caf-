'use client';
import Fit from './Fit';
import useNow from './useNow';
import { SITE, HOURS } from '@/lib/data';

export default function Visit({ heading = false }) {
  const { idx, open } = useNow();
  return (
    <section className="band-green pad">
      <div className="visit">
        <div>
          {heading && <Fit weight={900} max={260} style={{ marginBottom: 28 }}>Venir</Fit>}
          <p className="addr">{SITE.street}<br />{SITE.city}</p>
          <p className="lbl" style={{ marginTop: 20, opacity: .75 }}>Métro Jourdain ou Pyrénées, ligne 11</p>
          <div className="acts">
            <a className="btn" href={SITE.maps} target="_blank" rel="noopener noreferrer">Itinéraire</a>
            <a className="btn ghost" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div>
          <p className="lbl" style={{ marginBottom: 14 }}>
            Horaires{open !== null && ` — ${open ? 'ouvert' : 'fermé'} en ce moment`}
          </p>
          <ul className="hrs">
            {HOURS.map((h, i) => (
              <li key={h.d} className={i === idx ? 'now' : ''}>
                <span>{h.d}</span><span>{h.o} – {h.c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
