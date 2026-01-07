import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import FramerWrapper from "./providers/framer-wrapper";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
const poppins = Poppins({
    weight: ["600", "500", "700", "800"],
    subsets: ["latin-ext"],
    display: "swap",
})
export default function RecentProjects() {
    return <FramerWrapper>
        <h1 className={cn("text-6xl md:text-9xl font-bold uppercase", poppins.className)}>
            Recent <br /> <span className="text-[#b6b4bd33]">Projects</span>
        </h1>

        <div className="space-y-4 mt-4">
            <Link href="https://superintro.me" className="relative flex items-start p-2 gap-4 md:gap-10 md:p-10 hover:bg-[#b6b4bd0b] duration-100 rounded-xl cursor-pointer group">
                <Image src={'/images/superintro.png'} alt="profile" width={120} height={200} className={'rounded-md'}/>
                <div className="">
                    <h2 className="text-2xl font-bold">Superintro</h2>
                    <p className="mt-2 text-gray-500 font-medium text-sm md:text-lg max-w-sm">
                        A AI platform for matching <br /> and connecting people.
                    </p>
                </div>
                <span className="absolute right-4 top-8 group-hover:translate-x-2 group-hover:-translate-y-2 duration-150 ease-out">
                    <MoveUpRight size={32} color="#334df5ff"/>
                </span>
            </Link>
            <Link href="https://dropify.shop" className="relative flex items-start p-2 gap-4 md:gap-10 md:p-10 hover:bg-[#b6b4bd0b] duration-100 rounded-xl cursor-pointer group">
                <Image src={'/images/dropify.png'} alt="profile" width={120} height={200} className={'rounded-md'}/>
                <div className="">
                    <h2 className="text-2xl font-bold">Dropify.shop</h2>
                    <p className="mt-2 text-gray-500 font-medium text-sm md:text-lg max-w-sm">
                        A SaaS platform for <br /> managing e-commerce stores.
                    </p>
                </div>
                <span className="absolute right-4 top-8 group-hover:translate-x-2 group-hover:-translate-y-2 duration-150 ease-out">
                    <MoveUpRight size={32} color="#334df5ff"/>
                </span>
            </Link>
            <Link href="https://loftyservice.com" className="relative flex items-start p-2 gap-4 md:gap-10 md:p-10 hover:bg-[#b6b4bd0b] duration-100 rounded-xl cursor-pointer group">
                <Image src={'/images/lofty.png'} alt="profile" width={120} height={200} className={'rounded-md'}/>
                <div className="">
                    <h2 className="text-2xl font-bold">Lofty service</h2>
                    <p className="mt-2 text-gray-500 font-medium text-sm md:text-lg max-w-sm">
                        A CRM platform helping <br /> sellers in GCC.
                    </p>
                </div>
                <span className="absolute right-4 top-8 group-hover:translate-x-2 group-hover:-translate-y-2 duration-150 ease-out">
                    <MoveUpRight size={32} color="#334df5ff"/>
                </span>
            </Link>
        </div>
    </FramerWrapper>
}