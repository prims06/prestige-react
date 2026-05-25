# Migration HTML → React natif

Guide point-par-point pour eliminer `dangerouslySetInnerHTML` et transformer chaque fragment HTML inject en vrais composants React.

L'objectif est de remplacer:
- `src/components/Header.jsx`, `Footer.jsx`, `InjectHTML.jsx`
- `src/pages/*.jsx` (toutes les pages)
- `src/fragments/*.js` (header.js, footer.js, page-*.js, scripts-head.js)

par une arborescence de composants React tipes, sans aucune injection HTML.

Le CSS existant dans `/public/css/*.css` reste intact. Aucun nouveau fichier CSS ne doit etre ecrit.

---

## 0. Principe directeur

Le rendu visuel depend EXCLUSIVEMENT des classes CSS, IDs, attributs `data-*` et `<style>` inline generes par Elementor. Toute conversion doit preserver ces 4 elements **a l'identique** sinon la mise en page casse.

Regle: chaque composant React doit produire le meme HTML DOM final (memes balises, memes classes, memes ids) que le fragment source. Seule la syntaxe JSX change.

---

## 1. Inventaire des transformations syntaxiques

A appliquer mecaniquement sur chaque conversion. Une `<table>` recapitulative:

| HTML (source Elementor)                | JSX equivalent                          | Note                                              |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------- |
| `class="x y"`                          | `className="x y"`                       | Toujours, sans exception                          |
| `for="id"`                             | `htmlFor="id"`                          | Sur les `<label>`                                 |
| `tabindex="0"`                         | `tabIndex={0}`                          | camelCase + nombre                                |
| `readonly`, `disabled`, `checked`      | `readOnly`, `disabled`, `checked`       | camelCase et booleens JSX                         |
| `style="color: red; padding: 4px"`     | `style={{ color: 'red', padding: '4px' }}` | Objet JS, kebab → camelCase                    |
| `onclick="foo()"`                      | `onClick={() => foo()}` ou handler React | jamais de string handler                          |
| `<br>`, `<img>`, `<input>`, `<hr>`     | `<br />`, `<img ... />`, ...            | Auto-fermes obligatoire                           |
| `<svg xmlns:xlink="...">`              | `<svg xmlnsXlink="...">`                | Attributs SVG camelCase                           |
| `stroke-width`, `fill-rule`            | `strokeWidth`, `fillRule`               | Tous les attributs SVG en camelCase               |
| `data-element_type="section"`          | `data-element_type="section"`           | `data-*` reste tel quel                           |
| `aria-label="foo"`                     | `aria-label="foo"`                      | `aria-*` reste tel quel                           |
| `&nbsp;`, `&amp;`, `&#x2014;`          | `{' '}`, `{'&'}`, `{'—'}`     | Caracteres reels, pas d'entites HTML dans JSX     |
| `<!-- commentaire -->`                 | `{/* commentaire */}`                   | Si conserve                                       |
| `<style>...</style>` inline            | composant `<style dangerouslySetInnerHTML={{__html: '...'}} />` OU extraction en module CSS | Voir section 7 |
| `<script>...</script>` inline          | `useEffect` qui replique le comportement | Voir section 8                                    |

Outils recommandes: l'extension VSCode `HTML to JSX` automatise ~80% de ces conversions. Toujours relire — les `style=` strings et SVG sont les points faibles.

---

## 2. Structure cible du projet

