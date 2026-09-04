import Fit from '@/components/Fit';
import { SITE, LEGAL_INFO as L } from '@/lib/data';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de NOA, coffee shop au 6 rue Mélingue, Paris 19e.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <div className="page">
      <section className="head">
        <Fit as="h1" max={470}>Mentions légales</Fit>
      </section>

      <section className="prose">
        <h2>Éditeur du site</h2>
        <p>
          {L.company}, {L.form}
          {L.capital && <> au capital de {L.capital}</>}
          <br />
          {L.address}
          <br />
          {L.rcs} — SIREN {L.siren} — SIRET {L.siret}
          <br />
          Code APE {L.naf}
          <br />
          Immatriculée le {L.creation}
        </p>

        <h2>Directrice de la publication</h2>
        <p>
          {L.director}, {L.directorRole.toLowerCase()}
        </p>

        <h2>Contact</h2>
        <p>
          Sur place au {SITE.street}, {SITE.city}, aux horaires d’ouverture, ou par message sur{' '}
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>

        <h2>Hébergement</h2>
        <p>
          {L.host.name}
          <br />
          {L.host.address}
          <br />
          <a href={L.host.url} target="_blank" rel="noopener noreferrer">{L.host.url}</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Le nom NOA, le logotype de l’enseigne et le dessin des deux tasses appartiennent à{' '}
          {L.company}. Les photographies publiées sur ce site ont été fournies par NOA. Toute
          reproduction, même partielle, est soumise à autorisation.
        </p>

        <h2>Cartographie</h2>
        <p>
          Les plans affichés sur ce site sont fournis par Google Maps et restent soumis
          aux conditions d’utilisation de Google.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle. Voir la page{' '}
          <a href="/confidentialite">Confidentialité</a>.
        </p>
      </section>
    </div>
  );
}
