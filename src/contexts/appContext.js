import React, { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

export const useStateValue = () => useContext(AppContext);

export const userInfo = {
  email: "",
  username: "",
  id: "",
};
