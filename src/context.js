import { createContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({ children }) => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <AppContext.Provider value={
            {
                mobileNavOpen,
                setMobileNavOpen,
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }