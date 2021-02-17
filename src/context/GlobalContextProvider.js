import React, {useReducer, createContext, useEffect} from 'react'

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
const initialState = {theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
   useEffect(() => {
      
       return ( localStorage.setItem('theme', state.theme)) 
   }, [state])
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
            {children}
            </GlobalStateContext.Provider>  
        </GlobalDispatchContext.Provider>
    )
}

export default GlobalContextProvider
