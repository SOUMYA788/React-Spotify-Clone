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

/**
 * use to update the global state.
 * @param {Function} dispatch function helps to update the state.
 * @param {string} type type of dispatch
 * @param {object} payload object with key and value. i.e. {data: "data"}
 * @returns the complete dispatch function.
 */
const dispatchData = (dispatch, type, payload) => {
    return(
        dispatch({
            type,
            ...payload
        })
    )
}

export {AppContext, AppProvider, useCurrentState, dispatchData}