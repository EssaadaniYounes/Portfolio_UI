import React from "react";
import { Project as ProjectType } from "@/types";
import ProjectTools from "./ProjectTools";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

function Project({ project }: { project: ProjectType }) {
  return (
    <Card className="max-w-sm mx-auto overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={project.imageUrl}
          alt={`Preview of ${project.name}`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.url && (
        <CardFooter className="p-4 pt-0">
          <Button asChild className="w-full">
            <Link href={project.url}>View Project</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default Project;
