export default function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="aboutUs-text">
                <h1 className="aboutUs-title">About us</h1>
                <p className="aboutUs-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum iste ex dignissimos. Dolore voluptatem suscipit quo maiores tempora quia tempore deleniti, architecto dignissimos aspernatur ex cumque provident consequuntur quae!</p>
                <p className="aboutUs-description"> architecto dignissimos aspernatur ex cumque provident consequuntur quae!</p>
                <button className="aboutUs-button">read more</button>
            </div>
            <img className="aboutUs-image" src={process.env.PUBLIC_URL + '/images/about.jpg'} alt="" />
        </section>
    )
}