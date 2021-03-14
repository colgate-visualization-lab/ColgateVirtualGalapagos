import React, {createContext, useContext, useReducer} from 'react'

export const AppContext = createContext()

export const useStateValue = () => useContext(AppContext)

export const initialState = {
    notes: [], 
    modal: false, 
    edit: null, 
    show: null,
    showModal: false
}
