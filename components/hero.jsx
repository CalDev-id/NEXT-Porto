import Head from "next/head";
import Image from "next/image";

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
          <div className="md:w-1/2 hidden xl:flex justify-center items-center ">
            <Image
              src="/images/me_2.png"
              alt="Websekai Logo"
              className="rounded-xl"
              width={500}
              height={100}
            />
          </div>

          <div className="md:w-1/2 mx-4 xl:ml-0">
            <p className="text-[#284BFF] text-xl py-2">
              IOS Developer | AI Engineer
            </p>
            <h1 className="text-5xl font-bold font-title">
              Hello! Im Heical Chandra
            </h1>
            <p className="pt-3 pb-5 text-[#0000008C] md:mr-40">
              Informatics Engineering student with 2+ years in mobile
              development using Swift, Kotlin, and Flutter. Built and deploy 10+
              apps to the AppStore with focus on performance, usability, and
              clean architecture.
            </p>
            <div>
              <button className="btn mr-5 btn-primary bg-transparent hover:bg-transparent border-slate-800 rounded-full text-black text-xl px-6">
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
              </button>
              <a href="#">My Daily Article</a>
            </div>
          </div>
          <Image
            // src="/images/me_crop.jpg"
            src="/images/me_2.png"
            alt="Websekai Logo"
            className="xl:w-1/2 block xl:hidden rounded-xl mt-10"
            width={1000}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
