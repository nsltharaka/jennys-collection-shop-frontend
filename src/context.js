import { createContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    // mobile navigation bar open or close
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    // search text
    const [searchText, setSearchText] = useState("");

    return (
        <AppContext.Provider value={
            {
                mobileNavOpen,
                setMobileNavOpen,
                searchText,
                setSearchText,
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }