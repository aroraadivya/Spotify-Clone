import React,{
    createContext, 
    useContext, 
    useReducer
} from "react";

export const StateContezt = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export default DataLayer;