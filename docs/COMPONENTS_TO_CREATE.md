# Composants à créer — Prestige

Dossier cible : `src/components/ui/` pour les primitives partagées,
puis un dossier par domaine pour les composants métier.

---

## 1. UI Primitives — `src/components/ui/`

Briques réutilisables partout. À créer en premier car les autres en dépendent.

### Badge.jsx
Pastille de statut colorée.
```
Props : label (string), variant ('pending'|'approved'|'rejected'|'suspended'|'active'|'expired')
Rendu : <span> coloré (jaune, vert, rouge, gris...)
Usage : statut KYC, statut abonnement, statut doc
```

### Avatar.jsx
Photo de profil avec fallback initiales.
```
Props : src (string|null), name (string), size ('sm'|'md'|'lg'|'xl')
Rendu : <img> avec fallback cercle coloré + initiales si src null
Usage : cartes escortes, liste conversations, header profil
```

### Spinner.jsx
Indicateur de chargement.
```
Props : size ('sm'|'md'|'lg'), className
Rendu : cercle CSS animé
Usage : boutons en loading, plein écran pendant fetch
```

### EmptyState.jsx
Écran vide pour les listes sans résultats.
```
Props : icon (string|ReactNode), title (string), description (string), action (ReactNode optionnel)
Rendu : illustration centrée + texte + bouton CTA optionnel
Usage : catalogue vide, aucune conversation, aucun service
```

### Toast.jsx + useToast.js
Notification temporaire (succès / erreur / info).
```
Props : message (string), type ('success'|'error'|'info'), duration (ms)
Rendu : bandeau flottant en bas ou coin supérieur
Usage : après chaque mutation (upload KYC, envoi message, souscription)
```

### InfiniteScrollTrigger.jsx
Sentinel invisible — déclenche loadMore quand il entre dans le viewport.
```
Props : onVisible (fn), isLoading (bool), hasMore (bool)
Rendu : <div ref> avec useIntersection — affiche Spinner si isLoading
Usage : bas de chaque liste paginée (escorts, services, annuaire)
```

### MediaViewer.jsx
Visionneuse plein écran photo / vidéo avec navigation.
```
Props : items ([{url, mediaType}]), initialIndex (int), onClose (fn)
Rendu : overlay sombre + image/video + flèches prev/next + croix fermer
Usage : galerie service, photos escorte, docs KYC admin
```

### Tabs.jsx
Onglets réutilisables (remplace ProductTabs hardcodé).
```
Props : tabs ([{id, label}]), activeTab (string), onChange (fn), children
Rendu : barre d'onglets + contenu actif
Usage : profil escorte (Services / À propos), annuaire (Transporteurs / Logements)
```

### ConfirmDialog.jsx
Dialog de confirmation générique (oui / non).
```
Props : isOpen (bool), title (string), message (string),
        confirmLabel (string), onConfirm (fn), onCancel (fn), isLoading (bool)
Rendu : overlay + card centrée + 2 boutons
Usage : supprimer un service, fermer une conversation, annuler un abonnement
```

---

## 2. Modals — `src/components/modals/`

### OpenConversationModal.jsx
Confirmation avant d'ouvrir une conversation avec une escorte.
```
Props : escort ({displayName, avatarUrl}), onConfirm (fn), onClose (fn), isLoading (bool)
Rendu : ConfirmDialog avec photo escorte + message "Voulez-vous contacter [nom] ?"
Usage : bouton "Contacter" sur profil escorte
```

### RevealContactModal.jsx
Confirmation + affichage du numéro WhatsApp après reveal.
```
Props : providerName (string), type ('transporter'|'propertyOwner'),
        onConfirm (fn), whatsappNumber (string|null), isLoading (bool), onClose (fn)
Rendu : étape 1 = confirmation, étape 2 = affichage du numéro avec lien wa.me
Usage : bouton "Voir contact" dans l'annuaire
```

### SubscribeModal.jsx
Choix et confirmation d'achat d'un abonnement.
```
Props : plan ({tier, billingPeriod, priceXaf, name}), onConfirm (fn), onClose (fn), isLoading (bool)
Rendu : récapitulatif plan + champ numéro Mobile Money + bouton payer
Usage : page abonnements
```

### KycDocPreviewModal.jsx
Prévisualisation d'un document KYC (admin).
```
Props : doc ({fileUrl, type, status, reviewNote}), onClose (fn)
Rendu : MediaViewer full screen + infos doc (type, statut, note)
Usage : tableau admin dossier prestataire
```

---

## 3. Chat — `src/components/chat/`

### ChatLayout.jsx
Layout principal de la page chat (sidebar + zone messages).
```
Props : children
Rendu : 33/66 — ConversationList (gauche fixe) | zone messages (droite)
         Sur mobile : plein écran alterné (liste OU messages)
Usage : page /messages et /messages/:id
```

