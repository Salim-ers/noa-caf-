import Fit from '@/components/Fit';

export const metadata = {
  title: 'Cookies',
  description: 'Le site de NOA ne dépose aucun cookie. Détail de la seule exception.',
  alternates: { canonical: '/cookies' },
  robots: { index: false, follow: true },
};

export default function Cookies() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Cookies</Fit>
      </section>

      <section className="prose">
        <p className="prose-lede">
          Ce site ne dépose aucun cookie. C’est pour ça qu’il n’y a pas de
          bandeau à accepter en arrivant.
        </p>

        <h2>Pourquoi il n’y a pas de bandeau</h2>
        <p>
          Un bandeau de consentement est obligatoire dès qu’un site dépose
          des traceurs non essentiels : mesure d’audience, publicité,
          réseaux sociaux. Ce site n’en dépose aucun, donc il n’y a rien à
          vous demander. Vous n’avez aucun choix à faire.
        </p>

        <h2>La seule exception</h2>
        <p>
          Le plan est un cadre Google Maps. En l’affichant, Google dépose
          ses propres cookies, dont certains servent à la publicité et à la
          mesure. Ils relèvent de Google, pas de NOA : NOA ne les lit pas et
          n’en tire aucune information.
        </p>

        <h2>Reprendre la main</h2>
        <p>
          Tout navigateur permet de bloquer ou d’effacer les cookies, site
          par site, dans ses réglages de confidentialité. Bloquer les
          cookies tiers empêche le plan de s’afficher ; le reste du site
          continue de fonctionner normalement, et le lien Itinéraire mène au
          même endroit sans rien charger d’avance.
        </p>

        <h2>Si cela change</h2>
        <p>
          Si NOA ajoute un jour un outil de mesure d’audience ou de
          réservation, cette page sera mise à jour et un vrai choix vous
          sera proposé avant tout dépôt.
        </p>
      </section>
    </div>
  );
}
