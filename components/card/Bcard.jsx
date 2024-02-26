import Image from "next/image";

const Bcard = ({src, title, desk}) => {
    return (
        <div className="md:w-1/2 md:px-4 mb-10 ">
            <Image
                src={src}
                alt="Websekai Logo"
                className="w-full rounded-3xl xl:h-96 h-72 object-top object-cover"
                width={2000}
                height={500}
            />
            <p className='text-base font-semibold mt-3 bg-red-300 text-red-600 rounded-full w-fit px-4 py-1'>Hot</p>
            <p className='text-2xl font-semibold mt-3'>{title}</p>
            <p className="pt-3 pb-5 text-[#0000008C]">{desk}</p>
            <button className="btn mr-5 btn-primary bg-transparent border-slate-800 rounded-full text-black text-xl px-6">Read More <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z" fill="black"></path></svg></button>

        </div>
    );
}

export default Bcard;