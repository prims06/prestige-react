# Guide de conversion HTML → JSX (par page)

Guide pratique pour un dev junior. Basé sur les 6 premières conversions réalisées
(`LoginPage`, `NotFoundPage`, `ContactsPage`, `Blog2Page`, `Shop2Page`, `ProductPage`).

> **Règle d'or :** le DOM final (balises, classes, attributs `data-*`) doit être pixel-perfect
> identique au fragment source. Seule la syntaxe JSX change.

---

## Pages restantes à convertir (dans cet ordre)

| Priorité | Page JSX | Fragment source | ~Taille |
|---|---|---|---|
| 1 | `src/pages/ShopPage.jsx` | `src/fragments/page-shop.js` | 38k |
| 2 | `src/pages/AuthorsPage.jsx` | `src/fragments/page-authors.js` | 53k |
| 3 | `src/pages/BlogPage.jsx` | `src/fragments/page-blog.js` | 53k |
| 4 | `src/pages/AboutPage.jsx` | `src/fragments/page-about.js` | 74k |
| 5 | `src/pages/Home2Page.jsx` | `src/fragments/page-home2.js` | 116k |
| 6 | `src/pages/HomePage.jsx` | `src/fragments/page-home.js` | 139k |
| 7 | `src/components/Header.jsx` | `src/fragments/header.js` | 48k |
| 8 | `src/components/Footer.jsx` | `src/fragments/footer.js` | 21k |

---

## Étape 0 — Comprendre la structure d'un fragment

Chaque fichier dans `src/fragments/` exporte un string HTML brut :

```js
// src/fragments/page-login.js
export default `<main id="content" class="site-main ...">
  <div class="page-content">
    <section class="elementor-section ...">
      ...
    </section>
  </div>
</main>`;
```

Et la page JSX actuelle l'injecte via `InjectHTML` :

```jsx
import html from '../fragments/page-login.js';
import InjectHTML from '../components/InjectHTML.jsx';

export default function LoginPage() {
  return <InjectHTML html={html} />;
}
```

**L'objectif** : remplacer ces 4 lignes par du JSX natif qui produit le même DOM.

---

## Étape 1 — Préparer l'environnement

```bash
# Dans le dossier xchain-app :
npm run build   # doit passer SANS erreur avant de commencer
```

Si le build échoue avant ta conversion, ne continue pas — règle d'abord l'erreur existante.

---

## Étape 2 — Lire le fragment source

Ouvre `src/fragments/page-X.js` et repère les **sections de premier niveau**.
Ce sont les `<section class="elementor-section elementor-top-section ...">` directement
dans la racine du HTML.

Exemple (ContactsPage avait 3 sections) :

```
<main>                        → élément racine = return value de la page
  <section data-id="64fd015"> → ContactsHero()
  <section data-id="482e765"> → ContactsFormSection()
  <section data-id="368cdd9"> → ContactsInfoSection()
```

**Note l'attribut `data-id` de chaque section** — il est unique et indiqué dans `className`
sous la forme `elementor-element-64fd015`. Les deux doivent correspondre.

---

## Étape 3 — Créer le squelette JSX

Commence par la structure vide avec une fonction par section :

```jsx
// src/pages/ShopPage.jsx
import { Link } from 'react-router-dom';

export default function ShopPage() {
  return (
    <div /* copier exactement les attributs de la racine du fragment */>
      <ShopHeader />
      <ShopSidebar />
      <ShopGrid />
    </div>
  );
}

function ShopHeader() {
  return null; // à remplir
}

function ShopSidebar() {
  return null; // à remplir
}

function ShopGrid() {
  return null; // à remplir
}
```

Vérifie que le build passe encore (`npm run build`) avant d'aller plus loin.

---

## Étape 4 — Convertir le HTML en JSX (règles mécaniques)

Applique ces transformations **sans exception** :

### 4.1 Attributs HTML → JSX