```
xchain-app/
├── public/                       # Statiques (CSS, fonts, images) — INCHANGE
├── src/
│   ├── main.jsx                  # bootstrap React (inchange)
│   ├── App.jsx                   # router (inchange, mais imports mis a jour)
│   ├── styles/
│   │   └── elementor-inline.jsx  # composant qui rend les <style id="..."> inline
│   ├── lib/
│   │   ├── useBodyClasses.js     # hook qui gere les classes body par route
│   │   └── useElementorInit.js   # hook qui replique les init JS (sticky, lazyload, swiper) en React
│   ├── components/
│   │   ├── Layout.jsx            # shell <Header /> <Outlet /> <Footer />
│   │   ├── header/
│   │   │   ├── Header.jsx              # <header data-elementor-type="header">
│   │   │   ├── HeaderStickyBar.jsx     # section sticky top
│   │   │   ├── Logo.jsx
│   │   │   ├── MainNav.jsx             # nav principale + sous-menus
│   │   │   ├── NavDropdown.jsx         # dropdown reutilisable
│   │   │   ├── SearchForm.jsx
│   │   │   ├── MiniCart.jsx
│   │   │   └── ConnectWalletButton.jsx
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   ├── FooterColumn.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── SocialIcons.jsx
│   │   │   └── FooterBottom.jsx
│   │   ├── sections/              # sections d'Elementor reutilisables
│   │   │   ├── HeroSlider.jsx
│   │   │   ├── Ticker.jsx
│   │   │   ├── NotableDrops.jsx
│   │   │   ├── BestSellers.jsx
│   │   │   ├── BrowseByCategory.jsx
│   │   │   ├── MeetXchain.jsx
│   │   │   ├── CategoryGrid.jsx
│   │   │   ├── BlogPreview.jsx
│   │   │   └── CTASection.jsx
│   │   ├── widgets/               # primitives reutilisables
│   │   │   ├── ElementorSection.jsx    # wrapper <section class="elementor-section ...">
│   │   │   ├── ElementorColumn.jsx
│   │   │   ├── ElementorWidget.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── IconBox.jsx
│   │   │   ├── NFTCard.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── AuthorCard.jsx
│   │   │   └── PriceTag.jsx
│   │   └── carousel/
│   │       ├── SwiperCarousel.jsx      # wrapper React autour de Swiper natif
│   │       └── SlickCarousel.jsx       # wrapper React autour de Slick natif
│   ├── pages/
│   │   ├── HomePage.jsx                # compose les sections
│   │   ├── Home2Page.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── Blog2Page.jsx
│   │   ├── ShopPage.jsx
│   │   ├── Shop2Page.jsx
│   │   ├── ProductPage.jsx
│   │   ├── ContactsPage.jsx
│   │   ├── AuthorsPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── NotFoundPage.jsx
│   └── data/                      # contenu extrait du HTML (titres, listes, items)
│       ├── nav.js
│       ├── nfts.js
│       ├── products.js
│       ├── blog.js
│       └── authors.js
└── docs/
    └── MIGRATION.md               # ce document
```

A la fin: `src/fragments/`, `src/components/InjectHTML.jsx` et `scripts/extract-fragments.mjs` sont supprimes.

---

## 3. Methodologie page-par-page

Conversion progressive, dans cet ordre (du plus simple au plus complexe):

1. `LoginPage` (7900 chars source) — formulaire simple
2. `NotFoundPage` (14k) — bloc texte + CTA
3. `ContactsPage` (20k) — formulaire + carte
4. `ProductPage` (22k) — galerie + onglets
5. `Shop2Page`, `Blog2Page` (15-21k) — grilles
6. `ShopPage`, `BlogPage`, `AuthorsPage` (38-52k) — listes
7. `AboutPage` (74k)
8. `Home2Page` (116k)
9. `HomePage` (139k) — toute la page d'accueil

Pour chaque page:

a. Lire le `src/fragments/page-X.js` cote a cote avec le source `<NomPage>.html`
b. Identifier les sections de premier niveau (`<section class="elementor-section ...">` racine)
c. Pour chaque section, decider: section reutilisable (→ `components/sections/`) ou specifique (→ inline dans la page)
d. Convertir le HTML en JSX en suivant le tableau de la section 1
e. Tester visuellement (npm run dev + screenshot) avant de passer a la suivante
f. Quand toutes les sections sont converties, supprimer l'import du fragment

---

## 4. Points sensibles a NE PAS rater

### 4.1 Attributs `data-settings` JSON

Elementor stocke la configuration de chaque widget dans `data-settings="{&quot;sticky&quot;:&quot;top&quot;,...}"`.

Les `&quot;` doivent rester en `&quot;` dans le HTML final pour que le parser Elementor JS les lise. En JSX:

```jsx
<section data-settings={'{"sticky":"top","sticky_on":["desktop","tablet","mobile"]}'}>
```

Ne PAS passer un objet JS — Elementor lit avec `JSON.parse(el.dataset.settings)`.

### 4.2 Inline styles avec `position: fixed` deja appliques

Le header Elementor a `style="position: fixed; width: 1265px; top: 0px;"` injecte par le PHP au moment de l'export. Cet attribut INITIAL est important — la JS sticky le maintient ensuite.

