import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "PyV Santa Fe — Tropa de Leales",
  description:
    "Principios y Valores Rosario. Conoce nuestro partido y nuestro conductor: Guillermo Moreno. Tropa de Leales. Peronismo.",
  keywords: [
    "Principios y Valores",
    "PyV",
    "Santa Fe",
    "Rosario",
    "Guillermo Moreno",
    "partido peronista",
    "lealtad",
    "peronismo",
  ],
  openGraph: {
    title: "PyV Santa Fe — Tropa de Leales",
    description:
      "Principios y Valores Rosario. Conoce nuestro partido, trabajo y conductor: Guillermo Moreno. Tropa de Leales. Peronismo.",
    url: "https://www.principiosyvaloressantafe.com.ar/",
    siteName: "PyV Santa Fe",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.principiosyvaloressantafe.com.ar/dias_mas_felices.webp",
        width: 1200,
        height: 630,
        alt: "Plan economico peronista - Plan de gobierno peronista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@principiosvalores",
    title: "Principios y Valores — Santa Fe",
    description:
      "Partido Principios y Valores - Santa Fe. Conoce nuestras propuestas.",
    images: ["https://www.principiosyvaloressantafe.com.ar/logopyv.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body bg-white text-dark-950 antialiased">
        <Navbar />
        <main className="min-h-[100dvh]">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
