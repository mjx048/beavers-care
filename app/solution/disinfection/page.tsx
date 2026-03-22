import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHistorySection from '@/components/disinfection/WorkHistorySection';
import ProcessSection from '@/components/disinfection/ProcessSection';

export const metadata: Metadata = {
  title: "소독 방역",
  description:
    "비버스케어 소독 방역 서비스. 인간 대 바이러스 전쟁의 최전방 선봉주자. 병원, 기업, 학원, 식당 등 전문 소독 방역 서비스를 제공합니다.",
  keywords: [
    "소독 방역",
    "바이러스 소독",
    "병원 방역",
    "기업 방역",
    "전문 소독",
    "방역 업체",
    "인천 방역",
    "경기 방역",
  ],
  alternates: {
    canonical: "https://beaverscare.co.kr/solution/disinfection",
  },
  openGraph: {
    title: "소독 방역 | 비버스케어",
    description:
      "인간 대 바이러스 전쟁의 최전방. 비버스케어 전문 소독 방역 서비스.",
    url: "https://beaverscare.co.kr/solution/disinfection",
  },
};

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
