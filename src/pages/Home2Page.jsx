import HeroSection from '../components/home2/HeroSection';
import LiveAuctionsSection from '../components/home2/LiveAuctionsSection';
import ProductsSection from '../components/home2/ProductsSection';
import MobileExploreMoreSection from '../components/home2/MobileExploreMoreSection';
import FeaturedCollectionsHeader from '../components/home2/FeaturedCollectionsHeader';
import CollectionsRow1Section from '../components/home2/CollectionsRow1Section';
import TabletCollectionsSection from '../components/home2/TabletCollectionsSection';
import CollectionsRow2Section from '../components/home2/CollectionsRow2Section';
import MobileViewAllCollectionsSection from '../components/home2/MobileViewAllCollectionsSection';
import FeatureBoxesSection from '../components/home2/FeatureBoxesSection';
import TopAuthorsHeader from '../components/home2/TopAuthorsHeader';
import AuthorsSection from '../components/home2/AuthorsSection';
import MobileViewAllAuthorsSection from '../components/home2/MobileViewAllAuthorsSection';
import CreateNftDesktopSection from '../components/home2/CreateNftDesktopSection';
import CreateNftTabletMobileSection from '../components/home2/CreateNftTabletMobileSection';
import LogoCarouselSection from '../components/home2/LogoCarouselSection';

export default function Home2Page() {
  return (
    <main id="content" className="site-main post-18 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="18" className="elementor elementor-18" data-elementor-post-type="envato_tk_templates">

          <HeroSection />
          <LiveAuctionsSection />
          <ProductsSection />
          <MobileExploreMoreSection />
          <FeaturedCollectionsHeader />
          <CollectionsRow1Section />
          {/* <TabletCollectionsSection />
          <CollectionsRow2Section /> */}
          <MobileViewAllCollectionsSection />
          <FeatureBoxesSection />
          <TopAuthorsHeader />
          <AuthorsSection />
          <MobileViewAllAuthorsSection />
          <CreateNftDesktopSection />
          <CreateNftTabletMobileSection />
          <LogoCarouselSection />

        </div>
      </div>
    </main>
  );
}
