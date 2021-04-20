import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "./localStorage";

const preLoadedState = loadState();

let initialState = preLoadedState.slide
  ? preLoadedState.slide
  : {
      slideData: {
        byId: {},
        // allIds: [],
      },
    };

console.log(preLoadedState);

const slice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    saveSlideData: (state, action) => {
      let id = action.payload.id;
      let data = action.payload.data;

      state.slideData.byId[id] = data;
    },
  },
});

export const selectSlideData = (id) => (state) => {
  return state.slide.slideData.byId[id];
};
export const { saveSlideData } = slice.actions;
export default slice.reducer;