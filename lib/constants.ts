import {
  Article,
  Experience,
  MenuLink,
  Project,
  Skill,
  SocialLink,
} from "@/types";
import { DiDocker, DiPostgresql } from "react-icons/di";
import {
  FaFacebookSquare,
  FaGit,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaPhp, FaSquareGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GrCss3, GrMysql } from "react-icons/gr";
import { LiaHtml5 } from "react-icons/lia";
import { RiJavascriptLine, RiMediumLine } from "react-icons/ri";
import {
  SiExpress,
  SiGraphql,
  SiMongoose,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandLinkedin,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTypescript,
} from "react-icons/tb";

// export const PROJECTS: Project[] = [
//   {
//     name: "Lofty Service CRM",
//     description:
//       "A platform to help lofty team manage their client's orders, sourcing, invoicicng, payments, etc.",
//     technologies: [
//       "Laravel",
//       "Redis",
//       "VueJs2",
//       "MySQL",
//       "S3",
//       "Laravel Vapor",
//     ],
//     imageUrl: "/images/lofty.png",
//     url: "https://app.loftyservice.com/",
//   },
//   {
//     name: "PersonaNet",
//     description:
//       "A social media platfrom that allows users to engage 24/7 with other people without having to connect their persona will do the work for them.",
//     technologies: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Tailwind CSS",
//       "Firebase",
//     ],
//     imageUrl: "/images/PersonaNET.png",
//     url: "https://personanet.app/",
//   },
//   {
//     name: "School Portal",
//     description:
//       "A school management system that allows users to manage their school, students, teachers, payments, etc.",
//     technologies: [
//       "Laravel",
//       "ReactJs",
//       "Redis",
//       "MySql",
//       "Passport",
//       "Firebase storage",
//     ],
//     imageUrl: "/images/SchoolManagment.png",
//   },

//   {
//     name: "Portfolio Maker",
//     description:
//       "A portfolio maker that allows users to create their own portfolio with their projects and skills by filling forms and choosing the template.",
//     technologies: ["NextJs", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//     imageUrl: "/images/ProtfolioMaker.png",
//   },
// ];

// export const EXPERIENCES: Experience[] = [
//   {
//     company: "Lofty Service",
//     jobTitle: "Full Stack Developer",
//     location: "Marrakech, Morocco",
//     startDate: "May 2024",
//     endDate: "Present",
//     description: [
//       "Developed a comprehensive e-commerce Customer Relationship Management (CRM) system",
//       "Implemented MySQL for efficient data storage and management",
//       "Developed responsive front-end using Vue.js and Bootstrap for improved user experience",
//       "Implemented Two Factor Authentication with Google Authenticator",
//       "Optimised slow-performing database queries and Implemented database indexing, resulting in a 60% improvement in overall system performance",
//       "Led initiative to refactor existing codebase, implementing SOLID principles, And design patterns",
//       "Collaborated with finance, sourcing department team to develop and integrate a comprehensive finance, sourcing modules",
//       "Conducted regular code reviews using Bitbucket pull request feature",
//       "Lead a drop shipping module making sure all features are well developed and following best practices",
//       "Implemented logging and monitoring solutions to track system performance",
//       "Collaborated with UX/UI designers, QA team to improve user experience and app stability",
//       "Participated in sprint planning and retrospectives to continuously improve development processes",
//       "Shared knowledge with team members through internal training sessions",
//     ],
//   },
//   {
//     company: "AfterFlea OS Conversational AI",
//     jobTitle: "Full Stack Developer",
//     location: "San Francisco, Remote",
//     startDate: "August 2023",
//     endDate: "May 2024",
//     description: [
//       "Spearheaded the development of a persona-based social media application using the MERN stack, facilitating personalized connections and matchings.",
//       " Employed containerization with Docker, streamlining deployment processes and ensuring consistency acrossenvironments.",
//       " Implemented a Test-Driven Development (TDD) approach, writing comprehensive unit and integration tests to ensure the reliability and stability of the application.",
//       " Managed project versioning and collaboration using Git and GitHub, maintaining a well-organized and documented codebase for efficient team collaboration and code review.",
//       " Mentored and trained 4 interns, providing guidance and support to enhance their technical skills and knowledge in web development.",
//       " Proposed the project architecture making sure the app can scale and maintain easily.",
//       "Collabored with the desginers team to ensure the design and user experience of the app was well-structured and user-friendly.",
//     ],
//   },
//   {
//     company: "GM-Soft",
//     jobTitle: "Backend Developer",
//     location: "Beni Mellal, Morocco (Hybrid)",
//     startDate: "Januray 2023",
//     endDate: "August 2023",
//     description: [
//       `Developed a comprehensive school management system using Java and Spring Boot, encompassing student management, attendance
// tracking, and grade management functionalities.`,
//       `
// Collaborated with frontend developers to integrate backend
// services with the Angular frontend, ensuring seamless
// communication and user interaction.`,
//       `
// Implemented caching mechanisms using Redis to optimize data
// retrieval and improve application performance, enhancing
// scalability and responsiveness.`,
//       `
// Engineered scheduling algorithms for efficient session
// management, ensuring optimal resource allocation and
// maximizing system throughput.`,
//       `
// Integrated JSON Web Token (JWT) authentication with Spring
// Security, fortifying application security and protecting sensitive
// data.`,
//       `Leveraged Firebase for file storage, enabling secure and scalable
// storage solutions for documents and media assets.`,
//     ],
//   },
//   {
//     company: "Molay soultan solayman university",
//     jobTitle: "Frontend Developer Intern",
//     location: "Beni Mellal, Morocco",
//     startDate: "March 2022",
//     endDate: "May 2022",
//     description: [
//       "completed an internship where I served as a front-end developer, contributing to the redesign of the university's UI.",
//       "Utilized Next.js and TypeScript to create a modern, responsive, and userfriendly interface. Implemented Tailwind CSS for efficient styling, ensuring a seamless and visually appealing experience for users",
//       "Integrated with existing APIs to enable students to access their information, exam schedules, and other relevant data. Demonstrated proficiency in front-end technologies and a keen eye for UI/UX design principles.",
//     ],
//   },
// ];

