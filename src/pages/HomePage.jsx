import HomeHero from '../components/home/HomeHero.jsx';
import { NotableDropsTitle, NotableDropsGrid } from '../components/home/NotableDrops.jsx';
import { BestSellersTitle, BestSellersDesktop1, BestSellersTablet, BestSellersDesktop2, BestSellersDesktop3 } from '../components/home/BestSellers.jsx';
import BrowseByCategory from '../components/home/BrowseByCategory.jsx';
import TickerSection from '../components/home/TickerSection.jsx';
import HowItWorks from '../components/home/HowItWorks.jsx';
import { MeetXchainTitle, VideoSection } from '../components/home/MeetXchain.jsx';
import BlogSection from '../components/home/BlogSection.jsx';

export default function HomePage() {
  return (
    <div data-elementor-type="wp-post" data-elementor-id="5548" className="elementor elementor-5548 elementor-motion-effects-parent" data-elementor-post-type="page">
      <HomeHero />
      <NotableDropsTitle />
      <NotableDropsGrid />
      <BestSellersTitle />
      <BestSellersDesktop1 />
      <BestSellersTablet />
      <BestSellersDesktop2 />
      <BestSellersDesktop3 />
      <BrowseByCategory />
      <TickerSection />
      <HowItWorks />
      <MeetXchainTitle />
      <VideoSection />
      <BlogSection />
    </div>
  );
}
