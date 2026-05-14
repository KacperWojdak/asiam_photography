import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import {
  Cormorant_Garamond,
  Barlow,
  Barlow_Condensed,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Asia M. Photography",
  description: "Portrait, occasion, landscape and sport photography by Asia Mańkowska.",
  keywords: ["photography", "portrait", "sport photography", "football", "Poland"],
  openGraph: {
    title: "Asia M. Photography",
    description: "Portrait, occasion, landscape and sport photography by Asia Mańkowska.",
    type: "website",
  },
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-barlow",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${cormorant.variable} ${condensed.variable}`}
    >
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}