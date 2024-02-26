import Banner from "../../components/banner";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Works from "../../components/works";

const Home = () => {
    return (
        <section className="bg-white text-nigger font-body font-semibold ">
            <Navbar />
            <Hero />
            <Banner />
            <Works />
        </section>
    )
}

export default Home;