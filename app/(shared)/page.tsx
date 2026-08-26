import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Mail } from "lucide-react";
import type { Metadata } from "next";
import SeoJsonLd from "@/components/seo-json-ld";
import Articles from "@/components/articles";

export const metadata: Metadata = {
  title: { absolute: "Younes Essaadani | Senior Full-Stack Engineer" },
  description: "Senior full-stack engineer specializing in backend architecture, AI systems, and high-performance web products.",
  alternates: { canonical: "/" },
};

const capabilities = [
  ["01", "Backend architecture", "Scalable APIs, event-driven systems, queues, caching, and data pipelines built for real operational load.", "coral"],
  ["02", "AI systems", "Production RAG, document intelligence, search, and LLM workflows that turn complex data into useful products.", "teal"],
  ["03", "Product engineering", "Responsive React, Next.js, and Angular interfaces—delivered end to end with quality, performance, and polish.", "yellow"],
];
const experience = [
  ["2026 — Now", "UNRWA", "Senior Software Engineer Consultant", "Azure archive architecture for 16M documents across five countries."],
  ["2025 — 2026", "DXC Technology", "Front-End Engineer", "Modernized enterprise insurance workflows from Angular 10 to 18."],
  ["2025", "Superintro", "Full-Stack Engineer / Technical Lead", "Led a 14-person team building an AI relationship-matching platform."],
  ["2023 — 2024", "Dropify", "Backend Engineer", "Scaled e-commerce infrastructure serving more than 70K sellers."],
  ["2022 — 2023", "Lofty", "Junior Full-Stack Engineer", "Modernized a CRM used by 90–120 staff and roughly 2,000 clients."],
];
const projects = [
  ["/images/projects/unrwa.png", "Intelligent digital archive", "Azure · Document AI · Next.js", "/unrwa/overview"],
  ["/images/projects/dxc.png", "Enterprise insurance modernization", "Angular 18 · RxJS · Microservices", "/dxc-technology/overview"],
  ["/images/projects/superintro.png", "AI relationship matching", "RAG · LangGraph · Next.js", "/superintro/overview"],
  ["/images/projects/dropify.png", "Commerce at scale", "Node.js · Redis · RabbitMQ", "/dropify/overview"],
  ["/images/projects/lofty.png", "Operations CRM", "React · Express · MySQL", "/lofty-service/overview"],
];

export default function Home() {
  return <main>
    <SeoJsonLd />
    <header className="site-header shell">
      <Link href="#top" className="wordmark" aria-label="Younes Essaadani, home">YE<span>.</span></Link>
      <nav aria-label="Primary navigation"><Link href="#work">Work</Link><Link href="#experience">Experience</Link><Link href="#writing">Writing</Link><Link href="#about">About</Link></nav>
      <a href="mailto:essaadani.yo@gmail.com" className="button button-dark">Let&apos;s talk <ArrowUpRight size={15} /></a>
    </header>

    <section id="top" className="hero shell">
      <div className="hero-copy"><p className="eyebrow">Senior full-stack engineer · Morocco</p><h1>I engineer digital products that <em>perform.</em></h1><p className="hero-intro">Backend architecture, AI systems, and thoughtful interfaces—built to solve hard problems at meaningful scale.</p><div className="hero-actions"><a href="mailto:essaadani.yo@gmail.com" className="button button-dark">Start a conversation <ArrowUpRight size={16} /></a><a href="/assets/pdfs/Younes_Essaadani_Resume.pdf" download className="text-link">Résumé <Download size={15} /></a></div></div>
      <div className="portrait-wrap"><div className="shape shape-coral" /><div className="shape shape-teal" /><div className="portrait-frame"><Image src="/images/younes-essaadani.png" alt="Portrait of Younes Essaadani" fill priority sizes="(max-width: 800px) 80vw, 38vw" /></div><span className="availability"><i /> Available for ambitious projects</span></div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to profile"><ArrowDownRight /></a>
    </section>

    <section className="proof-strip"><div className="shell proof-grid"><div><strong>16M</strong><span>document architecture</span></div><div><strong>70K+</strong><span>sellers served</span></div><div><strong>10×</strong><span>faster page loads</span></div><div><strong>4+ yrs</strong><span>shipping products</span></div></div></section>

    <section id="about" className="section shell"><div className="section-heading"><p className="eyebrow">What I do</p><h2>From complex systems to clear, reliable products.</h2></div><div className="capability-grid">{capabilities.map(([number,title,copy,color]) => <article className="capability" key={title}><div className={`cap-icon ${color}`}><span>{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section id="work" className="section section-tint"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Selected work</p><h2>Systems with measurable impact.</h2></div><p>Case studies from SaaS, AI, and operational platforms.</p></div><div className="projects-grid">{projects.map(([image,title,meta,href], index) => <Link href={href} className="project-card" key={title}><div className="project-image"><Image src={image} alt={`${title} project illustration`} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="project-info"><div><span>0{index+1}</span><h3>{title}</h3><p>{meta}</p></div><ArrowUpRight /></div></Link>)}</div></div></section>

    <section id="experience" className="section shell experience-section"><div className="section-heading"><p className="eyebrow">Experience</p><h2>Building across industries and borders.</h2></div><div className="experience-list">{experience.map(([date,company,role,detail]) => <article key={company}><p className="experience-date">{date}</p><div><h3>{company}</h3><p className="role">{role}</p></div><p className="experience-detail">{detail}</p></article>)}</div></section>

    <Articles />

    <section className="stack-section"><div className="shell stack-inner"><p className="eyebrow">Working toolkit</p><div className="stack-list">TypeScript <i /> Node.js <i /> Next.js <i /> Azure <i /> React <i /> LangGraph <i /> PostgreSQL <i /> Docker</div></div></section>

    <footer className="footer shell"><div><p className="eyebrow">Have a hard problem?</p><h2>Let&apos;s build something <em>useful.</em></h2></div><div className="footer-contact"><a href="mailto:essaadani.yo@gmail.com" className="button button-light"><Mail size={16} /> Get in touch</a><div><a href="https://linkedin.com/in/younes-essaadani" target="_blank" rel="me noreferrer">LinkedIn ↗</a><a href="https://github.com/EssaadaniYounes" target="_blank" rel="me noreferrer">GitHub ↗</a><a href="https://x.com/EssaadaniYounes" target="_blank" rel="me noreferrer">X ↗</a></div></div><p className="copyright">© {new Date().getFullYear()} Younes Essaadani · Senior Full-Stack Engineer</p></footer>
  </main>;
}
