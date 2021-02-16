import React, {useReducer, createContext} from 'react'

// Context
// split State & Dispatch into two Prooviders

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        }
            
            
    
        default:
            throw new Error('Error')
    }
}
const initialState = {theme: 'light'}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
            {children}
            </GlobalStateContext.Provider>  
        </GlobalDispatchContext.Provider>
    )
}

export default GlobalContextProvider
