import { FaCartPlus } from "react-icons/fa"

export default function Item({ image, title, price }) {
    return (
        <div className="item">
            <img className="item-image"
                src={process.env.PUBLIC_URL + `images/items/${image}`}
                alt="item"
            />

            <div className="item-text">
                <h3 className="item-title">{title}</h3>
                <p className="item-price">LKR {price}</p>
                <button className="item-add--button">
                    <FaCartPlus className="item-add--icon" />Add To Cart
                </button>
            </div>
        </div>
    )
}