"use client";
import { Dot, Eye, EyeOff } from "lucide-react";
import React from "react";

function ExperienceDescription({ description }: { description: string[] }) {
  const [showDescription, setShowDescription] = React.useState<boolean>(false);
  return (
    <>
      {!showDescription ? (
        <button
          className="flex items-center gap-2 mx-auto bg-blue-300 dark:bg-blue-500 p-2 px-4 rounded-md  text-white font-medium capitalize text-sm/relaxed"
          onClick={() => setShowDescription(true)}
        >
          <Eye />
          <span>Read Description</span>
        </button>
      ) : (
        <>
          {description.map((d) => (
            <p
              key={d}
              className=" flex items-start text-gray-600 dark:text-gray-400 text-sm/relaxed"
            >
              <Dot className="flex-shrink-0" />
              {d}
            </p>
          ))}
          <button
            className="flex items-center gap-2 mx-auto bg-blue-300 dark:bg-blue-500 p-2 px-4 rounded-md  text-white font-medium capitalize text-sm/relaxed"
            onClick={() => setShowDescription(false)}
          >
            <EyeOff />
            <span>Close</span>
          </button>
        </>
      )}
    </>
  );
}

export default ExperienceDescription;
