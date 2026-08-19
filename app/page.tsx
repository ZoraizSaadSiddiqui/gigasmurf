import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LiveMarketplace from '@/components/LiveMarketplace';
import FeaturedAccounts from '@/components/FeaturedAccounts';
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
