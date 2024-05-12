import { SOCIAL_LINKS } from "@/lib/constants";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

function SocialLinks() {
  return (
    <>
      <div className="mx-auto flex justify-center md:justify-start space-x-8 mb-2">
        {SOCIAL_LINKS.map((s) => {
          return (
            <div key={s.url} className="mt-4 duration-150 hover:text-blue-400">
              <a
                title={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="dark:text-gray-300"
              >
                {<s.icon size={30} />}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SocialLinks;
