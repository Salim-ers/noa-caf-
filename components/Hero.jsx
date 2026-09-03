'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from './Logo';
import Doodles from './Doodles';
import { SITE } from '@/lib/data';

/* Green ground, white wordmark, nothing else. The mark comes up
   from behind its own edge and settles; the tagline follows letter
   by letter; both drift and fade out as the page moves on. */

const TAG = 'Café & Friends';

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(node.querySelectorAll('.hero-word, .hero-tag i, .hero-foot > *'), {
        clearProps: 'all', opacity: 1, y: 0,
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.hero-word', { yPercent: 116, scale: 1.08, duration: 1.5 })
        .from('.hero-tag i', { yPercent: 130, opacity: 0, duration: 0.9, stagger: 0.035 }, 0.45)
        .from('.hero-foot > *', { y: 22, opacity: 0, duration: 1, stagger: 0.1 }, 0.7);

      /* the mark keeps moving a little slower than the page */
      gsap.to('.hero-stage', {
        yPercent: -14,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: node, start: 'top top', end: 'bottom top', scrub: 0.6 },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root}>
      <Doodles />

      <div className="hero-stage">
        <h1 className="hero-h1">
          <span className="hero-clip">
            <Logo variant="word" className="hero-word" title={`${SITE.name} — ${SITE.tagline}`} />
          </span>
        </h1>

        <p className="hero-tag" aria-label={TAG}>
          {[...TAG].map((ch, i) => (
            <i key={i} aria-hidden="true">{ch === ' ' ? ' ' : ch}</i>
          ))}
        </p>
      </div>

      <div className="hero-foot">
        <p>
          {SITE.street}
          <br />
          Paris 19
        </p>
        <a href="#suite">
          <span aria-hidden="true">↓</span> Découvrir
        </a>
      </div>
    </section>
  );
}
