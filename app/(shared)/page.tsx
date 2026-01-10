import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import { Hero } from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import SeoJsonLd from "@/components/seo-json-ld";
import Stacks from "@/components/stacks";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Full Stack & AI Engineer",
  description:
    "Building SaaS products, AI systems, and high-converting landing pages using Next.js, Node.js, and modern tools.",
};
export default function Home() {
  return (
    <React.Fragment>
      <SeoJsonLd />
      <Hero />
      <RecentProjects />
      <Experiences />
      <Stacks />
      <Articles />
      <Contact />
    </React.Fragment>
  );
}
