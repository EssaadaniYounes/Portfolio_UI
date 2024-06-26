import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Project as ProjectType } from "@/types";
import ProjectTools from "./ProjectTools";

function Project({ project }: { project: ProjectType }) {
  return (
    <Card className="bg-gray-300 dark:bg-gray-800">
      <CardContent className="flex  flex-col justify-between items-start gap-4">
        <Image
          alt="Project 1"
          className="rounded-md w-full aspect-[16/9] object-cover mt-2"
          height={225}
          src={project.imageUrl}
          width={400}
        />
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 ">
          {project.name}
        </h3>
        <p className=" flex-1 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex items-center justify-between w-full">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-600 dark:bg-gray-300 p-2 rounded-md text-sm justify-self-end font-medium text-gray-200 dark:text-gray-700"
            >
              View Project
            </a>
          )}
          <ProjectTools technologies={project.technologies} />
        </div>
      </CardContent>
    </Card>
  );
}

export default Project;
