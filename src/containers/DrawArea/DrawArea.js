import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import transit from "transit-immutable-js";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Options from "../../components/DrawAreaOptions";
import PhyloTreeHeader from "../PhyloTreeHeader";
import {
  saveDrawing,
  selectElements,
  selectStatus,
} from "../../slices/modulesSlice";
//prettier-ignore
import { clearSelectedState, clearFocusedState, getElementAtPosition, 
         createElement, getCursorAtPosition, updateElement, moveElement, 
         resizeElement, duplicateElement } from "./utils";

const useStyles = makeStyles(() => ({
  drawArea: {
    position: "relative",
    height: "50vh",
    width: "100%",
    backgroundColor: "white",
    zIndex: 300,
  },
}));

const DrawArea = ({ tabIndex, handleTabChange }) => {
  const dispatch = useDispatch();
  const savedElements = useSelector(selectElements);
  const status = useSelector(selectStatus);
  const classes = useStyles();
  const drawAreaRef = useRef();

  const [elements, setElements] = useState(
    savedElements ? transit.fromJSON(savedElements) : List()
  );
  const [selectedElement, setSelectedElement] = useState(null);
  const [focusedElement, setFocusedElement] = useState(null);
  const [action, setAction] = useState("idle");
  const [selectedTool, setSelectedTool] = useState("select");

  useEffect(() => {
    if (status === "slideDataLoaded") {
      const stateClearedElements = clearSelectedState(
        clearFocusedState(elements)
      );
      const serializedElements = transit.toJSON(stateClearedElements);
      dispatch(saveDrawing(serializedElements));
    }
  }, [elements]);

  // callback props for DrawAreaToolbar
  const handleToolChange = (name) => {
    setSelectedTool(name);
  };

  /* Set of callback functions that handle the "drawing" aspect
     Essentially, they populate the elements list appropriately */
  const handleMouseDown = (e) => {
    // reset selected and focused states
    let updatedElements = clearSelectedState(elements);
    setSelectedElement(null);
    setFocusedElement(null);

    let index;
    let element = getElementAtPosition(e, drawAreaRef, updatedElements);

    // handle onMouseDown when select is the selected tool
    if (selectedTool === "select") {
      // selectedElement and action are updated in this condition
      updatedElements = clearFocusedState(updatedElements);

      if (element) {
        index = element.get("index");
        element = element.set("selected", true);
        setSelectedElement(element);

        // this is to avoid moving a textbox when it's focused on (i.e. when it's being edited)
        // prettier-ignore
        if (element.get("type") === "textbox" && element.get("focused") === true) {
          return;
        }

        updatedElements = updatedElements.set(index, element);
        if (element.get("position") === "inside") {
          setAction("moving");
        } else {
          setAction("resizing");
        }
      }

      setElements(updatedElements);
    } else if (selectedTool !== "select") {
      // handles the case of when we want to edit/type into a textbox - in this case, we don't
      //  create a new textbox
      // prettier-ignore
      if (element && element.get("type") === "textbox" && selectedTool === "textbox") {
        index = element.get("index");
        element = element.set("focused", true);
        updatedElements = updatedElements.set(index, element)
     
      } else {
        // create new element and push to updatedElements list
        index = updatedElements.size;
        element = createElement(e, index, drawAreaRef, selectedTool);
        updatedElements = updatedElements.push(element);
  
        // update action
        setAction("drawing");
      }

      // update other parts of state
      setSelectedElement(element);
      setElements(updatedElements);
      setSelectedTool("select");
    }
  };

  const handleMouseMove = (e) => {
    if (selectedTool === "select" || selectedTool === "textbox") {
      const element = getElementAtPosition(e, drawAreaRef, elements);
      e.target.style.cursor = getCursorAtPosition(element, selectedTool);
    }

    if (action === "drawing") {
      const index = elements.size - 1;
      const currentElement = elements.get(index);
      //prettier-ignore
      const updatedElement = updateElement(e, currentElement, drawAreaRef);
      setElements(elements.set(index, updatedElement));
      setSelectedElement(updatedElement);
    } else if (action === "moving") {
      const updatedElement = moveElement(e, selectedElement, drawAreaRef);
      setElements(elements.set(selectedElement.get("index"), updatedElement));
      setSelectedElement(updatedElement);
    } else if (action === "resizing") {
      const updatedElement = resizeElement(e, selectedElement, drawAreaRef);
      setElements(elements.set(selectedElement.get("index"), updatedElement));
      setSelectedElement(updatedElement);
    }
  };

  const handleMouseUp = (e) => {
    setAction("none");
  };

  /*   
    Callbacks for Options component - the side bar that allows you to edit aspects of the selected element
  */

  // updates options (color, size, etc) for the selected element
  const handleOptionsChange = (options) => {
    if (selectedElement) {
      let updatedElement = selectedElement.set("options", options);
      if (selectedElement.get("type") === "textbox") {
        updatedElement = updatedElement.merge(
          new Map({
            selected: true,
            focused: false,
          })
        );
      }
      const index = selectedElement.get("index");
      setSelectedElement(updatedElement);
      setElements(elements.set(index, updatedElement));
    }
  };

  // performs an action (deleting or duplicating a selected element)
  const handleAction = (action) => {
    if (action === "delete") {
      setElements(elements.delete(selectedElement.get("index")));
      setSelectedElement(null);
    } else if (action === "duplicate") {
      // reset the selected/focused state of currently selected element
      const index = selectedElement.get("index");
      let updatedElements = elements
        .setIn([index, "selected"], false)
        .setIn([index, "focused"], false);

      // duplicate the element, and pass it's index (which is just size of elements list)
      const newElement = duplicateElement(elements.size, selectedElement);
      setElements(updatedElements.push(newElement));
      setSelectedElement(newElement);
    }
  };

  const handleClearCanvas = () => {
    setElements(List());
  };

  /* callback for Drawing component (this is what displays the drawings lol)
      Need to have the text of all textboxes stored in elements as well */
  const handleTextChange = (value) => {
    const index = selectedElement.get("index");
    const updatedElements = elements.setIn([index, "text"], value);
    setElements(updatedElements);
    setSelectedElement(updatedElements.get(index));
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
            element={selectedElement}
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
