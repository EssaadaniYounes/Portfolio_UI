import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";

function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 mb-10 md:mb-20">
      <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-gray-700 dark:text-gray-300 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Essaadani Younes
            </h1>
            <h2 className="text-xl font-medium text-gray-500 dark:text-gray-200 mt-2">
              Full-Stack Web Developer
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-[600px]">
              &quot;I am a passionate and experienced full-stack web developer
              with a strong background in building modern, responsive, and
              scalable web applications. I specialize in creating dynamic and
              user-friendly interfaces using the latest technologies and best
              practices.&quot;
            </p>
            <h2 className="text-2xl text-center md:text-left font-medium text-gray-700 dark:text-gray-300 mt-2">
              Connect with me
            </h2>
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
