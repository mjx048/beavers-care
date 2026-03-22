import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import ClientSection from '@/components/ClientSection';
import SolutionSection from '@/components/SolutionSection';
import BeliefSection from '@/components/BeliefSection';
import ThreePointSection from '@/components/ThreePointSection';
import CTASection from '@/components/CTASection';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HistorySection />
      <ClientSection />
      <SolutionSection />
      <BeliefSection />
      <ThreePointSection />
      <CTASection />
      <Footer />
    </main>
  );
}

