'use client'
import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
import Image from "next/image";
export default function Stacks() {
    return (
        <FramerWrapper>
            <h1 className={cn("text-6xl md:text-9xl font-bold uppercase")}>
                Skills & <br /> <span className="text-[#b6b4bd33]">Tools</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-12 pl-4">
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/nextjs.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Nextjs</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            React framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/nest.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Nestjs</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            Node framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/laravel.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Laravel</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            PHP framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/langchain.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Langchain</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            AI framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/postgresql.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>PostgreSQL</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            Database
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/docker.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Docker</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            Containerization
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/tailwindcss.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>TailwindCSS</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            CSS framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/stripe.svg'} loading="lazy" alt="profile" width={65} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <span className={cn("text-xl md:text-3xl font-semibold text-white")}>Stripe</span>
                        <span className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase block")}>
                            Payment gateway
                        </span>
                    </div>
                </div>
            </div>
        </FramerWrapper>
    );
}