Reproduire tel quel dans le JSX:

```jsx
<section
  className="... elementor-sticky elementor-sticky--active"
  style={{ position: 'fixed', width: '1265px', marginTop: 0, marginBottom: 0, top: 0 }}
>
```

### 4.3 SVG inline

Les icones Elementor sont des SVG inline avec ~40 attributs camelCase. Exemple:

```html
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
     class="svg-inline--fa fa-user" role="img" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 448 512">
  <path fill="currentColor" d="M224 256A128 128 ..."></path>
</svg>
```

→

```jsx
<svg
  aria-hidden="true"
  focusable="false"
  data-prefix="fas"
  data-icon="user"
  className="svg-inline--fa fa-user"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
>
  <path fill="currentColor" d="M224 256A128 128 ..." />
</svg>
```

Risque: oublier `xmlns` ou changer `viewBox` casse l'icone silencieusement.

### 4.4 Conditional classes Elementor

Beaucoup de classes activent un comportement: `.elementor-sticky--active`, `.e-lazyloaded`, `.slick-initialized`, `.swiper-initialized`. Les laisser DANS le markup initial si l'effet doit etre actif des le premier rendu, sinon les ajouter via `useEffect`.

### 4.5 Doubles classes et classes auto-generees

Chaque element a une classe unique du type `elementor-element-e2ac055`. C'est la cle qui lie les regles CSS specifiques au markup. **Garder identique** — meme si ca ressemble a du bruit.

### 4.6 Ordre des classes

Certaines regles CSS Elementor utilisent des selecteurs `.elementor-element-xxx .elementor-widget`. L'ordre des classes peut donc influer sur le calcul de specificite. Garder l'ordre source.

### 4.7 Texte avec entites et emojis

Source contient `&#x2014;`, `&nbsp;`, `&amp;` ainsi que des emojis. JSX accepte les caracteres reels directement. Convertir en Unicode plutot que de garder les entites:

```jsx
<h3>Best sellers {'\u{1F4A5}'}</h3>     // 💥
<span>Foo{' '}bar</span>           // espace insecable
```

### 4.8 `<a href="x.html">` → `<Link to="/x">`

Tous les liens internes doivent passer par React Router:

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

Externes restent en `<a>`. Le mapping des routes est dans `App.jsx`.

### 4.9 Liens d'ancre `#section-id`

Garder `<a href="#contact">` — React Router laisse passer les hash. Pour scroll smooth, gerer dans un `useEffect` qui ecoute `useLocation().hash`.

---

## 5. Header — decoupage detaille

Le `<header>` source fait ~500 lignes. Decoupage cible:

```jsx
<Header>
  <HeaderStickyBar>
    <ElementorColumn col={50}>
      <Logo />
    </ElementorColumn>
    <ElementorColumn col={50}>
      <MainNav items={navItems} />
      <SearchForm />
      <MiniCart count={cartCount} />
      <ConnectWalletButton />
    </ElementorColumn>
  </HeaderStickyBar>
</Header>
```

### 5.1 `MainNav` et dropdowns

Le source utilise `jquery.smartmenus.min.js`. En React natif:

```jsx
function MainNav({ items }) {
  return (
    <ul className="elementor-nav-menu sm sm-vertical">
      {items.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </ul>
  );
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length > 0;

  return (
    <li
      className={`menu-item ${hasChildren ? 'menu-item-has-children' : ''}`}
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => hasChildren && setOpen(false)}
    >
      <Link to={item.href}>{item.label}</Link>
      {hasChildren && open && (
        <ul className="sub-menu" aria-expanded="true">
          {item.children.map((c) => (
            <NavItem key={c.label} item={c} />
          ))}
        </ul>
      )}
    </li>
  );
}
```

Source des `items`: extraire dans `src/data/nav.js`:

```js
export const navItems = [
  { label: 'Home', href: '/', children: [{ label: 'Home 2', href: '/home-2' }] },
  { label: 'Shop', href: '/shop', children: [...] },
  { label: 'Pages', href: '#', children: [...] },
  { label: 'Blog', href: '/blog', children: [...] },
  { label: 'Contacts', href: '/contacts' }
];
```

