import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CorporationSection from '@/components/CorporationSection';
import MembersSection from '@/components/MembersSection';
import ClientSection from '@/components/ClientSection';
import SolutionSection from '@/components/SolutionSection';
import DifferenceSection from '@/components/DifferenceSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CorporationSection />
      <MembersSection />
      <ClientSection />
      <SolutionSection />
      <DifferenceSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}

