import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://caldev.my.id"),
  title: {
    default: "CalDev | Heical Chandra Syahputra",
    template: "%s | Heical Chandra Syahputra",
  },
  description:
    "Portfolio resmi Heical Chandra Syahputra, juga dikenal sebagai CalDev, Heical Chandra, Heical, dan Ical Dev. Berisi project AI engineer, mobile developer, dan software engineer.",
  applicationName: "Heical Chandra Profile",
  keywords: [
    "CalDev",
    "Ical Dev",
    "ical dev",
    "Heical",
    "Heical Chandra",
    "Heical Chandra Syahputra",
    "heical",
    "heical chandra",
    "heical chandra syahputra",
    "AI Engineer Portfolio",
    "Mobile Developer Portfolio",
  ],
  authors: [{ name: "Heical Chandra Syahputra", url: "https://caldev.my.id" }],
  creator: "Heical Chandra Syahputra",
  publisher: "Heical Chandra Syahputra",
  category: "technology",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caldev.my.id",
    siteName: "Heical Chandra Portfolio",
    title: "CalDev | Heical Chandra Syahputra",
    description:
      "CalDev, portfolio of Heical Chandra Syahputra, also known as Heical Chandra and Ical Dev, featuring AI systems, mobile apps, and software engineering projects.",
    images: [
      {
        url: "/images/me_2.webp",
        width: 1200,
        height: 630,
        alt: "Heical Chandra Syahputra portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heical Chandra | Portfolio",
    description:
      "Heical Chandra portfolio by Heical Chandra Syahputra with AI engineer, mobile developer, and software project work.",
    images: ["/images/me_2.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
