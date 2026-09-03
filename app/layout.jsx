import { Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dock from '@/components/Dock';
import { SITE, C } from '@/lib/data';
import './globals.css';

/* One family, five weights. Outfit is a geometric sans with
   near-circular bowls and a heavy black — the same family of
   shapes as the lettering on NOA's window and awning. No pairing,
   no serif, no second face anywhere on the site. */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-noa',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: 'NOA — Coffee shop de spécialité, Paris 19e',
    template: '%s — NOA, Paris 19e',
  },
  description:
    'NOA, coffee shop de spécialité au 6 rue Mélingue, Paris 19e. Café, matcha et pâtisserie maison, près des Buttes-Chaumont. Chiens bienvenus.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'NOA — Café & Friends',
    url: '/',
    title: 'NOA — Coffee shop de spécialité, Paris 19e',
    description:
      'Un coffee shop de quartier au 6 rue Mélingue. Café, matcha, pâtisserie maison.',
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: C.green };

/* One graph, rendered on the server, so it is in the HTML before
   any script runs. */
const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['CafeOrCoffeeShop', 'LocalBusiness'],
      '@id': `${SITE.origin}/#business`,
      name: 'NOA — Café & Friends',
      description:
        'Coffee shop de spécialité au 6 rue Mélingue, Paris 19e. Café, matcha et pâtisserie maison, près des Buttes-Chaumont.',
      url: `${SITE.origin}/`,
      image: `${SITE.origin}/photos/noa/hero.jpg`,
      priceRange: '€',
      servesCuisine: ['Café de spécialité', 'Petit-déjeuner', 'Pâtisserie'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.street,
        addressLocality: 'Paris',
        postalCode: '75019',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      hasMap: SITE.maps,
      areaServed: [
        { '@type': 'Place', name: 'Paris 19e' },
        { '@type': 'Place', name: 'Buttes-Chaumont' },
        { '@type': 'Place', name: 'Jourdain' },
      ],
      sameAs: [SITE.instagram, SITE.tiktok],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Chiens acceptés', value: true },
      ],
      /* aggregateRating is deliberately absent: the 4,9 shown on the
         site is Google's own figure, and Google asks that ratings
         collected on its platform are not marked up as first-party. */
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.origin}/#website`,
      url: `${SITE.origin}/`,
      name: 'NOA — Café & Friends',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE.origin}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        {/* Lets the stylesheet hold elements at their pre-reveal state
            only when scripts can actually reveal them again. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Dock />
      </body>
    </html>
  );
}
