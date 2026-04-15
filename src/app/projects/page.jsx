import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Bcard from "../../components/card/Bcard";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected software engineering, AI, mobile, and product projects by Heical Chandra Syahputra with case-study detail pages.",
  alternates: {
    canonical: "/projects",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by Heical Chandra Syahputra",
  url: "https://caldev.my.id/projects",
  description:
    "Collection of software engineering, AI, and mobile development projects by Heical Chandra Syahputra.",
  author: {
    "@type": "Person",
    name: "Heical Chandra Syahputra",
    url: "https://caldev.my.id",
  },
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    url: `https://caldev.my.id/projects/${project.slug}`,
    description: project.excerpt,
  })),
};

const ProjectsPage = () => {
  return (
    <section className="min-h-screen bg-white text-black font-body font-semibold">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />
      <main>
      <section className="xl:mx-24 mx-6 sm:mx-10 pt-10 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-bold font-title sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          A searchable archive of software engineering, AI, mobile development, and product projects by Heical Chandra Syahputra. Each project page includes the problem context, technology stack, and implementation highlights.
        </p>
      </section>
      <section className="xl:mx-24 mx-6 sm:mx-10 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Bcard
              key={project.slug}
              src={project.image}
              title={project.title}
              company={project.company}
              stack={project.stack}
              desk={project.excerpt}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </section>
  );
};

export default ProjectsPage;
