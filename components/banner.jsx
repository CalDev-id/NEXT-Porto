import Image from 'next/image';

const Banner = () => {
    return (
        <section className='xl:mx-24 mx-8 mb-20'>
            <h1 className='text-3xl font-bold font-title'>My Daily Article</h1>
            <p className='pt-3 pb-5 text-[#0000008C]'>Ill be sharing my daily article here, Feel free to find inspiration in it</p>
            <Image
                src="/images/zelda.jpg"
                alt="Websekai Logo"
                className="w-full rounded-3xl xl:h-96 object-top object-cover"
                width={2000}
                height={500}
            />
            <p className='text-lg font-semibold mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eum.</p>
            <p className="pt-3 pb-5 text-[#0000008C]">Transforming abstract ideas into tangible reality is a captivating journey that requires creativity, skill, and determination. As a designer, my mission is to bridge the gap between imagination and practicalityand determination. As a designer, my mission is to bridge the gap between imagination and practicality.</p>
            <button className="btn mr-5 btn-primary bg-transparent border-slate-800 rounded-full text-black text-xl px-6">My Articles <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z" fill="black"></path></svg></button>
        </section>
    )
}

export default Banner;