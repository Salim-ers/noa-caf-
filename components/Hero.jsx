'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Logo from './Logo';
import { SITE, P } from '@/lib/data';

/* One photograph of the shopfront, full viewport, barely touched.
   The wordmark is already in the picture — painted on the awning,
   and again on the glass — so nothing is laid over it. The mark
   sits down in the corner where a campaign would sign it. */

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-sign > *', { opacity: 0, y: 20, duration: 1.1, stagger: 0.12 }, 0.25)
        .from('.hero-go', { opacity: 0, y: 20, duration: 1 }, 0.45);

      gsap.to('.hero-shot', {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: node, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero-shot">
        <Image
          src={P.hero.src}
          alt={P.hero.alt}
          fill
          priority
          quality={88}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-veil" />

      <h1 className="sr">
        NOA — Café &amp; Friends, coffee shop de spécialité au {SITE.street}, Paris 19e
      </h1>

      <div className="hero-foot">
        <div className="hero-sign">
          <Logo variant="lockup" className="hero-mark" title={`${SITE.name} — ${SITE.tagline}`} />
          <p className="hero-where">
            {SITE.street}
            <br />
            Paris 19
          </p>
        </div>

        <a className="hero-go" href="#suite">
          <span aria-hidden="true">↓</span> Découvrir
        </a>
      </div>
    </section>
  );
}
