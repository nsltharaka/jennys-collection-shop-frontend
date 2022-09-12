import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import './styles/home.css';
import Feedback from "./components/home/Feedbacks";

export default function Home() {

    return (
        <>
            <Hero />
            <AboutUs />
            <Feedback />
        </>
    )

}