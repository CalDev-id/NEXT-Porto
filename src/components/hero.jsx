import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
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
              alt="Portrait of Heical Chandra"
              className="mt-10 h-auto w-full max-w-xs rounded-xl sm:max-w-sm md:max-w-md xl:mt-0 xl:max-w-lg"
              width={2321}
              height={2594}
              priority
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 45vw, 80vw"
            />
          </div>

          <div className="md:w-1/2 mx-4 xl:ml-0">
            <p className="text-[#284BFF] text-xl py-2">
              Software | AI Engineer
            </p>
            <h1 className="text-5xl font-bold font-title">
              Hello! Im Heical Chandra
            </h1>
            <p className="pt-3 pb-5 text-[#0000008C] md:mr-40">
              Software Engineer with experience in backend, full-stack web,
              automation, and AI/ML development. Builds scalable apps, AI
              agents, and data-driven systems with Python, JavaScript, Next.js,
              plus strong iOS product delivery background.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/projects"
                className="btn mr-5 btn-primary bg-transparent hover:bg-transparent border-slate-800 rounded-full text-black text-xl px-6"
              >
                My Projects{" "}
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
              <a href="#">My Daily Article</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
