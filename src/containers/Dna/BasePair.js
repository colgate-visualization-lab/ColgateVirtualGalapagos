import React from "react";

const BasePair = ({ id, pairClass, x, y, width, height }) => {
  return (
    <rect
      id={id}
      className={pairClass}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

export default BasePair;
