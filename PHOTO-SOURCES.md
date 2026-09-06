# Photographies — provenance et droits

**Ce fichier n'est pas publié.** Il vit à la racine du dépôt, pas dans
`public/`, et n'apparaît nulle part sur le site.

## Statut : à régler avant toute mise en ligne

Les photographies de `public/photos/noa/` ont été **trouvées sur
Google** — fiche de l'établissement, photos d'avis clients, articles.
Elles n'ont pas été fournies par NOA et ne sont couvertes par aucune
autorisation.

Une version précédente de ce fichier disait l'inverse. C'était une
erreur, corrigée ici.

### Ce que ça implique

**Une photo prise par un client appartient à ce client.** Publier son
avis sur Google lui donne une licence envers Google, pas envers un
tiers. Les reprendre sur le site commercial de l'établissement est une
contrefaçon, même quand elles montrent l'établissement lui-même, et
même quand c'est l'établissement qui les reprend.

Deux droits distincts se cumulent ici :

- **Le droit d'auteur** du photographe — client, journaliste ou
  professionnel. Une série au moins portait un crédit explicite,
  « © Sabrina Sako ».
- **Le droit à l'image** des personnes reconnaissables. Plusieurs
  photographies montrent des clients attablés, une personne au
  comptoir, des gens en terrasse. Leur accord est requis séparément
  pour un usage commercial.

Le risque porte sur **l'exploitant du site**, donc sur NOA une fois le
site livré, pas sur le prestataire.

## Ce qu'il faut faire

Le système est construit pour ça, et le remplacement ne coûte rien :

1. Photographier le lieu. C'est le sien, les sujets sont simples — la
   salle, le comptoir, la devanture, le salon, les gâteaux, les
   tasses. Un téléphone récent suffit largement.
2. Déposer les fichiers dans `public/photos/noa/` **sous les mêmes
   noms** (voir le LISEZ-MOI du dossier).
3. Corriger `w` et `h` dans `lib/data.js` → `P`.

Rien d'autre à toucher : chaque photographie n'est déclarée qu'une
fois. Le site ne change pas de forme, seules les images changent.

Une séance avec un photographe reste le meilleur choix si le budget
existe, et règle les deux droits d'un coup à condition que la cession
soit écrite.

## En attendant

Les images en place font un site complet et démontrable. Elles servent
à montrer la mise en page, les cadrages et les proportions — **pas à
être publiées**.

## Ce qui a été fait aux fichiers

Conversion en JPEG progressif qualité 88–90, et redimensionnement.
Aucune n'est agrandie au-delà de sa taille d'origine pour remplir un
emplacement, sauf celles-ci, livrées plus petites que la place
qu'elles occupent :

| Fichier | Livré | Posé |
|---|---|---|
| les sept `*-wide` | 1 672 px | 2 400 px |
| `noemie` | 474 px | 1 000 px |
| `salon-*`, `vitrine-logo`, `salle-tables` | 977 px | 1 400 px |
| `lounge` | 1 024 px | 1 600 px |

Ré-échantillonnage Lanczos et masque flou léger : cela n'invente aucun
détail, cela évite seulement que le navigateur étire l'image avec un
filtre bon marché.

## Marque

La marque principale est le **logotype `NOA` de l'auvent**, vectorisé
dans `lib/logo.js`, relevé sur le lettrage de la devanture.

`public/brand/noa-mark.png` et `noa-lockup.png` sont le dessin des deux
tasses de la vitrine, isolé par seuillage depuis une photographie.

**Ces deux marques appartiennent à NOA** : les reprendre pour son
propre site ne pose pas de question de droit d'auteur envers un tiers.
Si NOA dispose des fichiers d'origine, un SVG officiel remplacerait
avantageusement le tracé relevé.
