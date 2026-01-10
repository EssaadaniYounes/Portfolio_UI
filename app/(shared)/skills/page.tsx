import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Stacks from "@/components/stacks";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tech Stack | Full Stack & AI Engineer – Younes Essaadani",
  description:
    "Explore the technical skills and tools used by Younes Essaadani, a Full Stack & AI Engineer specializing in Next.js, React, Node.js, SaaS architecture, and AI-powered systems for startups and agencies.",
  keywords: [
    "Full Stack Developer skills",
    "Next.js developer skills",
    "SaaS engineer tech stack",
    "AI engineer skills",
    "React Node.js developer",
    "Tailwind CSS developer",
    "LangChain developer",
    "Remote full stack developer",
    "Web developer Morocco",
    "Startup software engineer"
  ],
  alternates: {
    canonical: "https://www.essaadani.dev/skills",
  },
  openGraph: {
    title: "Skills & Tech Stack – Younes Essaadani",
    description:
      "A detailed overview of my full stack, SaaS, and AI development skills including Next.js, React, Node.js, and modern tooling.",
    url: "https://www.essaadani.dev/skills",
    siteName: "Younes Essaadani Portfolio",
    images: [
      {
        url: "https://www.essaadani.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Skills and tech stack of Younes Essaadani",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Tech Stack – Younes Essaadani",
    description:
      "Full Stack & AI Engineer skills: Next.js, React, Node.js, SaaS systems, and AI integrations.",
    images: ["https://www.essaadani.dev/og.png"],
  },
};


export default function Home() {
  return (
    <React.Fragment>
      <Stacks />
      <Articles />
      <Contact />
    </React.Fragment>
  );
}
