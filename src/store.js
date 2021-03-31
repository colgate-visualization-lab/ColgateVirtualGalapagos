import { configureStore } from "@reduxjs/toolkit";

import modulesReducer from "./slices/modulesSlice";
import { saveState } from "./slices/localStorage";

const store = configureStore({
  reducer: {
    module: modulesReducer,
  },
});

// save state to localstorage whenever state.slide.currentSlide
// changes
store.subscribe(() => {
  saveState({
    module: store.getState().module,
  });
});

export default store;
