import { getProjectBySlug } from "../../data/projects";
import ProjectDetailLayout from "./ProjectDetailLayout";

const Skinalyze = ({ otherProjects }) => {
  const project = getProjectBySlug("skinalyze");

  return (
    <ProjectDetailLayout project={project} otherProjects={otherProjects}>
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
          software with a balance between technical execution, usability, and
          delivery quality. The focus was not only on building the system, but
          also on making the experience clear, practical, and ready to
          communicate value.
        </p>
      </section>
    </ProjectDetailLayout>
  );
};

export default Skinalyze;
