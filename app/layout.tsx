"use client";
import Link from "next/link";
import "./globals.css";
import { BriefcaseBusinessIcon, Folder, FolderIcon, HomeIcon, SquarePenIcon, WrenchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeDown, fadeUp } from "@/lib/motion";
import { LeftSideCard } from "@/components/left-side-card";
import CalEmbed from "@/components/cal-embed";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#151312] text-neutral-100 antialiased">
        <main className="mx-auto max-w-8xl py-6">
          <div className="flex items-center justify-center w-full bg-red">
            <div className="flex items-center space-x-4 md:space-x-9 justify-center bg-[#ffffff08] p-4 px-8 md:px-12 rounded-lg">
              <Link href={"/"}>
                <HomeIcon size={28} />
              </Link>
              <Link href={"/projects"}>
                <FolderIcon size={28} />
              </Link>
              <Link href={"/experience"}>
                <BriefcaseBusinessIcon size={28} />
              </Link>
              <Link href={"/skills"}>
                <WrenchIcon size={28} />
              </Link>
              <Link href={"/contact"}>
                <SquarePenIcon size={28} />
              </Link>
            </div>
          </div>
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeDown as any}
            className="mb-24"
          >
            <div className="flex items-start justify-center flex-col md:flex-row gap-8 mt-12 p-6">
              <div className="md:sticky md:top-16">
                <LeftSideCard />
              </div>
              <div className="space-y-16 md:space-y-32 max-w-2xl">
                {children}
              </div>
            </div>
            <CalEmbed />
          </motion.section>
        </main>
      </body>
    </html>
  );
}
