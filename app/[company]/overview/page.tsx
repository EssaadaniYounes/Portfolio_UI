import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: { company: string };
};

export default function ProjectOverviewPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.company);

  if (!project) notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <Link href={'/'}>
        <h2 className="mb-4  font-semibold text-white duration-100 hover:text-[#b6b4bd33]">
          <ArrowLeft className="inline mr-2" size={20}/>
          Back
        </h2>
      </Link>
      <header className="mb-16">
        <p className="text-sm uppercase tracking-widest text-[#b6b4bd33]">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-gray-400">
          {project.description}
        </p>
      </header>

      <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        <Meta label="Role" value={project.role} />
        <Meta label="Period" value={project.period} />
        <Meta label="Location" value={project.location} />
        <Meta label="Stack" value={project.stack.slice(0, 3).join(", ")} />
      </div>

      <Block title="What I Worked On">
        <ul className="space-y-3 text-gray-300">
          {project.highlights.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </Block>

      <Block title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-md border border-[#b6b4bd33] px-3 py-1 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Block>

      {project.metrics && (
        <Block title="Impact">
          <ul className="space-y-2 text-gray-300">
            {project.metrics.map(m => (
              <li key={m}>→ {m}</li>
            ))}
          </ul>
        </Block>
      )}

      {/* CTA */}
      <div className="mt-24 border-t border-[#b6b4bd33] pt-10">
        <a
          href="/#booking"
          className="inline-flex items-center gap-2 text-sm text-white transition hover:opacity-70"
        >
          Want something similar?
          <span className="text-gray-400">Let’s talk →</span>
        </a>
      </div>
    </section>
  );
}


function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-[#b6b4bd33]">
        {label}
      </p>
      <p className="mt-2 text-sm text-white">{value}</p>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <h2 className="mb-4 text-xl font-medium text-white">{title}</h2>
      <div className="max-w-3xl text-gray-400">{children}</div>
    </div>
  );
}
