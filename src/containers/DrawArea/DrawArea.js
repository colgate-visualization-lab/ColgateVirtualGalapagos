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
import { unpackElementDetails } from "./utils";
import {
  saveDrawing,
  selectElements,
  selectStatus,
} from "../../slices/modulesSlice";

const relativeCoordsForEvent = (e, drawAreaRef) => {
  const boundingRect = drawAreaRef.current.getBoundingClientRect();
  return {
    x: e.clientX - boundingRect.left,
    y: e.clientY - boundingRect.top,
  };
};

const getDefaultOptions = (type) => {
  if (type === "line") {
    return new Map({
      strokeColor: "#000000",
      strokeWidth: 4,
      strokeStyle: "solid",
    });
  } else if (type === "textbox") {
    return new Map({
      strokeColor: "#000000",
      fontSize: 14,
      horizontalAlign: "center",
      verticalAlign: "center",
    });
  }
};

const createElement = (e, index, drawAreaRef, selectedTool) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);

  if (selectedTool === "line") {
    return new Map({
      index: index,
      x1: x,
      y1: y,
      x2: x,
      y2: y,
      type: "line",
      selected: true,
      options: getDefaultOptions("line"),
    });
  } else if (selectedTool === "textbox") {
    console.log("clearly creating text");
    return new Map({
      index: index,
      x1: x,
      y1: y,
      x2: x,
      y2: y,
      type: "textbox",
      selected: false,
      focused: true,
      text: "",
      options: getDefaultOptions("textbox"),
    });
  }
};

const duplicateElement = (index, element) => {
  const { x1, y1, x2, y2 } = unpackElementDetails(element);
  let newElement = new Map(element).merge(
    new Map({
      index,
      x1: x1 + 10,
      y1: y1 + 10,
      x2: x2 + 10,
      y2: y2 + 10,
      selected: true,
    })
  );

  return newElement;
};

const updateElement = (e, element, drawAreaRef) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
  if (element.get("type") === "line") {
    const updates = new Map({
      x2: x,
      y2: y,
    });
    return element.merge(updates);
  } else if (element.get("type") === "textbox") {
    const updates = new Map({
      x2: x,
      y2: y,
    });
    return element.merge(updates);
  }
};

const calculateNewCoordinates = (e, selectedElement, drawAreaRef) => {
  if (
    selectedElement.get("type") === "line" ||
    selectedElement.get("type") === "textbox"
  ) {
    let [x1, y1, x2, y2, offsetXOrigin, offsetYOrigin, position] = [
      selectedElement.get("x1"),
      selectedElement.get("y1"),
      selectedElement.get("x2"),
      selectedElement.get("y2"),
      selectedElement.get("offsetXOrigin"),
      selectedElement.get("offsetYOrigin"),
      selectedElement.get("position"),
    ];

    const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
    const offsetX = x - offsetXOrigin;
    const offsetY = y - offsetYOrigin;

    return {
      newX1: x1 + offsetX,
      newY1: y1 + offsetY,
      newX2: x2 + offsetX,
      newY2: y2 + offsetY,
      newOffsetXOrigin: x,
      newOffsetYOrigin: y,
      position,
    };
  }
};

const moveElement = (e, selectedElement, drawAreaRef) => {
  //prettier-ignore
  let { newX1, newY1, newX2, newY2, newOffsetXOrigin, newOffsetYOrigin } = 
      calculateNewCoordinates(e, selectedElement, drawAreaRef);

  //prettier-ignore
  return selectedElement.merge(new Map({
      x1: newX1, y1: newY1, x2: newX2, y2: newY2,
      offsetXOrigin: newOffsetXOrigin, offsetYOrigin: newOffsetYOrigin,
    }))
};

