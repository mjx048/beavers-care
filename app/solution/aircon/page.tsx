import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHistorySection from '@/components/aircon/WorkHistorySection';
import BeforeAfterSection from '@/components/aircon/BeforeAfterSection';
import ProcessSection from '@/components/aircon/ProcessSection';
import ThreePointSection from '@/components/ThreePointSection';

export default function AirconSolutionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <WorkHistorySection />
      <BeforeAfterSection />
      <ProcessSection />
      <ThreePointSection />
      <Footer />
    </main>
  );
}
