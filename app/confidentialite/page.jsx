import Fit from '@/components/Fit';
import { SITE } from '@/lib/data';

export const metadata = {
  title: 'Confidentialité',
  description: 'Comment le site de NOA traite les données personnelles : il n’en collecte aucune.',
  alternates: { canonical: '/confidentialite' },
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Confidentialité</Fit>
      </section>

      <section className="prose">
        <p className="prose-lede">
          Ce site ne collecte aucune donnée personnelle. Pas de formulaire,
          pas de compte, pas de mesure d’audience, pas de publicité.
        </p>

        <h2>Ce que le site ne fait pas</h2>
        <p>
          Aucun outil de statistiques n’est installé — ni Google Analytics,
          ni équivalent. Aucun pixel publicitaire, aucun bouton de partage
          traçant, aucune newsletter. Rien de ce que vous faites ici n’est
          enregistré ni transmis à NOA.
        </p>

        <h2>Les deux seules exceptions</h2>
        <p>
          <strong>Le plan.</strong> Le plan est un cadre fourni par Google
          Maps. L’afficher fait contacter les serveurs de Google, qui
          reçoivent votre adresse IP et déposent leurs propres traceurs, y
          compris publicitaires. NOA n’a accès à aucune de ces informations.
        </p>
        <p>
          C’est pour ça que la question vous est posée en arrivant : tant que
          vous n’avez pas répondu, ou si vous refusez, aucune requête n’est
          envoyée à Google. La place du plan affiche l’adresse et un bouton.
          Voir la page <a href="/cookies">Cookies</a>.
        </p>
        <p>
          <strong>Les liens sortants.</strong> Les liens vers Instagram,
          TikTok et Google Maps mènent à des services tiers, qui appliquent
          leurs propres règles une fois que vous y êtes.
        </p>

        <h2>Hébergement</h2>
        <p>
          L’hébergeur conserve des journaux de connexion techniques
          (adresse IP, date, page demandée) pour faire fonctionner et
          sécuriser le service. NOA ne les consulte pas et ne s’en sert pas.
        </p>

        <h2>Vos droits</h2>
        <p>
          Le règlement européen vous donne un droit d’accès, de
          rectification, d’effacement et d’opposition sur vos données. Comme
          ce site n’en détient aucune, il n’y a rien à consulter ni à
          effacer. Pour toute question, passez au {SITE.street} ou écrivez
          sur{' '}
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
        <p>
          En cas de désaccord, vous pouvez saisir la CNIL,{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>.
        </p>
      </section>
    </div>
  );
}
