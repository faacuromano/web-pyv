import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PyV - Santa Fe",
  description: "Partido principios y valores - Santa Fe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
        </body>
    </html>
  );
}
