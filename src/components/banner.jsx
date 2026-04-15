import Image from "next/image";

const Banner = () => {
  return (
    <section id="study" className="xl:mx-24 mx-8 mb-20 mt-20">
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
            As a Software Engineer, I developed internal systems to automate
            production scheduling workflows, reducing manual planning effort and
            improving process consistency. I built reporting tools to automate
            actual production data collection across multiple lines. I also
            worked closely with operational teams to digitize manual
            manufacturing processes into structured, data-driven systems for
            daily operations efficiently.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
