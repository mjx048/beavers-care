import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHistorySection from '@/components/disinfection/WorkHistorySection';
import ProcessSection from '@/components/disinfection/ProcessSection';

export default function DisinfectionSolutionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <WorkHistorySection />
      <ProcessSection />
      <Footer />
    </main>
  );
}
