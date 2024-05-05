import { Skill as SkillType } from "@/types";
import React from "react";

function Skill({ skill }: { skill: SkillType }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-sm dark:bg-gray-950">
      <skill.icon className="w-10 h-10 text-gray-900 dark:text-gray-50" />
      <h4 className="text-lg font-medium mt-2 text-gray-700 dark:text-gray-300">
        {skill.name}
      </h4>
    </div>
  );
}

export default Skill;
