import React, { useRef, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Map } from "immutable";
import transit from "transit-immutable-js";

import { selectSlideData, saveSlideData } from "../slices/slideSlice";
//prettier-ignore
import { clearSelectedState, clearFocusedState, getElementAtPosition, 
         createElement, getCursorAtPosition, updateElement, moveElement, 
         resizeElement, duplicateElement, isFocusedTextbox } 
        from "../containers/DrawArea/utils";

// call this when elements changes to store it in local storage
const saveDataToLocalStorage = (dispatch, elements, id) => {
  const statelessElements = clearSelectedState(clearFocusedState(elements));
  const serializedElements = transit.toJSON(statelessElements);
  dispatch(saveSlideData({ id, data: serializedElements }));
};

const loadSlideData = (id) => {
  let elements = useSelector(selectSlideData(id));
  elements = elements ? transit.fromJSON(elements) : List();
  return elements;
};

const useDrawing = (id) => {
  // ref pased to canvas
  const ref = useRef();

  // retrieve data from localstorage
  const storeDispatch = useDispatch();
  let elements = loadSlideData(id);
  let slide11Elements = loadSlideData("11"); // used in slide 19

  let initialState = {
    elements: elements,
    selectedTool: "select",
    selectedElement: null,
    elementInFocus: false,
    action: "idle",
  };

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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);

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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
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
        saveDataToLocalStorage(storeDispatch, elements, id);
        return {
          ...state,
          selectedElement: element,
          elements,
          elementInFocus: true,
        };
      }

      case "CLEAR_CANVAS": {
        saveDataToLocalStorage(storeDispatch, List(), id);
        return { ...state, selectedElement: false, elements: List() };
      }

      // action type for loading slide 12 data from slide 19
      case "LOAD_SLIDE_12_TREE": {
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

  return [state, dispatch, ref];
};

export default useDrawing;