export const SKILLS: Skill[] = [
  {
    name: "Laravel",
    icon: FaLaravel,
  },
  {
    name: "PHP",
    icon: FaPhp,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express Js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: TbBrandMongodb,
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
  },
  {
    name: "HTML",
    icon: LiaHtml5,
  },
  {
    name: "CSS",
    icon: GrCss3,
  },
  {
    name: "Javascript",
    icon: RiJavascriptLine,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "MySQL",
    icon: GrMysql,
  },
  {
    name: "PostgresSQL",
    icon: DiPostgresql,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "ShadCn",
    icon: SiShadcnui,
  },
  {
    name: "Git",
    icon: FaGit,
  },
  {
    name: "Github",
    icon: FiGithub,
  },
  {
    name: "Docker",
    icon: DiDocker,
  },
  {
    name: "Firebase",
    icon: TbBrandFirebase,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    name: "Prisma",
    icon: TbBrandPrisma,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/younes-essaadani",
    icon: TbBrandLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/EssaadaniYounes",
    icon: FiGithub,
  },
  {
    name: "Medium",
    url: "https://medium.com/@essaadani.yo",
    icon: RiMediumLine,
  },
];

const LEGACY_ARTICLES = [
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WYM1WgyXLzwPYjdvuzzC9w.png",
    title: "Memory Leaks in React & Next.js: What Nobody Tells You",
    description:
      "If you’ve built a React or Next.js app, you’ve probably noticed something strange: your page feels smooth at first, but after a while, interactions start to lag. CPU usage climbs. Sometimes, your browser tab just eats more memory than it should.",
    url: "https://medium.com/@essaadani.yo/memory-leaks-in-react-next-js-what-nobody-tells-you-91c72b53d84d",
  },
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*aBo9Zj7mczfnIde4RkeMAg.png",
    title: "Program to interface NOT implementation",
    description:
      "Program to an Interface, Not an Implementation is a fundamental software design principle that enhances flexibility and maintainability. By coding to interfaces rather than specific implementations, developers decouple systems from their dependencies, making the code more modular, testable, and scalable. This approach aligns with key design principles like the Open/Closed Principle, allowing systems to be easily extended without altering existing code. In this article, we’ll explore how this principle works and why it’s essential for building robust software.",
    url: "https://medium.com/@essaadani.yo/program-to-interface-not-implementation-29154de5c5b4",
  },
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*vtejEEwfdNA7sbOMYVuilw.jpeg",
    title: "Laravel Design patterns: #Strategy",
    description:
      "In software development, design patterns and principles are essential tools that enable developers to write clean, maintainable, and scalable code. Among these, the Strategy Design Pattern stand out for it’s ability to enhance the flexibility and robustness of applications. This article explores how to implement the Strategy Design Pattern in Laravel while adhering to the Open/Closed Principle.",
    url: "https://medium.com/@essaadani.yo/laravel-design-patterns-strategy-4320b4479844",
  },
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_J5Kt_MOFXMe53JyOpIQ-w.png",
    title: "Design Patterns in Laravel #Service",
    description:
      "In the landscape of modern web development, design patterns play a crucial role in crafting maintainable, scalable, and efficient applications. Among these patterns, the Service Design Pattern is particularly popular in the Laravel ecosystem, offering a clean separation of concerns and promoting reusability. This article explores the Service Design Pattern in the context of Laravel, highlighting its benefits, implementation, and best practices.",
    url: "https://medium.com/@essaadani.yo/design-patterns-in-laravel-service-76645d7afe19",
  },
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/1*ty42wOKdun7WRnAZhmuhEQ.png",
    title: "Improve your application performance : NodeJs and Redis",
    description:
      "Are you tired of waiting for your data to be retrieved from the database every time a request hits your server? Opening connections, executing queries — it can slow down your application. But what if there was a way to bypass all that?",
    url: "https://medium.com/@essaadani.yo/improve-your-application-performance-nodejs-and-redis-ed90cbce0763",
  },
  {
    thumbnail:
      "	https://miro.medium.com/v2/resize:fit:786/format:webp/1*DVEiFluXcSZ05JIUWMrWRg.png",
    title: "Laravel : Custom properties in your pagination response",
    description:
      "In some cases you want to add custom properties to your pagination response in laravel but ",
    url: "https://medium.com/@essaadani.yo/laravel-custom-properties-in-your-pagination-response-bb0e8739f1e8",
  },
];

