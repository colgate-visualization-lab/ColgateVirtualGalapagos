import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./slices/modulesSlice";

export default configureStore({
  reducer: {
    modulesReducer,
  },
});
