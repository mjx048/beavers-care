import type { Metadata } from "next";
import "./globals.css";
import QuickMenu from "@/components/QuickMenu";

export const metadata: Metadata = {
  title: "Beavers Care",
  description: "공기 위생 파트너",
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

