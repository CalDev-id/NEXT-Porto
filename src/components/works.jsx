import Link from "next/link";
import Bcard from "./card/Bcard";
import { projects } from "../data/projects";

const Works = () => {
  return (
    <section id="projects" className="xl:mx-24 mx-6 sm:mx-10 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Selected Projects
          </p>
          <h2 className="mt-2 text-4xl font-bold font-title sm:text-5xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            A curated set of product, AI, and design-driven projects that show
            end-to-end execution, thoughtful UX, and measurable impact.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
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
  );
};

export default Works;