const resizeElement = (e, selectedElement, drawAreaRef) => {
  //prettier-ignore
  let { newX1, newY1, newX2, newY2, newOffsetXOrigin, newOffsetYOrigin, position } = 
        calculateNewCoordinates(e, selectedElement, drawAreaRef);
  if (selectedElement.get("type") === "line") {
    if (position === "start") {
      //prettier-ignore
      return selectedElement.merge(new Map({
          x1: newX1, y1: newY1,
          offsetXOrigin: newOffsetXOrigin, offsetYOrigin: newOffsetYOrigin,
        }))
    } else {
      //prettier-ignore
      return selectedElement.merge(new Map({
          x2: newX2, y2: newY2,
          offsetXOrigin: newOffsetXOrigin, offsetYOrigin: newOffsetYOrigin,
        }))
    }
  }
  if (selectedElement.get("type") === "textbox") {
    switch (position) {
      case "top":
        return selectedElement.merge(
          new Map({
            y1: newY1,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "right":
        return selectedElement.merge(
          new Map({
            x2: newX2,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "bottom":
        return selectedElement.merge(
          new Map({
            y2: newY2,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "left":
        return selectedElement.merge(
          new Map({
            x1: newX1,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "topLeft":
        return selectedElement.merge(
          new Map({
            x1: newX1,
            y1: newY1,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );

      case "topRight":
        return selectedElement.merge(
          new Map({
            x2: newX2,
            y1: newY1,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "bottomLeft":
        return selectedElement.merge(
          new Map({
            x1: newX1,
            y2: newY2,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      case "bottomRight":
        return selectedElement.merge(
          new Map({
            x2: newX2,
            y2: newY2,
            offsetXOrigin: newOffsetXOrigin,
            offsetYOrigin: newOffsetYOrigin,
          })
        );
      default:
        return selectedElement;
    }
  }
};

const distance = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

const atPoint = (x, y, x1, y1, position) => {
  return x1 - 5 <= x && x <= x1 + 5 && y1 - 5 <= y && y <= y1 + 5
    ? position
    : null;
};

const checkElementLine = (x, y, x1, y1, x2, y2, position) => {
  // const { x1, y1, x2, y2, type } = unpackElementDetails(element);
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };

  return Math.abs(distance(a, b) - (distance(a, c) + distance(b, c))) < 0.3
    ? position
    : null;
};

const positionWithinElement = (x, y, element) => {
  const { x1, y1, x2, y2, type } = unpackElementDetails(element);
  if (element.get("type") === "line") {
    const start = atPoint(x, y, x1, y1, "start");
    const end = atPoint(x, y, x2, y2, "end");
    const inside = checkElementLine(x, y, x1, y1, x2, y2, "inside");
    return start || end || inside;
  } else if (element.get("type") === "textbox") {
    const topLeft = atPoint(x, y, x1, y1, "topLeft");
    const topRight = atPoint(x, y, x2, y1, "topRight");
    const bottomLeft = atPoint(x, y, x1, y2, "bottomLeft");
    const bottomRight = atPoint(x, y, x2, y2, "bottomRight");
    const top = checkElementLine(x, y, x1, y1, x2, y1, "top");
    const right = checkElementLine(x, y, x2, y1, x2, y2, "right");
    const bottom = checkElementLine(x, y, x1, y2, x2, y2, "bottom");
    const left = checkElementLine(x, y, x1, y1, x1, y2, "left");
    const inside = x1 <= x && x <= x2 && y1 <= y && y <= y2 ? "inside" : null;
    return (
      topLeft ||
      topRight ||
      bottomLeft ||
      bottomRight ||
      top ||
      right ||
      bottom ||
      left ||
      inside
    );
  }
  return null;
};

const getElementAtPosition = (e, drawAreaRef, elements) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
  const elementsAtPosition = elements.map((element) =>
    element.merge(
      new Map({
        position: positionWithinElement(x, y, element),
        offsetXOrigin: x,
        offsetYOrigin: y,
      })
    )
  );
  return elementsAtPosition.find((element) => element.get("position") !== null);
};

const clearSelectedState = (elements) => {
  return elements.map((element) =>
    element.merge(new Map({ selected: false, position: null }))
  );
};

const clearFocusedState = (elements) => {
  return elements.map((element) =>
    element.get("type") === "textbox" ? element.set("focused", false) : element
  );
};

const getCursorAtPosition = (element, selectedTool) => {
  if (!element) return "default";
  const { type, position, focused } = unpackElementDetails(element);
  let cursor;
  if (type === "textbox" && (selectedTool === "textbox" || focused)) {
    cursor = "text";
  } else if (selectedTool !== "select") {
    cursor = "crosshair";
  } else {
    switch (position) {
      case "top":
      case "bottom":
        cursor = "ns-resize";
        break;
      case "left":
      case "right":
        cursor = "ew-resize";
        break;
      case "topLeft":
      case "bottomRight":
        cursor = "nwse-resize";
        break;
      case "topRight":
      case "bottomLeft":
        cursor = "nesw-resize";
        break;
      case "start":
      case "end":
      case "inside":
        cursor = "move";
        break;
      default:
        cursor = "default";
    }
  }

  return cursor;
};

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
    let updatedElements = clearSelectedState(elements);
    setSelectedElement(null);
    setFocusedElement(null);

    let element = getElementAtPosition(e, drawAreaRef, updatedElements);
    if (selectedTool === "select") {
      //prettier-ignore
      if (element && element.get("type") === "textbox" && element.get("focused") === true) {
        setSelectedElement(element);

        return;
      }
      updatedElements = clearFocusedState(updatedElements);
      if (element) {
        const index = element.get("index");
        element = element.set("selected", true);
        setSelectedElement(element);
        updatedElements = updatedElements.set(index, element);

        if (element.get("position") === "inside") {
          setAction("moving");
        } else {
          setAction("resizing");
        }
      }
      setElements(updatedElements);
    } else if (selectedTool !== "select") {
      if (
        element &&
        element.get("type") === "textbox" &&
        selectedTool === "textbox"
      ) {
        element = element.set("focused", true);
        const index = element.get("index");
        setSelectedElement(element);
        setElements(updatedElements.set(index, element));
        setSelectedTool("select");
        return;
      }
      updatedElements = clearFocusedState(updatedElements);
      const index = updatedElements.size;
      element = createElement(e, index, drawAreaRef, selectedTool);
      updatedElements = updatedElements.push(element);
      setElements(updatedElements);
      setSelectedElement(element);
      setSelectedTool("select");
      setAction("drawing");
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
