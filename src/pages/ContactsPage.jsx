import ContactsHero from '../components/contacts/ContactsHero';
import ContactsFormSection from '../components/contacts/ContactsFormSection';
import ContactsInfoSection from '../components/contacts/ContactsInfoSection';

export default function ContactsPage() {
  return (
    <main id="content" className="site-main post-422 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="422" className="elementor elementor-422" data-elementor-post-type="envato_tk_templates">
          <ContactsHero />
          <ContactsFormSection />
          <ContactsInfoSection />
        </div>
      </div>
    </main>
  );
}
