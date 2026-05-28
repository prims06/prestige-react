import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import { authApi } from '../../api/modules/auth';
import { chatApi } from '../../api/modules/chat';
import { resolveMediaUrl } from '../../api/client';
import { getErrorMessage } from '../../api/errorHandler';
import { Spinner, EmptyState, ConfirmDialog } from '../ui';

// ─────────────────────────────────────────────────────────────
// Profile page — calque sur AuthorsMain (page Authors) pour
// hériter du look existant : 66/33 (content gauche, sidebar
// quick-links a droite). dataIds reutilises = a464f1f / 2f20353
// / c1b31d2 / d2810f9 / afe3ae8 (scope post-411.css).
// ─────────────────────────────────────────────────────────────

// V1 — onglets COMMUN. ROLE_TABS (escort / transporter / proprio)
// gardes en commentaire pour rollback/futur.
const TABS = [
  { id: 'overview', label: "Vue d'ensemble", menuId: 8001 },
  { id: 'account',  label: 'Mon compte',     menuId: 8002 },
  { id: 'messages', label: 'Messagerie',     menuId: 8003 },
  { id: 'security', label: 'Sécurité',       menuId: 8004 },
];
// const ROLE_TABS = [ { id, label, menuId, role } ... ];

function fullName(u) {
  if (!u) return '—';
  return [u.firstName, u.lastName].filter(Boolean).join(' ') || '—';
}
function formatDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleString('fr-FR'); } catch { return iso; }
}

