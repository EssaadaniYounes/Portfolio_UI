import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
};

type Experience = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

type Skill = {
  name: string;
  icon: IconType;
};
