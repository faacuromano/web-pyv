import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '300','400', '500', '700'], // Puedes agregar más pesos si los necesitas
});

export const metadata = {
  title: "PyV - Santa Fe",
  description: "Partido principios y valores - Santa Fe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
        </body>
    </html>
  );
}