Garder les classes Elementor (`menu-item`, `sub-menu`, `menu-item-has-children`) — le CSS depend d'elles.

### 5.2 Sticky behavior

Le header sticky est gere par `frontend.min.js`. En React natif:

```js
// src/lib/useStickyHeader.js
export function useStickyHeader(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      if (window.scrollY > 0) node.classList.add('elementor-sticky--active');
      else node.classList.remove('elementor-sticky--active');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
}
```

### 5.3 MiniCart

Le source contient un dropdown panier vide. Composant React minimal:

```jsx
function MiniCart() {
  const [items] = useState([]);   // a brancher sur un store plus tard
  return (
    <div className="elementor-menu-cart__container">
      <span className="elementor-menu-cart__toggle">
        <i className="eicon-basket" />
        <span className="elementor-menu-cart__subtotal">$0.00</span>
      </span>
      {/* dropdown */}
    </div>
  );
}
```

---

## 6. Sections d'accueil — modele

Chaque section Elementor a la structure:

```html
<section class="elementor-section elementor-top-section elementor-element elementor-element-XXXXX ..."
         data-id="XXXXX" data-element_type="section">
  <div class="elementor-container">
    <div class="elementor-column elementor-col-50 ...">
      <div class="elementor-widget-wrap elementor-element-populated">
        <div class="elementor-element ... elementor-widget elementor-widget-YYY"
             data-element_type="widget" data-widget_type="YYY.default">
          <div class="elementor-widget-container">
            ...contenu specifique au widget...
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

→ wrappers reutilisables:

```jsx
// src/components/widgets/ElementorSection.jsx
export default function ElementorSection({ id, className = '', children, ...rest }) {
  return (
    <section
      className={`elementor-section elementor-top-section elementor-element elementor-element-${id} ${className}`}
      data-id={id}
      data-element_type="section"
      {...rest}
    >
      <div className="elementor-container elementor-column-gap-default">
        {children}
      </div>
    </section>
  );
}

// idem ElementorColumn, ElementorWidget
```

Permet d'ecrire chaque section en JSX expressif:

```jsx
<ElementorSection id="hero-5548">
  <ElementorColumn id="hero-col-1" col={50}>
    <HeroSlider slides={heroSlides} />
  </ElementorColumn>
  <ElementorColumn id="hero-col-2" col={50}>
    <SectionTitle level={1}>Discover the unique digital art of NFT</SectionTitle>
    <p>Digital marketplace for crypto collectibles ...</p>
    <Button to="/shop">Explore</Button>
    <Button to="/product" variant="ghost">Create</Button>
  </ElementorColumn>
</ElementorSection>
```

---

## 7. Bloc `<style>` inline

Le source contient 13 blocs `<style>` (variables WordPress, custom CSS, etc.) qui sont actuellement injectes dans `<head>` par le plugin Vite `injectAggregatedAssets`.

Apres conversion, deux options:

**Option A (recommandee):** rester sur l'injection dans `index.html` via le plugin Vite. Ces styles ne changent jamais, autant les inliner statiquement.

**Option B:** extraire chaque bloc en fichier `.css` dans `/public/css/` et l'importer comme les autres feuilles. **Interdit dans cette mission** (regle: aucun nouveau CSS).

**Option C (a eviter):** rendre les blocs depuis un composant React `<InlineStyles />`. Probleme: React rend le `<style>` dans `<body>`, pas dans `<head>` — la cascade peut differer.

→ Garder Option A. Le plugin Vite est conserve, c'est le seul reliquat d'injection.

---

## 8. Bloc `<script>` inline et runtime Elementor

Le source charge 46 scripts + 32 configs inline. Strategie:

### 8.1 Scripts globaux (jQuery, Swiper, Slick, smartmenus, Elementor frontend, etc.)

Restent charges dans `index.html` via le plugin Vite (`injectAggregatedAssets`). Ils ne changent jamais et exposent des globals (`window.jQuery`, `window.Swiper`, `window.elementorFrontend`).

### 8.2 Configs inline (`var elementorFrontendConfig = {...}`)

Idem — injectes dans `<head>` via le plugin Vite. Definissent les globals avant que `frontend.min.js` ne s'execute.

### 8.3 Init scripts par widget (lazyload, sticky, swiper init)

Ceux-ci doivent disparaitre au profit de hooks React:

```js
// src/lib/useElementorInit.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useElementorInit() {
  const { pathname } = useLocation();

  useEffect(() => {
    // backgrounds lazy-load
    requestAnimationFrame(() => {
      document.querySelectorAll('.e-con.e-parent').forEach((el) =>
        el.classList.add('e-lazyloaded')
      );
    });

    // re-trigger Elementor frontend so swipers/galleries discover new DOM
    if (window.elementorFrontend?.elementsHandler) {
      try {
        window.elementorFrontend.elementsHandler.runReadyTrigger(document);
      } catch {}
    }

    // smartmenus re-init pour les dropdowns header
    if (window.jQuery?.fn?.smartmenus) {
      window.jQuery('.sm').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
      });
    }
  }, [pathname]);
}
```

Appele dans `Layout.jsx`.

### 8.4 Carrousels Swiper

Sortir les init de l'init Elementor global. Wrapper React:

```jsx
// src/components/carousel/SwiperCarousel.jsx
import { useEffect, useRef } from 'react';

