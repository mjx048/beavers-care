import type { Metadata } from "next";
import "./globals.css";
import QuickMenu from "@/components/QuickMenu";

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
      <body>
        {children}
        <QuickMenu />
      </body>
    </html>
  );
}