| HTML source | JSX | Exemple |
|---|---|---|
| `class="foo bar"` | `className="foo bar"` | Toujours |
| `for="id"` | `htmlFor="id"` | Sur les `<label>` |
| `tabindex="0"` | `tabIndex={0}` | Nombre entre `{}` |
| `fetchpriority="high"` | `fetchPriority="high"` | camelCase |
| `autocomplete="off"` | `autoComplete="off"` | camelCase |
| `readonly` | `readOnly` | camelCase |
| `required=""` | `required` | booléen JSX (pas de valeur) |
| `value=""` sur input | `defaultValue=""` | ou supprimer si vide |

### 4.2 Éléments void (auto-fermants obligatoire)

```html
<!-- HTML -->                  <!-- JSX -->
<br>                    →      <br />
<img src="x.jpg">      →      <img src="x.jpg" />
<input type="text">    →      <input type="text" />
<hr>                   →      <hr />
<link>                 →      <link />
```

### 4.3 Styles inline

```html
<!-- HTML -->
style="position: absolute; top: 0; font-size: 14px"

<!-- JSX -->
style={{ position: 'absolute', top: 0, fontSize: '14px' }}
```

Règles de conversion des propriétés :
- kebab-case → camelCase : `font-size` → `fontSize`, `margin-top` → `marginTop`
- Valeurs numériques sans unité restent des nombres : `{ opacity: 0, zIndex: 10 }`
- Valeurs avec unité restent des strings : `{ width: '100%', top: '4px' }`

**CSS custom properties (variables `--xxx`)** : garder la clé en string :

```html
style="--translateY: 1.5px; transform: translateY(var(--translateY))"
```
```jsx
style={{ '--translateY': '1.5px', transform: 'translateY(var(--translateY))' }}
```

### 4.4 Entités HTML

Ne PAS laisser d'entités HTML dans le JSX. Utiliser le vrai caractère Unicode :

| Entité HTML | JSX |
|---|---|
| `&nbsp;` | `{' '}` |
| `&amp;` | `{'&'}` |
| `&#x2014;` ou `&mdash;` | `{'—'}` |
| `&copy;` | `{'©'}` |
| `&bull;` | `{'•'}` |

### 4.5 Emojis "mojibake" (caractères cassés)

Les fragments peuvent contenir des emojis encodés en latin-1 comme `ðŸ"` au lieu de `🔍`.
Pour corriger : cherche le contexte ("Photography", "Art", etc.), trouve l'emoji original
dans le design, et utilise le vrai caractère entre `{'...'}` :

```jsx
<span>{'📸'} Photography</span>
<span>{'🎨'} Art</span>
<span>{'🌐'} Virtual worlds</span>
<span>{'⚡'} Utility</span>
<span>{'🔥'} Trading cards</span>
```

### 4.6 Liens internes → `<Link>`

```html
<!-- HTML -->
<a href="/shop">Shop</a>
<a href="/product">Voir</a>

<!-- JSX : liens INTERNES via React Router -->
<Link to="/shop">Shop</Link>
<Link to="/product">Voir</Link>
```

Le mapping des routes est dans `src/App.jsx`. Les liens externes restent `<a href>`.

Les ancres `#section-id` restent `<a href="#section-id">` (React Router laisse passer les hash).

### 4.7 Attributs `data-settings` JSON

**Ne JAMAIS convertir en objet JS.** Elementor lit cette valeur avec `JSON.parse(el.dataset.settings)`.
Garder comme string entre `{' '}` (guillemets simples) :

```html
<!-- HTML -->
data-settings="{&quot;sticky&quot;:&quot;top&quot;}"
```
```jsx
data-settings='{"sticky":"top"}'
```

Tous les autres `data-*` restent tels quels : `data-id="abc"`, `data-element_type="section"`, etc.

### 4.8 SVG inline

```html
<svg class="svg-inline--fa" viewBox="0 0 448 512" aria-hidden="true">
  <path fill="currentColor" d="M224 256..."></path>
</svg>
```
```jsx
<svg className="svg-inline--fa" viewBox="0 0 448 512" aria-hidden="true">
  <path fill="currentColor" d="M224 256..." />
</svg>
```

