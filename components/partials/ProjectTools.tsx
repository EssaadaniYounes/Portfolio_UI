import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CircleAlert } from "lucide-react";

function ProjectTools({ technologies }: { technologies: string[] }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="ml-auto mr-4">
          <CircleAlert size={25} className="ml-auto mr-4 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent className="capitalize">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Technologies :
          </h2>
          {technologies.map((tech) => (
            <p key={tech} className="text-sm text-gray-400">
              * {tech}
            </p>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ProjectTools;
