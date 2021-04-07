import React, { useState, useEffect, useRef, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import transit from "transit-immutable-js";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Options from "../../components/DrawAreaOptions";
import PhyloTreeHeader from "../PhyloTreeHeader";
import { selectSlideData, saveSlideData } from "../../slices/slideSlice";
//prettier-ignore
import { clearSelectedState, clearFocusedState, getElementAtPosition, 
         createElement, getCursorAtPosition, updateElement, moveElement, 
         resizeElement, duplicateElement, isFocusedTextbox } 
        from "./utils";

const useStyles = makeStyles(() => ({
  drawArea: {
    position: "relative",
    height: "50vh",
    width: "100%",
    backgroundColor: "white",
    zIndex: 300,
  },
}));

// call this when elements changes to store it in local storage
const saveDataToLocalStorage = (dispatch, elements, id) => {
  const stateClearedElements = clearSelectedState(clearFocusedState(elements));
  const serializedElements = transit.toJSON(stateClearedElements);
  dispatch(saveSlideData({ id, data: serializedElements }));
};

const useDrawArea = (id) => {
  const drawAreaRef = useRef();

  // retrieve data from localstorage
  const storeDispatch = useDispatch();
  let elements = useSelector(selectSlideData(id));
  let slide12Elements = useSelector(selectSlideData("11"));
  elements = elements ? transit.fromJSON(elements) : List();
  slide12Elements = slide12Elements
    ? transit.fromJSON(slide12Elements)
    : List();

  let initialState = {
    elements: elements,
    selectedElement: null,
    action: "idle",
    selectedTool: "select",
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
          drawAreaRef,
          state.selectedTool
        );
        let elements = clearSelectedState(state.elements);
        elements = elements.push(element);
        saveDataToLocalStorage(storeDispatch, elements, id);
        return {
          ...state,
          selectedElement: element,
          elements,
          action: "drawing",
          selectedTool: "select",
        };
      }
      case "SELECT_ELEMENT": {
        let element = getElementAtPosition(
          action.event,
          drawAreaRef,
          state.elements
        );

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
        let element = getElementAtPosition(
          action.event,
          drawAreaRef,
          state.elements
        );
        element = element.set("focused", true);
        let index = element.get("index");
        let elements = state.elements.set(index, element);
        saveDataToLocalStorage(storeDispatch, elements, id);

        return {
          ...state,
          selectedElement: element,
          elements,
          selectedTool: "select",
        };
      }
      case "RESET_FOCUS_AND_SELECTED_STATUS": {
        return {
          ...state,
          selectedElement: null,
          elements: clearFocusedState(clearSelectedState(state.elements)),
        };
      }

      // action types for onMouseMove
      case "DRAW_ELEMENT": {
        const index = state.elements.size - 1;
        const currentElement = state.elements.get(index);
        //prettier-ignore
        const element = updateElement(action.event, currentElement, drawAreaRef);
        const elements = state.elements.set(index, element);
        saveDataToLocalStorage(storeDispatch, elements, id);
        return {
          ...state,
          selectedElement: element,
          elements,
        };
      }
      case "MOVE_ELEMENT": {
        const element = moveElement(
          action.event,
          state.selectedElement,
          drawAreaRef
        );
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
        const element = resizeElement(
          action.event,
          state.selectedElement,
          drawAreaRef
        );
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
      case "UPDATE_CURSOR": {
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
        };
      }
      case "CLEAR_CANVAS": {
        saveDataToLocalStorage(storeDispatch, List(), id);
        return { ...state, selectedElement: false, elements: List() };
      }

      // action type for loading slide 12 data from slide 19
      case "LOAD_SLIDE_12_TREE": {
        console.log(slide12Elements);
        return {
          ...state,
          elements: state.elements.concat(slide12Elements),
        };
      }
      default: {
        return state;
      }
    }
  }, initialState);

  return [state, dispatch, drawAreaRef];
};

