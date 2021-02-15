import React, { useState, useEffect, useRef } from "react";
const { List, Map } = require("immutable");

const DrawArea = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState(List);

  useEffect(() => {
    console.log(lines);
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

    setIsDrawing(true);
    setLines((prevLines) => prevLines.push(List([point])));
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const point = relativeCoordsForEvent(e);
    setLines(() =>
      lines.updateIn([lines.size - 1], (line) => line.push([point]))
    );
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const relativeCoordsForEvent = (e) => {
    const boundingRect = drawAreaRef.current.getBoundingClientRect();
    return new Map({
      x: e.target.clientX - boundingRect.left,
      y: e.target.clientY - boundingRect.top,
    });
  };

  return (
    <div
      ref={drawAreaRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    />
  );
};

export default DrawArea;
