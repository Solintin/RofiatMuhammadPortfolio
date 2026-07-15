import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rofiat Muhammad Opemipo | Data Analyst & Analytics Engineer",
  description: "Professional portfolio of Rofiat Muhammad Opemipo. Specializing in Python, SQL databases, Power BI visualization, geospatial anomaly models, and data-driven business growth.",
  keywords: [
    "Data Analyst",
    "Analytics Engineer",
    "SQL Database Expert",
    "Power BI Developer",
    "Python Analyst",
    "Rofiat Muhammad Opemipo",
    "Data Storytelling",
    "Dammam Saudi Arabia Data Analyst",
    "Business Intelligence Specialist",
    "Portfolio"
  ],
  authors: [{ name: "Rofiat Muhammad Opemipo" }],
  creator: "Rofiat Muhammad Opemipo",
  openGraph: {
    title: "Rofiat Muhammad Opemipo | Data Analyst & Analytics Engineer",
    description: "Transforming raw operational, marketing, and financial data into interactive dashboards, statistical anomaly models, and actionable business intelligence.",
    url: "https://rofiatmuhammad.com",
    siteName: "Rofiat Muhammad Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Rofiat Muhammad Opemipo - Data Analyst | Analytics Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rofiat Muhammad Opemipo | Data Analyst & Analytics Engineer",
    description: "Transforming raw operational, marketing, and financial data into interactive dashboards, statistical anomaly models, and actionable business intelligence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground antialiased font-sans selection:bg-accent-pink selection:text-white">
        {children}
      </body>
    </html>
  );
}
