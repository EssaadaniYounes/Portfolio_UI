import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Project as ProjectType } from "@/types";
import ProjectTools from "./ProjectTools";

function Project({ project }: { project: ProjectType }) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-4">
        <Image
          alt="Project 1"
          className="rounded-md w-full aspect-[16/9] object-cover mt-2"
          height={225}
          src={project.imageUrl}
          width={400}
        />
        <h3 className="text-xl font-bold ">{project.name}</h3>
        <p className=" flex-1 text-gray-400 dark:text-gray-400">
          {project.description}
        </p>
        <ProjectTools technologies={project.technologies} />
      </CardContent>
    </Card>
  );
}

export default Project;
