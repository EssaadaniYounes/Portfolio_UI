import { Dot, MapPin } from "lucide-react";
import React from "react";
import ExperienceDescription from "./ExperienceDescription";
import { Experience as ExperienceType } from "@/types";
function Experience({ experience }: { experience: ExperienceType }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
      <div className="flex flex-col items-start space-y-4">
        <div className="capitalize bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium dark:bg-gray-50">
          {experience.jobTitle}
        </div>
        <h3 className="text-2xl font-bold capitalize">{experience.company}</h3>
        <div className="flex items-center gap-x-2">
          <MapPin size={22} className="text-gray-600" />
          <span className="text-gray-600 text-sm md:text-lg font-medium">
            {experience.location}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {experience.startDate} - {experience.endDate}
        </p>
        <ExperienceDescription description={experience.description} />
      </div>
    </div>
  );
}

export default Experience;
