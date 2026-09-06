import { SITE, IS_LIVE } from '@/lib/data';

/* Sans domaine reel, on ferme : une demo indexee entrerait en
   concurrence avec le vrai site le jour de la mise en ligne. */
export default function robots() {
  if (!IS_LIVE) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.origin}/sitemap.xml`,
  };
}
