import Script from "next/script";

export default function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.essaadani.dev/#person",
        name: "Younes Essaadani",
        url: "https://www.essaadani.dev",
        image: "https://www.essaadani.dev/images/younes-essaadani.png",
        jobTitle: "Senior Full-Stack Engineer",
        sameAs: ["https://github.com/EssaadaniYounes", "https://www.linkedin.com/in/younes-essaadani", "https://x.com/EssaadaniYounes"],
        worksFor: { "@type": "Organization", name: "UNRWA" },
        knowsAbout: ["Backend architecture", "AI systems", "Node.js", "Next.js", "Azure", "RAG", "TypeScript"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.essaadani.dev/#website",
        url: "https://www.essaadani.dev",
        name: "Younes Essaadani",
        inLanguage: "en",
        author: { "@id": "https://www.essaadani.dev/#person" },
      },
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
