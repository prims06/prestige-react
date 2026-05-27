# Guide de conversion HTML → JSX (par page)

Guide pratique pour un dev junior. Basé sur les 7 premières conversions réalisées
(`LoginPage`, `NotFoundPage`, `ContactsPage`, `Blog2Page`, `Shop2Page`, `ProductPage`, `AuthorsPage`).

> **Règle d'or :** le DOM final (balises, classes, attributs `data-*`) doit être pixel-perfect
> identique au fragment source. Seule la syntaxe JSX change.

---

## Pages restantes à convertir (dans cet ordre)

| Priorité | Page JSX | Fragment source | ~Taille |
|---|---|---|---|
| 1 | `src/pages/ShopPage.jsx` | `src/fragments/page-shop.js` | 38k |
| ✅ | `src/pages/AuthorsPage.jsx` | `src/fragments/page-authors.js` | 53k |
| 2 | `src/pages/BlogPage.jsx` | `src/fragments/page-blog.js` | 53k |
| 3 | `src/pages/AboutPage.jsx` | `src/fragments/page-about.js` | 74k |
| 4 | `src/pages/Home2Page.jsx` | `src/fragments/page-home2.js` | 116k |
| 5 | `src/pages/HomePage.jsx` | `src/fragments/page-home.js` | 139k |
| 6 | `src/components/Header.jsx` | `src/fragments/header.js` | 48k |
| 7 | `src/components/Footer.jsx` | `src/fragments/footer.js` | 21k |

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

## Points d'attention systématiques

Ce sont les vérifications effectuées sur **chaque** page convertie. Lis cette section
une fois avant de commencer, puis reviens y vérifier élément par élément.

---

### A. Lire le fragment EN ENTIER avant d'écrire une ligne de JSX

Ne commence pas à convertir section par section en lisant à la volée.
Lis d'abord tout le fragment pour :
- Identifier combien de sections existent au premier niveau
- Repérer les patterns répétitifs (items en liste → futur array + map)
- Voir si un même DOM pattern apparaît plusieurs fois (→ futur sous-composant)
- Relever tous les `data-id` des sections → noms des fonctions helpers

```
Lecture → Plan → Code → Build check
              ↑
        NE PAS sauter cette étape
```

---

### B. Chaque élément Elementor a TROIS identifiants à préserver

Pour **chaque** `<section>`, `<div>` colonne, et `<div>` widget :

```html
<!-- Les 3 identifiants dans le fragment source -->
class="... elementor-element-82cd3da ..."   ← dans className
data-id="82cd3da"                           ← attribut séparé
data-element_type="section"                 ← ET data-e-type="section"
```

```jsx
// JSX correct — les 3 présents
<section
  className="elementor-section elementor-element elementor-element-82cd3da"
  data-id="82cd3da"
  data-element_type="section"
  data-e-type="section"
>
```

Si l'un des trois manque, le CSS ou le JS Elementor ne trouvera pas l'élément.
`data-element_type` et `data-e-type` sont **toujours tous les deux présents** dans la source.

---

### C. Quand tu factorises en composant réutilisable, les IDs vont dans le tableau de données

Si tu as 10 auteurs, 12 produits, 9 articles, chacun a ses propres IDs.
Ces IDs ne disparaissent pas parce que tu as fait un composant.

**Méthode :**
1. Lire le fragment et relever tous les IDs pour chaque item
2. Les ajouter comme champs dans l'array de données
3. Les passer comme props au composant et les utiliser dans le JSX

```js
// Dans l'array de données, un objet par item répété
{ name: 'Lydia', sId: '82cd3da', lcId: 'fa84781', imgId: '49008fa', ... }
```

```jsx
// Dans le composant, utiliser les IDs via template literals
<section className={`... elementor-element-${a.sId}`} data-id={a.sId}>
  <div className={`... elementor-element-${a.lcId}`} data-id={a.lcId}>
    <img className={`... wp-image-${a.wpImg}`} />
```

---

### D. Les classes `elementor-element-XXXXX` sont des sélecteurs CSS, pas du décor

