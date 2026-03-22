import type { Metadata } from "next";
import "./globals.css";
import QuickMenu from "@/components/QuickMenu";

const BASE_URL = "https://beaverscare.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "비버스케어 | 병원·기업 공기위생 전문 파트너",
    template: "%s | 비버스케어",
  },
  description:
    "에어컨 전문세척, 소독 방역, 방역패키지 전문 기업 비버스케어. 대기업 출신 20년 가전 전문가가 직접 진행하는 병원·기업 공기위생 관리 서비스.",
  keywords: [
    "에어컨 청소",
    "에어컨 세척",
    "에어컨 소독",
    "방역",
    "소독 방역",
    "병원 에어컨 청소",
    "기업 에어컨 세척",
    "공기위생",
    "비버스케어",
    "beavers care",
    "에어컨 방역패키지",
    "인천 에어컨 청소",
    "경기 에어컨 청소",
  ],
  authors: [{ name: "비버스케어", url: BASE_URL }],
  creator: "비버스케어",
  publisher: "비버스케어",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "비버스케어",
    title: "비버스케어 | 병원·기업 공기위생 전문 파트너",
    description:
      "에어컨 전문세척, 소독 방역, 방역패키지 전문 기업 비버스케어. 대기업 출신 20년 가전 전문가가 직접 진행하는 병원·기업 공기위생 관리 서비스.",
    images: [
      {
        url: "/logo_icon_company.png",
        width: 1200,
        height: 630,
        alt: "비버스케어 로고",
      },
    ],
  },
  verification: {
    google: "Kb8TgnKG39iNLQ7W4kTJSERWbAgdCcQxubbZBYmoq6s",
    other: {
      "naver-site-verification": "0062e236b5763a0debc90b3c1c8b5776ebedfecf",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "비버스케어",
  alternateName: "Beavers Care",
  url: BASE_URL,
  logo: `${BASE_URL}/logo_icon_company.png`,
  image: `${BASE_URL}/logo_icon_company.png`,
  description:
    "에어컨 전문세척, 소독 방역, 방역패키지 전문 기업. 대기업 출신 20년 가전 전문가가 직접 진행하는 병원·기업 공기위생 관리 서비스.",
  telephone: "1899-7026",
  email: "beaverscare0204@gmail.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "시청로 25 시티프론트561, 429호",
      addressLocality: "시흥시",
      addressRegion: "경기도",
      addressCountry: "KR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "컨벤시아대로 80, 401동 1층",
      addressLocality: "연수구",
      addressRegion: "인천",
      addressCountry: "KR",
    },
  ],
  sameAs: ["http://xn--hk3b15abygvxd8yp.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <QuickMenu />
      </body>
    </html>
  );
}