export const ARTICLES: Article[] = [
  { title: "Protect your app under high load with RabbitMQ", description: "Why queues protect Node.js APIs from traffic spikes by moving slow work out of the request lifecycle—and when that added complexity is justified.", url: "https://medium.com/@essaadani.yo/protect-your-app-under-high-load-with-rabbitmq-7ed01a43248b", publishedAt: "Feb 5, 2026", category: "Backend systems", readTime: "4 min read" },
  { title: "Memory Leaks in React & Next.js: What Nobody Tells You", description: "A practical guide to timers, async calls, event listeners, and large state objects that silently keep React components alive after unmounting.", url: "https://medium.com/@essaadani.yo/memory-leaks-in-react-next-js-what-nobody-tells-you-91c72b53d84d", publishedAt: "Jan 21, 2026", category: "React performance", readTime: "3 min read" },
  { title: "Program to interface NOT implementation", description: "How coding against contracts instead of concrete implementations creates systems that are easier to extend, test, and maintain.", url: "https://medium.com/@essaadani.yo/program-to-interface-not-implementation-29154de5c5b4", publishedAt: "Aug 13, 2024", category: "Software design" },
  { title: "Laravel Design patterns: #Strategy", description: "A payment-processing example showing how the Strategy pattern encapsulates interchangeable behavior in a Laravel application.", url: "https://medium.com/@essaadani.yo/laravel-design-patterns-strategy-4320b4479844", publishedAt: "Aug 7, 2024", category: "Laravel", readTime: "4 min read" },
  { title: "Design Patterns in Laravel #Service", description: "Using service classes to separate business logic, reduce controller complexity, and make Laravel applications easier to reuse and test.", url: "https://medium.com/@essaadani.yo/design-patterns-in-laravel-service-76645d7afe19", publishedAt: "Jul 31, 2024", category: "Laravel" },
  { title: "Laravel: Custom properties in your pagination response", description: "A focused Laravel technique for attaching useful custom metadata when the default pagination response is not enough.", url: "https://medium.com/@essaadani.yo/laravel-custom-properties-in-your-pagination-response-bb0e8739f1e8", publishedAt: "May 22, 2024", category: "Laravel" },
  { title: "Improve your application performance: Node.js and Redis", description: "A hands-on introduction to caching frequently requested data with Redis, Express, Node.js, and Docker to reduce database work and response time.", url: "https://medium.com/@essaadani.yo/improve-your-application-performance-nodejs-and-redis-ed90cbce0763", publishedAt: "May 1, 2024", category: "Backend performance", readTime: "4 min read" },
];

