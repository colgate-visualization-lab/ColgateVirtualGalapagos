import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../api/db";
import { loadState } from "./localStorage";

const preLoadedState = loadState();

const initialState = preLoadedState
  ? preLoadedState.module
  : {
      status: "idle", // could be loading,
      id: null,
      name: null,
      slides: null,
      progressData: {},
      currentSlideId: null,
      currentSlide: null,
    };

export const slice = createSlice({
  name: "module",
  initialState,
  reducers: {
    getModuleData: (state, action) => {
      const index = modules.findIndex(
        (module) => module.name === action.payload
      );
      const currentModule = modules[index];
      for (let property in currentModule) {
        state[property] = currentModule[property];
      }
      const currentSlideId = currentModule.progressData.lastSeenId;
      state.currentSlideId = currentSlideId;
      state.currentSlide = currentModule.slides[currentSlideId];
      state.status = "moduleDataLoaded";
    },

    getSlideData: (state, action) => {
      const id = action.payload;
      state.currentSlideId = id;
      state.currentSlide = state.slides[id - 1];
      state.status = "slideDataLoaded";
    },

    saveDrawing: (state, action) => {
      const newSavedData = { elements: action.payload };
      state.slides[state.currentSlideId - 1].savedData = { ...newSavedData };
      state.currentSlide.savedData = { ...newSavedData };
    },
  },
});

// export const selectLastSeenId = (state) => state.progressData.lastSeenId - 1;
export const selectSlide = (state) =>
  state.module.slides && state.module.currentSlide;
export const selectStatus = (state) => state.module.status;
export const selectElements = (state) =>
  state.module?.currentSlide?.savedData?.elements;

export const { getSlideData, getModuleData, saveDrawing } = slice.actions;

export default slice.reducer;
