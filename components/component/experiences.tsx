import { EXPERIENCES } from "@/lib/constants";
import Experience from "../partials/Experience";

export function Experiences() {
  return (
    <section className="w-full py-6 md:py-10 lg:py-14">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center my-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Experiences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <Experience experience={exp} key={exp.location} />
          ))}
        </div>
      </div>
    </section>
  );
}
