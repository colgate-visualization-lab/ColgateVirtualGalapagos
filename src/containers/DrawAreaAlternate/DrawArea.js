import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Slide12Header from "../IguanaSlide12/Slide12Header";

const createElement = (e, drawAreaRef, selectedTool) => {
  const point = relativeCoordsForEvent(e, drawAreaRef);
  if (selectedTool === "line") {
    return new Map({
      x1: point.x,
      y1: point.y,
      x2: point.x,
      y2: point.y,
      type: "line",
      selected: true,
    });
  }
};

const relativeCoordsForEvent = (e, drawAreaRef) => {
  const boundingRect = drawAreaRef.current.getBoundingClientRect();
  return {
    x: e.clientX - boundingRect.left,
    y: e.clientY - boundingRect.top,
  };
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

  const [elements, setElements] = useState(List());
  const [selectedElement, setSelectedElement] = useState(List());
  const [action, setAction] = useState("idle");
  const [selectedTool, setSelectedTool] = useState("select");

  const handleMouseDown = (e) => {
    if (selectedTool === "select") {
    } else {
      const element = createElement(e, drawAreaRef, selectedTool);
      setElements((elements) => elements.push(element));
      setSelectedElement(element);
      console.log(element);
    }
  };

  const handleMouseMove = (e) => {};

  const drawAreaRef = useRef();

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
        >
          <Drawing elements={elements} />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