// ─── Sidebar quick-links nav (calque exact de FilterNavMenu authors) ──
function ProfileSidebarNav({ activeTab, onTabChange }) {
  const dataId = 'afe3ae8';
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`}
         data-id={dataId} data-element_type="widget" data-e-type="widget"
         data-settings='{"submenu_icon":{"value":"<i class=\"\" aria-hidden=\"true\"><\/i>","library":""},"layout":"vertical"}'
         data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
          <ul id="menu-1-afe3ae8" className="elementor-nav-menu sm-vertical">
            {TABS.map((t) => {
              const active = t.id === activeTab;
              return (
                <li key={t.id} className={`menu-item menu-item-type-custom menu-item-object-custom${active ? ' current-menu-item' : ''} menu-item-${t.menuId}`}>
                  <a
                    href="#"
                    className={`elementor-item elementor-item-anchor${active ? ' elementor-item-active' : ''}`}
                    onClick={(e) => { e.preventDefault(); onTabChange(t.id); }}
                    {...(active ? { 'aria-current': 'page' } : {})}
                  >
                    {t.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id="menu-2-afe3ae8" className="elementor-nav-menu sm-vertical">
            {TABS.map((t) => {
              const active = t.id === activeTab;
              return (
                <li key={t.id} className={`menu-item menu-item-type-custom menu-item-object-custom${active ? ' current-menu-item' : ''} menu-item-${t.menuId}`}>
                  <a href="#" className={`elementor-item elementor-item-anchor${active ? ' elementor-item-active' : ''}`} tabIndex={-1}>{t.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

// ─── ProfileCard (calque AuthorCard : image gauche / infos droite) ──
function ProfileCard({ user }) {
  const avatar = resolveMediaUrl(user?.avatarUrl);
  const initials = ((user?.firstName?.[0] || '') + (user?.lastName?.[0] || '')).toUpperCase();
  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
             data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-inner-column"
             data-element_type="column" data-e-type="column"
             data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image"
                 data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                {avatar
                  ? <img src={avatar} alt={fullName(user)} width="300" height="300" loading="lazy" className="elementor-animation-shrink" />
                  : <div className="elementor-animation-shrink" style={{ width: 300, height: 300, background: 'linear-gradient(135deg,#2a2a2a,#444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 72, fontWeight: 700 }}>
                      {initials || '?'}
                    </div>}
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-inner-column"
             data-element_type="column" data-e-type="column"
             data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-widget elementor-widget-heading"
                 data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">{fullName(user)}</h6>
              </div>
            </div>
            <div className="elementor-element elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                 data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-user-check"></i></span>
                    <span className="elementor-icon-list-text">{user?.status || '—'}</span>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock"></i></span>
                    <span className="elementor-icon-list-text">{formatDate(user?.lastLoginAt)}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="elementor-element elementor-widget elementor-widget-text-editor"
                 data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                {user?.email || user?.phone || 'Aucun contact renseigné.'}
              </div>
            </div>
            <div className="elementor-element elementor-align-left elementor-widget elementor-widget-button"
                 data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/profile?tab=account">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Modifier le profil</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sections ────────────────────────────────────────────────

function SectionSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
      <Spinner size="lg" />
    </div>
  );
}

function WidgetHeading({ title, tag = 'h2' }) {
  const Tag = tag;
  return (
    <div className="elementor-element elementor-widget elementor-widget-heading"
         data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <Tag className="elementor-heading-title elementor-size-default">{title}</Tag>
      </div>
    </div>
  );
}

function WidgetDivider() {
  return (
    <div className="elementor-element elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
         data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      <div className="elementor-widget-container">
        <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
      </div>
    </div>
  );
}

function WidgetText({ children }) {
  return (
    <div className="elementor-element elementor-widget elementor-widget-text-editor"
         data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      <div className="elementor-widget-container">{children}</div>
    </div>
  );
}

function OverviewSection({ user, isLoading }) {
  if (isLoading) return <SectionSpinner />;
  if (!user) return null;
  return (
    <>
      <ProfileCard user={user} />
      <WidgetDivider />
      <WidgetHeading title="Informations" tag="h5" />
      <div className="elementor-element elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list"
           data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
        <div className="elementor-widget-container">
          <ul className="elementor-icon-list-items">
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-envelope" /></span>
              <span className="elementor-icon-list-text">{user.email || '—'} {user.emailVerifiedAt && <em>(vérifié)</em>}</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-phone" /></span>
              <span className="elementor-icon-list-text">{user.phone || '—'} {user.phoneVerifiedAt && <em>(vérifié)</em>}</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-user-shield" /></span>
              <span className="elementor-icon-list-text">Statut : {user.status || '—'}</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock" /></span>
              <span className="elementor-icon-list-text">Dernière connexion : {formatDate(user.lastLoginAt)}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function AccountSection({ user, isLoading }) {
  if (isLoading) return <SectionSpinner />;
  if (!user) return null;
  return (
    <>
      <WidgetHeading title="Informations du compte" />
      <div className="elementor-element elementor-widget elementor-widget-login"
           data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
        <div className="elementor-widget-container">
          <form className="elementor-login elementor-form" aria-label="Compte (lecture seule)">
            <div className="elementor-form-fields-wrapper">
              {[
                { label: 'Prénom',    value: user.firstName },
                { label: 'Nom',       value: user.lastName },
                { label: 'Email',     value: user.email },
                { label: 'Téléphone', value: user.phone },
              ].map((f) => (
                <div key={f.label} className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100">
                  <input type="text" placeholder={f.label}
                         className="elementor-field elementor-field-textual elementor-size-sm"
                         value={f.value || ''} readOnly disabled />
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
      <WidgetDivider />
      <WidgetText>
        L'édition du compte sera disponible prochainement. Pour changer votre mot de passe,
        utilisez <Link to="/forgot-password">la procédure de réinitialisation</Link>.
      </WidgetText>
    </>
  );
}

function ConversationCard({ c }) {
  const avatar = resolveMediaUrl(c.escortAvatarUrl);
  const initials = (c.escortDisplayName || '?').slice(0, 2).toUpperCase();
  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
             data-element_type="section" data-e-type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-25 elementor-inner-column" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-widget__width-auto elementor-widget elementor-widget-image"
                 data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                {avatar
                  ? <img src={avatar} alt={c.escortDisplayName || ''} width="120" height="120" loading="lazy" />
                  : <div style={{ width: 120, height: 120, background: 'linear-gradient(135deg,#2a2a2a,#444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 32 }}>{initials}</div>}
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-75 elementor-inner-column" data-element_type="column" data-e-type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <WidgetHeading title={c.escortDisplayName || 'Conversation'} tag="h6" />
            <div className="elementor-element elementor-icon-list--layout-inline elementor-widget elementor-widget-icon-list"
                 data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock" /></span>
                    <span className="elementor-icon-list-text">{formatDate(c.lastMessageAt)}</span>
                  </li>
                  {c.closedAt && (
                    <li className="elementor-icon-list-item elementor-inline-item">
                      <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-lock" /></span>
                      <span className="elementor-icon-list-text">fermée</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MessagesSection() {
  const { data, isLoading, error } = useFetch(() => chatApi.listConversations({ limit: 20 }), []);
  const conversations = data?.data ?? [];
  if (isLoading) return <SectionSpinner />;
  if (error) {
    return (
      <>
        <WidgetHeading title="Messagerie" />
        <WidgetText><span style={{ color: '#e74c3c' }}>{getErrorMessage(error)}</span></WidgetText>
      </>
    );
  }
  if (!conversations.length) {
    return (
      <>
        <WidgetHeading title="Messagerie" />
        <EmptyState
          icon={<i className="fas fa-comments" />}
          title="Aucune conversation"
          description="Vous n'avez pas encore de conversation. Ouvrez une discussion depuis le profil d'une escorte."
          action={
            <div className="elementor-button-wrapper">
              <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/shop">
                <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Parcourir le catalogue</span></span>
              </Link>
            </div>
          }
        />
      </>
    );
  }
  return (
    <>
      <WidgetHeading title="Vos conversations" />
      {conversations.map((c) => <ConversationCard key={c.id} c={c} />)}
    </>
  );
}

function SecuritySection({ user }) {
  const { logout, logoutAll } = useAuth();
  const [askLogout, setAskLogout] = useState(false);
  const [askLogoutAll, setAskLogoutAll] = useState(false);
  const [busy, setBusy] = useState(false);

  const doLogout = async () => {
    setBusy(true);
    try { await logout(); } finally { setBusy(false); setAskLogout(false); window.location.href = '/login'; }
  };
  const doLogoutAll = async () => {
    setBusy(true);
    try { await logoutAll(); } finally { setBusy(false); setAskLogoutAll(false); window.location.href = '/login'; }
  };

  return (
    <>
      <WidgetHeading title="Sécurité" />
      <div className="elementor-element elementor-icon-list--layout-traditional elementor-widget elementor-widget-icon-list"
           data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
        <div className="elementor-widget-container">
          <ul className="elementor-icon-list-items">
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock" /></span>
              <span className="elementor-icon-list-text">Dernière connexion : {formatDate(user?.lastLoginAt)}</span>
            </li>
            <li className="elementor-icon-list-item">
              <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-user-shield" /></span>
              <span className="elementor-icon-list-text">Statut du compte : {user?.status || '—'}</span>
            </li>
          </ul>
        </div>
      </div>
      <WidgetDivider />
      <section className="elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default"
               data-element_type="section" data-e-type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-50 elementor-inner-column" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-align-justify elementor-widget elementor-widget-button"
                   data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"
                       onClick={(e) => { e.preventDefault(); setAskLogout(true); }}>
                      <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Se déconnecter</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-inner-column" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-align-justify elementor-widget elementor-widget-button"
                   data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper xc-elementor-cancel">
                    <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"
                       onClick={(e) => { e.preventDefault(); setAskLogoutAll(true); }}>
                      <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Déconnecter tous les appareils</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConfirmDialog
        isOpen={askLogout}
        title="Se déconnecter ?"
        message="Vous serez déconnecté de cet appareil. Vos autres sessions resteront actives."
        confirmLabel="Déconnexion" onConfirm={doLogout} onCancel={() => setAskLogout(false)} isLoading={busy}
      />
      <ConfirmDialog
        isOpen={askLogoutAll}
        title="Déconnexion de tous les appareils ?"
        message="Toutes vos sessions seront fermées. Vous devrez vous reconnecter partout."
        confirmLabel="Tout déconnecter" variant="danger"
        onConfirm={doLogoutAll} onCancel={() => setAskLogoutAll(false)} isLoading={busy}
      />
    </>
  );
}

// ─── ProfileMain (calque AuthorsMain) ────────────────────────
export default function ProfileMain() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';

  const { data: meData, isLoading: meLoading } = useFetch(() => authApi.me(), []);
  const storedUser = useAuthStore((s) => s.user);
  const user = meData || storedUser;

  const onTabChange = (id) => setSearchParams({ tab: id });

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-a464f1f elementor-section-boxed elementor-section-height-default"
             data-id="a464f1f" data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {/* Content gauche (col-66) */}
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2f20353"
             data-id="2f20353" data-element_type="column" data-e-type="column"
             data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            {tab === 'overview' && <OverviewSection user={user} isLoading={meLoading} />}
            {tab === 'account'  && <AccountSection  user={user} isLoading={meLoading} />}
            {tab === 'messages' && <MessagesSection />}
            {tab === 'security' && <SecuritySection user={user} />}
          </div>
        </div>
        {/* Sidebar quick-links droite (col-33) */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c1b31d2 elementor-hidden-tablet elementor-hidden-mobile"
             data-id="c1b31d2" data-element_type="column" data-e-type="column"
             data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d2810f9 elementor-widget elementor-widget-heading"
                 data-id="d2810f9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h5 className="elementor-heading-title elementor-size-default">Mon profil</h5>
              </div>
            </div>
            <ProfileSidebarNav activeTab={tab} onTabChange={onTabChange} />
          </div>
        </div>
      </div>
    </section>
  );
}
