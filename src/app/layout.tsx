import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import MainTemplate from "@/core/components/MainTemplate/MainTemplate";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mons" });

export const metadata: Metadata = {
  title: "Brandspark",
  description: "We transform Raw Footage to Spectacular Stories - Lightning-Quick Edits, Everlasting Impressions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body
        className={` text-white font-secondary bg-blackBackground ${montserrat.variable} min-w-[380px]`}
      >
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
