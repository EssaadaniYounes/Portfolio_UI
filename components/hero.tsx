import { cn } from "@/lib/utils";
import { Layers, MoveRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
    weight: ["600", "500", "700", "800"],
    subsets: ["latin-ext"],
    display: "swap",
})
export const Hero = () => {
    return <div className="">
        <h1 className={cn("text-6xl md:text-9xl font-bold uppercase", poppins.className)}>
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
                <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase", poppins.className)}>
                    years of <br /> experience
                </p>
            </div>
            <div>
                <span className="text-2xl md:text-8xl font-bold">
                    +36
                </span>
                <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase", poppins.className)}>
                    Projects <br /> completed
                </p>
            </div>
            <div>
                <span className="text-2xl md:text-8xl font-bold">
                    +6
                </span>
                <p className={cn("text-[#998f8f] text-sm md:text-lg leading-relaxed uppercase", poppins.className)}>
                    Companies
                </p>
            </div>
        </div>

        <div className="mt-12">
            <div className="relative p-6 w-[350px] h-[220px]">
                <Image src={'/assets/svgs/wave-1.svg'} alt="profile" width={350} height={180} className={'rounded-md absolute inset-0 -z-10'} />
                <Layers size={32} />
                <h4 className={cn("text-3xl font-light uppercase mt-6", poppins.className)}>
                    Scalable projects
                </h4>
                <Link href={'/experience'} className="absolute right-5 bottom-0 border rounded-lg p-1.5 px-2">
                    <MoveRight size={32} className="" />
                </Link>
            </div>
        </div>
    </div>;
};