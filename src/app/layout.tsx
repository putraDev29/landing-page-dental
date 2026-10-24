import type { Metadata, Viewport } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFDF9",
};

export const metadata: Metadata = {
  title: "OKAY Dental Therapist | Jadwal Buka Praktik & Perawatan Gigi Ceria",
  description:
    "Klinik perawatan gigi terapis ramah anak & dewasa. Jadwal praktik: Senin - Sabtu (Sore 16.30 - 20.00), Minggu (Pagi 10.00 - 12.00). Reservasi WhatsApp: 0838-5648-0982.",
  keywords: [
    "OKAY Dental Therapist",
    "Jadwal Buka Praktik Gigi",
    "Perawatan Gigi Anak",
    "Scaling Gigi Bersih",
    "Tambal Gigi Estetik",
    "Klinik Gigi Ramah",
    "083856480982",
  ],
  authors: [{ name: "OKAY Dental Therapist" }],
  openGraph: {
    title: "OKAY Dental Therapist - Jadwal Buka Praktik",
    description:
      "Senin - Sabtu (16.30 - 20.00) & Minggu (10.00 - 12.00). Konsultasi WhatsApp: 083856480982",
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
    <html lang="id" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body className="antialiased selection:bg-purple-200 selection:text-purple-900 font-sans">
        {children}
      </body>
    </html>
  );
}
