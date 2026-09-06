# Avant la mise en ligne

Cinq points. Le premier est bloquant, les autres demandent une
confirmation de NOA.

## 1. Le domaine — bloquant

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

## 2. À faire confirmer par NOA

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

## 3. Les photographies

Elles viennent toutes de NOA. Voir `PHOTO-SOURCES.md`.

Quatre fichiers attendent dans `photos-en-attente/` : ils montrent une
boisson ou une assiette, et **Le lieu** ne doit en montrer aucune.
Dites où les placer et elles partent en ligne.

Si NOA retrouve les fichiers d'origine des photos livrées en petit
format, ils remplaceront les versions ré-échantillonnées.

## 4. Le plan et les cookies

Le plan vient de Google Maps, qui dépose des traceurs. **Aucune
requête n'est envoyée à Google tant que le visiteur n'a pas
accepté** — vérifié au moniteur réseau. C'est ce qui rend le bandeau
conforme plutôt que décoratif.

Si NOA préfère ne pas poser la question du tout, on peut revenir à
OpenStreetMap, qui ne dépose rien : le bandeau disparaît alors
complètement.

## 5. Sécurité

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