### ConversationList.jsx
Sidebar liste des conversations.
```
Props : conversations ([]), activeId (string), onSelect (fn), isLoading (bool)
Rendu : liste scrollable de ConversationItem
Usage : partie gauche de ChatLayout
```

### ConversationItem.jsx
Une ligne de conversation dans la liste.
```
Props : conversation ({id, escortDisplayName, avatarUrl, lastMessageAt, closedAt})
        isActive (bool), onClick (fn)
Rendu : Avatar + nom + aperçu dernier message + heure + badge "fermée" si closedAt
Usage : dans ConversationList
```

### MessageList.jsx
Zone scrollable des messages d'une conversation.
```
Props : messages ([]), currentUserId (string), isLoading (bool), hasMore (bool), onLoadMore (fn)
Rendu : liste de MessageBubble, auto-scroll en bas, InfiniteScrollTrigger en haut pour l'historique
Usage : partie droite de ChatLayout
```

### MessageBubble.jsx
Une bulle de message (envoyé ou reçu).
```
Props : message ({id, body, senderId, createdAt}), isMine (bool)
Rendu : bulle alignée droite (isMine) ou gauche, heure en dessous
Usage : dans MessageList
```

### MessageInput.jsx
Zone de saisie et envoi de message.
```
Props : onSend (fn), isLoading (bool), disabled (bool)
Rendu : textarea + bouton envoyer, envoi sur Enter (Shift+Enter = newline)
Usage : bas de la zone messages
```

---

## 4. Cards métier — `src/components/cards/`

### EscortCard.jsx
Carte escorte pour les listes (catalogue, homepage).
```
Props : escort ({id, city, quartier, avatarUrl, coverUrl, escort: {displayName, hourlyRateXaf, tags}})
Rendu : image cover + avatar superposé + nom + ville + tags + tarif/h + bouton "Voir profil"
Usage : /escorts, homepage trending/top
```

### ServiceCard.jsx
Carte service pour les listes.
```
Props : service ({id, title, priceXaf, escort: {displayName, city, avatarUrl}, media: [{url}]})
Rendu : thumbnail media (ou avatar escorte si pas de media) + titre + prix + escorte + ville
Usage : /services, homepage featured-services
```

### DirectoryCard.jsx
Carte transporteur ou propriétaire dans l'annuaire.
```
Props : provider ({id, type, city, quartier, avatarUrl, profile: {displayName, whatsappNumber, ...}})
        canReveal (bool), onReveal (fn)
Rendu : avatar + nom + ville + zone/description + bouton "Voir contact" (bloqué si !canReveal)
Usage : /directory
```

### PlanCard.jsx
Carte plan d'abonnement.
```
Props : plan ({tier, name, billingPeriod, priceXaf, boostWeight}),
        isCurrentPlan (bool), onSubscribe (fn)
Rendu : tier en badge coloré (Bronze/argent, Premium/or, VIP/violet) +
         prix + durée + avantages (boost) + bouton "Choisir"
Usage : /subscriptions
```

### KycDocCard.jsx
Carte document KYC avec statut et actions.
```
Props : doc ({type, fileUrl, status, reviewNote}),
        onUpload (fn), onDelete (fn)
Rendu : miniature doc + type + Badge statut + note de rejet si rejected +
         bouton remplacer / supprimer (si pending ou rejected)
Usage : /profile/kyc
```

---

## 5. Formulaires métier — `src/components/forms/`

### FileUploadZone.jsx
Zone drag & drop pour upload de fichiers.
```
Props : accept (string), onFile (fn), isLoading (bool), preview (string|null), label (string)
Rendu : zone pointillée cliquable/droppable + preview image si déjà uploadé + Spinner pendant upload
Usage : KycDocCard, MediaUploadForm
```

### EscortProfileForm.jsx
Formulaire modification profil escorte.
```
Props : initialValues ({displayName, bio, hourlyRateXaf, tags, availabilityNote}),
        onSubmit (fn), isLoading (bool)
Rendu : champs texte + textarea bio + input tags (ajout/suppression) + textarea dispo + bouton sauver
Usage : /profile
```

### ServiceForm.jsx
Formulaire création / modification d'un service.
```
Props : initialValues ({title, description, priceXaf}), onSubmit (fn), onCancel (fn), isLoading (bool)
Rendu : input titre + textarea description + input prix + boutons annuler/sauver
Usage : /profile/services
```

### TransporterProfileForm.jsx
Formulaire profil transporteur.
```
Props : initialValues ({displayName, whatsappNumber, vehicleDescription, serviceZone, indicativeRateNote}),
        onSubmit (fn), isLoading (bool)
Rendu : champs texte pour chaque propriété + bouton sauver
Usage : /profile (si type = transporter)
```

