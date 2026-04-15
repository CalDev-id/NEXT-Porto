import { notFound } from "next/navigation";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { getProjectBySlug, projects } from "../../../data/projects";
import { projectDetailComponents } from "../../../components/project-details";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.excerpt,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Heical Chandra Syahputra`,
      description: project.excerpt,
      url: `https://caldev.my.id/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  };
}

const ProjectDetailPage = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter(
    (candidate) => candidate.slug !== project.slug
  );
  const ProjectDetailComponent = projectDetailComponents[project.slug];

  if (!ProjectDetailComponent) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    url: `https://caldev.my.id/projects/${project.slug}`,
    image: [`https://caldev.my.id${project.image}`],
    author: {
      "@type": "Person",
      name: "Heical Chandra Syahputra",
      url: "https://caldev.my.id",
    },
    creator: {
      "@type": "Person",
      name: "Heical Chandra Syahputra",
    },
    keywords: project.stack.join(", "),
    about: project.stack,
    publisher: {
      "@type": "Person",
      name: "Heical Chandra Syahputra",
    },
  };

  return (
    <section className="min-h-screen bg-white text-black font-body font-semibold">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Navbar />
      <main>
        <ProjectDetailComponent otherProjects={otherProjects} />
      </main>
      <Footer />
    </section>
  );
};

export default ProjectDetailPage;
