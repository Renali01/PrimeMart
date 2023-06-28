import React, { createContext, useContext, useReducer } from "react";

// Prepares dataLayer
export const StateContext = createContext();

// Wrap our app and provide Data Layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info from data layer
export const useStateValue = () => useContext(StateContext);