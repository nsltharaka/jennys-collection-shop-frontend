import CartItem from "./components/Cart/CartItem"
import "./styles/Cart.css"
import useAppContext from "./useAppContext"

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
        <div className="cart">
            {components}
        </div>
    )
}