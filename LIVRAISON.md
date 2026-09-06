# Avant la mise en ligne

Six points. **Deux sont bloquants** — les photographies et le domaine.
Les autres demandent une confirmation de NOA.

## 1. Les photographies — bloquant

Les images en place viennent de **Google** : fiche de l'établissement,
photos d'avis clients, articles. Elles ne sont couvertes par aucune
autorisation.

Une photo prise par un client lui appartient. La publier sur le site
commercial de l'établissement est une contrefaçon, même quand elle
montre l'établissement. S'y ajoute le droit à l'image des personnes
reconnaissables — plusieurs vues montrent des clients attablés.

**Le risque porte sur l'exploitant du site**, donc sur NOA une fois
livré.

Elles font un site complet et démontrable, et servent parfaitement à
montrer la mise en page. Elles ne doivent pas partir en ligne.

Le remplacement est immédiat : mêmes noms de fichiers dans
`public/photos/noa/`, deux valeurs à corriger dans `lib/data.js`, rien
d'autre. Les sujets sont simples et le lieu lui appartient. Détail dans
`PHOTO-SOURCES.md`.

## 2. Le domaine — bloquant

Une seule variable à poser :

```
NEXT_PUBLIC_SITE_ORIGIN = https://le-vrai-domaine.fr
```

Sur Vercel : **Settings → Environment Variables**, puis redéployer.

Sans elle, le site fonctionne mais quatre choses pointent vers
`noacafe.paris`, qui n'appartient pas à NOA :

- le `canonical` de chaque page ;
- l'`og:url` et l'image de partage ;
- le `sitemap.xml` et le `robots.txt` ;
- le JSON-LD lu par Google pour la fiche établissement.

Un mauvais domaine ici casse le référencement en silence : les pages
seraient indexées sous une adresse qui ne répond pas.

## 3. À faire confirmer par NOA

Tout est sourcé, rien n'est inventé, mais rien n'est confirmé.

| Quoi | D'où ça vient |
|---|---|
| Les 30 prix | la carte imprimée, photographiée |
| Les horaires | Google et la bio Instagram, qui concordent |
| « 4,9 ★ / 500+ avis » | Google, à un instant donné |
| Les 7 avis cités | Google et TikTok, mot pour mot |
| SIREN, SIRET, code APE | registre public (INSEE / RNE) |
| Capital, nom de la gérante | communiqués |

Les prix et la note bougent. Un coup d'œil de Noémie sur la page
**La carte** et sur les **mentions légales** suffit.

## 4. Le dossier en attente

`photos-en-attente/` contient quatre fichiers non publiés : ils
montrent une boisson ou une assiette, et **Le lieu** ne doit en montrer
aucune. Ils relèvent du même point 1.

## 5. Le plan et les cookies

Le plan vient de Google Maps, qui dépose des traceurs. **Aucune
requête n'est envoyée à Google tant que le visiteur n'a pas
accepté** — vérifié au moniteur réseau. C'est ce qui rend le bandeau
conforme plutôt que décoratif.

Si NOA préfère ne pas poser la question du tout, on peut revenir à
OpenStreetMap, qui ne dépose rien : le bandeau disparaît alors
complètement.

## 6. Sécurité

En place : `nosniff`, `SAMEORIGIN`, `Referrer-Policy`,
`Permissions-Policy`, `HSTS`, et une `Content-Security-Policy`.

Deux limites connues, écrites dans `next.config.mjs` :

- **La CSP n'utilise pas de nonce.** Un nonce doit changer à chaque
  réponse, donc être posé par un middleware, donc rendre les pages
  dynamiques. Les douze routes sont prérendues en statique : un nonce
  figé au build ne protégerait de rien. La politique bloque quand même
  tout script ou feuille venant d'un autre domaine, les plugins, le
  détournement de `<base>`, l'envoi d'un formulaire vers l'extérieur et
  le cadrage du site ailleurs.
- **`npm audit` signale deux avis** qui couvrent Next 9 à 16. Le seul
  correctif est Next 16, une migration majeure. Les failles visent les
  Server Actions, les middlewares, les rewrites et les serveurs
  personnalisés : ce site n'en a aucun, et ses douze routes sont
  statiques.

## Ce qui a été vérifié

Le code, la mise en page et le contenu. **Pas les droits sur les
images** — voir le point 1.

Sur les cinq pages publiques, en 390, 768, 1024 et 1440 px :

- aucun débordement horizontal ;
- aucune image cassée, aucun `alt` manquant ;
- un seul `h1` par page ;
- aucune erreur console, aucune requête en échec ;
- `prefers-reduced-motion` mène directement à l'état de repos ;
- sans JavaScript, rien n'est caché — l'écran d'ouverture ne
  s'affiche même pas ;
- aucun nom de fichier, aucune note de production, aucun contenu
  technique visible ;
- aucune photographie utilisée deux fois sur une même page, ni sur
  deux pages différentes.
