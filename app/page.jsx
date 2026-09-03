import Link from 'next/link';
import Hero from '@/components/Hero';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Fit from '@/components/Fit';
import Visit from '@/components/Visit';
import { FAVORIS, REVIEWS, SITE } from '@/lib/data';

export const metadata = {
  title: 'NOA — Coffee shop de spécialité, Paris 19e',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />

      <section id="suite" className="band-green">
        <div className="pad">
          <Reveal><Fit weight={900} max={430}>Bon café.</Fit></Reveal>
          <Reveal delay={0.06}><Fit weight={900} max={430}>Bonne cuisine.</Fit></Reveal>
          <Reveal delay={0.12}><Fit weight={900} max={430}>Bonnes personnes.</Fit></Reveal>
        </div>
      </section>

      <Photo slot="02" ratio="16 / 9" tone="paper" />

      <section className="pad">
        <Reveal><Fit className="ttl" weight={900} max={400} style={{ marginBottom: 40 }}>Les favoris</Fit></Reveal>
        <div className="fav">
          {FAVORIS.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.05}>
              <Photo slot={f.slot} ratio={f.ratio} tone={i % 2 ? 'paper' : 'green'} sizes="(max-width:760px) 50vw, 25vw" />
              <h3 className="fav-n">{f.n}</h3>
              {f.d && <p className="fav-d">{f.d}</p>}
            </Reveal>
          ))}
        </div>
        <p className="note"><Link href="/carte">Voir la carte complète</Link></p>
      </section>

      <section className="atmo">
        <Reveal className="a1"><Photo slot="03" tone="paper" sizes="33vw" /></Reveal>
        <Reveal className="a2" delay={0.05}><Photo slot="13" sizes="25vw" /></Reveal>
        <Reveal className="a3" delay={0.1}><Photo slot="04" tone="paper" sizes="33vw" /></Reveal>
        <div className="a-txt">
          <p>Une salle, du bois clair, des banquettes vertes.<br />Petit, et c&apos;est voulu.</p>
          <Link href="/lieu">Le lieu</Link>
        </div>
      </section>

      <section className="band-green pad">
        <div className="rev">
          <div>
            <p className="rev-score">{SITE.rating} ★</p>
            <p className="lbl" style={{ marginTop: 10 }}>{SITE.reviews} avis Google</p>
          </div>
          <div className="rev-q">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>« {r} »</p>
                <p className="lbl">Avis Google</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Visit />
    </>
  );
}
