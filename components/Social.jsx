import Reveal from './Reveal';
import { Phone } from './Glyph';
import { SOCIAL_LINKS } from '@/lib/data';

/* Plus de grille de vignettes. Le vrai flux Instagram demande un
   jeton que seul NOA peut créer, et une grille figée d'images
   choisies à la main se faisait passer pour un flux sans en être un.

   Reste ce qui est honnête : où aller, et un téléphone dessiné dans
   la même main que le reste du site. */

export default function Social() {
  return (
    <section className="soc" aria-labelledby="soc-t">
      <Reveal className="soc-draw">
        <Phone />
      </Reveal>

      <div className="soc-txt">
        <h2 className="lbl" id="soc-t">Sur les réseaux</h2>
        <Reveal>
          <p className="soc-lede">
            Ce qui sort du four, ce qui change,
            <br />
            ce qui se passe dans la salle.
          </p>
        </Reveal>

        <ul className="soc-links">
          {SOCIAL_LINKS.map((l, i) => (
            <Reveal as="li" key={l.label} delay={i * 0.06}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <span className="soc-net">{l.label}</span>
                <span className="soc-handle">{l.handle}</span>
                <span className="soc-go" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
