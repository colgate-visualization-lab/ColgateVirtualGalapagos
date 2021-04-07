import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";

// import modulesReducer from "./slices/modulesSlice";
import slideReducer from "./slices/slideSlice";
import { saveState } from "./slices/localStorage";

const store = configureStore({
  reducer: {
    // module: modulesReducer,
    slide: slideReducer,
  },
});

// save state to localstorage whenever state.slide.currentSlide
// changes
store.subscribe(
  throttle(() => {
    saveState({
      slide: store.getState().slide,
      // module: store.getState().module,
    });
  }, 1000)
);

export default store;
