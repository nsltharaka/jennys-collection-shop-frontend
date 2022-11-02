import Location from "./components/aboutUs/Location";
import OwnerInfo from "./components/aboutUs/OwnerInfo";
import Vision from "./components/aboutUs/Vision";
import "./styles/AboutUs.css";

export default function AboutUs() {
    return (
        <>
            <OwnerInfo />
            <Vision />
            <Location />
        </>
    )
}