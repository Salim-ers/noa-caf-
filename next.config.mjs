/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },

  /* Le site ne reçoit aucune donnée : pas de formulaire, pas de
     compte, pas de mesure. Ces en-têtes couvrent ce qui reste — le
     cadrage abusif dans un autre site, la devinette de type MIME, la
     fuite d'URL vers les tiers, et les capteurs du navigateur.

     La CSP ci-dessous n'utilise pas de nonce, et c'est délibéré : un
     nonce doit changer à chaque réponse, donc être posé par un
     middleware, donc rendre les pages dynamiques. Les douze routes
     de ce site sont prérendues en statique — un nonce figé au build
     ne protègerait de rien, et passer en dynamique coûterait plus
     qu'il ne rapporte.

     Ce qu'elle bloque quand même, et ce n'est pas rien : tout script
     ou toute feuille venant d'un autre domaine, les plugins, le
     détournement de <base>, l'envoi d'un formulaire vers l'extérieur,
     et le cadrage du site dans une autre page. Reste 'unsafe-inline'
     pour les scripts que Next pose lui-même : la surface d'injection
     est nulle ici — aucun formulaire, aucune saisie, rien qui rende
     un paramètre d'URL. */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self'",
              /* le seul tiers du site : le plan, et seulement après accord */
              'frame-src https://www.google.com https://maps.google.com',
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ];
  },
};
export default nextConfig;
