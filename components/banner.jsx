import Image from "next/image";

const Banner = () => {
  return (
    <section className="xl:mx-24 mx-8 mb-20 mt-20">
      {/* <h1 className="text-3xl font-bold font-title">My Daily Article</h1>
      <p className="pt-3 xl:pb-5 pb-1 text-[#0000008C]">
        Ill be sharing my daily article here, Feel free to find inspiration in
        it
      </p>
      <button className="btn mr-5 btn-primary bg-transparent border-slate-800 rounded-full text-black text-xl px-6">
        My Articles{" "}
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
      </button> */}
      <div className="relative overflow-hidden rounded-2xl mt-20">
        <Image
          src="/images/meet_crop.jpeg"
          alt="Meeting with HCIAP AND HCOE TELKOM"
          className="w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[700px]"
          width={2000}
          height={800}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white md:p-8 md:mb-10">
          <h2 className="mb-3 line-clamp-2 text-xl font-semibold md:font-extrabold leading-tight drop-shadow-lg md:text-7xl text-center">
            Current Position
          </h2>

          <div
            className="mb-4 hidden overflow-hidden text-sm text-gray-200 md:block md:text-xl text-center"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            As an AI Engineer Intern, I developed Agentic AI systems to enhance
            Human Capital operations, including recruitment, promotion, and
            Distinct job manual. I implemented Retrieval-Augmented Generation
            (RAG) and integrated LangChain/LangGraph to support
            knowledge-intensive workflows. Additionally, I designed AI
            assistants for candidate selection and promotion eligibility
            assessment, ensuring alignment with organizational policies and
            decision-making standards.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
