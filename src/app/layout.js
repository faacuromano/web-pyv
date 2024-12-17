import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata = {
  applicationName: "PyV Santa Fe",
  title: "PyV Santa Fe - Tropa de Leales",
  description:
    "Principios y Valores Rosario. Conoce nuestro partido y nuestro conductor: Guillermo Moreno. Tropa de Leales. Peronismo.",
  canonical: "https://www.principiosyvaloressantafe.com.ar/",
  openGraph: {
    site_name: "PyV Santa Fe",
    title: "PyV Santa Fe - Tropa de Leales",
    description:
      "Principios y Valores Rosario. Conoce nuestro partido, trabajo y conductor: Guillermo Moreno. Tropa de Leales. Peronismo.",
    url: "https://www.principiosyvaloressantafe.com.ar/",
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
    site_name: "PyV Santa Fe",
    card: "summary_large_image",
    site: "@principiosvalores",
    title: "Principios y Valores - Santa Fe",
    description:
      "Partido Principios y Valores - Santa Fe. Conoce nuestras propuestas.",
    image: "https://www.principiosyvaloressantafe.com.ar/logopyv.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="es-AR" />
        <meta name="keywords" content="Principios y Valores, PyV, Santa Fe, Rosario, Guillermo Moreno, partido peronista, lealtad, peronismo" />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph */}
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta property="twitter:site_name" content={metadata.twitter.site_name} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
