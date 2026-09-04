import Hero from '@/components/Hero';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import Fit from '@/components/Fit';
import Favoris from '@/components/Favoris';
import Marquee from '@/components/Marquee';
import Reviews from '@/components/Reviews';
import Social from '@/components/Social';
import Doodles from '@/components/Doodles';
import { Bean } from '@/components/Glyph';
import { P } from '@/lib/data';

export const metadata = {
  title: 'NOA — Coffee shop de spécialité, Paris 19e',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />

      <section id="suite" className="say band-green">
        <Reveal kind="flash"><Fit max={300}>Bon café.</Fit></Reveal>
        <Reveal kind="flash" delay={0.09}><Fit max={300}>Bonne cuisine.</Fit></Reveal>
        <Reveal kind="flash" delay={0.18}><Fit max={300}>Bonnes personnes.</Fit></Reveal>
      </section>

      <Reveal kind="clip" className="bleed">
        <Photo photo={P.carrotCakeWide} sizes="100vw" className="bleed-lg" />
        <Photo photo={P.carrotCake} ratio="4 / 5" sizes="100vw" className="bleed-sm" />
      </Reveal>

      <Favoris />

      <Marquee />

      <section className="aside">
        <Doodles behind tone="oak" />
        <Reveal kind="flash">
          <p>
            Petit, et c’est voulu.
            <Bean className="bean-inline" />
          </p>
        </Reveal>
      </section>

      <Reviews />
      <Social />
    </>
  );
}
