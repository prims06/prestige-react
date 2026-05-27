import { useState } from 'react';
import {
  Badge, Avatar, Spinner, EmptyState, InfiniteScrollTrigger,
  MediaViewer, Tabs, ConfirmDialog, ToastProvider, useToast,
} from '../components/ui';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '48px' }}>
      <h3 className="elementor-heading-title elementor-size-default" style={{ marginBottom: '8px' }}>{title}</h3>
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        padding: '24px',
      }}>
        {children}
      </div>
    </section>
  );
}

function Row({ children, gap = 16 }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: `${gap}px` }}>{children}</div>;
}

function Label({ children }) {
  return <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.5px', marginRight: 8 }}>{children}</span>;
}

function ToastDemo() {
  const { show } = useToast();
  return (
    <Row>
      <button type="button" className="xc-btn xc-btn--primary"
        onClick={() => show('Service créé avec succès', { type: 'success' })}>
        Succès
      </button>
      <button type="button" className="xc-btn xc-btn--danger"
        onClick={() => show('Erreur réseau, réessayez', { type: 'error' })}>
        Erreur
      </button>
      <button type="button" className="xc-btn xc-btn--ghost"
        onClick={() => show('Nouveau message reçu', { type: 'info' })}>
        Info
      </button>
    </Row>
  );
}

function MediaViewerDemo() {
  const [open, setOpen] = useState(false);
  const items = [
    { url: '/images/index/aldi-sigun-K-sdQ12jZeY-unsplash-1-pqla1seba1k5nfzgy89iangafkzfx0ffsjgav4i6pg.jpg' },
    { url: '/images/index/dynamic-wang-S5pMXEuLI_Q-unsplash-1-pql9udg5d3eq26r890vgmitdq5j76yzo3u6ekjhzsk.jpg' },
    { url: '/images/index/mae-mu-s6S8IgEN6-4-unsplash-1-pql9utfela0ljk40nps4aws7tpcfttr3u19nq8uaus.jpg' },
  ];
  return (
    <>
      <button type="button" className="xc-btn xc-btn--primary" onClick={() => setOpen(true)}>
        Ouvrir la visionneuse (3 images)
      </button>
      {open && <MediaViewer items={items} initialIndex={0} onClose={() => setOpen(false)} />}
    </>
  );
}

function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [openDanger, setOpenDanger] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setOpen(false); setOpenDanger(false); }, 1200);
  };
  return (
    <>
      <Row>
        <button type="button" className="xc-btn xc-btn--primary" onClick={() => setOpen(true)}>
          Dialog primary
        </button>
        <button type="button" className="xc-btn xc-btn--danger" onClick={() => setOpenDanger(true)}>
          Dialog danger
        </button>
      </Row>
      <ConfirmDialog
        isOpen={open}
        title="Souscrire au plan Premium ?"
        message="Vous serez débité de 5 000 XAF par mois. Vous pouvez résilier à tout moment depuis votre profil."
        confirmLabel="Souscrire"
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
        isLoading={loading}
      />
      <ConfirmDialog
        isOpen={openDanger}
        title="Supprimer ce service ?"
        message="Cette action est irréversible. Le service sera retiré du catalogue immédiatement."
        confirmLabel="Supprimer"
        variant="danger"
        onConfirm={handleConfirm}
        onCancel={() => setOpenDanger(false)}
        isLoading={loading}
      />
    </>
  );
}

function TabsDemo() {
  const [tab, setTab] = useState('services');
  return (
    <Tabs
      tabs={[
        { id: 'services', label: 'Services' },
        { id: 'about',    label: 'À propos' },
        { id: 'reviews',  label: 'Avis (12)' },
      ]}
      activeTab={tab}
      onChange={setTab}
    >
      <p style={{ color: 'rgba(255,255,255,0.65)' }}>
        Onglet actif : <strong style={{ color: '#fff' }}>{tab}</strong>
      </p>
    </Tabs>
  );
}

function InfiniteDemo() {
  const [items, setItems] = useState(Array.from({ length: 5 }, (_, i) => i + 1));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const load = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const start = items.length;
      const more = Array.from({ length: 5 }, (_, i) => start + i + 1);
      const next = [...items, ...more];
      setItems(next);
      setHasMore(next.length < 20);
      setLoading(false);
    }, 900);
  };
  return (
    <div style={{ maxHeight: 220, overflowY: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 12 }}>
      {items.map((n) => (
        <div key={n} style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)' }}>
          Élément #{n}
        </div>
      ))}
      <InfiniteScrollTrigger onVisible={load} isLoading={loading} hasMore={hasMore} />
    </div>
  );
}

function PreviewContent() {
  return (
    <div className="elementor-section elementor-top-section elementor-section-boxed" style={{ padding: '48px 0' }}>
      <div className="elementor-container" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 16px' }}>

        <header style={{ marginBottom: 32 }}>
          <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: 28, marginBottom: 8 }}>
            UI Primitives Preview
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 680 }}>
            Phase 1 — 9 composants de base (Badge, Avatar, Spinner, EmptyState, Toast,
            InfiniteScrollTrigger, MediaViewer, Tabs, ConfirmDialog).
            Toutes les autres briques métier en dépendent.
          </p>
        </header>

        <Section title="Badge — statuts">
          <Row>
            <Label>pending</Label><Badge label="En attente" variant="pending" />
            <Label>approved</Label><Badge label="Approuvé" variant="approved" />
            <Label>active</Label><Badge label="Actif" variant="active" />
            <Label>rejected</Label><Badge label="Rejeté" variant="rejected" />
            <Label>suspended</Label><Badge label="Suspendu" variant="suspended" />
            <Label>expired</Label><Badge label="Expiré" variant="expired" />
          </Row>
        </Section>

        <Section title="Avatar — image + fallback initiales">
          <Row gap={20}>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="sm" name="Marie Dupont" /><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>sm 32px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="md" name="Jean Paul" /><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>md 48px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="lg" name="Léa Mboma" /><div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>lg 72px</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="xl"
                src="/images/index/aldi-sigun-K-sdQ12jZeY-unsplash-1-pqla1seba1k5nfzgy89iangafkzfx0ffsjgav4i6pg.jpg"
                name="Photo"
              />
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>xl 120px + img</div>
            </div>
          </Row>
        </Section>

        <Section title="Spinner">
          <Row gap={24}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </Row>
        </Section>

        <Section title="EmptyState">
          <EmptyState
            icon={<i className="fas fa-inbox" />}
            title="Aucun service publié"
            description="Vous n'avez pas encore créé de service. Commencez par ajouter votre premier service pour apparaître dans le catalogue."
            action={<button type="button" className="xc-btn xc-btn--primary">Créer un service</button>}
          />
        </Section>

        <Section title="Toast">
          <ToastDemo />
        </Section>

        <Section title="InfiniteScrollTrigger (scroller dans la zone)">
          <InfiniteDemo />
        </Section>

        <Section title="MediaViewer (overlay plein écran)">
          <MediaViewerDemo />
        </Section>

        <Section title="Tabs">
          <TabsDemo />
        </Section>

        <Section title="ConfirmDialog">
          <DialogDemo />
        </Section>

      </div>
    </div>
  );
}

export default function PreviewComponentsPage() {
  return (
    <ToastProvider>
      <PreviewContent />
    </ToastProvider>
  );
}
