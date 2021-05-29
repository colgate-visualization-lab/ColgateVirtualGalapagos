import React from "react";

import HelixPiece from "./HelixPiece";

const DoubleHelix = ({ numGroups }) => {
  let xTranslateDistances = [];

  const createTransformDistances = () => {
    for (let x = 0; x < numGroups; x++) {
      xTranslateDistances.push(43.2 * x);
    }
  };
  createTransformDistances();

  return (
    <g id="dnaBackbone">
      {xTranslateDistances.map((distance, index) => (
        <HelixPiece key={index} xTranslateDistance={distance} />
      ))}
    </g>
  );
};
export default DoubleHelix;
