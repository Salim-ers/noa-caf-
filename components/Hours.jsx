'use client';
import useNow from './useNow';
import { HOURS } from '@/lib/data';

/* Seven rows saying almost the same thing is what made this read
   like a paragraph. The week only has two schedules — weekdays and
   weekend — so it is set as two, large, with today's marked.

   The grouping is computed from HOURS rather than written out: change
   a day in the data and the blocks re-form on their own. */

function group(hours) {
  const out = [];
  hours.forEach((h, i) => {
    const last = out[out.length - 1];
    if (last && last.o === h.o && last.c === h.c) {
      last.days.push(h.d);
      last.idx.push(i);
    } else {
      out.push({ o: h.o, c: h.c, days: [h.d], idx: [i] });
    }
  });
  return out;
}

const short = (d) => d.slice(0, 3);

export default function Hours({ size = 'sm', id }) {
  const { idx, open } = useNow();
  const blocks = group(HOURS);

  return (
    <div className={`hrs${size === 'lg' ? ' hrs-lg' : ''}`}>
      <h2 className="lbl hrs-lbl" id={id}>
        Horaires
        {open !== null && (
          <span className={open ? 'is-open' : 'is-shut'}>
            {open ? ' — ouvert en ce moment' : ' — fermé en ce moment'}
          </span>
        )}
      </h2>

      <ul className="hrs-set">
        {blocks.map((b) => {
          const today = b.idx.includes(idx);
          return (
            <li key={b.days.join()} className={today ? 'now' : ''}>
              <span className="hrs-d">
                {b.days.length > 1
                  ? `${short(b.days[0])} — ${short(b.days[b.days.length - 1])}`
                  : b.days[0]}
              </span>
              <span className="hrs-h">
                {b.o}
                <i aria-hidden="true">–</i>
                {b.c}
              </span>
              {today && <span className="hrs-now">Aujourd’hui</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
