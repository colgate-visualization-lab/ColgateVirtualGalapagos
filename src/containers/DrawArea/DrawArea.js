import React, { useState, useEffect, useRef } from "react";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import Slide12Header from "../IguanaSlide12/Slide12Header";

const useStyles = makeStyles(() => ({
  drawArea: {
    maxHeight: "540px",
    maxWidth: "960px",
    minHeight: "400px",
    minWidth: "600px",
    backgroundColor: "white",
  },
}));

const DrawArea = ({ tabIndex, handleTabChange }) => {
  const classes = useStyles();

  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState(List());

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

    const point = relativeCoordsForEvent(e);
    const updatedLines = lines.push(List([point]));

    setIsDrawing(true);
    setLines(updatedLines);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const point = relativeCoordsForEvent(e);
    const updatedLines = lines.updateIn([lines.size - 1], (line) =>
      line.push(point)
    );

    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const relativeCoordsForEvent = (e) => {
    const boundingRect = drawAreaRef.current.getBoundingClientRect();
    return new Map({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top,
    });
  };

  return (
    <>
      <Slide12Header
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        header="Create a phylogenetic tree by dragging the cards below to their correct positions"
      >
        <h1>Here Here</h1>
      </Slide12Header>
      <div
        ref={drawAreaRef}
        className={classes.drawArea}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Drawing lines={lines} />
      </div>
    </>
  );
};

export default DrawArea;
