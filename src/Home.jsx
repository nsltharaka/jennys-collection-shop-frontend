import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import './styles/home.css';
import FeaturedProducts from "./components/home/FeaturedProducts";

export default function Home() {

    return (
        <>
            <Hero />
            <AboutUs />
            <FeaturedProducts />
        </>
    )

}