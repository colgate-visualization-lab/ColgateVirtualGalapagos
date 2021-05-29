import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";

import slideReducer from "./slices/slideSlice";
import { saveState } from "./slices/localStorage";

const store = configureStore({
  reducer: {
    slide: slideReducer,
  },
});

// save state to localstorage whenever state.slide.currentSlide
// changes
store.subscribe(
  throttle(() => {
    saveState({
      slide: store.getState().slide,
    });
  }, 1000)
);

export default store;
