// app/layout.tsx
import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import ConditionalFooter from "./components/ConditionalFooter";
import Header from "./components/Header";

const siteTitle = "Pratham Gupta | Cybersecurity & Vulnerability Research";
const siteDescription =
  "Portfolio of Pratham Gupta, a Cybersecurity Researcher specializing in Vulnerability Research, LLM Vulnerability, and CTF LLM Training. Explore the CTF Archive.";
const siteUrl = "https://guptapratham.com/";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pratham Gupta",
  url: siteUrl,
  jobTitle: "Cybersecurity Researcher",
  description:
    "Cybersecurity Researcher focused on Vulnerability Research, LLM Vulnerability, and CTF LLM Training.",
  knowsAbout: [
    "Cybersecurity",
    "LLM Vulnerability",
    "Vulnerability Research",
    "CTF",
    "CTF LLM Training",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Pratham Gupta",
    "Cybersecurity",
    "LLM Vulnerability",
    "Vulnerability Research",
    "CTF",
    "CTF LLM Training",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Pratham Gupta | Cybersecurity & LLM Vulnerability Research",
    description: siteDescription,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content={siteTitle} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <div>{children}</div>
        <ConditionalFooter />
      </body>
    </html>
  );
}
