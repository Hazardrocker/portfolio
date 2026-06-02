import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoj D - Cloud Security & DevSecOps Engineer",
  description:
    "Cloud Security Engineer | DevSecOps Specialist | AI Security Researcher. Passionate about building resilient, secure, and intelligent cloud systems. Explore projects in ML-based security, cloud infrastructure, and data protection.",
  keywords: [
    "Cloud Security",
    "DevSecOps",
    "Cloud Engineer",
    "Security Analyst",
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "AI Security",
    "Machine Learning",
    "Cybersecurity",
    "Data Protection",
    "Network Security",
  ],
  authors: [{ name: "Manoj D" }],
  creator: "Manoj D",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manoj-portfolio.vercel.app",
    title: "Manoj D - Cloud Security & DevSecOps Engineer Portfolio",
    description:
      "Discover a comprehensive portfolio showcasing cloud security projects, DevSecOps expertise, and AI-powered security solutions.",
    images: [
      {
        url: "https://manoj-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manoj D Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj D - Cloud Security Engineer",
    description:
      "Cloud Security & DevSecOps Engineer | Building Secure Cloud Systems",
    creator: "@manoj_portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://manoj-portfolio.vercel.app" />
      </head>
      <body className="relative overflow-x-hidden bg-dark-950">
        <div className="animated-bg" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
