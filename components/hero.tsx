import { cn } from "@/lib/utils";
import { Layers, MoveRight } from "lucide-react";
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

            <div className="mt-12 flex gap-6 items-end">
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
                <div className="">
                    <Button className="mt-6 block w-60 bg-blue-500 hover:bg-blue-600">

                        Hire me
                    </Button>
                    <Button className="mt-6 w-60 bg-[#b6b4bd33] hover:bg-[#b6b4bd33]">Hire me</Button>
                </div>
            </div>
        </div>
    </FramerWrapper>;
};