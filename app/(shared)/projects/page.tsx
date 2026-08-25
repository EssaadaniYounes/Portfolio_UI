import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import RecentProjects from "@/components/recent-projects";
import Stacks from "@/components/stacks";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  robots: { index: false, follow: true },
};

export default function Home() {
  return (
    <React.Fragment>
      <RecentProjects />
      <Experiences />
      <Stacks />
      <Articles />
      <Contact />
    </React.Fragment>
  );
}
