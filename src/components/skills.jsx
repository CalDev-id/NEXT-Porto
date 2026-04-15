const Skills = () => {
  const stack = [
    "Swift",
    "SwiftUI",
    "iOS",
    "Core ML",
    "Vision",
    "Python",
    "TensorFlow",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Firebase",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
  ];

  const marquee = [...stack, ...stack];

  return (
    <section className="xl:mx-24 mx-6 sm:mx-10 pb-20" aria-labelledby="skills-heading">
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Skills & Tooling
            </p>
            <h2 id="skills-heading" className="mt-2 text-3xl font-bold font-title sm:text-4xl">
              Tech Stack I Use
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              The technologies I use to build AI products, mobile apps, full-stack web applications, and production-ready software systems across Python, Swift, Kotlin, React, and Next.js workflows.
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          <div className="relative overflow-hidden">
            <div className="flex w-[200%] animate-marquee gap-4">
              {marquee.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex w-[200%] animate-marqueeReverse gap-4">
              {marquee.map((item, index) => (
                <span
                  key={`${item}-reverse-${index}`}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
