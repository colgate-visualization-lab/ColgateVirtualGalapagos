import React from "react";

const BoundingVertex = ({ cx, cy, parent, handleMouseDown }) => {
  return (
    <rect
      fill="white"
      stroke="blue"
      onMouseDown={(e) => handleMouseDown(e, parent)}
      x={cx - 5}
      y={cy - 5}
      width="10"
      height="10"
    />
  );
};

export default BoundingVertex;
