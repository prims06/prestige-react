import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import AuthBreadcrumb from '../components/auth/AuthBreadcrumb';
import ProfileMain from '../components/profile/ProfileMain';

export default function ProfilePage() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  // Pas authentifie -> login (preserve la cible eventuelle a faire plus tard)
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <main id="content" className="site-main post-411 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="411" className="elementor elementor-411" data-elementor-post-type="envato_tk_templates">
          <AuthBreadcrumb title="Mon profil" />
          <ProfileMain />
        </div>
      </div>
    </main>
  );
}
