import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { expertisePages } from "@/lib/expertise";

type Props = {
  params: { company: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((item) => item.slug === params.company);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };

  const path = `/${project.slug}/overview`;
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${project.name} case study`,
      description: project.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${project.name} case study by Younes Essaadani` }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@EssaadaniYounes",
      title: `${project.name} case study`,
      description: project.description,
      images: ["/og-image.png"],
    },
  };
}

export default function ProjectOverviewPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.company);

  if (!project) notFound();
  const relatedExpertise = expertisePages.filter((item) => item.relatedProjects.includes(project.slug));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.name} engineering case study`,
    description: project.description,
    author: { "@type": "Person", "@id": "https://www.essaadani.dev/#person", name: "Younes Essaadani" },
    mainEntityOfPage: `https://www.essaadani.dev/${project.slug}/overview`,
    keywords: project.stack.join(", "),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href={'/'}>
        <h2 className="mb-4 font-semibold text-[#292929] duration-100 hover:text-[#059b82]">
          <ArrowLeft className="inline mr-2" size={20}/>
          Back
        </h2>
      </Link>
      <header className="mb-16">
        <p className="text-sm uppercase tracking-widest text-[#059b82]">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#292929]">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-[#6d6a66]">
          {project.description}
        </p>
      </header>

      <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
        <Meta label="Role" value={project.role} />
        <Meta label="Period" value={project.period} />
        <Meta label="Location" value={project.location} />
        <Meta label="Stack" value={project.stack.slice(0, 3).join(", ")} />
      </div>

      <div className="mb-20 grid gap-10 border-y border-[#29292922] py-12 md:grid-cols-2">
        <Block title="The Challenge"><p>{project.challenge}</p></Block>
        <Block title="Engineering Approach"><p>{project.approach}</p></Block>
      </div>

      <Block title="What I Worked On">
        <ul className="space-y-3 text-[#6d6a66]">
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
              className="rounded-md border border-[#29292933] px-3 py-1 text-sm text-[#292929]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Block>

      {project.metrics && (
        <Block title="Impact">
          <ul className="grid gap-3 sm:grid-cols-2 text-[#292929]">
            {project.metrics.map(m => (
              <li className="border border-[#29292922] p-4" key={m}>→ {m}</li>
            ))}
          </ul>
        </Block>
      )}

      <Block title="Related Expertise">
        <div className="flex flex-wrap gap-3">
          {relatedExpertise.map((item) => <Link className="border-b border-[#292929] pb-1 text-[#292929] hover:text-[#059b82]" href={`/expertise/${item.slug}`} key={item.slug}>{item.shortTitle} ↗</Link>)}
        </div>
      </Block>

      {/* CTA */}
      <div className="mt-24 border-t border-[#29292922] pt-10">
        <a
          href="mailto:essaadani.yo@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-[#292929] transition hover:text-[#059b82]"
        >
          Want something similar?
          <span className="text-[#6d6a66]">Let’s talk →</span>
        </a>
      </div>
    </section>
  );
}


function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-[#6d6a66]">
        {label}
      </p>
      <p className="mt-2 text-sm text-[#292929]">{value}</p>
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
      <h2 className="mb-4 text-xl font-medium text-[#292929]">{title}</h2>
      <div className="max-w-3xl text-[#6d6a66]">{children}</div>
    </div>
  );
}
