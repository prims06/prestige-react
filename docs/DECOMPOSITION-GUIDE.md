# Guide de décomposition des pages React — xchain-app

Ce guide permet à un agent junior de décomposer les pages restantes en composants modulaires,
en suivant exactement l'architecture "Complet" déjà établie.

---

## Architecture cible

```
src/
├── data/               ← toutes les données statiques (tableaux, constantes)
│   ├── shop.js         (déjà fait)
│   ├── product.js      (à créer)
│   ├── blog.js         (à créer)
│   └── ...
├── components/
│   ├── layout/         (Layout, Header, Footer — NE PAS TOUCHER)
│   ├── shared/         (composants réutilisables entre pages)
│   ├── home/           (déjà fait — modèle de référence)
│   ├── shop/           (déjà fait — modèle de référence)
│   ├── product/        (à créer)
│   ├── blog/           (à créer)
│   ├── authors/        (partiel — AuthorCard.jsx et AuthorSections.jsx existent)
│   └── ...
└── pages/
    └── [Page].jsx      ← orchestrateur thin (10-20 lignes max)
```

---

## Pages à traiter (ordre recommandé)

| Page | Lignes | Fonctions inline | Priorité |
|------|--------|-----------------|----------|
| ProductPage | 296L | 10 | 1 — plus complexe |
| AuthorsPage | 199L | 5 | 2 — composants partiels existants |
| ContactsPage | 181L | 4 | 3 |
| BlogPage | 482L | 3 | 4 — grosse page |
| Home2Page | 914L | 3 | 5 — très grande page |
| AboutPage | 885L | 2 | 6 — très grande page |
| Blog2Page | 102L | 2 | 7 — petite |
| Shop2Page | 114L | 2 | 8 — petite |
| LoginPage | 111L | 2 | 9 — petite |
| NotFoundPage | 98L | 2 | 10 — petite |

---

## Processus étape par étape (à répéter pour chaque page)

### Étape 0 — Lire la page entière AVANT de toucher quoi que ce soit

```
Read("src/pages/[Page].jsx")
```

**Ce qu'il faut relever :**
- [ ] Toutes les constantes en haut de fichier (`const PRODUCTS = [...]`, `const SETTINGS = '...'`, etc.)
- [ ] Toutes les fonctions inline (`function X() { ... }`)
- [ ] Les dépendances entre fonctions (ex: `ReviewsTab` appelle `ReviewItem` et `ReviewForm`)
- [ ] Les imports existants (`import { Link } from 'react-router-dom'`)
- [ ] Les fonctions qui accèdent à des constantes du scope parent (ex: `PRODUCTS.map(...)` dans une fonction interne)

### Étape 1 — Créer `src/data/[page].js`

**Règle :** Toute constante déclarée en haut du fichier page DOIT aller dans `src/data/`.

```js
// src/data/product.js
export const AVATAR = '/images/product/...';
export const AVATAR_SRCSET = 'https://...';
```

**Attention :**
- Utiliser `export const` (pas `const`) pour chaque constante.
- Si une constante n'est utilisée que dans un seul composant et n'a aucune chance d'être réutilisée (ex: une URL d'avatar), elle peut rester dans le fichier composant — mais si c'est un tableau de données (produits, articles, auteurs), elle va OBLIGATOIREMENT dans `src/data/`.
- Vérifier si des constantes existent déjà dans d'autres fichiers `src/data/` pour éviter les doublons. Par exemple, `PRODUCTS` existe déjà dans `src/data/shop.js` — si Home2Page a aussi un `PRODUCTS`, créer `src/data/home2.js` avec un nom différent (`HOME2_PRODUCTS`) ou vérifier si les données sont identiques.

### Étape 2 — Identifier les groupes de composants

Classer les fonctions inline en 3 catégories :

**A. Composants de section (top-level)** — sections visuelles indépendantes de la page
- Exemple : `ProductBreadcrumb`, `ProductDetailSection`, `ContactsHero`, `LoginFormSection`
- → Chacun devient un fichier séparé dans `components/[page]/`

