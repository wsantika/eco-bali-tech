import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoBali Tech — Smart Waste & Green Living Platform",
  description:
    "Platform digital cerdas untuk mendukung Bali yang lebih bersih, hijau, dan berkelanjutan melalui teknologi informasi. Hitung dampak hijau, jelajahi dashboard lingkungan, dan mainkan game pilah sampah.",
  keywords: [
    "EcoBali Tech",
    "sampah Bali",
    "lingkungan",
    "daur ulang",
    "teknologi informasi",
    "green living",
    "waste management",
  ],
  authors: [{ name: "Fakultas Teknologi Informasi" }],
  openGraph: {
    title: "EcoBali Tech — Smart Waste & Green Living Platform",
    description:
      "Solusi digital untuk masa depan Bali yang berkelanjutan. Hitung skor hijau, visualisasi data lingkungan, dan game edukasi pilah sampah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