const DrawArea = ({ id, tabIndex, handleTabChange }) => {
  const classes = useStyles();

  // created custom hook to handle most state changes in this component
  let [state, dispatch, drawAreaRef] = useDrawArea(id);
  let { elements, selectedElement, action, selectedTool } = state;

  useEffect(() => {
    window.document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "d") {
      dispatch({ type: "DUPLICATE_ELEMENT" });
      event.preventDefault();
    } else if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      dispatch({ type: "DELETE_ELEMENT" });
    }
  };

  // callback props for DrawAreaToolbar
  const handleToolChange = (name) => {
    dispatch({ type: "SELECT_TOOL", value: name });
  };

  /* Set of callback functions that handle the "drawing" aspect
     Essentially, they populate the elements list appropriately */
  const handleMouseDown = (e) => {
    e.persist();
    let element = getElementAtPosition(e, drawAreaRef, elements);
    if (selectedTool === "select") {
      if (element && !isFocusedTextbox(element)) {
        dispatch({ type: "SELECT_ELEMENT", event: e });
      } else {
        dispatch({ type: "RESET_FOCUS_AND_SELECTED_STATUS" });
      }
    } else if (selectedTool === "textbox") {
      if (element && element.get("type") === "textbox") {
        dispatch({ type: "EDIT_TEXTBOX", event: e });
      } else {
        dispatch({ type: "CREATE_ELEMENT", event: e });
      }
    } else {
      dispatch({ type: "CREATE_ELEMENT", event: e });
    }
  };

  const handleMouseMove = (e) => {
    e.persist();
    if (selectedTool === "select" || selectedTool === "textbox") {
      const element = getElementAtPosition(e, drawAreaRef, elements);
      e.target.style.cursor = getCursorAtPosition(element, selectedTool);
    }

    if (action === "drawing") {
      dispatch({ type: "DRAW_ELEMENT", event: e });
    } else if (action === "moving") {
      dispatch({ type: "MOVE_ELEMENT", event: e });
    } else if (action === "resizing") {
      dispatch({ type: "RESIZE_ELEMENT", event: e });
    }
  };

  const handleMouseUp = () => {
    dispatch({ type: "RESET_ACTION" });
  };

  /*   
    Callbacks for Options component - the side bar that allows you to edit aspects of the selected element
  */
  // updates options (color, size, etc) for the selected element
  const handleOptionsChange = (options) => {
    if (selectedElement) {
      dispatch({ type: "UPDATE_OPTIONS", options });
    }
  };

  // performs an action (deleting or duplicating a selected element)
  const handleAction = (action) => {
    if (action === "delete") {
      dispatch({ type: "DELETE_ELEMENT" });
    } else if (action === "duplicate") {
      dispatch({ type: "DUPLICATE_ELEMENT" });
    }
  };

  const handleClearCanvas = () => {
    // setElements(List());
    dispatch({ type: "CLEAR_CANVAS" });
  };

  /* callback for Drawing component (this is what displays the drawings lol)
      Need to have the text of all textboxes stored in elements as well */
  const handleTextChange = (value) => {
    dispatch({ type: "INPUT_TEXT", value });
  };

  // callback to load slide 12 data in slide 19
  const handleLoadSlide12Data = () => {
    dispatch({ type: "LOAD_SLIDE_12_TREE" });
  };

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <PhyloTreeHeader
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
          header="Draw a phylogenetic tree on the canvas"
        >
          <DrawAreaToolbar
            handleToolChange={handleToolChange}
            selected={selectedTool}
          />
        </PhyloTreeHeader>
      </Grid>
      <Grid item xs={12}>
        <div
          ref={drawAreaRef}
          className={classes.drawArea}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Options
            id={id}
            element={selectedElement}
            handleLoadSlide12Data={handleLoadSlide12Data}
            handleOptionsChange={handleOptionsChange}
            handleAction={handleAction}
            handleClearCanvas={handleClearCanvas}
          />

          <Drawing elements={elements} handleTextChange={handleTextChange} />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
