import { createContext } from "react";

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={'hello world '}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }