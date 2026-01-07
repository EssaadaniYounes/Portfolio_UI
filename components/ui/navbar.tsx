import { Download } from "lucide-react";
import { Button } from "./button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MENU_LINKS } from "@/lib/constants";
const poppins = Poppins({
  weight: ["600", "500"],
  subsets: ["latin"],
  display: "swap",
});

export function Navbar() {
  return (
    <div className="w-full fixed z-10 top-0 flex items-center bg-white dark:bg-gray-950 shadow-sm space-x-2 justify-between py-4 px-6">
      <Link
        href={"/"}
        className={cn("text-xl", poppins.className, "font-semibold")}
      >
        Younes.dev
      </Link>
      <nav
        className={cn(
          "hidden md:flex items-center justify-between space-x-4 text-sm",
          poppins.className
        )}
      >
        {MENU_LINKS.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
        {/* <a
          rel="noreferrer"
          target="_blank"
          href="/assets/pdfs/Resume.pdf"
          className=""
        >
          Resume
        </a> */}
      </nav>
    </div>
  );
}
