import Item from "./Item";

export default function ItemsSection() {
    return (
        <section className="itemsSection">
            <h1 className="itemsSection-title">Head Bands</h1>
            {/* renders an array of items */}
            <div className="items-container">
                <Item
                    image={"head_band.jpg"}
                    title={"Head Band - Navy Blue"}
                    price={"180.00"}
                />
            </div>
        </section>
    )
}