export default function SwiperCarousel({ children, options = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !window.Swiper) return;
    const instance = new window.Swiper(ref.current, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      ...options
    });
    return () => instance.destroy(true, true);
  }, [options]);

  return (
    <div ref={ref} className="swiper">
      <div className="swiper-wrapper">
        {children.map((child, i) => (
          <div key={i} className="swiper-slide">{child}</div>
        ))}
      </div>
      <div className="swiper-pagination" />
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </div>
  );
}
```

Usage:

```jsx
<SwiperCarousel options={{ slidesPerView: 3, autoplay: { delay: 3000 } }}>
  <NFTCard id="1" name="Infinite figure" price="$915" image="/images/index/1.jpg" />
  <NFTCard id="2" ... />
  <NFTCard id="3" ... />
</SwiperCarousel>
```

Meme principe pour Slick (`SlickCarousel.jsx`).

### 8.5 Ticker (texte qui defile)

CSS-only via `@keyframes` (deja dans `/css/animations.css` ou equivalent). Si JS-driven, isoler dans un hook:

```jsx
function Ticker({ items }) {
  return (
    <div className="elementor-marquee">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="marquee-item">{t}</span>
        ))}
      </div>
    </div>
  );
}
```

Repete le contenu pour donner l'illusion d'infini.

---

## 9. Body classes par route

Le hook actuel dans `Layout.jsx` reste valide:

```js
// src/lib/useBodyClasses.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_CLASSES = { /* ... voir Layout.jsx actuel ... */ };
const NOT_FOUND = ['error404', 'elementor-page-2246'];

export function useBodyClasses() {
  const { pathname } = useLocation();
  useEffect(() => {
    const classes = PAGE_CLASSES[pathname] || NOT_FOUND;
    document.body.classList.add(...classes);
    return () => document.body.classList.remove(...classes);
  }, [pathname]);
}
```

Pas de changement structurel — juste deplace dans `src/lib/`.

---

## 10. Donnees vs presentation

Le HTML source contient des donnees en dur (noms de NFT, prix, liens images, etc.) Apres conversion, separer:

```js
// src/data/nfts.js
export const notableDrops = [
  { id: 'infinite-figure', name: 'Infinite figure', price: '$915',
    image: '/images/index/infinite-figure.jpg', author: 'jane.eth' },
  // ...
];

export const bestSellers = [...];
export const categories = [...];
```

Les composants `NotableDrops`, `BestSellers` etc. consomment ces tableaux:

```jsx
<NotableDrops items={notableDrops} />
```

Avantage: dynamisme futur (API, filtres, recherche) trivial a brancher.

---

## 11. Workflow de conversion d'UNE page

Etapes a suivre pour chaque page, sans devier:

1. **Lire le fragment source** `src/fragments/page-X.js` cote a cote avec le HTML source
2. **Repere les blocs de premier niveau** (`<section ...>` racine, generalement 5-15 sections)
3. **Pour chaque section**: choisir un nom de composant en `components/sections/`
4. **Convertir bloc par bloc**, en haut → bas, en utilisant le tableau de la section 1
5. **Tester** apres CHAQUE section convertie (`npm run dev` + screenshot vs reference)
6. **Extraire les donnees** repetitives en fichier `data/X.js`
7. **Une fois la page convertie**: supprimer l'import de `src/fragments/page-X.js` et supprimer le fichier
8. **Verifier que le visuel est identique** au screenshot reference
9. **Refactorer** si certains widgets sont repetes a travers plusieurs pages (les remonter vers `widgets/`)

---

## 12. Tests visuels

Pour eviter les regressions:

```bash
# 1. Capture reference avant conversion (depuis le fragment inject)
# Utilise gstack browse:
$B goto http://localhost:5173/about
$B screenshot reference/about-before.png

