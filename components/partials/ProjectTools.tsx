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
      <DialogTrigger className="ml-auto mr-4">
        <CircleAlert size={25} className="ml-auto mr-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="capitalize">
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Technologies :
            </h2>
          </DialogTitle>
          <DialogDescription>
            {technologies.map((tech) => (
              <p key={tech} className="text-sm text-gray-400">
                * {tech}
              </p>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectTools;
