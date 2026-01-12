import Image from "next/image";

const Bcard = ({ src, title, desk, company, stack = [] }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          className="h-60 w-full object-cover object-top sm:h-64"
          width={2000}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
          Featured
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {company}
        </p>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{desk}</p>
        {stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 flex items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
            View Case Study
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
          </button>
        </div>
      </div>
    </article>
  );
};

export default Bcard;
