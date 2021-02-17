import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Slide12Header from "../IguanaSlide12/Slide12Header";

const useStyles = makeStyles(() => ({
  drawArea: {
    height: "70vh",
    width: "100%",
    backgroundColor: "white",
  },
}));

const DrawArea = ({ tabIndex, handleTabChange }) => {
  const classes = useStyles();

  const [mouseDown, setMouseDown] = useState(false);
  const [lines, setLines] = useState(List());
  const [selectedTool, setSelectedTool] = useState("pen");

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const drawAreaRef = useRef();

  const handleMouseDown = (e) => {
    if (e.button != 0) {
      return;
    }

    setMouseDown(true);

    if (selectedTool === "pen") {
      handleDraw(e);
    }
  };

  const handleMouseMove = (e) => {
    if (!mouseDown) return;

    if (selectedTool === "pen") {
      handleDrawing(e);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleDraw = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = lines.push(List([point]));

    setLines(updatedLines);
  };

  const handleDrawing = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = lines.updateIn([lines.size - 1], (line) =>
      line.push(point)
    );

    setLines(updatedLines);
  };

  const relativeCoordsForEvent = (e) => {
    const boundingRect = drawAreaRef.current.getBoundingClientRect();
    return new Map({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top,
    });
  };

  const handleToolChange = (name) => {
    setSelectedTool(name);
  };

  const handleErase = (index) => {
    if (!mouseDown || selectedTool !== "eraser") return;
    setLines(lines.splice(index, 1));
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
          <Drawing lines={lines} handleErase={handleErase} />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
