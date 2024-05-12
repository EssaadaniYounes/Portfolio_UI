import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import { Poppins, Mulish } from "next/font/google";
import { cn } from "@/lib/utils";
const poppins = Poppins({ weight: "900", subsets: ["latin"], display: "swap" });
const mulish = Mulish({ weight: "500", subsets: ["latin"], display: "swap" });
import { PiHandWavingDuotone } from "react-icons/pi";

function HeroSection() {
  return (
    <section
      id="home"
      className="w-full mt-8 pt-12 md:pt-24 lg:pt-32 mb-10 md:mb-20"
    >
      <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-16">
          <div>
            <h2
              className={cn(
                "text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200 mt-2",
                poppins.className,
                ""
              )}
            >
              Full-Stack Web <br /> Developer
              <PiHandWavingDuotone className="ml-4 inline size-8 md:size-10 lg:size-12" />
            </h2>
            <p
              className={cn(
                "mt-4 text-gray-500 text-lg dark:text-gray-300 max-w-[600px]",
                mulish.className
              )}
            >
              Hi! I am Younes Essaadani, a passionate and experienced
              full-stack. Based in Beni Mellal, Morocco.
              <br /> Always excited to learn and grow.
            </p>
            <SocialLinks />
          </div>
          <div className="flex justify-center items-center md:-mt-12 md:mb-4">
            <Image
              alt="Essaadani Younes"
              className="rounded-full object-cover object-top"
              height={300}
              src="/images/me.jpeg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
