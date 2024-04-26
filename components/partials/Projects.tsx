import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { PROJECTS } from "@/lib/constants";
import Project from "./Project";

function Projects() {
  return (
    <section className="my-4 w-full  py-12 md:py-24 lg:py-32 bg-gray-200 rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of the projects I{"'"}ve worked on and the
            technologies I{"'"}ve used.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {PROJECTS.map((p) => (
            <Project key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
