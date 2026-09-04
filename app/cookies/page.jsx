import Fit from '@/components/Fit';

export const metadata = {
  title: 'Cookies',
  description:
    'Ce que le site de NOA dépose, ce qu’il ne dépose pas, et pourquoi le plan attend votre accord.',
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
          Ce site ne dépose aucun cookie qui lui appartienne. Le seul sujet,
          c’est le plan, et il ne se charge pas tant que vous n’avez pas dit
          oui.
        </p>

        <h2>Ce que NOA ne fait pas</h2>
        <p>
          Aucun outil de mesure d’audience, ni Google Analytics ni équivalent.
          Aucun pixel publicitaire, aucun bouton de partage traçant, aucune
          newsletter, aucun compte. Rien de ce que vous faites ici n’est
          enregistré ni transmis à NOA.
        </p>

        <h2>Le plan</h2>
        <p>
          Les plans du site sont des cadres Google Maps. Les afficher fait
          déposer à Google ses propres cookies, dont certains servent à la
          publicité et à la mesure. Ils relèvent de Google, pas de NOA : NOA ne
          les lit pas et n’en tire aucune information.
        </p>
        <p>
          C’est pour ça que la question vous est posée en arrivant. Tant que
          vous n’avez pas répondu, ou si vous refusez, <strong>aucune requête
          n’est envoyée à Google</strong> : la place du plan affiche l’adresse
          et un bouton. Rien n’est chargé d’avance « au cas où ».
        </p>

        <h2>Revenir sur votre choix</h2>
        <p>
          Le choix est gardé dans votre navigateur, pas sur un serveur. Videz
          les données du site dans les réglages de votre navigateur et la
          question vous sera reposée à la visite suivante. Refuser n’enlève
          rien d’autre : le lien Itinéraire mène au même endroit et ne charge
          rien tant que vous ne cliquez pas.
        </p>

        <h2>Si cela change</h2>
        <p>
          Si NOA ajoute un jour un outil de mesure ou de réservation, cette
          page sera mise à jour et le choix vous sera reposé avant tout dépôt.
        </p>
      </section>
    </div>
  );
}
