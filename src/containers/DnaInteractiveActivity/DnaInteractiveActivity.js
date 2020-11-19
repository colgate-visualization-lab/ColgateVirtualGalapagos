import React from "react";

import DnaBackbone from "../../components/DnaBackbone";
import BasePairs from "../../components/BasePairs";
import classes from "./DnaInteractiveActivity.css";

const DnaInteractiveActivity = () => {
  const spBackboneStyle = {
    fill: "#f7931e",
  };

  const basePairsStyle = {
    pair1Color1: "#2e3192",
    pair1Color2: "#8cc63f",
    pair2Color1: "#93278f",
    pair2Color2: "#754c24",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.32 32.56">
      <title>dna_extended</title>
      <g id="dna">
        <DnaBackbone numGroups={7} />
        <BasePairs classes={classes} />
      </g>
    </svg>
  );
};

export default DnaInteractiveActivity;
