import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Judson } from "next/font/google";
import { Libre_Franklin } from "next/font/google";

const judson = Judson({
  display: "swap",
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-judson",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={judson.variable + libre_franklin.variable}>
        {children}
      </body>
    </html>
  );
}
