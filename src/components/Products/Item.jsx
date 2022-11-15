import { useState } from "react"
import { FaCartPlus } from "react-icons/fa"
import useAppContext from "../../useAppContext"

export default function Item({ id, image, title, price }) {

    const [buttonText, setButtonText] = useState("Add To Cart")

    const { cartItems, setCartItems } = useAppContext()

    const handleAddToCart = (itemID) => {

        let match = cartItems.find(i => i.id === itemID)

        if (match) {
            setCartItems(prev => [{ ...match, qty: match.qty + 1 }, ...prev.filter(i => i.id !== match.id)])

        } else {
            setCartItems(prev => [{
                id: id,
                image: image,
                title: title,
                price: price,
                qty: 1
            }, ...prev])
        }

        setButtonText("Added")
        setTimeout(() => {
            setButtonText("Add To Cart")
        }, 500);
    }

    return (
        <div className="item">
            <img className="item-image"
                src={process.env.PUBLIC_URL + `images/items/${image}`}
                alt="item"
            />

            <div className="item-text">
                <h3 className="item-title">{title}</h3>
                <p className="item-price">LKR {price}</p>
                <button className="item-add--button" onClick={() => handleAddToCart(id)}>
                    <FaCartPlus className="item-add--icon" />{buttonText}
                </button>
            </div>
        </div>
    )
}