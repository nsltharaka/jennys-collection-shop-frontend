import { Link } from "react-router-dom"

export default function Product({ image, title, description, handleClick }) {

    return (
        <div className="product" onClick={() => handleClick(title.toLowerCase())}>
            <Link to="/products">
                <img className="product-image"
                    src={process.env.PUBLIC_URL + `/images/featured/${image}`}
                    alt="" />
            </Link>
            <div className="product-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}