Chaque classe `elementor-element-XXXXX` est utilisée dans le CSS généré par Elementor
pour appliquer des styles spécifiques à cet élément (marges, couleurs, tailles, etc.).

- **Ne jamais inventer un ID** → utilise exactement ce qui est dans le fragment
- **Ne jamais fusionner deux IDs** → si deux éléments ont deux classes différentes, ce n'est pas une erreur
- **Ne jamais supprimer un ID** → même s'il te semble inutile
- **Ne jamais changer l'ordre des classes** → la spécificité CSS en dépend

```jsx
// ❌ FAUX — ID inventé ou simplifié
className="elementor-section elementor-element my-section"

// ✅ CORRECT — copié mot pour mot du fragment
className="elementor-section elementor-top-section elementor-element elementor-element-a464f1f elementor-section-boxed elementor-section-height-default"
```

---

### E. `data-settings` : JSON string, jamais objet JS

Elementor lit ces attributs avec `JSON.parse(el.dataset.settings)`.
Si tu passes un objet React, React va le stringifier en `[object Object]`.

```jsx
// ❌ FAUX — objet JS
data-settings={{ mdp_selection_sticky_effect_enable: false }}

// ✅ CORRECT — string JSON entre guillemets simples
data-settings='{"mdp_selection_sticky_effect_enable":false}'
```

Pour les `data-settings` dynamiques (ex: `layout` variable), utilise un template literal :
```jsx
data-settings={`{"layout":"${layout}","submenu_icon":{"value":"..."}}`}
```

Les guillemets à l'intérieur du JSON doivent être échappés : `\\"` dans le template literal.

---

### F. La première image d'une page → `fetchPriority="high"`, les suivantes → `loading="lazy"`

C'est une règle de performance LCP (Largest Contentful Paint).

```jsx
// Image principale / hero → chargement prioritaire
<img fetchPriority="high" src="..." />

// Images dans une liste / grille → chargement différé
{ITEMS.map((item, i) => (
  <img {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })} src={item.img} />
))}
```

Attribut : `fetchpriority` en HTML → `fetchPriority` en JSX (camelCase).
Ne jamais mettre `fetchPriority` et `loading` simultanément sur la même image.

---

### G. Tous les attributs numériques → number JSX, pas string

```jsx
// ❌ FAUX — string
tabIndex="-1"
width="300"
height="300"
rowSpan="2"

// ✅ CORRECT pour les attributs qui ACCEPTENT un number
tabIndex={-1}         // toujours un number
// EXCEPTION : width et height sur <img> restent strings ou numbers selon le contexte
// → Copier tel quel depuis le fragment : width="300" height="300" est accepté en JSX
```

La règle concrète : si l'attribut est `tabIndex`, c'est un number. Pour `width`, `height`,
`rows`, `cols`, `size` sur les inputs, copier tel quel (React accepte les deux).

---

### H. Les classes de visibilité responsive appartiennent à l'élément parent

`elementor-hidden-mobile`, `elementor-hidden-tablet`, `elementor-hidden-desktop` se trouvent
toujours sur la section ou la colonne, jamais sur le widget à l'intérieur.

```jsx
// ❌ FAUX — la classe hide sur le widget enfant
function NavMenu({ isVertical }) {
  const cls = isVertical ? 'elementor-hidden-tablet' : '';
  return <div className={`elementor-widget-nav-menu ${cls}`}>

// ✅ CORRECT — la classe hide sur la colonne parente
<div className="elementor-column elementor-col-33 elementor-hidden-tablet elementor-hidden-mobile">
  <NavMenu isVertical={true} />
</div>
```

Avant de rendre un élément conditionnel avec une prop, vérifie dans le fragment
**où exactement** se trouve la classe hide.

---

### I. Entités HTML → caractères réels, jamais d'entités dans le JSX

JSX est compilé en JavaScript, pas parsé comme HTML. Les entités HTML ne sont pas interprétées.

```jsx
// ❌ FAUX — entités HTML brutes dans JSX
<span>&bull;</span>       // rendu : "&bull;" (littéral)
<span>&nbsp;</span>       // rendu : "&nbsp;" (littéral)

// ✅ CORRECT — caractère réel
<span>{'•'}</span>
<span>{' '}</span>    // espace insécable
<span>{'—'}</span>    // em dash
<span>{'©'}</span>
```

