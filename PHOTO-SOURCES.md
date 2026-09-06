# Photographies — provenance

**Ce fichier n'est pas publié.** Il vit à la racine du dépôt, pas dans
`public/`, et n'apparaît nulle part sur le site.

## Statut : fournies par NOA

Toutes les photographies de `public/photos/noa/` viennent de NOA,
remises directement pour ce site. Aucune image tierce n'est utilisée.
Le blocage de licence qui pesait sur les premières versions est levé :
les photographies de presse et de fiches d'annuaire qui servaient de
repères au départ ont toutes été remplacées.

## Ce qui leur a été fait

Rien qui change l'image : conversion en JPEG progressif qualité 88–90,
et redimensionnement.

**Aucune photographie n'est agrandie au-delà de sa taille d'origine**
pour remplir un emplacement — c'est l'emplacement qui s'adapte. Deux
exceptions assumées, où le fichier livré était plus petit que la place
qu'il occupe à l'écran :

| Fichier | Livré | Posé | Traitement |
|---|---|---|---|
| les sept `*-wide` du premier lot | 1 672 px | 2 400 px | Lanczos + masque flou léger |
| `noemie` | 474 px | 1 000 px | idem |
| `salon-*`, `vitrine-logo`, `salle-tables` | 977 px | 1 400 px | idem |
| `lounge` | 1 024 px | 1 600 px | idem |

Le ré-échantillonnage n'invente aucun détail : il fait l'agrandissement
proprement une bonne fois, avec un bon filtre, au lieu de le laisser
bâcler par le navigateur à chaque affichage. **Un fichier d'origine plus
défini restera toujours meilleur** — si NOA les retrouve, il suffit de
les déposer sous le même nom.

## Recadrages

Deux fichiers ont été découpés :

- la photographie qui montrait le brownie matcha et le cookie côte à
  côte a donné deux carrés, un par produit ;
- `noemie` et quelques vues du salon ont été recadrées au format de
  leur emplacement.

## À confirmer par NOA avant la mise en ligne

Rien de tout cela n'est inventé, mais rien n'a été confirmé par NOA :

- **Les prix**, relevés sur la carte imprimée. Ils changent.
- **Les horaires** : lundi–vendredi 8h30–17h, samedi–dimanche 10h–18h.
  Les sources publiques ne concordaient pas toutes.
- **La note et le nombre d'avis** — 4,9 et 500+ — qui bougent.
- **Les avis cités**, repris mot pour mot de Google et TikTok.
- **Les mentions légales** : SIREN, SIRET, code APE et date viennent
  du registre public ; le capital et le nom de la gérante ont été
  communiqués.

## En attente

`photos-en-attente/` contient quatre fichiers non publiés : ils
montrent une boisson ou une assiette, et la page Le lieu ne doit en
montrer aucune. Le détail est dans le LISEZ-MOI du dossier.

## Marque

La marque principale est le **logotype `NOA` de l'auvent**, vectorisé
dans `lib/logo.js`. Comparé au lettrage de la devanture, il concorde :
mêmes fûts arrondis, même contrepoinçon oblique dans le O, même A à
sommet plat.

`public/brand/noa-mark.png` et `noa-lockup.png` sont **l'autre marque
NOA**, le dessin des deux tasses de la vitrine, isolé par seuillage sur
la luminance depuis une photographie de la vitrine. Le tracé n'a pas
été redessiné.

Si NOA fournit un SVG officiel, remplacez les fichiers et
`components/Logo.jsx` continue de fonctionner tel quel.
