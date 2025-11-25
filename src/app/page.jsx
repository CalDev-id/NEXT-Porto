
export const metadata = {
  title: "Heical Chandra Syahputra – AI Engineer & Mobile Developer Portfolio",
  description:
    "Portfolio resmi Heical Chandra Syahputra, AI Engineer Intern di Telkom Indonesia dan iOS Developer lulusan Apple Developer Academy. Berpengalaman membangun 10+ aplikasi mobile (Swift, Kotlin, Flutter), riset IEEE, dan machine learning.",
  keywords: [
    "Heical Chandra Syahputra",
    "AI Engineer",
    "iOS Developer",
    "Mobile Developer",
    "Machine Learning Engineer",
    "Fullstack Developer",
    "Swift Developer",
    "Kotlin",
    "Flutter",
    "React Developer",
    "Portfolio"
  ],
  authors: [{ name: "Heical Chandra Syahputra" }],
  creator: "Heical Chandra Syahputra",
  publisher: "Heical Chandra Syahputra",

  openGraph: {
    title: "Heical Chandra Syahputra – AI Engineer & Mobile Developer",
    description:
      "Mobile & AI Engineer with experience in Swift, Kotlin, Flutter, and machine learning. Telkom Indonesia Intern, Apple Developer Academy graduate, IEEE-published researcher.",
    url: "https://caldev.my.id",
    siteName: "Heical Portfolio",
    images: [
      {
        url: "https://caldev.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Heical Chandra Syahputra"
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Heical Chandra Syahputra – AI & Mobile Developer",
    description:
      "AI Engineer Intern at Telkom Indonesia and iOS Developer (Apple Developer Academy). Skilled in SwiftUI, Jetpack Compose, Flutter, ML, and RAG systems.",
    images: ["https://caldev.my.id/og-image.png"]
  },

  alternates: {
    canonical: "https://caldev.my.id"
  }
};

import Banner from "../../components/banner";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Works from "../../components/works";
import Footer from "../../components/footer";
import Carrer from "../../components/carrer";

const Home = () => {
    return (
        <section className="bg-white text-black font-body font-semibold ">
            <Navbar />
            <Hero />
            <Carrer />
            <Banner />
            <Works />
            <Footer />
        </section>
    )
}

export default Home;
