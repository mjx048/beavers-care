import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
// import MembersSection from '@/components/MembersSection';
import ClientSection from '@/components/ClientSection';
import SolutionSection from '@/components/SolutionSection';
import BeliefSection from '@/components/BeliefSection';
import ThreePointSection from '@/components/ThreePointSection';
// import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
// import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HistorySection />
      {/* <MembersSection /> */}
      <ClientSection />
      <SolutionSection />
      <BeliefSection />
      <ThreePointSection />
      {/* <PortfolioSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}