Attributs SVG à camelCase : `stroke-width` → `strokeWidth`, `fill-rule` → `fillRule`,
`clip-path` → `clipPath`, `xmlns:xlink` → `xmlnsXlink`.

---

## Étape 5 — Extraire les données répétitives

Quand le HTML contient une liste d'éléments identiques (produits, articles, auteurs, liens),
les extraire en constante d'array **en haut du fichier**, avant les composants :

```jsx
// Exemple Shop2Page.jsx
const PRODUCTS = [
  { id: 2472, name: 'Abstract image', price: '$2,560.00', img: '/images/...', hot: false },
  { id: 1660, name: 'Colorful 3D object', price: '$890.00', img: '/images/...', hot: true },
  // ...
];

export default function Shop2Page() { ... }

function Shop2Grid() {
  return (
    <ul className="products columns-4">
      {PRODUCTS.map(p => (
        <li key={p.id} className="...">
          {p.hot && <span className="premium-woo-product-featured">Hot</span>}
          <h2>{p.name}</h2>
          <span>{p.price}</span>
        </li>
      ))}
    </ul>
  );
}
```

**Règle de décision :** si un bloc se répète 3 fois ou plus avec la même structure → array + map.
Si c'est unique ou 2 fois → inline dans le JSX.

---

## Étape 6 — Factoriser les sous-composants

Si le même DOM pattern est réutilisé à l'intérieur d'une page (ex : formulaire en double,
reviewer imbriqué, carte info), créer une fonction helper **dans le même fichier** :

```jsx
// Exemple ContactsPage.jsx — même form en 2 endroits (desktop/mobile)
function ContactForm({ widgetId, formId }) {
  return (
    <form className="elementor-form" ...>
      <input id={`form-field-name-${widgetId}`} ... />
      ...
    </form>
  );
}

function ContactsFormSection() {
  return (
    <>
      {/* version desktop */}
      <div className="elementor-hidden-mobile">
        <ContactForm widgetId="f98104e" formId="f98104e" />
      </div>
      {/* version mobile */}
      <div className="elementor-hidden-desktop elementor-hidden-tablet">
        <ContactForm widgetId="d58bbf7" formId="d58bbf7" />
      </div>
    </>
  );
}
```

---

## Étape 7 — Supprimer l'import du fragment

Une fois la page convertie en JSX :

```jsx
// SUPPRIMER ces deux lignes :
import html from '../fragments/page-X.js';
import InjectHTML from '../components/InjectHTML.jsx';

// Et remplacer :
// return <InjectHTML html={html} />;
// par :
// return <div ...> <Section1 /> <Section2 /> </div>;
```

---

## Étape 8 — Vérifier le build

```bash
npm run build
```

Le build doit passer **sans erreur** (les warnings de taille de chunk sont normaux).
Ne passe pas à la page suivante si le build échoue.

---

## Checklist par page (à cocher)

Pour chaque page, dans cet ordre :

- [ ] Lire le fragment `src/fragments/page-X.js`
- [ ] Identifier les sections de premier niveau et leur `data-id`
- [ ] Créer le squelette JSX avec fonctions vides + `return null`
- [ ] Build check vert
- [ ] Convertir section par section (4.1 à 4.8)
- [ ] Extraire les données répétitives en constante d'array
- [ ] Factoriser les sous-composants réutilisables
- [ ] Supprimer `import html from '../fragments/...'`
- [ ] Supprimer `import InjectHTML from '../components/InjectHTML.jsx'`
- [ ] Build check vert final

---

## Pièges fréquents et comment les éviter

### Piège 1 : `data-settings` converti en objet JS

```jsx
// ❌ FAUX — casse Elementor silencieusement
data-settings={{ sticky: 'top' }}

// ✅ CORRECT — string JSON
data-settings='{"sticky":"top"}'
```