Exception : `&` dans les URLs (`srcSet`, `href`) → `&` directement (JSX est déjà dans JS).

---

### J. Liens internes et liens externes : règles différentes

```jsx
import { Link } from 'react-router-dom';

// Lien INTERNE (vers une page du site) → toujours <Link to="...">
<Link to="/shop">Boutique</Link>
<Link to="/product">Voir le produit</Link>

// Lien EXTERNE (autre domaine) → <a href> normal avec target
<a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>

// Ancre (hash) → <a href="#..."> (React Router laisse passer)
<a href="#contact">Nous contacter</a>

// Lien mort / placeholder → <a href="/page#"> (copier tel quel du fragment)
<a href="/authors#" className="elementor-item">Shop</a>
```

Le mapping routes → chemins est dans `src/App.jsx`.

---

### K. CSS custom properties dans `style` : guillemets autour du nom

```jsx
// ❌ FAUX — camelCase ne fonctionne pas pour les custom props
style={{ translateY: '1.5px' }}

// ✅ CORRECT — string key avec tirets
style={{ '--translateY': '1.5px', transform: 'translateY(var(--translateY))' }}

// Exemple complet tiré de ProductPage
style={{
  transform: 'rotateX(var(--rotateX))rotateY(var(--rotateY))',
  '--rotateX': '-2.9deg',
  '--rotateY': '-0.8deg'
}}
```

---

### L. Attributs SVG : tous en camelCase

```jsx
// ❌ HTML
<svg xmlns:xlink="..." stroke-width="2" fill-rule="evenodd" clip-path="url(#a)">
  <path stroke-linecap="round" />
</svg>

// ✅ JSX
<svg xmlnsXlink="..." strokeWidth="2" fillRule="evenodd" clipPath="url(#a)">
  <path strokeLinecap="round" />
</svg>
```

Liste complète fréquente : `strokeWidth`, `strokeLinecap`, `strokeLinejoin`,
`fillRule`, `clipRule`, `clipPath`, `stopColor`, `stopOpacity`, `xmlnsXlink`.

---

### M. Attributs `aria-*` et `data-*` : NE PAS mettre en camelCase

Contrairement à tous les autres attributs, `aria-*` et `data-*` gardent leur tiret.

```jsx
// ✅ CORRECT — tirets préservés
aria-label="Menu principal"
aria-hidden="true"
aria-expanded="false"
data-id="89a4cbb"
data-element_type="section"
data-widget_type="heading.default"
```

---

### N. Attributs générés par JS au runtime : ne pas inclure dans le JSX

Certains attributs sont ajoutés dynamiquement par JavaScript au moment du rendu.
Les inclure dans le JSX causerait des warnings React ou des conflits.

| Attribut à ignorer | Généré par |
|---|---|
| `data-smartmenus-id="..."` | SmartMenus JS |
| `aria-expanded` sur les menus | SmartMenus JS |
| `style="position: fixed; width: 1265px"` sur le header sticky | Elementor sticky JS |
| `class="elementor-sticky--active"` | Elementor sticky JS |
| `class="e-lazyloaded"` | Elementor lazyload JS |
| `class="slick-initialized slick-slider"` | Slick JS |

Ces classes/attributs seront ajoutés par le JS Elementor qui tourne dans le navigateur.

---

### O. Vérifier après chaque section, pas à la fin

Convertis une section → `npm run build` → vert → continue.

Si tu convertis toute la page avant de builder et que tu as une erreur JSX,
retrouver l'origine est beaucoup plus difficile.

Build rouge = stop immédiat, correction avant de continuer.

---

### P. Ne pas supprimer le fragment avant confirmation visuelle

L'ordre correct est :
1. Écrire le JSX dans la page
2. Commenter l'import InjectHTML (ne pas encore supprimer)
3. Activer le return JSX
4. `npm run build` vert
5. Vérifier visuellement dans le navigateur (`npm run dev`)
6. **Seulement après** : supprimer l'import InjectHTML et le fragment

En cas de régression visuelle, tu peux revenir immédiatement à l'injection HTML.

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

