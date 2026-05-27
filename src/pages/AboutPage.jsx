import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import Ticker from '../components/about/Ticker';
import FeaturesSection from '../components/about/FeaturesSection';
import PlayButton from '../components/about/PlayButton';
import OurMission from '../components/about/OurMission';
import DecorativeElement from '../components/about/DecorativeElement';
import StatisticsHeader from '../components/about/StatisticsHeader';
import CountersSection from '../components/about/CountersSection';
import TeamSection from '../components/about/TeamSection';
import CtaDesktop from '../components/about/CtaDesktop';
import CtaMobile from '../components/about/CtaMobile';

export default function AboutPage() {
  return (
    <main id="content" className="site-main post-417 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="417" className="elementor elementor-417" data-elementor-post-type="envato_tk_templates">

          <AboutHero />
          <WhoWeAre />
          <Ticker />
          <FeaturesSection />
          <PlayButton />
          <OurMission />
          <DecorativeElement />
          <StatisticsHeader />
          <CountersSection />
          <TeamSection />
          <CtaDesktop />
          <CtaMobile />

        </div>
      </div>
    </main>
  );
}
