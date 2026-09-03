import { SITE } from '@/lib/data';

export default function sitemap() {
  const now = new Date();
  return ['', '/carte', '/lieu', '/histoire', '/venir'].map((p, i) => ({
    url: `${SITE.origin}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: i === 0 ? 1 : 0.8,
  }));
}
