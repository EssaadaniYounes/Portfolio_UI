import { cn } from "@/lib/utils";
import { Layers, MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import FramerWrapper from "./providers/framer-wrapper";

export const Hero = () => {
    return <FramerWrapper>
        <div className="">
            <h1 className={cn("text-6xl md:text-9xl font-bold uppercase")}>
                Software <br /> <span className="text-[#b6b4bd33]">Engineer</span>
            </h1>
            <p className="mt-6 text-[#998f8f] font-semibold text-xl leading-relaxed md:text-start">
                I design and build scalable SaaS and AI-powered systems with a focus <br />
                on clarity, performance, and long-term maintainability.
            </p>

            <div className="mt-12 flex items-start justify-start gap-10">
                <div>
                    <span className="text-2xl md:text-8xl font-bold">
                        +3
                    </span>
                    <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase")}>
                        years of <br /> experience
                    </p>
                </div>
                <div>
                    <span className="text-2xl md:text-8xl font-bold">
                        +36
                    </span>
                    <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase")}>
                        Projects <br /> completed
                    </p>
                </div>
                <div>
                    <span className="text-2xl md:text-8xl font-bold">
                        +6
                    </span>
                    <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase")}>
                        Companies
                    </p>
                </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-6 md:items-end">
                <div className="relative p-6 w-[350px] h-[220px]">
                    <Image src={'/assets/svgs/wave-1.svg'} alt="profile" width={350} height={180} className={'rounded-md absolute inset-0 -z-10'} />
                    <Layers size={32} />
                    <span className={cn("text-3xl font-light uppercase mt-6")}>
                        Scalable projects
                    </span>
                    <Link aria-label="See my experience" href={'/experience'} className="absolute right-5 bottom-0 border rounded-lg p-1.5 px-2">
                        <MoveRight size={32} className="" />
                    </Link>
                </div>
                <div className="mt-6 flex md:flex-col gap-4 w-80 md:w-60">
                    <Link
                        href="#booking"
                        className="w-full group relative inline-flex items-center justify-center h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.55)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span className="mr-2">Book a call</span>
                        <MoveRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <Link
                        href="/#contact"
                        className="w-full inline-flex items-center justify-center h-12 rounded-xl border border-white/15 bg-white/5 text-white/80 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                        <span className="mr-2">Contact me</span>
                        <PhoneCall
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </div>
    </FramerWrapper>;
};