### Piège 7 : `data-e-type` présent mais `data-element_type` manquant

Le fragment Elementor met **les deux** attributs sur chaque élément.
`data-e-type` seul ne suffit pas — Elementor JS cible `data-element_type` pour initialiser les widgets.

```html
<!-- HTML source — LES DEUX sont présents -->
<section data-element_type="section" data-e-type="section">
<div data-element_type="column" data-e-type="column">
<div data-element_type="widget" data-e-type="widget">
```
```jsx
// ❌ FAUX — CSS et JS Elementor ne fonctionnent pas
<section data-e-type="section">

// ✅ CORRECT — copier les deux
<section data-element_type="section" data-e-type="section">
```

**Vérification rapide :** cherche `data-e-type` dans ton JSX — chaque occurrence doit
avoir `data-element_type` juste avant elle.

### Piège 8 : IDs Elementor manquants dans un composant réutilisable

Quand tu crées un composant générique pour un item répété (ex: `AuthorCard`, `ProductCard`),
chaque instance dans le HTML source a ses propres IDs `elementor-element-XXXXX` et `data-id`.

**Mauvaise approche :** ignorer les IDs car c'est "juste un composant générique"

```jsx
// ❌ FAUX — tous les auteurs auront les mêmes classes CSS, les règles CSS
//           spécifiques à chaque carte ne s'appliquent pas
function AuthorCard({ author }) {
  return (
    <section className="elementor-section elementor-inner-section elementor-element">
```

**Bonne approche :** inclure les IDs dans le tableau de données et les passer en props

```jsx
// ✅ CORRECT — chaque carte a ses propres IDs exacts du fragment
const AUTHORS = [
  { name: 'Lydia Davidson', sId: '82cd3da', lcId: 'fa84781', imgId: '49008fa', ... },
  { name: 'Janet Arnold',   sId: 'c6b7f25', lcId: 'b53abde', imgId: 'cbe1037', ... },
];

function AuthorCard({ author }) {
  return (
    <section
      className={`elementor-section elementor-inner-section elementor-element elementor-element-${author.sId}`}
      data-id={author.sId}
      data-element_type="section"
      data-e-type="section"
    >
      <div className={`elementor-column ... elementor-element-${author.lcId}`}
           data-id={author.lcId} data-element_type="column" data-e-type="column">
```

Chaque widget à l'intérieur (image, titre, icônes, bouton) a également son propre ID unique —
l'inclure dans l'array de données.

### Piège 9 : `tabIndex` passé comme string au lieu de number

```jsx
// ❌ FAUX — string "-1" (mauvais type, React génère un warning)
<a tabIndex="-1">lien</a>

// ✅ CORRECT — number entre accolades
<a tabIndex={-1}>lien</a>
```

Même règle pour `tabIndex={0}`. Les attributs HTML numériques → number JSX.

### Piège 10 : Classes hide/show placées sur le mauvais élément

Elementor utilise des classes `elementor-hidden-tablet`, `elementor-hidden-mobile`,
`elementor-hidden-desktop` pour masquer des éléments selon le viewport.
Ces classes se trouvent toujours sur la **section ou colonne parente**, jamais sur le widget.

```jsx
// ❌ FAUX — les classes hide sur le composant nav-menu widget
function FilterNavMenu({ layout }) {
  const extraClass = layout === 'vertical' ? ' elementor-hidden-tablet elementor-hidden-mobile' : '';
  return <div className={`elementor-widget-nav-menu${extraClass}`}>...

// ✅ CORRECT — les classes hide restent sur la COLONNE parente dans AuthorsMain
<div className="elementor-column elementor-col-33 elementor-hidden-tablet elementor-hidden-mobile"
     data-id="c1b31d2" data-element_type="column">
  <FilterNavMenu layout="vertical" />  {/* pas de classe hide ici */}
</div>
```

Avant de placer une classe `elementor-hidden-*` dans ton JSX, vérifie sur quel élément
elle est dans le fragment source.

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
| `AuthorsPage.jsx` | IDs Elementor par item dans l'array de données, composant `AuthorCard` paramétré, `tabIndex={-1}` |
