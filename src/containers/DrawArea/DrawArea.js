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
  const [penLines, setPenLines] = useState(List());
  const [straightLines, setStraightLines] = useState(List());
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
      handleDrawWithPen(e);
    } else if (selectedTool === "textbox") {
      handleText(e);
    } else if (selectedTool === "line") {
      handleDrawWithLine(e);
    }
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!mouseDown) return;
    if (selectedTool === "pen") {
      handleDrawingWithPen(e);
    } else if (selectedTool === "line") {
      handleDrawingWithLine(e);
    }
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  // line tool logic
  const handleDrawWithLine = (e) => {
    const point = relativeCoordsForEvent(e);
    console.log(straightLines);
    const updatedLines = straightLines.push(
      new Map({
        origin: point,
        current: point,
      })
    );
    console.log(updatedLines);
    setStraightLines(updatedLines);
  };

  const handleDrawingWithLine = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = straightLines.setIn(
      [straightLines.size - 1, "current"],
      point
    );
    setStraightLines(updatedLines);
  };

  // textbox logic
  const handleText = (e) => {
    const point = relativeCoordsForEvent(e);
  };

  // pen tool logic
  const handleDrawWithPen = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = penLines.push(List([point]));

    setPenLines(updatedLines);
  };

  const handleDrawingWithPen = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = penLines.updateIn([penLines.size - 1], (line) =>
      line.push(point)
    );

    setPenLines(updatedLines);
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

  const handleErase = (index, target) => {
    if (!mouseDown || selectedTool !== "eraser") return;

    if (target === "pen") {
      setPenLines(penLines.splice(index, 1));
    } else if (target === "line") {
      setStraightLines(penLines.splice(index, 1));
    }
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
          <Drawing
            penLines={penLines}
            straightLines={straightLines}
            handleErase={handleErase}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
