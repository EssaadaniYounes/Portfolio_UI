import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
import Link from "next/link";

const experiences = [
    {
        company: "UNRWA",
        role: "Senior Software Engineer Consultant",
        meta: "Apr 2026 – Aug 2026 · Contract (concluded - program funding) · Remote (Luxembourg)",
        highlights: [
            "Co-designed an Azure digital archive architecture built to ingest and store 16M documents across five countries; 4M ingested to date",
            "Engineered an event-driven ingestion workflow using Node.js, Azure Functions, Queue Storage, Blob Storage, and Azure SQL",
            "Integrated Azure Document Intelligence and AI Search at 86%+ accuracy, limiting manual review to ~1 in 20 documents",
            "Built a Next.js human-review interface for validating and correcting extracted data",
            "Delivered a Fumadocs-based internal documentation portal for stakeholders and engineers",
        ],
    },
    {
        company: "DXC Technology",
        role: "Full Stack Engineer",
        meta: "Jan 2025 – Mar 2026 · Full-time · Remote (UK)",
        highlights: [
            "Developed modular Angular components for an enterprise insurance platform used by carriers, brokers, and operations teams",
            "Migrated application modules from Angular 10 to Angular 18 and refactored legacy code to modern Angular patterns",
            "Implemented route-level lazy loading to improve startup performance across complex insurance workflows",
            "Introduced Hot Module Replacement, replacing 8+ minute workflow replays with near-immediate UI feedback",
            "Integrated RxJS-based frontend workflows with APIs delivered through a microservices architecture",
        ],
    },
    {
        company: "Dropify",
        role: "Backend Engineer",
        meta: "Sep 2023 – Dec 2024 · Full-time · Remote (Morocco)",
        highlights: [
            "Built and scaled backend capabilities for a SaaS e-commerce platform serving 70K+ sellers (TypeScript, Node.js, Express)",
            "Accelerated storefront loads from 40+ seconds to under 4 seconds through MySQL optimization and Redis caching",
            "Raised PageSpeed scores to 97+ on mobile and 99 on desktop",
            "Designed an event-driven AI landing-page generation pipeline with RabbitMQ",
            "Implemented fingerprint-based fraud-risk detection to rank suspicious sessions",
            "Containerized backend services with Docker to standardize environments",
        ],
    },
    {
        company: "LoftyService",
        role: "Full Stack Engineer",
        meta: "Jul 2022 – Aug 2023 · Full-time · Marrakech, Morocco",
        highlights: [
            "Modernized an internal CRM supporting 90-120 employees and ~2,000 seller clients (React, Express, Node.js, TypeScript, MySQL)",
            "Reduced slow API response times by ~10-15 seconds through MySQL query and schema optimization",
            "Migrated legacy modules toward a maintainable architecture using SOLID principles and design patterns",
            "Introduced test-driven development and automated tests to prevent regressions",
            "Built finance, invoicing, reporting, authentication, authorization, and 2FA modules",
            "Implemented CI/CD pipelines that reduced release execution to under three minutes",
        ],
    },
    {
        company: "University Sultan Moulay Slimane",
        role: "Frontend Developer Intern",
        meta: "Mar 2022 – May 2022 · Internship · On-site",
        highlights: [
            "Built frontend features with Next.js and TypeScript",
        ],
    },
];

export default function Experiences() {
    return (
        <FramerWrapper>
            <h2 className={cn("text-6xl md:text-9xl font-bold uppercase")}>
                +4 years of <br /> <span className="text-[#b6b4bd33]">Experience</span>
            </h2>

            <div className={cn("space-y-4 mt-4")}>
                {experiences.map((experience) => (
                    <Link
                        key={experience.company}
                        href="#"
                        className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                    >
                        <div className="">
                            <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                                {experience.company}
                            </h3>
                            <p className="mt-2 text-gray-300 font-semibold text-base md:text-2xl">
                                {experience.role}
                            </p>

                            <ul className="mt-4 list-disc p-4
                   [&>li]:mt-2
                   [&>li]:text-gray-400
                   [&>li]:font-medium
                   [&>li]:text-sm
                   md:[&>li]:text-xl
                   tracking-wider">
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>

                            <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                                {experience.meta}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </FramerWrapper>
    )
}
