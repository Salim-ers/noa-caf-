# Photographies — provenance et droits

**Ce fichier n'est pas publié.** Il vit à la racine du dépôt, pas dans
`public/`, et n'apparaît nulle part sur le site.

## Statut : à trier, pas forcément à refaire

Les photographies de `public/photos/noa/` ont été récupérées sur
Google. Deux origines s'y mélangent, et elles n'ont pas du tout le
même statut.

### Celles publiées par la fiche NOA — a priori utilisables

Une bonne partie vient du profil **« NOA café »** lui-même : c'est
l'établissement qui les a déposées sur sa fiche Google. C'est son
matériel, et les reprendre sur son propre site ne pose pas de question
envers un tiers.

Un seul point à vérifier avec Noémie : **si un photographe a été
payé pour les prendre, la cession de droits doit être écrite.** Une
facture ne suffit pas — sans clause de cession, le photographe reste
titulaire, même payé. C'est l'oubli le plus fréquent chez les petits
établissements.

### Celles déposées par des clients — à remplacer

Le reste vient de photos d'avis. Une photo prise par un client lui
appartient : publier son avis donne une licence à Google, pas à
l'établissement.

**La retouche n'y change rien.** Une image modifiée reste une œuvre
dérivée, et le droit d'auteur de l'original la suit. « Elle ne
ressemble plus à l'originale » n'est pas un moyen de défense, et un
passage par un outil d'IA n'ouvre aucun droit nouveau. Il faudrait que
la transformation soit assez originale pour constituer une œuvre à
part entière — le seuil est très haut, et un recadrage ou un
rehaussement ne l'atteint pas.

S'y ajoute le **droit à l'image** des personnes reconnaissables, qui
vaut quelle que soit l'origine de la photo : plusieurs vues montrent
des clients attablés, une personne au comptoir, des gens en terrasse.
Leur accord est requis séparément pour un usage commercial.

## Ce qu'il faut faire

**Trier.** Noémie sait en un coup d'œil lesquelles viennent de sa
fiche. `SEANCE-PHOTO.md` liste les trente-cinq fichiers avec leur
sujet : il suffit de cocher.

- Celles de sa fiche : elles restent, sous réserve de la cession du
  photographe.
- Les autres : à reprendre. Le lieu est le sien et les sujets sont
  simples.

Le remplacement, quand il faut remplacer, ne coûte rien :

1. Photographier ce qui manque. Un téléphone récent suffit largement.
2. Déposer les fichiers dans `public/photos/noa/` **sous les mêmes
   noms** (voir le LISEZ-MOI du dossier).
3. Corriger `w` et `h` dans `lib/data.js` → `P`.

Rien d'autre à toucher : chaque photographie n'est déclarée qu'une
fois. Le site ne change pas de forme, seules les images changent.

Une séance avec un photographe reste le meilleur choix si le budget
existe, et règle les deux droits d'un coup à condition que la cession
soit écrite.

## En attendant

Les images en place font un site complet et démontrable. Celles qui
viennent de la fiche NOA peuvent rester ; les autres servent à montrer
la mise en page en attendant leur remplacement.

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
