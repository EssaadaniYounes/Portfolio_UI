import Articles from "@/components/articles";
import Contact from "@/components/contact";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  robots: { index: false, follow: true },
};

export default function Home() {
  return (
    <React.Fragment>
      <Articles />
      <Contact />
    </React.Fragment>
  );
}
