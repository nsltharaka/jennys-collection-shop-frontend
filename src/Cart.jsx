import CartItem from "./components/Cart/CartItem"
import "./styles/Cart.css"

export default function Cart() {
    return (
        <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}