import React, { useRef, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Map } from "immutable";
import transit from "transit-immutable-js";
import isEmpty from "lodash/isEmpty";

//prettier-ignore
import { clearSelectedState, clearFocusedState, getElementAtPosition, 
         createElement, getCursorAtPosition, updateElement, moveElement, 
         resizeElement, duplicateElement, isFocusedTextbox } 
        from "../DrawingActivity/utils";
import { useProgress, useSaveProgress } from "contexts/ProgressContext";

const clearSelectAndFocus = (elements) => {
  return clearSelectedState(clearFocusedState(elements));
};

const convertImmutableToTransitable = (data) => {
  return transit.toJSON(data);
};

const convertTransitableToImmutable = (data) => {
  const converted = transit.fromJSON(data);
  return converted ? converted : List();
};

const loadInitialState = (progress) => {
  let initialState = {};
  if (!isEmpty(progress.state)) {
    initialState = {
      ...progress.state,
      selectedElement: convertTransitableToImmutable(
        progress.state.selectedElement
      ),
      elements: convertTransitableToImmutable(progress.state.elements),
    };
  } else {
    initialState = {
      elements: List(),
      selectedTool: "select",
      selectedElement: null,
      elementInFocus: false,
      action: "idle",
    };
  }
  return initialState;
};

const useDrawing = (id) => {
  const { progress, loadSavedProgress } = useProgress();

  // ref pased to canvas
  const ref = useRef();

  // retrieve data from localstorage
  const storeDispatch = useDispatch();
  let initialState = loadInitialState(progress);

  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SELECT_TOOL": {
        return { ...state, selectedTool: action.value };
      }
      // action types for onMouseDown
      case "CREATE_ELEMENT": {
        // create new element and push to updatedElements list
        let index = state.elements.size;
        let element = createElement(
          action.event,
          index,
          ref,
          state.selectedTool
        );
        let elements = clearSelectedState(state.elements);
        elements = elements.push(element);
        let elementInFocus = state.selectedTool === "textbox";

        return {
          ...state,
          selectedElement: element,
          elementInFocus,
          elements,
          action: "drawing",
          selectedTool: "select",
        };
      }

      case "SELECT_ELEMENT": {
        let element = getElementAtPosition(action.event, ref, state.elements);

        element = element.set("selected", true);
        let index = element.get("index");
        let elements = clearSelectedState(state.elements);
        elements = elements.set(index, element);
        return {
          ...state,
          selectedElement: element,
          elements,
          action: element.get("position") === "inside" ? "moving" : "resizing",
        };
      }

      case "EDIT_TEXTBOX": {
        let element = getElementAtPosition(action.event, ref, state.elements);
        element = element.set("focused", true);
        let index = element.get("index");
        let elements = state.elements.set(index, element);

        return {
          ...state,
          selectedElement: element,
          elements,
          selectedTool: "select",
          elementInFocus: true,
        };
      }

      case "DESELECT_ALL_ELEMENTS": {
        return {
          ...state,
          selectedElement: null,
          elements: clearFocusedState(clearSelectedState(state.elements)),
          elementInFocus: false,
        };
      }

      // action types for onMouseMove
      case "DRAW_ELEMENT": {
        const index = state.elements.size - 1;
        const currentElement = state.elements.get(index);
        //prettier-ignore
        const element = updateElement(action.event, currentElement, ref);
        const elements = state.elements.set(index, element);

        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }

      case "MOVE_ELEMENT": {
        const element = moveElement(action.event, state.selectedElement, ref);
        const elements = state.elements.set(
          state.selectedElement.get("index"),
          element
        );

        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }

      case "RESIZE_ELEMENT": {
        const element = resizeElement(action.event, state.selectedElement, ref);
        const elements = state.elements.set(
          state.selectedElement.get("index"),
          element
        );

        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }

      // action types for onMouseUp
      case "RESET_ACTION": {
        return { ...state, action: "none" };
      }

      // action types for handleOptionsChange
      case "UPDATE_OPTIONS": {
        let element = state.selectedElement.set("options", action.options);
        if (state.selectedElement.get("type") === "textbox") {
          element = element.merge(
            new Map({
              selected: true,
              focused: false,
            })
          );
        }
        let index = state.selectedElement.get("index");
        let elements = state.elements.set(index, element);

        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }

      case "DELETE_ELEMENT": {
        let elements = state.elements;

        if (state.selectedElement) {
          elements = state.elements.delete(state.selectedElement.get("index"));
        }

        return {
          ...state,
          selectedElement: null,
          elements: elements,
        };
      }

      case "DUPLICATE_ELEMENT": {
        if (!state.selectedElement) {
          return { ...state };
        }
        // reset the selected/focused state of currently selected element
        let index = state.selectedElement.get("index");
        let elements = state.elements
          .setIn([index, "selected"], false)
          .setIn([index, "focused"], false);

        // duplicate the element, and pass it's index (which is just size of elements list)
        const element = duplicateElement(
          state.elements.size,
          state.selectedElement
        );
        elements = elements.push(element);

        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }

      case "INPUT_TEXT": {
        let index = state.selectedElement.get("index");
        let elements = state.elements.setIn([index, "text"], action.value);
        let element = elements.get(index);

        return {
          ...state,
          selectedElement: element,
          elements,
          elementInFocus: true,
        };
      }

      case "CLEAR_CANVAS": {
        return { ...state, selectedElement: false, elements: List() };
      }

      // action type for loading slide 11 data from slide 19
      case "LOAD_SAVED_TREE": {
        return {
          ...state,
          elements: state.elements.concat(slide11Elements),
        };
      }

      default: {
        return state;
      }
    }
  }, initialState);

  useSaveProgress({
    state: {
      ...state,
      elements: convertImmutableToTransitable(
        clearSelectAndFocus(state.elements)
      ),
      selectedElement: convertImmutableToTransitable(state.selectedElement),
    },
  });

  return [state, dispatch, ref];
};

export default useDrawing;
