import React from "react";
import { CircleAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function ProjectTools({ technologies }: { technologies: string[] }) {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleAlert size={25} className="ml-auto mr-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="capitalize">
        <DialogHeader>
          <DialogTitle>
            <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Technologies :
            </span>
          </DialogTitle>
          <DialogDescription>
            {technologies.map((tech) => (
              <span key={tech} className="block text-sm text-gray-400">
                * {tech}
              </span>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectTools;
