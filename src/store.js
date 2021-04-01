import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";

import modulesReducer from "./slices/modulesSlice";
import { saveState } from "./slices/localStorage";

const store = configureStore({
  reducer: {
    module: modulesReducer,
  },
});

// save state to localstorage whenever state.slide.currentSlide
// changes
store.subscribe(
  throttle(() => {
    saveState({
      module: store.getState().module,
    });
  }, 1000)
);

export default store;
