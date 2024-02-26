import Head from "next/head";
import Image from "next/image";


const Hero = () => {
    return (
        <section>
            <Head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Head>
            <div className="hero xl:pt-20 pt-10 pb-10">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-full xl:ml-24">
                    <Image
                        src="/images/banner1.png"
                        alt="Websekai Logo"
                        className="md:w-1/2 ml-8 xl:ml-0 hidden xl:block"
                        width={2000}
                        height={500}
                    />
                    <div className="md:w-1/2 mx-4 xl:ml-0">
                        <p className="text-[#284BFF] text-xl py-2">IOS Developer | AI Engineer</p>
                        <h1 className="text-5xl font-bold font-title">Hello! Im Heical Chandra</h1>
                        <p className="pt-3 pb-5 text-[#0000008C] xl:max-w-[70%]">Transforming abstract ideas into tangible reality is a captivating journey that requires creativity, skill, and determination. As a designer, my mission is to bridge the gap between imagination and practicality.</p>
                        <div>
                            <button className="btn mr-5 btn-primary bg-transparent hover:bg-transparent border-slate-800 rounded-full text-black text-xl px-6">My Projects <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z" fill="black"></path></svg></button>
                            <a href="#">My Daily Article</a>
                        </div>
                    </div>
                    <Image
                        src="/images/banner1.png"
                        alt="Websekai Logo"
                        className="xl:w-1/2 ml-8 xl:ml-0 block xl:hidden"
                        width={2000}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;