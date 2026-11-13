import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yasir Arafat | MERN Stack Developer & Competitive Programmer",
    template: "%s | Yasir Arafat",
  },
  description: "Yasir Arafat is a MERN stack developer and competitive programmer from Dhaka, Bangladesh. Explore his projects, skills, and contact info.",
  applicationName: "Yasir Arafat Portfolio",
  keywords: [
    "Yasir Arafat",
    "Yasir Arafat developer",
    "Yasir Arafat MERN stack developer",
    "Yasir Arafat full stack developer",
    "Yasir Arafat competitive programmer",
    "Yasir Arafat Bangladesh",
    "Yasir Arafat portfolio",
    "MERN stack developer Dhaka",
    "full stack developer Bangladesh",
  ],
  authors: [{ name: "Yasir Arafat", url: SITE_URL }],
  creator: "Yasir Arafat",
  publisher: "Yasir Arafat",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Yasir Arafat",
    title: "Yasir Arafat | MERN Stack Developer & Competitive Programmer",
    description: "Portfolio of Yasir Arafat, a MERN stack developer and competitive programmer from Dhaka, Bangladesh.",
    locale: "en_US",
    images: [
      {
        url: "/images/Yasir_Arafat_Developer_Portfolio_Banner.png",
        width: 1200,
        height: 630,
        alt: "Yasir Arafat - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Arafat | MERN Stack Developer & Competitive Programmer",
    description: "Portfolio of Yasir Arafat, a MERN stack developer and competitive programmer from Dhaka, Bangladesh.",
    images: ["/images/Yasir_Arafat_Developer_Portfolio_Banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    title: "Yasir Arafat",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