export const MENU_LINKS: MenuLink[] = [
  {
    title: "Home",
    url: "/#home",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Projects",
    url: "/#projects",
  },
  {
    title: "Experience",
    url: "/#experience",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];


export type ProjectV2 = {
  slug: string;
  name: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics?: string[];
};

export const projects: ProjectV2[] = [
  {
    slug: "unrwa",
    name: "UNRWA Digital Archive",
    role: "Senior Software Engineer Consultant",
    period: "Apr 2026 – Present",
    location: "Remote · Luxembourg",
    description:
      "An Azure-based digital archive designed to ingest, classify, store, and retrieve 16 million documents across five countries.",
    highlights: [
      "Co-designed the event-driven archive architecture and country-by-country rollout",
      "Built ingestion workflows with Node.js, Azure Functions, queues, blob storage, and Azure SQL",
      "Integrated Azure Document Intelligence and AI Search for classification and retrieval",
      "Built a Next.js human-review interface for validating extracted data",
      "Delivered an internal documentation portal for stakeholders and engineers",
    ],
    stack: ["Next.js", "Node.js", "Azure Functions", "Azure SQL", "Blob Storage", "Queue Storage", "AI Search", "Document Intelligence"],
    metrics: ["16M-document architecture", "4M documents ingested", "86%+ extraction accuracy", "Five-country rollout"],
  },
  {
    slug: "dxc-technology",
    name: "DXC Enterprise Insurance Platform",
    role: "Front-End Engineer",
    period: "Jul 2025 – Mar 2026",
    location: "Remote · United Kingdom",
    description:
      "A modular enterprise insurance platform supporting carriers, brokers, and technical operations teams.",
    highlights: [
      "Developed modular Angular components for complex insurance workflows",
      "Migrated application modules from Angular 10 to Angular 18",
      "Implemented route-level lazy loading to improve startup performance",
      "Introduced Hot Module Replacement for near-immediate UI feedback",
      "Integrated RxJS workflows with APIs delivered through a microservices architecture",
    ],
    stack: ["Angular 18", "TypeScript", "RxJS", "Microservices", "REST APIs", "HMR", "Lazy Loading"],
    metrics: ["Angular 10 → 18 migration", "8+ minute workflow replays eliminated", "Faster frontend iteration"],
  },
  {
    slug: "superintro",
    name: "SuperIntro",
    role: "Full Stack Engineer",
    period: "Jan 2025 – Jun 2025",
    location: "Remote · US-based startup",
    description:
      "An AI-powered relationship and networking platform that automatically matches users, assigns them to events, and enables meaningful conversations.",
    highlights: [
      "Led development of AI-powered matcher using LangChain, MERN & TypeScript",
      "Designed RAG pipelines → improved match accuracy by 30%",
      "Migrated frontend to Next.js 15 → boosted SEO & organic traffic",
      "Implemented Stripe subscriptions with multi-tier plans",
      "Set up multi-environment deployments on GCP Cloud Run",
      "Coordinated a small dev team on planning and delivery",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "LangChain",
      "Stripe",
      "GCP",
    ],
    metrics: ["+30% match accuracy", "SEO growth", "Production-scale AI"],
  },

  {
    slug: "dropify",
    name: "Dropify",
    role: "Backend Engineer",
    period: "Sep 2023 – Dec 2024",
    location: "Morocco",
    description:
      "A SaaS e-commerce platform focused on AI-driven product ranking, landing page generation, and conversion optimization.",
    highlights: [
      "Built full SaaS platform using TypeScript, React, Node & Tailwind",
      "Implemented GPT-4o Vision pipeline → improved product ranking by 20%",
      "Developed AI landing page builder → increased higher-tier subscriptions",
      "Refactored frontend lifecycle → achieved 99 PageSpeed score",
      "Added WhatsApp broadcasting & geo-pricing → improved conversions by 15%",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind",
      "Laravel",
      "MySQL",
      "OpenAI",
    ],
    metrics: ["+20% recommendations", "+15% conversions", "99 PageSpeed"],
  },

  {
    slug: "lofty-service",
    name: "Lofty Service",
    role: "Junior Full-Stack Engineer",
    period: "Jul 2022 – Aug 2023",
    location: "Morocco",
    description:
      "A CRM system built for sellers, featuring finance, invoicing, reporting, and performance optimization.",
    highlights: [
      "Developed CRM using Laravel & React",
      "Built finance, invoicing, and reporting modules",
      "Refactored Dashboard API → faster reporting",
      "Optimized DB queries → improved performance by 60%",
      "Applied SOLID principles & design patterns for maintainability",
    ],
    stack: ["Laravel", "React", "MySQL", 'Docker', 'Spatie multi-tenancy', "REST APIs"],
    metrics: ["+60% performance", "Cleaner architecture"],
  },
];
