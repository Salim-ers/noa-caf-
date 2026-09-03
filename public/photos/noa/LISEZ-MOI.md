# Déposez les photos ici

C'est le dossier que le site lit. Glissez vos fichiers dans **ce
dossier-ci**, en gardant **exactement le même nom** que celui de la
liste, et la photo apparaît toute seule au bon endroit.

Chemin complet : `public/photos/noa/`

## Une seule règle

Le nom du fichier doit être identique, extension `.jpg` comprise.
`hero.jpg` marche. `Hero.JPG`, `hero (1).jpg` ou `hero.png` non.

Écrasez simplement le fichier existant.

## Format

- **JPEG**, 2400 px sur le grand côté
- Le site fabrique tout seul les versions WebP et AVIF, et les tailles
  pour mobile. Vous n'avez rien à redimensionner.

## La liste

| Fichier | Ce qu'il montre | Où il sort |
|---|---|---|
| `hero.jpg` | La devanture, le store vert | réserve — le premier écran est vert |
| `terrace.jpg` | La terrasse, la rue | Le lieu, Venir |
| `counter.jpg` | Le comptoir, la vitrine à gâteaux | Le lieu |
| `team.jpg` | Derrière le comptoir | Notre histoire |
| `window.jpg` | La vitrine et le logo deux tasses | Le lieu |
| `interior.jpg` | La salle | réserve |
| `dog.jpg` | Un chien dans la salle | Le lieu, Instagram |
| `spread.jpg` | La table garnie, vue large | Accueil, pleine largeur |
| `breakfast.jpg` | Le petit-déjeuner scandinave | Les favoris |
| `toast.jpg` | Avocado toast / croque | Le lieu, Instagram |
| `matcha.jpg` | Le matcha latte | La carte, Le lieu |
| `latte.jpg` | Un latte | Instagram |
| `coffee.jpg` | Un espresso | La carte, Le lieu |
| `cookie.jpg` | Le cookie | Les favoris |
| `matcha-brownie.jpg` | Le brownie matcha | Les favoris |

### Manquant

`carrot-cake.jpg` — aucune photo pour l'instant. Le carrot cake est
porté par le texte seul sur l'accueil. Déposez le fichier sous ce nom
et dites-le-moi : je le branche à la section.

## Après avoir déposé

Deux valeurs à corriger dans `lib/data.js` → `P` : `w` et `h`, les
dimensions réelles en pixels du nouveau fichier. Sans ça la place
réservée à l'image sera fausse et la page sautera au chargement.

Envoyez-moi les fichiers et je m'occupe de cette partie.

## Important

Les photos actuellement dans ce dossier sont des **références de
travail**, pas des fichiers acquis — voir `PHOTO-SOURCES.md` à la
racine du projet. Elles doivent être remplacées avant la mise en
ligne.
