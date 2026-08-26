export type ExpertisePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  capabilities: string[];
  proof: { value: string; label: string }[];
  relatedProjects: string[];
  technologies: string[];
};

export const expertisePages: ExpertisePage[] = [
  {
    slug: "backend-engineering",
    title: "Backend Engineering for High-Scale Products",
    shortTitle: "Backend engineering",
    description: "Node.js backend architecture, event-driven systems, caching, queues, APIs, and database performance from senior full-stack engineer Younes Essaadani.",
    intro: "I design backend systems around predictable request paths, explicit failure boundaries, observable workflows, and data models that remain workable as products grow.",
    capabilities: ["REST and GraphQL API architecture", "Event-driven workflows and background processing", "Database query and schema optimization", "Redis caching and performance tuning", "WebSockets and real-time product features", "Containerized delivery and CI/CD"],
    proof: [{ value: "70K+", label: "sellers served" }, { value: "40s → <4s", label: "storefront load improvement" }, { value: "<3 min", label: "deployment execution" }],
    relatedProjects: ["dropify", "lofty-service", "superintro"],
    technologies: ["TypeScript", "Node.js", "Express", "NestJS", "RabbitMQ", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Docker"],
  },
  {
    slug: "ai-systems",
    title: "Production AI and RAG Systems",
    shortTitle: "AI systems",
    description: "Production RAG, LangGraph, Azure OpenAI, document intelligence, AI Search, and human-review workflows built by Younes Essaadani.",
    intro: "I build AI features as operational systems: retrieval and orchestration, measurable quality, asynchronous processing, human review, and interfaces that make automation controllable.",
    capabilities: ["RAG pipeline architecture", "LangChain and LangGraph orchestration", "Azure OpenAI integration", "Document classification and extraction", "AI Search and record retrieval", "Human-in-the-loop validation interfaces"],
    proof: [{ value: "16M", label: "document architecture" }, { value: "86%+", label: "extraction accuracy" }, { value: "~30%", label: "matching relevance improvement" }],
    relatedProjects: ["unrwa", "superintro", "dropify"],
    technologies: ["LangChain", "LangGraph", "Azure OpenAI", "OpenAI API", "Azure AI Search", "Document Intelligence", "Next.js", "Node.js"],
  },
  {
    slug: "nodejs-consulting",
    title: "Node.js Architecture and Performance Consulting",
    shortTitle: "Node.js consulting",
    description: "Node.js consulting for scalable APIs, Redis caching, RabbitMQ workflows, database optimization, and production reliability.",
    intro: "I help teams find the actual constraint in Node.js systems—request-path work, database access, external dependencies, or deployment design—and improve it with evidence rather than premature complexity.",
    capabilities: ["API and architecture reviews", "Latency and query diagnosis", "Redis caching strategies", "RabbitMQ worker design", "Fraud-risk and background-processing systems", "Docker and production deployment"],
    proof: [{ value: "10×", label: "faster critical pages" }, { value: "99", label: "desktop PageSpeed" }, { value: "70K+", label: "seller platform" }],
    relatedProjects: ["dropify", "lofty-service", "superintro"],
    technologies: ["Node.js", "TypeScript", "Express", "RabbitMQ", "Redis", "MySQL", "MongoDB", "Docker", "GCP Cloud Run"],
  },
  {
    slug: "azure-document-intelligence",
    title: "Azure Document Intelligence Architecture",
    shortTitle: "Azure document AI",
    description: "Azure document-processing architecture using Functions, Queue Storage, Blob Storage, SQL, AI Search, and human review.",
    intro: "I design document-processing pipelines that separate ingestion, extraction, classification, storage, retrieval, and review so each stage can scale and fail independently.",
    capabilities: ["Event-driven document ingestion", "Azure Functions and Queue Storage", "Blob and structured metadata storage", "Document Intelligence extraction", "AI Search retrieval", "Next.js human-review workflows"],
    proof: [{ value: "16M", label: "documents in target architecture" }, { value: "4M", label: "documents ingested" }, { value: "5", label: "countries in rollout" }],
    relatedProjects: ["unrwa"],
    technologies: ["Azure Functions", "Queue Storage", "Blob Storage", "Azure SQL", "Document Intelligence", "AI Search", "Node.js", "Next.js"],
  },
];
