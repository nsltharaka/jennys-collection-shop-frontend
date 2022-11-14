import { IoIosRemoveCircleOutline } from "react-icons/io"
import useAppContext from "../../useAppContext"

export default function CartItem({ id, image, title, price, qty }) {

    const { setCartItems } = useAppContext()

    const handleRemove = (itemID) => {
        setCartItems(prev => [...prev.filter(i => i.id !== itemID)])
    }

    return (
        <div className="cartItem">
            <div className="content">
                <div className="image_title">
                    <img className="cartItem-image" src={`${process.env.PUBLIC_URL}/images/items/${image}`} alt="item" />
                    <p className="cartItem-title">{title}</p>
                </div>
                <div>
                    <p className="cartItem-price">{price}</p>
                    <p>X {qty}</p>
                </div>
            </div>
            <IoIosRemoveCircleOutline className="btn-remove" onClick={() => handleRemove(id)} />
        </div>
    )
}