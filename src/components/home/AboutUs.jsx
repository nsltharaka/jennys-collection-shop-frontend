import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="aboutUs-text">
                <h1 className="aboutUs-title">About us</h1>
                <p className="aboutUs-description">We're based in Negombo, Sri Lanka and create pieces that make you feel confident, fabulous and amazing in. Our handmade pieces are sustainably created in Sri Lanka from high quality fabrics. All our fabrics and materials are sourced and designed by local textile designers. We choose fabrics that maintain healthy hair care.
                </p>
                <p className="aboutUs-description">
                    We are female founded and donate a percentage of our sales to a female run & focused charity each month.
                </p>
                <Link to="/about">
                    <button className="aboutUs-button">read more</button>
                </Link>
            </div>
            <img className="aboutUs-image" src={process.env.PUBLIC_URL + '/images/about.jpg'} alt="" />
        </section>
    )
}