**B. Sous-composants (utilisés par d'autres composants)** — ne sont pas rendus directement par la page
- Exemple : `ReviewItem`, `ReviewForm` (utilisés par `ReviewsTab`)
- `DescriptionTab`, `AdditionalInfoTab`, `ReviewsTab` (utilisés par `ProductTabs`)
- → Peuvent être colocalisés dans le fichier du composant parent (même fichier, exports nommés) OU dans leur propre fichier si volumineux

**C. Composants partagés** — apparaissent dans plusieurs pages différentes
- Exemple : `FilterNavMenu` dans AuthorsPage ressemble à `FilterNavVertical` dans ShopFilters
- → Aller dans `components/shared/`

### Étape 3 — Créer les fichiers composants

**Ordre de création : des feuilles vers la racine** (créer d'abord les composants sans dépendances, ensuite ceux qui en dépendent).

Exemple pour ProductPage :
1. `ProductBreadcrumb.jsx` (pas de dépendances internes)
2. `ProductCountdown.jsx` (pas de dépendances internes)
3. `ProductButtons.jsx` (pas de dépendances internes)
4. `ProductTabs.jsx` (contient DescriptionTab, AdditionalInfoTab, ReviewsTab, ReviewItem, ReviewForm)
5. `ProductDetailSection.jsx` (importe ProductTabs, ProductCountdown, ProductButtons)

**Template de fichier composant :**

```jsx
// src/components/[page]/ComponentName.jsx
import { Link } from 'react-router-dom';                    // si nécessaire
import { MA_CONSTANTE } from '../../data/[page]';           // si données nécessaires
import AutreComposant from './AutreComposant';               // si sous-composant

export default function ComponentName() {
  return (
    // JSX identique à ce qui était dans la page
  );
}
```

**Points critiques à ne pas rater :**

1. **Chemin d'import relatif correct**
   - Depuis `components/[page]/X.jsx` vers `data/` : `../../data/[page]`
   - Depuis `components/[page]/X.jsx` vers `components/[page]/Y.jsx` : `./Y`
   - Depuis `pages/X.jsx` vers `components/[page]/Y.jsx` : `../components/[page]/Y`

2. **Préserver EXACTEMENT tout le JSX** — y compris :
   - `data-id="..."` sur chaque element Elementor
   - `data-element_type="..."`, `data-e-type="..."`, `data-widget_type="..."`
   - `data-settings='{"...":...}'` (JSON en string simple quote)
   - Styles inline : `style={{transform:'...', '--rotateX': '...'}}` 
   - `className` complets avec toutes les classes CSS Elementor
   - `aria-*` et `role` attributs d'accessibilité
   - `fetchPriority="high"` sur la première image, `loading="lazy"` sur les suivantes

3. **Les fonctions inline qui accèdent à des données du scope parent**
   - Si `function BlogPost({ post })` utilise `post` — c'est un prop, pas un problème
   - Si `function ShopProductGrid()` utilise directement `PRODUCTS` du scope — il faut soit passer `PRODUCTS` en prop, soit importer depuis `src/data/`

4. **Ne pas dupliquer les constantes**
   - Si `STATUS_FILTERS` est dans `src/data/shop.js`, ne pas le redéclarer dans `ShopFilters.jsx`
   - Toujours importer depuis `src/data/` si la constante y existe

5. **Les composants qui utilisent `children`**
   - Exemple : `ReviewItem` accepte `children` pour les réponses imbriquées
   - Préserver exactement la signature des props

### Étape 4 — Vérifier les composants existants avant de créer

Pour AuthorsPage spécifiquement :
- `components/authors/AuthorCard.jsx` EXISTE déjà
- `components/authors/AuthorSections.jsx` EXISTE déjà
- Lire ces fichiers AVANT de créer les composants pour AuthorsPage
- Si la fonction inline `AuthorCard` dans la page est identique au fichier existant → supprimer l'inline et importer l'existant
- Si elle est différente → décider laquelle est correcte (en général, le fichier composant est plus récent)

### Étape 5 — Réécrire la page comme thin orchestrator

La page finale ne doit contenir QUE :
- Les imports des composants
- La fonction `export default` qui retient uniquement la structure top-level

```jsx
// src/pages/ProductPage.jsx — APRÈS décomposition
import ProductBreadcrumb from '../components/product/ProductBreadcrumb';
import ProductDetailSection from '../components/product/ProductDetailSection';

export default function ProductPage() {
  return (
    <>
      <div className="woocommerce-notices-wrapper"></div>
      <div data-elementor-type="product" data-elementor-id="1614" className="elementor elementor-1614 ...">
        <ProductBreadcrumb />
        <ProductDetailSection />
      </div>
    </>
  );
}
```

**Ce qui RESTE dans la page (acceptable) :**
- Le wrapper `<div data-elementor-type="...">` ou `<>` top-level
- Les attributs Elementor de la page entière (`data-elementor-id`, `data-elementor-type`)
- Les imports

**Ce qui NE DOIT PAS rester dans la page :**
- Toute fonction helper ou composant inline
- Toute constante de données (`const PRODUCTS = [...]`)
- Plus de 30 lignes de JSX

### Étape 6 — Build de vérification

```
npm run build
```

**En cas d'erreur :**

| Erreur | Cause probable | Solution |
|--------|---------------|----------|
| `X is not defined` | Constante non importée depuis data/ | Ajouter l'import |
| `Cannot find module './X'` | Chemin d'import incorrect | Corriger le chemin relatif |
| `X is not a function` | Export par défaut vs export nommé mismatch | Vérifier `export default` vs `export function` |
| JSX parse error | Balise non fermée lors du copier-coller | Revérifier le JSX extrait |

---

## Cas particulier : Home2Page (914 lignes)

Home2Page est la page la plus volumineuse. Ses 3 fonctions inline (`GalleryContainer`, `CollectionCard`, `MdpButton`) s'appliquent sur de TRÈS grandes structures de données (COLLECTIONS_ROW1, COLLECTIONS_ROW2, PRODUCTS).

Approche recommandée :
1. `src/data/home2.js` — PRODUCTS (renommer en `HOME2_PRODUCTS` pour éviter conflit avec `shop.js`), COLLECTIONS_ROW1, COLLECTIONS_ROW2, GALLERY_SETTINGS
2. `components/home2/CollectionCard.jsx` — composant carte collection
3. `components/home2/GalleryContainer.jsx` — container galerie
4. `components/home2/MdpButton.jsx` — bouton
5. `components/home2/CollectionsSection.jsx` — sections collections qui mappent sur les données
6. `components/home2/ProductsSection.jsx` — grille produits
7. `Home2Page.jsx` → thin orchestrator

---

## Cas particulier : BlogPage (482 lignes)

BlogPage a une sidebar (`SidebarInner`) qui est rendue deux fois (mobile et desktop avec un `idSuffix` différent). Préserver EXACTEMENT ce pattern :

```jsx
// Dans le composant parent
<SidebarInner idSuffix="" />       // desktop
<SidebarInner idSuffix="-2" />     // mobile duplicate
```

Ne pas "optimiser" en fusionnant les deux rendus — le site HTML original duplique la sidebar pour responsive.

---

## Cas particulier : AboutPage (885 lignes)

AboutPage a seulement 2 fonctions inline mais 885 lignes — la page contient beaucoup de HTML statique. Les fonctions `TeamMember` et `CounterRow` sont des composants de carte répétés sur des tableaux de données.

Approche :
1. `src/data/about.js` — tableau des membres d'équipe, tableau des compteurs
2. `components/about/TeamMember.jsx`
3. `components/about/CounterRow.jsx`
4. `components/about/TeamSection.jsx` (mappe sur les membres)
5. `components/about/CountersSection.jsx` (mappe sur les compteurs)
6. Tout le HTML statique qui ne boucle pas → peut rester dans `components/about/AboutHero.jsx` ou `AboutContent.jsx`

---

## Règles absolues (ne jamais violer)

1. **Lire avant d'écrire** — toujours Read() le fichier source avant de créer les composants
2. **Build après chaque page** — `npm run build` après chaque page terminée, pas après toutes les pages
3. **Zéro perte de JSX** — chaque attribut `data-id`, chaque classe CSS, chaque `aria-*` doit être préservé
4. **Pas d'optimisation non demandée** — ne pas fusionner des composants similaires, ne pas supprimer du HTML "redondant", ne pas refactoriser la logique
5. **Pas de nouveaux packages** — utiliser uniquement `react-router-dom` (déjà installé) et React
6. **Un composant = un seul responsibility** — `ProductTabs` gère les tabs, `ProductCountdown` gère le countdown, etc.
7. **AuthorsPage : vérifier les composants existants** dans `components/authors/` avant de créer de nouveaux

---

## Modèle de référence complet — ShopPage (déjà fait)

Pour comprendre le résultat attendu, consulter :
- `src/pages/ShopPage.jsx` — thin orchestrator (10 lignes)
- `src/components/shop/ShopHeader.jsx` — section breadcrumb
- `src/components/shop/ShopMain.jsx` — layout sidebar + grid
- `src/components/shop/ShopFilters.jsx` — composants filtres réutilisables
- `src/components/shop/ShopProductGrid.jsx` — grille produits + pagination
- `src/components/shop/ProductCard.jsx` — carte produit individuelle
- `src/data/shop.js` — toutes les données (CATEGORIES, PRODUCTS, PAGES, filtres)

C'est le niveau de granularité attendu pour toutes les pages.
