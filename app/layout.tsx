import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '비버스케어 - 전문 에어컨 청소 및 소독·방역 서비스',
  description: '병원, 관공서, 학교, 기업 전문 에어컨 청소 업체. 시스템 에어컨 세척부터 소독·방역까지 체계적인 관리 솔루션을 제공합니다.',
  keywords: '에어컨 청소, 시스템 에어컨 세척, 소독 방역, 병원 에어컨 청소, 관공서 에어컨 관리, 실내 공기질 관리',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