### Piège 2 : Classe `elementor-element-XXXXX` modifiée ou manquante

Chaque ID `elementor-element-XXXXX` est lié à des règles CSS spécifiques.
Si tu le changes ou l'oublies, la mise en page casse sans message d'erreur.

```jsx
// ❌ FAUX
className="elementor-section elementor-element my-custom-id"

// ✅ CORRECT — copier tel quel depuis le fragment
className="elementor-section elementor-top-section elementor-element elementor-element-64fd015"
```

### Piège 3 : Style avec `--custom-property` converti en camelCase

```jsx
// ❌ FAUX — React ne reconnaît pas les variables CSS en camelCase
style={{ '--translateY': undefined, translateY: '1.5px' }}

// ✅ CORRECT — guillemets autour du nom de la variable CSS
style={{ '--translateY': '1.5px', transform: 'translateY(var(--translateY))' }}
```

### Piège 4 : `fetchpriority` oublié sur la première image

La première image importante de la page doit avoir `fetchPriority="high"`.
Pour les images en liste, utiliser `loading="lazy"` sur tout sauf le premier :

```jsx
{ITEMS.map((item, i) => (
  <img
    src={item.img}
    {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })}
  />
))}
```

### Piège 5 : Entité `&amp;` dans une URL (srcset)

```html
<!-- HTML : & encodé en &amp; dans un srcset -->
srcset="img.jpg?w=300&amp;h=300 300w"
```
```jsx
// JSX : utiliser le vrai & car JSX est du JavaScript, pas du HTML
srcSet="img.jpg?w=300&h=300 300w"
```

### Piège 6 : Texte entre balises qui contient des accolades

```html
<!-- HTML : texte littéral avec {  } -->
<p>Choisir {1} option</p>
```
```jsx
// ❌ FAUX — JSX interprète {} comme du code
<p>Choisir {1} option</p>  // → rendu : "Choisir 1 option" (ok par chance)

// ✅ CORRECT pour les accolades littérales
<p>{'{'} texte avec accolades {'}'}</p>
```

---

## Suppression finale (après TOUTES les pages)

Quand toutes les pages ET header/footer sont convertis :

```bash
# 1. Supprimer InjectHTML
rm src/components/InjectHTML.jsx

# 2. Supprimer les fragments de pages (GARDER styles-head.js et scripts-head.js)
rm src/fragments/page-*.js
rm src/fragments/header.js
rm src/fragments/footer.js

# 3. Supprimer le script d'extraction
rm scripts/extract-fragments.mjs

# 4. Vérifier qu'aucun fichier n'importe plus InjectHTML
grep -r "InjectHTML" src/   # doit retourner 0 résultat

# 5. Build final
npm run build
```

**NE PAS supprimer :**
- `src/fragments/styles-head.js` — utilisé par le plugin Vite pour injecter les `<style>` dans `<head>`
- `src/fragments/scripts-head.js` — utilisé par le plugin Vite pour injecter les `<script>` dans `<body>`
- `scripts/collect-styles.mjs` et `scripts/collect-scripts.mjs` — scripts de collecte
- Le plugin `injectAggregatedAssets` dans `vite.config.js`

---

## Référence rapide : pages déjà converties (exemples à copier)

| Page | Pattern notable |
|---|---|
| `LoginPage.jsx` | Formulaire simple, `htmlFor`, inputs self-closing |
| `NotFoundPage.jsx` | `Array.from({length:14}).map()` pour ticker répétitif |
| `ContactsPage.jsx` | Composant `ContactForm` réutilisé desktop/mobile, cartes info en array |
| `Blog2Page.jsx` | Array `POSTS` en haut, `fetchPriority` conditionnel sur premier item |
| `Shop2Page.jsx` | Array `PRODUCTS` avec flag `hot`, emojis mojibake corrigés |
| `ProductPage.jsx` | CSS custom props complexes, `children` prop pour commentaires imbriqués |
