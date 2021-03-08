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
      selected: false,
    });
  }
};

const updateElement = (e, element, drawAreaRef, selectedTool) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
  if (selectedTool === "line") {
    const updates = new Map({
      x2: x,
      y2: y,
    });
    return element.merge(updates);
  }
};

const distance = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const positionWithinElement = (x, y, element) => {
  const { x1, y1, x2, y2, type } = element;
  if (element.get("type") === "line") {
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

const checkElementAtPosition = (x, y, element) => {
  const { x1, y1, x2, y2, type } = unpackElementDetails(element);
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };

  return Math.abs(distance(a, b) - (distance(a, c) + distance(b, c))) < 1
    ? "inside"
    : null;
};

const getElementAtPosition = (e, drawAreaRef, elements) => {
  const { x, y } = relativeCoordsForEvent(e, drawAreaRef);
  const elementsAtPosition = elements.map((element) =>
    element.set("position", checkElementAtPosition(x, y, element))
  );
  return elementsAtPosition.find((element) => element.get("position") !== null);
};

const useStyles = makeStyles(() => ({
  drawArea: {
    position: "relative",
    height: "70vh",
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
    const index = elements.size - 1;
    if (selectedTool === "select") {
      let element = getElementAtPosition(e, drawAreaRef, elements);

      if (element) {
        element = element.set("selected", true);
        setElements((elements) => elements.set(index, element));
        setSelectedElement(element);
        console.log("here for some reason");
      } else {
        element = selectedElement.merge(
          new Map({ selected: false, position: null })
        );
        console.log(element);
        setElements((elements) => elements.set(index, element));
        setSelectedElement(null);
      }
    } else {
      const element = createElement(e, index, drawAreaRef, selectedTool);
      setElements((elements) => elements.push(element));
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
    }
  };

  const handleMouseUp = (e) => {
    setAction("none");
    setSelectedElement;
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
