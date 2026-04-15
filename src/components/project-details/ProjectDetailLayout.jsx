import Link from "next/link";
import Image from "next/image";

const ProjectDetailLayout = ({ project, otherProjects, children }) => {
  const projectImages = project.images?.length ? project.images : [project.image];

  return (
    <article className="xl:mx-24 mx-6 sm:mx-10 pt-10 pb-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:gap-10">
        <div className="min-w-0 space-y-10">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {project.company}
            </p>
            <h1 className="mt-3 text-4xl font-bold font-title leading-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {project.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={projectImages[0]}
                alt={project.title}
                width={2000}
                height={1200}
                className="h-auto max-h-[480px] w-full object-contain"
                priority
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
            </div>
            {projectImages.length > 1 && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {projectImages.slice(1).map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} preview ${index + 2}`}
                      width={1600}
                      height={1000}
                      className="h-52 w-full object-contain"
                      sizes="(min-width: 1024px) 34vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          {children ?? (
            <>
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Overview
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {project.description}
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  What I Did
                </p>
                <div className="mt-5 space-y-4">
                  {project.details.map((detail) => (
                    <p
                      key={detail}
                      className="rounded-3xl border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 shadow-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Outcome
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  This project reflects how I translate product ideas into working
                  software with a balance between technical execution, usability,
                  and delivery quality. The focus was not only on building the
                  system, but also on making the experience clear, practical, and
                  ready to communicate value.
                </p>
              </section>
            </>
          )}
        </div>

        <aside>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Other Projects
            </p>
            <Link
              href="/projects"
              className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
            >
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-900 hover:shadow-sm"
              >
                <div className="border-b border-slate-200 bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={720}
                    className="h-28 w-full object-cover"
                    sizes="320px"
                  />
                </div>
                <div className="space-y-2 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {item.company}
                  </p>
                  <h2 className="text-sm font-semibold leading-6 text-slate-900">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetailLayout;
