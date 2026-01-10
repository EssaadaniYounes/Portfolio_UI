import { Facebook, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
export function LeftSideCard() {
    return <FramerWrapper>
        <div className={cn("bg-white rounded-lg relative p-12 overflow-hidden flex flex-col items-center justify-center")}>

            <Image src="/assets/svgs/semi-circle-dots.svg" alt="profile" width={250} height={100} className="absolute -left-20 top-0" />
            <Image src="/assets/svgs/circle-with-fire.svg" alt="profile" width={250} height={100} className="absolute -left-32 bottom-[20%] -rotate-[0deg]" />
            <Image src={'/images/me.webp'} fetchPriority="high" loading="eager" alt="profile" width={300} height={250} className={'rounded-md'} />
            <h1 className="text-4xl my-2 font-extrabold capitalize text-gray-800 tracking-wider">
                Essaadani Younes
            </h1>
            <p className="mt-12 text-gray-500 font-medium text-lg max-w-sm">
                I build SaaS products and AI systems that actually ship, for Agencies, Founders & Startups.
            </p>

            <div className="flex gap-6 mt-12">
                <a href="https://www.linkedin.com/in/younes-essaadani/" target="_blank" aria-label="My Linkedin">
                    <LinkedinIcon fill="#334df5ff" size={32} />
                </a>
                <a href="https://web.facebook.com/essaadani.younes.2025" target="_blank" aria-label="My Facebook">
                    <Facebook fill="#334df5ff" size={32} />
                </a>
                <a href="https://www.instagram.com/ka.mugiwara/" target="_blank" aria-label="My Instagram">
                    <InstagramIcon fill="#334df5ff" size={32} />
                </a>
                <a href="https://x.com/EssaadaniYounes" target="_blank" aria-label="My Twitter">
                    <TwitterIcon fill="#334df5ff" size={32} />
                </a>
                <a href="https://github.com/EssaadaniYounes" target="_blank" aria-label="My Twitter">
                    <GithubIcon fill="#334df5ff" size={32} />
                </a>
            </div>
        </div>
    </FramerWrapper>
}