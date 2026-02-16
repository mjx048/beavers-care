import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificateRequestSection from '@/components/certificate/CertificateRequestSection';

export default function CertificatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CertificateRequestSection />
      <Footer />
    </main>
  );
}
