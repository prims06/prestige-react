import { AuthorsHeader, MobileFilterNav, AuthorsMain } from '../components/authors/AuthorSections';

export default function AuthorsPage() {
  return (
    <main id="content" className="site-main post-411 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="411" className="elementor elementor-411" data-elementor-post-type="envato_tk_templates">
          <AuthorsHeader />
          <MobileFilterNav />
          <AuthorsMain />
        </div>
      </div>
    </main>
  );
}