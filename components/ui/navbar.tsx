import { Download } from "lucide-react";
import { ThemeToggler } from "../partials/theme-toggler";
import { Button } from "./button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });

export function Navbar() {
  return (
    <div className="w-full flex items-center bg-white dark:bg-gray-950 space-x-2 justify-between py-4 px-12">
      <Link href={"/"} className={cn("text-xl", poppins.className)}>
        Younes.dev
      </Link>
      <nav>
        <Button
          title="Download Resume"
          asChild
          className="p-2.5 bg-gray-600 hover:bg-gray-500"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="/assets/pdfs/Resume.pdf"
            className="text-sm"
          >
            <Download />
          </a>
        </Button>
        <ThemeToggler />
      </nav>
    </div>
  );
}
