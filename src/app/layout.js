import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata = {
  title: {
    default: "Principios y Valores: Pagina oficial Principios y Valores Rosario",
    template: "%s - Patido político Principios y Valores - Peronismo",
  },
  description: "Inicio partido Principios y Valores, Santa Fe. Conoce nuestro armado politico peronista",
  canonical: "https://principiosyvaloressantafe/",
  openGraph: {
    description: "Partido Principios y Valores - Santa Fe. Conoce nuestras propuestas y equipo.",
    title: "Principios y Valores - Santa Fe",
    url: "https://principiosyvaloressantafe.com.ar",
    type: "website",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Principios y Valores",
      },
    ],
    site_name: "Principios y Valores",
  },
  twitter: {
    card: "summary_large_image",
    site: "@principiosvalores",
    title: "Principios y Valores - Santa Fe",
    description: "Partido Principios y Valores - Santa Fe. Conoce nuestras propuestas.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel="icon" href='/favicon.ico' type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        {/* Hreflang */}
        <link rel="alternate" href="https://principiosyvaloressantafe.com.ar" hrefLang="es" />
      </Head>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <link rel="canonical" href={metadata.canonical}></link>
      </body>
    </html>
  );
}
