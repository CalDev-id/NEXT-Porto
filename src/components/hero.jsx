import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="xl:pt-8" aria-labelledby="hero-heading">
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="hero xl:pt-20 pt-10 md:pb-28">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-full xl:ml-24">
          <div className="flex w-full justify-center xl:w-1/2 xl:items-center">
            <Image
              src="/images/me_2.webp"
              alt="Portrait of Heical Chandra Syahputra, AI engineer and mobile developer"
              className="mt-10 h-auto w-full max-w-xs rounded-xl sm:max-w-sm md:max-w-md xl:mt-0 xl:max-w-lg"
              width={2321}
              height={2594}
              priority
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 45vw, 80vw"
            />
          </div>

          <div className="md:w-1/2 mx-4 xl:ml-0">
            <p className="text-[#284BFF] text-xl py-2">
              Software Engineer | AI Engineer | Mobile Developer
            </p>
            <h1 id="hero-heading" className="text-5xl font-bold font-title leading-tight">
              Heical Chandra Syahputra
            </h1>
            <p className="pt-3 text-lg font-semibold text-slate-800 md:mr-24">
              AI Engineer and Mobile Developer portfolio from Indonesia focused on product engineering, intelligent systems, and scalable application development.
            </p>
            <p className="pt-3 pb-5 text-[#0000008C] md:mr-40">
              I build AI systems, iOS apps, and full-stack web products with Python, JavaScript, Next.js, Swift, Kotlin, and machine learning workflows. My work spans automation, RAG-based systems, internal enterprise tools, and production-ready mobile experiences.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="btn mr-5 btn-primary bg-transparent hover:bg-transparent border-slate-800 rounded-full text-black text-xl px-6"
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                    fill="black"
                  ></path>
                </svg>
              </Link>
              <Link href="/career" className="text-sm font-semibold text-slate-600 underline-offset-4 hover:underline">
                View Career Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
