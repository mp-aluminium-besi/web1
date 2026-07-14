import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MP Aluminium | Spesialis Kusen, Fasad ACP & Eksterior Premium",
  description: "Aplikator aluminium dan kontraktor fasad ACP terpercaya. Presisi tinggi untuk pemasangan kusen, pintu, jendela double glass, dan kitchen set komersial/residensial.",
  keywords: "kusen aluminium, pasang ACP, fasad gedung, pintu aluminium, double glass, kontraktor aluminium, MP Aluminium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
