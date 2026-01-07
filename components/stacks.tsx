'use client'
import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
const poppins = Poppins({
    weight: ["600", "500", "700", "800"],
    subsets: ["latin-ext"],
    display: "swap",
})



export default function Stacks() {
    return (
        <FramerWrapper>
            <h1 className={cn("text-6xl md:text-9xl font-bold uppercase", poppins.className)}>
                Skills & <br /> <span className="text-[#b6b4bd33]">Tools</span>
            </h1>
            <div className="grid grid-cols-2 gap-4 md:gap-12 mt-12 md:ml-4">
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/nextjs.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Nextjs</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            React framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/nest.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Nestjs</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            Node framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/laravel.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Laravel</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            PHP framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/langchain.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Langchain</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            AI framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/postgresql.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>PostgreSQL</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            Database
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/docker.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Docker</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            Containerization
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/tailwindcss.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>TailwindCSS</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            CSS framework
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <Image src={'/assets/svgs/stripe.svg'} alt="profile" width={90} height={100} className={'p-2 rounded-md bg-white'} />
                    <div className="space-y-2">
                        <h5 className={cn("text-3xl font-bold  text-white", poppins.className)}>Stripe</h5>
                        <span className={cn("text-[#998f8f] text-lg leading-relaxed uppercase block", poppins.className)}>
                            Payment gateway
                        </span>
                    </div>
                </div>
            </div>
        </FramerWrapper>
    );
}
