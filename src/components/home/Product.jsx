export default function Product() {

    return (
        <div className="product">
            <img className="product-image"
                src={process.env.PUBLIC_URL + '/images/featured/tail_scrunchie.jpg'}
                alt="" />
            <div className="product-text">
                <h3>Tail Scrunchies</h3>
                <p>Lorem ipsum dolor sit amet consr adipisicing elit. Labore, in quis minus alias</p>
            </div>
        </div>
    )
}