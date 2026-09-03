'use client';
import { useState } from 'react';
import { TODOS, SLOTS } from '@/lib/data';

/* Production notes. Off by default, never part of the visual design.
   Delete this component and its two lines in app/layout.jsx to ship. */
export default function Notes() {
  const [on, setOn] = useState(false);
  return (
    <>
      <button className="notes-btn" onClick={() => setOn(!on)}>
        Notes de production ({TODOS.length})
      </button>
      {on && (
        <div className="notes" role="dialog" aria-label="Notes de production">
          <button className="notes-x" onClick={() => setOn(false)} aria-label="Fermer">✕</button>
          <h2>À confirmer par NOA</h2>
          <ol>{TODOS.map(([t, b]) => <li key={t}><b>{t}</b><span>{b}</span></li>)}</ol>
          <h3>Cadrages photo attendus</h3>
          <ul className="notes-slots">
            {Object.entries(SLOTS).map(([k, [f, r]]) => (
              <li key={k}><b>{k}</b> /photos/{f}.jpg <span>{r.replace(' / ', ':')}</span></li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
