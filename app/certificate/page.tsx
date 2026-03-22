import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CertificateRequestSection from '@/components/certificate/CertificateRequestSection';

export const metadata: Metadata = {
  title: "증명서 발급",
  description:
    "비버스케어 방역·소독 증명서 발급 서비스. 방역 완료 후 공식 증명서를 발급해 드립니다.",
  alternates: {
    canonical: "https://beaverscare.co.kr/certificate",
  },
  openGraph: {
    title: "증명서 발급 | 비버스케어",
    description: "비버스케어 방역·소독 완료 공식 증명서 발급 서비스.",
    url: "https://beaverscare.co.kr/certificate",
  },
};

export default function CertificatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CertificateRequestSection />
      <Footer />
    </main>
  );
}
