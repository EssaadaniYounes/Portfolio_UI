import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
import Link from "next/link";
export default function Experiences() {
    return (
        <FramerWrapper>
            <h2 className={cn("text-6xl md:text-9xl font-bold uppercase")}>
                +3 years of <br /> <span className="text-[#b6b4bd33]">Experience</span>
            </h2>

            <div className={cn("space-y-4 mt-4")}>
                <Link
                    href="#"
                    className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                >
                    <div className="">
                        <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                            ICOS
                        </h3>

                        <ul className="mt-4 list-disc [&>li]:mt-2 p-4 [&>li]:text-gray-400 [&>li]:font-medium  [&>li]:text-sm md:[&>li]:text-xl tracking-wider">
                            <li>Built a production-grade Angular claims system</li>
                            <li>Improved performance with lazy loading and async patterns</li>
                            <li>Implemented centralized state management and CI/CD workflows</li>
                        </ul>

                        <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                            Jul 2025 – Present · Freelancer · Remote (UK)
                        </span>
                    </div>
                </Link>
                <Link
                    href="#"
                    className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                >
                    <div className="">
                        <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                            SuperIntro
                        </h3>

                        <ul className="mt-4 list-disc p-4
                   [&>li]:mt-2
                   [&>li]:text-gray-400
                   [&>li]:font-medium
                   [&>li]:text-sm
                   md:[&>li]:text-xl
                   tracking-wider">
                            <li>Led development of an AI-powered relationship matching system (LangChain, MERN, TypeScript)</li>
                            <li>Designed RAG pipelines, increasing match accuracy by ~30%</li>
                            <li>Migrated frontend to Next.js 15, improving SEO and organic traffic</li>
                            <li>Built multi-environment deployments on GCP Cloud Run</li>
                            <li>Implemented subscription-based billing using Stripe and Stripe CLI</li>
                        </ul>

                        <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                            Nov 2024 – Present · Part-time · Remote (US)
                        </span>
                    </div>
                </Link>
                <Link
                    href="#"
                    className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                >
                    <div className="">
                        <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                            Dropify.shop
                        </h3>

                        <ul className="mt-4 list-disc p-4
                   [&>li]:mt-2
                   [&>li]:text-gray-400
                   [&>li]:font-medium
                   [&>li]:text-sm
                   md:[&>li]:text-xl
                   tracking-wider">
                            <li>Built and scaled a SaaS e-commerce platform (TypeScript, React, Tailwind, Node, Express + Laravel)</li>
                            <li>Implemented GPT-4o vision pipeline for product ranking, improving recommendations by 20%</li>
                            <li>Developed AI-powered landing page builder, increasing higher-tier subscriptions</li>
                            <li>Refactored frontend and optimized lifecycle requests, achieving a 99 PageSpeed score</li>
                            <li>Added WhatsApp broadcasting and geo-based pricing, boosting conversions by 15%</li>
                        </ul>

                        <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                            Dec 2024 – Jul 2025 · Full-time · Morocco
                        </span>
                    </div>
                </Link>
                <Link
                    href="#"
                    className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                >
                    <div className="">
                        <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                            Lofty Service
                        </h3>

                        <ul className="mt-4 list-disc p-4
                   [&>li]:mt-2
                   [&>li]:text-gray-400
                   [&>li]:font-medium
                   [&>li]:text-sm
                   md:[&>li]:text-xl
                   tracking-wider">
                            <li>Developed a full-featured CRM using Laravel and React</li>
                            <li>Built finance, invoicing, and reporting modules for internal operations</li>
                            <li>Refactored dashboard APIs, significantly improving reporting speed</li>
                            <li>Optimized database queries, boosting performance by ~60%</li>
                            <li>Applied SOLID principles and design patterns to improve maintainability</li>
                        </ul>

                        <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                            May 2024 – Dec 2024 · Full-time · Morocco
                        </span>
                    </div>
                </Link>
                <Link
                    href="#"
                    className="group relative flex items-start p-4 md:p-10 rounded-xl cursor-pointer
             hover:bg-[#b6b4bd0b] transition-colors duration-150"
                >
                    <div className="">
                        <h3 className="text-2xl md:text-5xl font-bold tracking-wider">
                            SuperIntro
                        </h3>

                        <ul className="mt-4 list-disc p-4
                   [&>li]:mt-2
                   [&>li]:text-gray-400
                   [&>li]:font-medium
                   [&>li]:text-sm
                   md:[&>li]:text-xl
                   tracking-wider">
                            <li>Built the first production version of the platform using the MERN stack</li>
                            <li>Implemented global state management with Zustand and lazy-loaded features</li>
                            <li>Developed real-time chat using WebSockets</li>
                            <li>Integrated OAuth-based authentication flows</li>
                            <li>Deployed using Docker on GCP with automated testing (Jest, React Testing Library)</li>
                        </ul>

                        <span className="mt-4 block w-fit text-gray-500 font-semibold text-sm md:text-lg">
                            Aug 2023 – May 2024 · Full-time · Remote (US)
                        </span>
                    </div>
                </Link>

            </div>
        </FramerWrapper>
    )
}