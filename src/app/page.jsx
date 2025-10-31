import Banner from "../../components/banner";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Works from "../../components/works";
import Footer from "../../components/footer";
import Carrer from "../../components/carrer";

const Home = () => {
    return (
        <section className="bg-white text-nigger font-body font-semibold ">
            <Navbar />
            <Hero />
            <Carrer />
            <Banner />
            <Works />
            <Footer />
        </section>
    )
}

export default Home;