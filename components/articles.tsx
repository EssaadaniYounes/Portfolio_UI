import { cn } from "@/lib/utils";
import FramerWrapper from "./providers/framer-wrapper";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { ARTICLES } from "@/lib/constants";
export default function Articles() {
    return <FramerWrapper>
        <h2 className={cn("text-6xl md:text-9xl font-bold uppercase")}>
            Articles <br /> <span className="text-[#b6b4bd33]">& Blogs</span>
        </h2>

        <div className="space-y-4 mt-4">
            {ARTICLES.map((article) => (
                <Link href={article.url} key={article.url} className="relative flex items-center p-2 md:p-10 hover:bg-[#b6b4bd0b] duration-100 rounded-xl cursor-pointer group">
                    <div className="ml-4">
                        <h3 className="text-xl md:text-2xl font-bold">{article.title}</h3>
                        <p className="mt-2 text-gray-500 font-medium text-sm md:text-lg line-clamp-3 tracking-widest">
                            {article.description}
                        </p>
                    </div>
                    <span className="absolute right-4 top-8 group-hover:translate-x-2 group-hover:-translate-y-2 duration-150 ease-out">
                        <MoveUpRight size={32} color="#334df5ff" />
                    </span>
                </Link>
            ))}
        </div>
    </FramerWrapper>
}