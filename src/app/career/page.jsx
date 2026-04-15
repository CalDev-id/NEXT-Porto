import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { careerTimeline } from "../../data/career";

export const metadata = {
  title: "Career",
  description:
    "Professional journey and previous companies of Heical Chandra across software, mobile, and AI roles.",
  alternates: {
    canonical: "/career",
  },
};

const CareerPage = () => {
  return (
    <section className="min-h-screen bg-white text-black font-body font-semibold">
      <Navbar />
      <main>
      <section className="xl:mx-24 mx-6 sm:mx-10 pt-10 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Professional Journey
        </p>
        <h1 className="mt-3 text-4xl font-bold font-title sm:text-5xl">
          Career
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          A focused view of the companies, programs, and roles that shaped my
          path across software engineering, iOS development, and AI systems.
        </p>
      </section>

      <section className="xl:mx-24 mx-6 sm:mx-10 pb-24">
        <div className="space-y-6">
          {careerTimeline
            .slice()
            .reverse()
            .map((item) => (
              <article
                key={`${item.year}-${item.company}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Year
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {item.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {item.company}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.role}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {item.gallery.map((slot) => (
                        <div
                          key={`${item.company}-${slot}`}
                          className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                        >
                          {slot.startsWith("/images/") ? (
                            <Image
                              src={slot}
                              alt={`${item.company} gallery`}
                              width={1600}
                              height={1200}
                              className="h-full w-full object-cover"
                              sizes="(min-width: 640px) 50vw, 100vw"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center px-4 text-center">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                                {slot}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <p className="text-sm leading-relaxed text-slate-600">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
      </main>
      <Footer />
    </section>
  );
};

export default CareerPage;
