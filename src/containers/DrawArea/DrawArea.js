import React, { useState, useEffect, useRef } from "react";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";

const useStyles = makeStyles(() => ({
  drawArea: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
}));

const DrawArea = () => {
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
    <div
      ref={drawAreaRef}
      className={classes.drawArea}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Drawing lines={lines} />
    </div>
  );
};

export default DrawArea;
