import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
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
  }
};

const updateElement = (e, element, drawAreaRef, selectedTool, offsetX) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
  if (selectedTool === "line") {
    const updates = new Map({
      x2: x,
      y2: y,
    });
    return element.merge(updates);
  }
};

const calculateNewCoordinates = (e, selectedElement, drawAreaRef) => {
  if (selectedElement.get("type") === "line") {
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
  if (selectedElement.get("type") === "line") {
    if (selectedElement.get("type") === "line") {
      //prettier-ignore
      let { newX1, newY1, newX2, newY2, newOffsetXOrigin, newOffsetYOrigin, position } = 
          calculateNewCoordinates(e, selectedElement, drawAreaRef);

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
  }
};

const distance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const atPoint = (x, y, x1, y1, position) => {
  return x1 - 5 <= x && x <= x1 + 5 && y1 - 5 <= y && y <= y1 + 5
    ? position
    : null;
};

const checkElementAtPosition = (x, y, x1, y1, x2, y2) => {
  // const { x1, y1, x2, y2, type } = unpackElementDetails(element);
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };

  return Math.abs(distance(a, b) - (distance(a, c) + distance(b, c))) < 0.3
    ? "inside"
    : null;
};

const positionWithinElement = (x, y, element) => {
  const { x1, y1, x2, y2, type } = unpackElementDetails(element);
  if (element.get("type") === "line") {
    const start = atPoint(x, y, x1, y1, "start");
    const end = atPoint(x, y, x2, y2, "end");
    const inside = checkElementAtPosition(x, y, x1, y1, x2, y2);
    return start || end || inside;
  }
};

const unpackElementDetails = (element) => {
  return {
    x1: element.get("x1"),
    y1: element.get("y1"),
    x2: element.get("x2"),
    y2: element.get("y2"),
    type: element.get("type"),
    selected: element.get("selected"),
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

  const clearSelectedElements = () => {
    let updatedElements = elements.map((element) =>
      element.set("selected", false)
    );
    updatedElements = updatedElements.map((element) =>
      element.set("position", null)
    );

    setSelectedElement(null);
    return updatedElements;
  };

  const handleMouseDown = (e) => {
    let updatedElements = clearSelectedElements();

    if (selectedTool === "select") {
      let element = getElementAtPosition(e, drawAreaRef, elements);
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
    } else {
      const index = updatedElements.size;
      const element = createElement(e, index, drawAreaRef, selectedTool);
      updatedElements = updatedElements.push(element);
      setElements(updatedElements);
      setSelectedElement(element);
      setAction("drawing");
    }
  };

  const handleMouseMove = (e) => {
    if (action === "drawing") {
      const index = elements.size - 1;
      const currentElement = elements.get(index);
      //prettier-ignore
      const updatedElement = updateElement(e, currentElement, drawAreaRef, selectedTool);
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
