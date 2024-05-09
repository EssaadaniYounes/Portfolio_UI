import { Download } from "lucide-react";
import { ThemeToggler } from "../partials/theme-toggler";
import { Button } from "./button";

export function Navbar() {
  return (
    <div className="w-full flex items-center space-x-2 justify-end py-4 px-12">
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
    </div>
  );
}
