import React, {createContext, useContext, useReducer} from 'react'

export const StateContext = createContext();
// state provider wraps the app
export const StateProvider = ({reducer, initialState, children}) =>
(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

