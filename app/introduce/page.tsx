import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HistorySection from '@/components/HistorySection';
import CEOMessageSection from '@/components/CEOMessageSection';
import BrandStorySection from '@/components/BrandStorySection';
import CertificatesSection from '@/components/CertificatesSection';

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "비버스케어 회사 소개. 국내 가전 대기업 전문가들이 모여 만든 공기위생 전문 기업입니다.",
  alternates: {
    canonical: "https://beaverscare.co.kr/introduce",
  },
  openGraph: {
    title: "회사 소개 | 비버스케어",
    description:
      "대기업 출신 20년 가전 전문가가 운영하는 공기위생 전문 기업 비버스케어를 소개합니다.",
    url: "https://beaverscare.co.kr/introduce",
  },
};

export default function IntroducePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-14 md:h-24" />
      <HistorySection />
      <CEOMessageSection />
      <BrandStorySection />
      <CertificatesSection />
      <Footer />
    </main>
  );
}
