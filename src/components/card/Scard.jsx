import Image from "next/image";

const Scard = ({src, title, desk, theme}) => {
    return (
        <div className="md:w-2/4 2xl:w-1/4 md:pr-6 mb-5">
            <Image
                src={src}
                alt="Websekai Logo"
                className="w-full rounded-3xl xl:h-96 h-72 object-right object-cover"
                width={2000}
                height={500}
            />
            <p className='text-base font-semibold mt-3 bg-[#D2DAFF] text-[#284BFF] rounded-full w-fit px-4 py-1'>{theme}</p>
            <p className='text-2xl font-semibold mt-3'>{title}</p>
            <p className="pt-3 pb-5 text-[#00000094] text-[15px] font-normal">{desk}</p>
            <button className="btn mr-5 btn-primary bg-[#284BFF] border-slate-800 rounded-full text-white text-base w-full">Read More <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z" fill="white"></path></svg></button>
        </div>
    );
}

export default Scard;