
export const metadata = {
  title: "Heical Chandra Portfolio",
  description:
    "Portfolio resmi Heical Chandra Syahputra, juga dicari sebagai Caldev, Heical Chandra, Heical, atau Ical Dev. Menampilkan karya AI engineer, iOS developer, mobile developer, dan software engineer.",
  keywords: [
    "CalDev",
    "Ical Dev",
    "ical dev",
    "Heical",
    "Heical Chandra",
    "Heical Chandra Syahputra",
    "heical chandra syahputra",
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
  alternates: {
    canonical: "/"
  },
};

import Banner from "../components/banner";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Works from "../components/works";
import Footer from "../components/footer";
import Carrer from "../components/carrer";
import Skills from "../components/skills";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Heical Chandra Syahputra",
  alternateName: ["CalDev", "Ical Dev", "Heical Chandra", "Heical"],
  url: "https://caldev.my.id",
  image: "https://caldev.my.id/images/me_2.webp",
  jobTitle: "AI Engineer & Mobile Developer",
  description:
    "Heical Chandra Syahputra, also known as CalDev, Ical Dev, Heical Chandra, and Heical, is an AI engineer and mobile developer with experience in web apps, automation systems, machine learning, and iOS product development.",
  sameAs: [
    "https://www.linkedin.com/in/heical-chandra/",
    "https://github.com/CalDev-id",
    "https://www.instagram.com/ical.dev"
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Apple Developer Academy"
    }
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Mobile Development",
    "iOS Development",
    "Next.js",
    "Python",
    "Software Engineering"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Telkom Indonesia"
  }
};

const Home = () => {
  return (
    <section className="bg-white text-black font-body font-semibold">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Carrer />
        <Banner />
        <Skills />
        <Works />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
