import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackageSection from '@/components/quarantinePackage/PackageSection';

export default function QuarantinePackagePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PackageSection />
      <Footer />
    </main>
  );
}
