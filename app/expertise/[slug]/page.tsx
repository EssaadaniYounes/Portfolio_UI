import { expertisePages } from "@/lib/expertise";
import { projects } from "@/lib/constants";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return expertisePages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const expertise = expertisePages.find((item) => item.slug === params.slug);
  if (!expertise) return { title: "Expertise not found", robots: { index: false, follow: false } };
  const path = `/expertise/${expertise.slug}`;
  return {
    title: expertise.title,
    description: expertise.description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: expertise.title, description: expertise.description, images: ["/og-image.png"] },
    twitter: { card: "summary_large_image", creator: "@EssaadaniYounes", title: expertise.title, description: expertise.description, images: ["/og-image.png"] },
  };
}

export default function ExpertisePage({ params }: Props) {
  const expertise = expertisePages.find((item) => item.slug === params.slug);
  if (!expertise) notFound();
  const related = expertise.relatedProjects.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);

  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: expertise.title, description: expertise.description, provider: { "@type": "Person", "@id": "https://www.essaadani.dev/#person", name: "Younes Essaadani" }, url: `https://www.essaadani.dev/expertise/${expertise.slug}` };

  return <main className="expertise-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="shell expertise-shell">
      <Link href="/#expertise" className="back-link"><ArrowLeft size={17}/> Back to portfolio</Link>
      <header className="expertise-hero"><p className="eyebrow">Specialist expertise</p><h1>{expertise.title}</h1><p>{expertise.intro}</p><a href="mailto:essaadani.yo@gmail.com" className="button button-dark">Discuss a project <ArrowUpRight size={15}/></a></header>
      <section className="expertise-proof">{expertise.proof.map((item)=><div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</section>
      <section className="expertise-columns"><div><p className="eyebrow">Capabilities</p><h2>How I can help</h2></div><ul>{expertise.capabilities.map((item)=><li key={item}>{item}</li>)}</ul></section>
      <section className="expertise-columns"><div><p className="eyebrow">Evidence</p><h2>Related work</h2></div><div className="related-work">{related.map((project)=><Link href={`/${project!.slug}/overview`} key={project!.slug}><span>{project!.role}</span><h3>{project!.name}</h3><p>{project!.description}</p><ArrowUpRight size={18}/></Link>)}</div></section>
      <section className="expertise-tools"><p className="eyebrow">Technology</p><div>{expertise.technologies.map((item)=><span key={item}>{item}</span>)}</div></section>
    </div>
  </main>;
}
