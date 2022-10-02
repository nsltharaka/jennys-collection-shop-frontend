import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            <div className="mask"></div>
            <img className="hero-image" src={process.env.PUBLIC_URL + '/images/hero.jpg'} alt="" />
            <div className="hero-text">
                <h1 className="hero-main-text">no more damage <br /> or distractions.</h1>
                <p className="hero-sub-text">A reliable, gentle, adjustable scrunchie that gives you full control over your hair.</p>
                <Link to="/products">
                    <button className="hero-action-button">see our products</button>
                </Link>
            </div>
        </section>
    )
}