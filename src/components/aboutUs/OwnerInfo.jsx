import ownerImg from "../../images/randomOwner.jpg"

export default function OwnerInfo() {

    return (
        <section className="ownerInfo">
            <img className="ownerInfo-image" src={ownerImg} alt="Jenny Taniya" />
            <div className="ownerInfo-text">
                <h1 className="ownerInfo-text--title">Meet Jenny!</h1>
                <p className="ownerInfo-text--desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique repellendus accusamus qui? Labore aperiam quo alias ducimus rem hic veniam, expedita veritatis praesentium sapiente maxime nobis voluptatum est?
                </p>
            </div>
        </section>
    )
}