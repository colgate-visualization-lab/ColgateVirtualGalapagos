import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Options from "./Options";
import Slide12Header from "../IguanaSlide12/Slide12Header";

const relativeCoordsForEvent = (e, drawAreaRef) => {
  const boundingRect = drawAreaRef.current.getBoundingClientRect();
  return {
    x: e.clientX - boundingRect.left,
    y: e.clientY - boundingRect.top,
  };
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
    });
  } else if (selectedTool === "textbox") {
    return new Map({
      index: index,
      x1: x,
      y1: y,
      x2: x,
      y2: y,
      type: "textbox",
      selected: false,
      focused: true,
    });
  }
};

const updateElement = (e, element, drawAreaRef, offsetX) => {
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

const distance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

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

const unpackElementDetails = (element) => {
  return {
    x1: element.get("x1"),
    y1: element.get("y1"),
    x2: element.get("x2"),
    y2: element.get("y2"),
    type: element.get("type"),
    selected: element.get("selected"),
    focused: element.get("focused"),
    position: element.get("position"),
  };
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
  },
}));

const DrawArea = ({ tabIndex, handleTabChange }) => {
  const classes = useStyles();
  const drawAreaRef = useRef();

  const [elements, setElements] = useState(List());
  const [selectedElement, setSelectedElement] = useState(List());
  const [action, setAction] = useState("idle");
  const [selectedTool, setSelectedTool] = useState("select");

  const handleMouseDown = (e) => {
    let updatedElements = clearSelectedState(elements);
    setSelectedElement(null);

    console.log(updatedElements.get(0));

    let element = getElementAtPosition(e, drawAreaRef, updatedElements);
    if (selectedTool === "select") {
      //prettier-ignore
      if (element && element.get("type") === "textbox" && element.get("focused") === true) {
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
        setElements(updatedElements.set(index, element));
        setSelectedTool("select");
        return;
      }
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

  const handleToolChange = (name) => {
    setSelectedTool(name);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Slide12Header
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
          header="Draw a phylogenetic tree on the canvas"
        >
          <DrawAreaToolbar
            handleToolChange={handleToolChange}
            selected={selectedTool}
          />
        </Slide12Header>
      </Grid>
      <Grid item xs={12}>
        <div
          ref={drawAreaRef}
          className={classes.drawArea}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Drawing elements={elements} />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
