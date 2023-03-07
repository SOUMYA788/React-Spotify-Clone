import { createContext, useContext, useReducer } from "react";

const AppContext = createContext()

const AppProvider = ({ reducerData, reducer, children }) => { 
    return(
        <AppContext.Provider value={useReducer(reducer, reducerData)}>
            {children}
        </AppContext.Provider>
    )
}

const useCurrentState = () => useContext(AppContext)

export {AppContext, AppProvider, useCurrentState}