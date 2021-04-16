import React, { useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Options from "../../components/DrawAreaOptions";
import PhyloTreeSlideInstructions from "../../components/PhyloTreeSlideInstructions";
import PhyloTreeSidebar from "../../components/PhyloTreeSidebar";
import { MainActivityArea } from "../../components/PhyloTree";
import DrawAreaMenu from "./DrawAreaMenu";
//prettier-ignore
import {  getElementAtPosition, currentlyEditingTextbox, 
          pressedCtrlD, pressedDelete, mouseOverElement, updateMouseCursor } from "./utils";
import { Slide11Context, Slide11DrawingContext } from "../../contexts";
import useDrawing from "../../hooks/drawing";

const useStyles = makeStyles((theme) => ({
  drawArea: {
    position: "relative",
    height: "50vh",
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 300,
  },

  menu: {
    background: "white",
    border: "1px rgb(220,220,220)",
    padding: theme.spacing(2, 1),
    // minWidth: "240px",
  },
}));

const DrawArea = () => {
  const { id } = useContext(Slide11Context);
  // created custom hook to handle most state changes in this component
  let [state, dispatch, ref] = useDrawing(id);
  // prettier-ignore
  let { elements, elementInFocus, selectedElement, action, selectedTool } = state;

  const classes = useStyles();

  useEffect(() => {
    window.document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [elementInFocus]);

  const handleKeyDown = (event) => {
    if (elementInFocus) {
      return;
    }
    if (pressedCtrlD(event)) {
      dispatch({ type: "DUPLICATE_ELEMENT" });
    } else if (pressedDelete(event)) {
      dispatch({ type: "DELETE_ELEMENT" });
    }
    event.preventDefault();
  };

  // callback props for DrawAreaToolbar
  const handleToolChange = (name) => {
    dispatch({ type: "SELECT_TOOL", value: name });
  };

  /* Set of callback functions that handle the "drawing" aspect
     Essentially, they populate the elements list appropriately */
  const handleMouseDown = (event) => {
    event.persist();
    let element = getElementAtPosition(event, ref, elements);
    if (selectedTool === "select") {
      if (!element) {
        dispatch({ type: "DESELECT_ALL_ELEMENTS" });
      } else if (!currentlyEditingTextbox(element)) {
        dispatch({ type: "SELECT_ELEMENT", event });
      }
    } else if (selectedTool === "textbox") {
      if (element && element.get("type") === "textbox") {
        dispatch({ type: "EDIT_TEXTBOX", event });
      } else {
        dispatch({ type: "CREATE_ELEMENT", event });
      }
    } else {
      dispatch({ type: "CREATE_ELEMENT", event });
    }
  };

  const handleMouseMove = (event) => {
    event.persist();

    if (mouseOverElement) {
      updateMouseCursor(event, ref, elements, selectedTool);
    }

    if (action === "drawing") {
      dispatch({ type: "DRAW_ELEMENT", event });
    } else if (action === "moving") {
      dispatch({ type: "MOVE_ELEMENT", event });
    } else if (action === "resizing") {
      dispatch({ type: "RESIZE_ELEMENT", event });
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
  const handleLoadSavedData = () => {
    handleClearCanvas();
    dispatch({ type: "LOAD_SAVED_TREE" });
  };

  // callback to save tree and play next audio when user is done
  const handleDone = () => {};

  // const contextValues = {
  //   id,
  //   element: selectedElement,
  //   handleOptionsChange,
  //   handleAction,
  //   handleClearCanvas,
  //   handleDone,
  //   handleLoadSavedData,
  // };

  return (
    // <Slide11DrawingContext.Provider>

    <Grid container spacing={0}>
      <PhyloTreeSidebar>
        <Grid item>
          <PhyloTreeSlideInstructions instructions="Draw a phylogenetic tree on the canvas using the tools provided. Once finished, click 'Done' below to continue  " />
        </Grid>
        <Grid item>
          <DrawAreaMenu
            id={id}
            handleClearCanvas={handleClearCanvas}
            handleLoadSavedData={handleLoadSavedData}
            handleDone={handleDone}
          />
        </Grid>
        <Grid item>
          <Options
            element={selectedElement}
            handleOptionsChange={handleOptionsChange}
            handleAction={handleAction}
          />
        </Grid>
      </PhyloTreeSidebar>
      <MainActivityArea>
        <Grid item xs={12}>
          <DrawAreaToolbar
            handleToolChange={handleToolChange}
            selected={selectedTool}
          />
        </Grid>
        <div
          ref={ref}
          className={classes.drawArea}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Drawing elements={elements} handleTextChange={handleTextChange} />
        </div>
      </MainActivityArea>
    </Grid>
    // </Slide11DrawingContext.Provider>
  );
};

export default DrawArea;
