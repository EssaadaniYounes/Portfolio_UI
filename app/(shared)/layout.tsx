import Link from "next/link";
import type { Metadata } from 'next'
import { BriefcaseBusinessIcon, Folder, FolderIcon, HomeIcon, SquarePenIcon, WrenchIcon } from "lucide-react";
import { LeftSideCard } from "@/components/left-side-card";
import CalEmbed from "@/components/cal-embed";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const poppins = Poppins({
  weight: ["600", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})
import { Analytics } from '@vercel/analytics/next';
export const metadata: Metadata = {
  metadataBase: new URL("https://www.essaadani.dev"),
  title: {
    default: "SaaS & Next.js Developer – Younes Essaadani",
    template: "%s | SaaS & Next.js Developer – Younes Essaadani",
  },
  description:
    "Full Stack & AI Engineer building SaaS products, landing pages, and AI systems with Next.js, Node.js, and modern tools. Available for freelance and remote work.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "SaaS Developer",
    "Node.js",
    "NestJS",
    "React Developer",
    "Freelance Developer",
    "Web Developer Morocco",
    "Remote Full Stack Developer",
  ],
  authors: [{ name: "Younes Essaadani", url: "https://www.essaadani.dev" }],
  creator: "Younes Essaadani",
  alternates: {
    canonical: "https://www.essaadani.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.essaadani.dev",
    title: "Younes Essaadani – Full Stack & AI Engineer",
    description:
      "I build SaaS products and AI systems that ship. Specialized in Next.js, Node.js, and scalable architectures.",
    siteName: "essaadani.dev",
    images: [
      {
        url: "/og-image.png", // create this
        width: 1200,
        height: 630,
        alt: "Younes Essaadani Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Younes Essaadani – Full Stack & AI Engineer",
    description:
      "Full Stack & AI Engineer building SaaS and AI-powered products.",
    images: ["/og-image.png"],
    creator: "@your_twitter", // optional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main className="mx-auto max-w-8xl py-6">
          <div className="flex items-center justify-center w-full bg-red">
            <div className="flex items-center space-x-4 md:space-x-9 justify-center bg-[#ffffff08] p-4 px-8 md:px-12 rounded-lg">
              <Link href={"/"} aria-label="Home">
                <HomeIcon size={28} />
              </Link>
              <Link href={"/projects"} aria-label="Projects">
                <FolderIcon size={28} />
              </Link>
              <Link href={"/experience"} aria-label="Experience">
                <BriefcaseBusinessIcon size={28} />
              </Link>
              <Link href={"/skills"} aria-label="Skills">
                <WrenchIcon size={28} />
              </Link>
              <Link href={"/contact"} aria-label="Contact">
                <SquarePenIcon size={28} />
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col md:flex-row gap-8 mt-12 p-6">
            <div className="md:sticky md:top-16">
              <LeftSideCard />
            </div>
            <div className="space-y-16 md:space-y-32 max-w-2xl">
              {children}
            </div>
          </div>
          <CalEmbed />
          <Analytics />
        </main>
  );
}
