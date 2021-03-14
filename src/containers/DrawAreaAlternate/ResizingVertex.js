import React from "react";

const ResizingVertex = ({ cx, cy }) => {
  return (
    <rect
      fill="white"
      stroke="#246AF2"
      x={cx - 5}
      y={cy - 5}
      width="10"
      height="10"
    />
  );
};

export default ResizingVertex;
