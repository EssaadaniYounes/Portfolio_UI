import Script from "next/script";

export default function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Younes Essaadani",
    url: "https://essaadani.dev",
    jobTitle: "Full Stack & AI Engineer",
    sameAs: [
      "https://github.com/EssaadaniYounes",
      "https://www.linkedin.com/in/younes-essaadani",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
