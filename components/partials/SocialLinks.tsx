import { SOCIAL_LINKS } from "@/lib/constants";
import React from "react";

function SocialLinks() {
  return (
    <div className="mx-auto flex justify-center md:justify-start space-x-4 mb-2">
      {SOCIAL_LINKS.map((s) => {
        return (
          <div
            key={s.url}
            className="mt-4 relative before:content-[''] before:block before:w-12 before:h-12 before:bg-blue-200 before:absolute before:-top-1 before:-left-1 before:-z-10 before:rounded-md before:opacity-0 before:hover:opacity-100 before:duration-300"
          >
            <a href={s.url} target="_blank" rel="noreferrer">
              {<s.icon size={40} />}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialLinks;
