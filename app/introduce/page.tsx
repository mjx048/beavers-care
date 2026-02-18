import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HistorySection from '@/components/HistorySection';
import CEOMessageSection from '@/components/CEOMessageSection';
import BrandStorySection from '@/components/BrandStorySection';
import CertificatesSection from '@/components/CertificatesSection';

export default function IntroducePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HistorySection />
      <CEOMessageSection />
      <BrandStorySection />
      <CertificatesSection />
      <Footer />
    </main>
  );
}
