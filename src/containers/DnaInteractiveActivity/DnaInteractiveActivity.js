import React from "react";

import DnaBackbone from "../../components/DnaBackbone";
import BasePairs from "../../components/BasePairs";
import classes from "./DnaInteractiveActivity.css";

const DnaInteractiveActivity = ({ label }) => {
  const spBackboneStyle = {
    fill: "#f7931e",
    border: "1px solid white",
  };

  const svgStyle = {
    border: "1px solid white",
    float: "left",
  };

  const basePairsStyle = {
    pair1Color1: "#2e3192",
    pair1Color2: "#8cc63f",
    pair2Color1: "#93278f",
    pair2Color2: "#754c24",
  };

  const numGroups = 6;

  const viewBox = [10, 0, 282.32, 32.56];
  const viewBox2 = [10, 0, 846.96, 97.68];

  return (
    <div className={classes.dnaDiv}>
      <h2
        style={{ flexBasis: "10%", fontSize: "1.4rem", paddingRight: "20px" }}
      >
        {label}
      </h2>
      <div style={{ minWidth: "400px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          // style={svgStyle}
          preserveAspectRatio="xMidYMid meet"
          width="1000"
          height="115.34"
        >
          <g
            id="dna"
            // transform={`translate(0,${yTranslateDistance})`}
          >
            <DnaBackbone numGroups={numGroups + 1} />
            <BasePairs classes={classes} numGroups={numGroups} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DnaInteractiveActivity;
