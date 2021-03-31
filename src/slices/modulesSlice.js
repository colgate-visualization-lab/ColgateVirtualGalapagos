import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../api/db";

const initialState = {
  status: "idle",
  id: null,
  name: null,
  slides: null,
  progressData: {},
  currentSlideId: null,
  currentSlide: null,
};

export const modulesSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    getModuleData: (state, action) => {
      console.log(state);
      const index = modules.findIndex(
        (module) => module.name === action.payload
      );
      const currentModule = modules[index];
      state = { ...state, ...currentModule };
      const currentSlideId = currentModule.progressData.lastSeenId;
      state.currentSlideId = currentSlideId;
      state.currentSlide = currentModule.slides[currentSlideId];
    },

    getSlideData: (state, action) => {
      console.log(state);
      const id = action.payload;
      state.currentSlideId = id;
      state.currentSlide = state.slides[id];
    },
  },
});

// export const selectLastSeenId = (state) => state.progressData.lastSeenId - 1;
export const selectSlide = (state) =>
  state.slides && state.slides[state.currentSlideId];
export const selectStatus = (state) => state.status;
export const { getSlideData, getModuleData } = modulesSlice.actions;

export default modulesSlice.reducer;
