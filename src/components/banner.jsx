import Image from "next/image";

const Banner = () => {
  return (
    <section id="study" className="xl:mx-24 mx-8 mb-20 mt-20" aria-labelledby="current-role-heading">
      <div className="relative overflow-hidden rounded-2xl mt-20">
        <Image
          src="/images/meet_crop.jpeg"
          alt="Heical Chandra Syahputra working in an enterprise software and AI engineering environment"
          className="w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[700px]"
          width={2000}
          height={800}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 p-6 text-white md:p-8 md:mb-10">
          <h2
            id="current-role-heading"
            className="mb-3 line-clamp-2 text-xl font-semibold md:font-extrabold leading-tight drop-shadow-lg md:text-7xl text-center"
          >
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
            I work on internal software systems, enterprise workflow automation, and data-driven operational tools that improve planning, reporting, and process visibility. This experience strengthens my portfolio as a software engineer who can ship practical systems for real business operations at scale.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