# 2. Convertit, recharge, capture
$B goto http://localhost:5173/about
$B screenshot reference/about-after.png

# 3. Diff
$B diff reference/about-before.png reference/about-after.png
```

Tolerance: 0 difference pixel-perfect sur les zones statiques. Differences acceptables uniquement sur sliders/animations (etat initial).

---

## 13. Suppression finale

Quand toutes les pages sont converties:

- [ ] Supprimer `src/components/InjectHTML.jsx`
- [ ] Supprimer `src/fragments/` (tout le dossier)
- [ ] Supprimer `scripts/extract-fragments.mjs`
- [ ] Conserver `scripts/collect-styles.mjs` (toujours utile pour les `<link>` et `<style>` du `<head>`)
- [ ] Conserver `scripts/collect-scripts.mjs` (toujours utile pour les `<script src>` globaux)
- [ ] Plugin Vite `injectAggregatedAssets` conserve (cible UNIQUEMENT `<head>` et `<body>` end, pas le contenu)
- [ ] `Header.jsx`, `Footer.jsx`, `*Page.jsx` ne contiennent plus aucun `dangerouslySetInnerHTML`

Apres ces suppressions, l'application est 100% React natif. Le seul HTML inject reside dans:
- les `<link rel="stylesheet">` (styles aggreges, normal)
- les `<script src="...">` globaux (jQuery, Swiper, etc.)
- les 13 blocs `<style>` inline WordPress (variables CSS)

Aucun de ces points n'est du contenu — uniquement de la configuration runtime.

---

## 14. Risques connus et mitigations

| Risque                                          | Probabilite | Mitigation                                          |
| ----------------------------------------------- | ----------- | --------------------------------------------------- |
| Mauvaise conversion d'un `style=` inline        | Haute       | Toujours convertir en objet JS, tester visuellement |
| Oubli d'une classe `elementor-element-XXXXX`    | Haute       | Diff visuel post-conversion                         |
| Reinit Swiper qui ne reinitialise pas           | Moyenne     | Hook `useElementorInit` declenche re-trigger        |
| Liens internes pointant vers `*.html`           | Haute       | Migrer vers `<Link to="...">` systematiquement      |
| Inline `<style>` perdu lors de l'extraction     | Faible      | Plugin Vite preserve tous les blocs `<style>`       |
| SVG inline mal converti (camelCase oublie)      | Moyenne     | Linter ESLint `react/no-unknown-property`           |
| Performance — re-render au changement de route  | Faible      | Composants memoizes au besoin                       |

---

## 15. Definition of Done

Page consideree convertie quand:

1. Le fragment `page-X.js` n'est plus importe
2. Le composant `XPage.jsx` ne contient AUCUN `dangerouslySetInnerHTML`
3. Tous les sous-composants utilises sont en `components/`
4. Les donnees sont separees dans `data/`
5. Le screenshot post-conversion est visuellement identique au reference
6. La navigation interne utilise `<Link>`
7. Aucune nouvelle regle CSS n'a ete ajoutee

---

## 16. Estimation

- LoginPage, NotFoundPage, ContactsPage: ~2h chacune
- ProductPage, Shop2Page, Blog2Page: ~3h chacune
- ShopPage, BlogPage, AuthorsPage: ~4h chacune
- AboutPage: ~5h
- Home2Page: ~6h
- HomePage: ~8h
- Header + Footer + Layout + lib/: ~6h
- Composants `widgets/` + `sections/` reutilisables: ~6h (mais amortis par les pages)

**Total estime: 50-60h** pour une conversion fidele de l'ensemble.

Recommandation: faire d'abord Header + Footer + 1 page simple (Login ou NotFound) pour valider l'approche et l'outillage avant de s'attaquer aux pages volumineuses.
