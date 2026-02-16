import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beavers Care - 위생 파트너",
  description: "180개의 관공서가 신뢰하는 위생 파트너사",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

