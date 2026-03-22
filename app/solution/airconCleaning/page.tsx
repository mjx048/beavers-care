import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHistorySection from '@/components/airconCleaning/WorkHistorySection';
import BeforeAfterSection from '@/components/airconCleaning/BeforeAfterSection';
import ProcessSection from '@/components/airconCleaning/ProcessSection';
import ThreePointSection from '@/components/ThreePointSection';

export const metadata: Metadata = {
  title: "에어컨 전문세척",
  description:
    "비버스케어 에어컨 전문세척 서비스. 단순 청소를 넘어 바이러스까지 멸균하는 에어컨 세척·소독 전문 서비스. 병원, 기업, 학원 에어컨 전문 관리.",
  keywords: [
    "에어컨 세척",
    "에어컨 청소",
    "에어컨 소독",
    "병원 에어컨 청소",
    "업소용 에어컨 세척",
    "에어컨 바이러스 소독",
  ],
  alternates: {
    canonical: "https://beaverscare.co.kr/solution/airconCleaning",
  },
  openGraph: {
    title: "에어컨 전문세척 | 비버스케어",
    description:
      "단순 청소를 넘어 바이러스까지 멸균하는 에어컨 전문세척 서비스.",
    url: "https://beaverscare.co.kr/solution/airconCleaning",
  },
};

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
