import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import './styles/home.css';
import FeaturedProducts from "./components/home/FeaturedProducts";
import { useContext } from "react";
import { AppContext } from "./context";

export default function Home() {

    const value = useContext(AppContext)

    return (
        <>
            <Hero />
            <AboutUs />
            <FeaturedProducts />
            <h1>{value}</h1>
        </>
    )

}