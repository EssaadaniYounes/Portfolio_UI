import { SKILLS } from "@/lib/constants";
import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the technologies and tools I{"'"}m proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {SKILLS.map((s) => (
            <Skill skill={s} key={s.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
