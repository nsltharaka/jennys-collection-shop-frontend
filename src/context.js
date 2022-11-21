import { createContext, useState } from "react";
import items from "./data/products.json"

const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    // mobile navigation bar open or close
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    // search text
    const [searchTerm, setSearchTerm] = useState("");

    // cart items
    const [cartItems, setCartItems] = useState([])

    return (
        <AppContext.Provider value={
            {
                items,
                mobileNavOpen,
                setMobileNavOpen,
                searchTerm,
                setSearchTerm,
                cartItems,
                setCartItems,
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }