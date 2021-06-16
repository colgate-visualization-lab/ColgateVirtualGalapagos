import { saveToLocalStorage } from "../utils";
import {
  LOGOUT,
  LOGIN,
  LOGIN_FAIL,
  AUTH_LOADING,
  SIGNUP_FAIL,
  SIGNUP,
} from "./types";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN:
      const { user, token } = action.payload || {};
      saveToLocalStorage({ token });
      saveToLocalStorage({ user });
      return {
        ...state,
        isAuthenticated: true,
        user,
        isLoading: false,
        token,
      };

    case SIGNUP:
      return {
        ...state,
        isLoading: false,
      };

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
