import type { Metadata } from 'next'
import "./globals.css";
export const metadata: Metadata = {
    metadataBase: new URL("https://www.essaadani.dev"),
    title: {
        default: "Younes Essaadani | Senior Backend & AI Systems Engineer",
        template: "%s | Younes Essaadani",
    },
    description:
        "Senior Backend and AI Systems Engineer specializing in production RAG pipelines, distributed systems, LangGraph, and large-scale data architecture.",
    keywords: [
        "Full Stack Developer",
        "AI Engineer",
        "Next.js Developer",
        "SaaS Developer",
        "Node.js",
        "NestJS",
        "React Developer",
        "Freelance Developer",
        "Web Developer Morocco",
        "Remote Full Stack Developer",
    ],
    authors: [{ name: "Younes Essaadani", url: "https://www.essaadani.dev" }],
    creator: "Younes Essaadani",
    verification: process.env.GOOGLE_SITE_VERIFICATION
        ? { google: process.env.GOOGLE_SITE_VERIFICATION }
        : undefined,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.essaadani.dev",
        title: "Younes Essaadani | Senior Backend & AI Systems Engineer",
        description:
            "Senior Backend & AI Systems Engineer building production RAG pipelines, distributed systems, and scalable data platforms.",
        siteName: "essaadani.dev",
        images: [
            {
                url: "/og-image.png", // create this
                width: 1200,
                height: 630,
                alt: "Younes Essaadani Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Younes Essaadani | Senior Backend & AI Systems Engineer",
        description:
            "Senior Backend & AI Systems Engineer building production RAG pipelines, distributed systems, and scalable data platforms.",
        images: ["/og-image.png"],
        creator: "@EssaadaniYounes",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
