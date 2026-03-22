import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackageSection from '@/components/quarantinePackage/PackageSection';

export const metadata: Metadata = {
  title: "에어컨 방역패키지",
  description:
    "비버스케어 에어컨 방역패키지. 에어컨 세척과 소독 방역을 한 번에! 병원·기업 맞춤 에어컨 방역 통합 패키지 서비스.",
  keywords: [
    "에어컨 방역패키지",
    "에어컨 방역",
    "에어컨 세척 소독",
    "방역 패키지",
    "병원 에어컨 방역",
    "기업 에어컨 방역",
  ],
  alternates: {
    canonical: "https://beaverscare.co.kr/solution/quarantinePackage",
  },
  openGraph: {
    title: "에어컨 방역패키지 | 비버스케어",
    description:
      "에어컨 세척과 소독 방역을 한 번에! 비버스케어 에어컨 방역 통합 패키지.",
    url: "https://beaverscare.co.kr/solution/quarantinePackage",
  },
};

export default function QuarantinePackagePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PackageSection />
      <Footer />
    </main>
  );
}
