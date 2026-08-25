import type { Metadata } from 'next'
import "./globals.css";
export const metadata: Metadata = {
    metadataBase: new URL("https://www.essaadani.dev"),
    title: {
        default: "Younes Essaadani | Senior Full-Stack Engineer",
        template: "%s | Younes Essaadani",
    },
    description:
        "Full Stack & AI Engineer building SaaS products, landing pages, and AI systems with Next.js, Node.js, and modern tools. Available for freelance and remote work.",
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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.essaadani.dev",
        title: "Younes Essaadani – Full Stack & AI Engineer",
        description:
            "I build SaaS products and AI systems that ship. Specialized in Next.js, Node.js, and scalable architectures.",
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
        title: "Younes Essaadani – Full Stack & AI Engineer",
        description:
            "Full Stack & AI Engineer building SaaS and AI-powered products.",
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
