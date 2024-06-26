import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Judson } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
  title: "Younes Essaadani | Portfolio",
  description:
    "Unlock the full potential of web development with our comprehensive resources and insights. Whether you're a seasoned full-stack developer or diving into the world of MERN development, our platform offers expert guidance, tutorials, and tools to elevate your skills and projects to new heights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth " lang="en">
      <body
        className={
          judson.variable +
          libre_franklin.variable +
          "bg-white dark:bg-gray-900"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
