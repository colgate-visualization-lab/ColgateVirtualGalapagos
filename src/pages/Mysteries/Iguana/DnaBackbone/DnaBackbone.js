import React from "react";

import DnaBackbonePiece from "./DnaBackbonePiece";

const DnaBackbone = ({ numGroups }) => {
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
        <DnaBackbonePiece key={index} xTranslateDistance={distance} />
      ))}
    </g>
  );
};
export default DnaBackbone;
