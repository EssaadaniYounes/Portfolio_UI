import Image from "next/image";
import React from "react";
import { Mulish, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
const poppins = Poppins({ weight: "700", subsets: ["latin"], display: "swap" });
const mulish = Mulish({ weight: "500", subsets: ["latin"], display: "swap" });
function About() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl  flex flex-col md:flex-row items-center gap-16 mt-8 mb-10 md:mb-20 mx-auto "
    >
      <div className="relative">
        <Image
          alt="About"
          className="rounded-md relative  shadow-sm aspect-[20/16]  object-cover mt-2"
          height={400}
          src={"/images/about-thumb.jpg"}
          width={400}
        />
        <div className="bg-white shadow-sm rounded-full flex items-center justify-center absolute -right-2 -bottom-8 lg:-right-[60px] lg:-bottom-16 w-28 h-28 lg:w-[150px] lg:h-[150px]">
          <Image
            alt="Full Stack Developer"
            className="rounded-md absolute animate-[spin_10s_linear_infinite] "
            height={200}
            src={"/assets/svgs/full-stack-younes.svg"}
            width={200}
          />
          <Image
            alt="Full Stack Developer"
            className="rounded-md "
            height={40}
            src={"/images/developer.png"}
            width={40}
          />
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <h3
          className={cn("uppercase text-lg text-blue-500", poppins.className)}
        >
          About me
        </h3>
        <h4
          className={cn(
            "text-lg text-gray-800 dark:text-gray-300 font-medium",
            poppins.className
          )}
        >
          Full-Stack Developer. <br />
          Based in Beni Mellal, Morocco. 📍
        </h4>
        <p
          className={cn(
            "mt-4 text-gray-500 dark:text-gray-400  text-justify space-y-1.5",
            mulish.className
          )}
        >
          <span className="block">
            Hey, my name is Younes, and I{"'"}m a Fullstack Developer. My
            passion is to create and develop a complex application to learn new
            things.
          </span>
          <span className="block">
            My main stack currently is MERN stack in combination with Tailwind
            CSS and TypeScript.
          </span>
        </p>

        <Button
          title="Download Resume"
          asChild
          className="p-2.5 bg-blue-600 hover:bg-blue-500 space-x-2 animate-pulse"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="/assets/pdfs/CV.pdf"
            className="text-sm"
          >
            <Download />
            <span>Download Resume</span>
          </a>
        </Button>
      </div>
    </section>
  );
}

export default About;
