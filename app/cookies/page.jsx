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
          Le plan affiché en pied de page est un cadre OpenStreetMap. En
          l’affichant, OpenStreetMap peut déposer ses propres cookies
          techniques, nécessaires au fonctionnement de la carte. Ils
          relèvent d’OpenStreetMap, pas de NOA, et ne servent ni à la
          publicité ni au profilage.
        </p>

        <h2>Reprendre la main</h2>
        <p>
          Tout navigateur permet de bloquer ou d’effacer les cookies, site
          par site, dans ses réglages de confidentialité. Bloquer ceux
          d’OpenStreetMap peut empêcher le plan de s’afficher ; le reste du
          site continuera de fonctionner normalement.
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