### PropertyOwnerProfileForm.jsx
Formulaire profil propriétaire de logement.
```
Props : initialValues ({displayName, whatsappNumber, propertyDescription, location, priceRangeNote}),
        onSubmit (fn), isLoading (bool)
Rendu : champs texte pour chaque propriété + bouton sauver
Usage : /profile (si type = property_owner)
```

---

## 6. Filtres — `src/components/filters/`

### FilterBar.jsx
Barre de filtres horizontale (mobile) + panneau latéral (desktop).
```
Props : filters ({city, quartier, tags}), onChange (fn), availableCities ([string])
Rendu : selects ville/quartier + input tags (chips) — adaptatif mobile/desktop
Usage : /escorts, /services, /directory
```

### TagInput.jsx
Champ multi-tags (ajouter/supprimer des tags).
```
Props : value ([string]), onChange (fn), suggestions ([string]), placeholder (string)
Rendu : liste de chips cliquables + input texte pour ajouter
Usage : FilterBar (tags escortes), EscortProfileForm
```

---

## 7. Admin — `src/components/admin/`

### AdminLayout.jsx
Layout des pages admin avec sidebar de navigation.
```
Props : children
Rendu : sidebar fixe 250px (liens : Prestataires, Utilisateurs, Audit, Stats) + contenu principal
Usage : toutes les pages /admin/*
```

### DataTable.jsx
Tableau générique triable avec pagination curseur.
```
Props : columns ([{key, label, render?}]), rows ([]), isLoading (bool),
        hasMore (bool), onLoadMore (fn), emptyLabel (string)
Rendu : <table> avec en-têtes + lignes + InfiniteScrollTrigger en bas
Usage : liste prestataires, utilisateurs, audit log, paiements
```

### StatCard.jsx
Carte métrique pour le dashboard.
```
Props : label (string), value (string|number), delta (string, optionnel), icon (ReactNode)
Rendu : card avec valeur en grand + label + variation optionnelle
Usage : /admin dashboard (nb users, prestataires, revenus)
```

### KycReviewPanel.jsx
Panneau de revue d'un dossier prestataire (admin).
```
Props : profile ({kycStatus, documents: [{type, fileUrl, status, reviewNote}]}),
        onApproveDoc (fn), onRejectDoc (fn),
        onApproveProfile (fn), onRejectProfile (fn), onSuspend (fn),
        isLoading (bool)
Rendu : liste de docs avec boutons approuver/rejeter chacun +
         actions globales profil (approuver tout / rejeter avec motif)
Usage : /admin/providers/:id
```

### RejectReasonForm.jsx
Mini-formulaire texte pour saisir le motif de rejet.
```
Props : onSubmit (fn), onCancel (fn), isLoading (bool), label (string)
Rendu : textarea + boutons confirmer/annuler
Usage : dans KycReviewPanel, actions suspend/reject admin
```

---

## Récapitulatif par dossier

```
src/components/
├── ui/
│   ├── Badge.jsx
│   ├── Avatar.jsx
│   ├── Spinner.jsx
│   ├── EmptyState.jsx
│   ├── Toast.jsx
│   ├── InfiniteScrollTrigger.jsx
│   ├── MediaViewer.jsx
│   ├── Tabs.jsx
│   └── ConfirmDialog.jsx
├── modals/
│   ├── OpenConversationModal.jsx
│   ├── RevealContactModal.jsx
│   ├── SubscribeModal.jsx
│   └── KycDocPreviewModal.jsx
├── chat/
│   ├── ChatLayout.jsx
│   ├── ConversationList.jsx
│   ├── ConversationItem.jsx
│   ├── MessageList.jsx
│   ├── MessageBubble.jsx
│   └── MessageInput.jsx
├── cards/
│   ├── EscortCard.jsx
│   ├── ServiceCard.jsx
│   ├── DirectoryCard.jsx
│   ├── PlanCard.jsx
│   └── KycDocCard.jsx
├── forms/
│   ├── FileUploadZone.jsx
│   ├── EscortProfileForm.jsx
│   ├── ServiceForm.jsx
│   ├── TransporterProfileForm.jsx
│   └── PropertyOwnerProfileForm.jsx
├── filters/
│   ├── FilterBar.jsx
│   └── TagInput.jsx
└── admin/
    ├── AdminLayout.jsx
    ├── DataTable.jsx
    ├── StatCard.jsx
    ├── KycReviewPanel.jsx
    └── RejectReasonForm.jsx
```

**Total : 35 composants à créer**
- UI Primitives : 9 (briques de base, priorité 1)
- Chat : 6 (chantier isolé, priorité 2)
- Cards : 5 (nécessaires pour les pages catalogue)
- Modals : 4
- Forms : 5
- Filters : 2
- Admin : 5 (priorité basse)
