export default function Product({ image, title, description }) {

    return (
        <div className="product">
            <img className="product-image"
                src={process.env.PUBLIC_URL + `/images/featured/${image}`}
                alt="" />
            <div className="product-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}