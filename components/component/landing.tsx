import HeroSection from "../partials/HeroSection";
import Projects from "../partials/Projects";
import { Experiences } from "./experiences";
import Skills from "../partials/Skills";
import { ContactForm } from "./contact-form";
import { Articles } from "./articles";
import About from "../partials/About";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh] m-4">
      <HeroSection />
      <hr />
      <About />
      <Projects />
      <Experiences />
      <Articles />
      <Skills />
      {process.env.NEXT_PUBLIC_CONTACT_FEATURE_FLAG_ENABLED === "enabled" && (
        <ContactForm />
      )}
    </div>
  );
}
