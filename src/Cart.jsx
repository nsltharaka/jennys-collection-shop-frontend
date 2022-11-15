import CartItem from "./components/Cart/CartItem"
import "./styles/Cart.css"
import useAppContext from "./useAppContext"
import { Link } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi"

export default function Cart() {

    const { cartItems } = useAppContext()

    const components = cartItems.map(i => <CartItem
        key={i.id}
        id={i.id}
        image={i.image}
        title={i.title}
        price={i.price}
        qty={i.qty}
    />)

    return (
        cartItems.length > 0 ?
            <div className="cart">
                {components}
                <div className="subTotal">
                    <h4> Sub Total <br /> LKR {cartItems
                        .map(i => i.price * i.qty)
                        .reduce((acc = 0, x) => acc + x)}.00</h4>
                </div>
                <div className="cart-buttons">
                    <button className="cart-btn placeOrder">Place Order</button>
                    <Link to="/products"><button className="cart-btn continue">Continue Shopping</button></Link>
                </div>
            </div>
            :
            <div className="emptyCart">
                <HiOutlineShoppingBag className="emptyCart-icon" />
                <p>your cart is empty</p>
                <Link to="/products">
                    <button className="btn-continueShopping">Continue Shopping</button>
                </Link>
            </div>
    )
}