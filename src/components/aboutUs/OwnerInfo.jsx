import ownerImg from "../../images/randomOwner.jpg"

export default function OwnerInfo() {

    return (
        <section className="ownerInfo">
            <img className="ownerInfo-image" src={ownerImg} alt="Jenny Taniya" />
            <div className="ownerInfo-text">
                <h1 className="ownerInfo-text--title">Meet Jenny!</h1>
                <p className="ownerInfo-text--desc">
                    Hi! My name is Jenny and I started Jenny's Collection in 2018 as a side hustle. Since that time, the business has grown to include a shop and now, an online shop!
                    <br />
                    <br />
                    My commitment to you is that my products will always be made in Sri Lanka using high quality fabrics, so they're made to last.
                </p>
            </div>
        </section>
    )
}