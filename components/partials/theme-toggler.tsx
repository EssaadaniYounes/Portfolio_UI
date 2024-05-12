"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative cursor-pointer bg-gray-200 dark:bg-gray-800 p-2 rounded-md"
    >
      <Sun className="text-yellow-400  scale-0 dark:scale-100" />
      <Moon className="absolute top-2 text-gray-600 scale-100 dark:scale-0" />
    </div>
  );
}
