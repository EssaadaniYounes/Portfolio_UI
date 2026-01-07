import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import RecentProjects from "@/components/recent-projects";
import Stacks from "@/components/stacks";
import React from "react";

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
