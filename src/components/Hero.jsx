import hero_image from "../images/hero.jpg"

export default function Hero() {
    return (
        <section className="hero">
            <div className="mask"></div>
            <img className="hero-image" src={hero_image} alt="" />
            <div className="hero-text">
                {/* <p className="hero-sub-text light">NO MORE SLIPPING,<br /> READJUSTING,</p> */}
                <h1 className="hero-main-text">no more damage <br /> or distractions.</h1>
                <p className="hero-sub-text">A reliable, gentle, adjustable scrunchie that gives you full control over your hair.</p>
                <button className="hero-action-button">see our products</button>
            </div>


        </section>
    )
}