# Déposez les photos ici

C'est le dossier que le site lit. Glissez vos fichiers dans **ce
dossier-ci**, en gardant **exactement le même nom** que dans la liste,
et la photo apparaît toute seule au bon endroit.

Chemin complet : `public/photos/noa/`

## Une seule règle

Le nom doit être identique, extension `.jpg` comprise.
`hero.jpg` marche. `Hero.JPG`, `hero (1).jpg` ou `hero.png` non.

Écrasez simplement le fichier existant.

## Format

- **JPEG**, 2400 px sur le grand côté
- Le site fabrique seul les versions WebP et AVIF et les tailles pour
  mobile. Rien à redimensionner de votre côté.
- Plus grand n'apporte rien à l'écran et alourdit le dépôt : les
  fichiers 4K reçus ont été ramenés à 2400 px, ce qui a fait passer le
  lot de 33 Mo à 9 Mo sans perte visible.

## La liste

| Fichier | Ce qu'il montre | Où il sort |
|---|---|---|
| `hero.jpg` | La devanture le soir, salle éclairée | réserve — le premier écran est vert |
| `facade.jpg` | La façade de jour, portes ouvertes | Le lieu |
| `terrace.jpg` | La terrasse et ses bancs | Le lieu, Venir |
| `interior.jpg` | La salle, tables et tabourets | Le lieu |
| `window.jpg` | Une table près de la vitrine | réserve |
| `counter.jpg` | Le comptoir, les lanternes | Le lieu |
| `case.jpg` | La vitrine à pâtisseries | Le lieu, Notre histoire |
| `spread.jpg` | La table vue de dessus | Accueil, pleine largeur |
| `brunch.jpg` | À table | réserve |
| `breakfast.jpg` | Matcha, avocado toast, jus | Les favoris |
| `toast.jpg` | L'avocado toast | Le lieu, Instagram |
| `matcha.jpg` | Le matcha latte | La carte, Le lieu |
| `card.jpg` | Matcha et carte au logo | réserve |
| `latte.jpg` | Un latte, gros plan | Instagram |
| `coffee.jpg` | Café et matcha sur une table | La carte, Le lieu |
| `cake-latte.jpg` | Latte et part de carrot cake | réserve |
| `carrot-cake.jpg` | Le carrot cake | Les favoris, Instagram |
| `matcha-brownie.jpg` | Le brownie matcha | Les favoris, Instagram |
| `cookie.jpg` | Le cookie | Les favoris, Instagram |

« réserve » = la photo est prête et déclarée, elle n'est simplement
pas placée dans une page pour l'instant. Dites-moi où vous la voulez.

## Après avoir déposé

Deux valeurs à corriger dans `lib/data.js` → `P` : `w` et `h`, les
dimensions réelles du nouveau fichier. Sans ça la place réservée à
l'image est fausse et la page saute au chargement.

Envoyez-moi les fichiers, je m'occupe de cette partie.

## Si une photo ne change pas à l'écran

Next garde un cache d'images optimisées. Après un remplacement :

```bash
rm -rf .next/cache/images
```

puis relancez. C'est déjà fait pour le lot en place.
