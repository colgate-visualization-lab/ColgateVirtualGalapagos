import React, { useEffect, useContext, createContext } from "react";
import throttle from "lodash/throttle";
import produce from "immer";

const ProgressContext = createContext();
const key = "progress-data";

const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressContext");
  }
  return context;
};

const initialProgressData = {
  currentModule: "",
  currentSlide: "",
  modules: {
    iguana: {
      lastSeenSlide: "",
      progress: {},
      slides: [],
    },
    volcano: {
      lastSeenSlide: "",
      progress: {},
      slides: [],
    },
  },
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    return undefined;
  }
};

const updateProgressData = produce((draft, currentModule, currentSlide) => {
  draft.currentModule = currentModule;
  draft.currentSlide = currentSlide;

  // create slide progress data for current slide if it doesn't exist
  if (!draft.modules[currentModule].slides.includes(currentSlide)) {
    draft.modules[currentModule].progress[currentSlide] = {
      isCompleted: false,
      state: {},
    };

    draft.modules[currentModule].slides.push(currentSlide);
  }

  // update last seen id
  draft.modules[currentModule].lastSeenSlide = currentSlide;
});

const loadProgressData = (currentModule, currentSlide) => {
  let progressData = loadStateFromLocalStorage();

  if (progressData === undefined) {
    progressData = initialProgressData;
  }
  progressData = updateProgressData(progressData, currentModule, currentSlide);
  saveStateToLocalStorage(progressData);
  return progressData;
};

// expects an object {  }
const useSaveProgress = (progress) => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressContext");
  }
  useEffect(() => {
    const { progressData } = context;
    let newProgressData = produce(progressData, (draft) => {
      const { currentModule, currentSlide } = draft;
      draft.modules[currentModule].progress[currentSlide] = {
        ...draft.modules[currentModule].progress[currentSlide],
        ...progress,
      };
    });
    saveStateToLocalStorage(newProgressData);
  }, [progress]);
};

const loadSavedProgress = (id, progressData, currentModule, currentSlide) => {
  if (id) {
    console.log(id);
    id = parseInt(id, 10);
    return progressData.modules[currentModule].progress[id];
  } else {
    return progressData.modules[currentModule].progress[currentSlide];
  }
};

const ProgressContextProvider = ({ children, currentModule, currentSlide }) => {
  const progressData = loadProgressData(currentModule, currentSlide);
  const progress = progressData.modules[currentModule].progress[currentSlide];
  // const

  const value = {
    progressData,
    progress,
    loadSavedProgress: (id) =>
      loadSavedProgress(id, progressData, currentModule, currentSlide),
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressContextProvider, useProgress, useSaveProgress };
