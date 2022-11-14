import { IoIosRemoveCircleOutline } from "react-icons/io"

export default function CartItem() {
    return (
        <div className="cartItem">
            <div className="content">
                <div className="image_title">
                    <img className="cartItem-image" src={process.env.PUBLIC_URL + "images/items/boolband.jpg"} alt="item" />
                    <p className="cartItem-title">bool band - black</p>
                </div>
                <p className="cartItem-price">LKR 30.00</p>
            </div>
            <IoIosRemoveCircleOutline className="btn-remove" />
        </div>
    )
}