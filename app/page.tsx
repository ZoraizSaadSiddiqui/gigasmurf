import Navbar from '@/components/sections/navigation/Navbar';
import HeroSection from '@/components/sections/hero/HeroSection';
import LiveMarketplace from '@/components/sections/live-marketplace/LiveMarketplace';
import FeaturedAccounts from '@/components/sections/featured-accounts/FeaturedAccounts';
import PopularGamingAccounts from '../components/PopularGamingAccounts';
import TopRatedBoosting from '../components/TopRatedBoosting';
import TopVerifiedSeller from '../components/TopVerifiedSeller';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LiveMarketplace />
      <FeaturedAccounts />
      <PopularGamingAccounts />
      <TopRatedBoosting />
      <TopVerifiedSeller />
      <CTASection />
      <Footer />
    </main>
  );
}
