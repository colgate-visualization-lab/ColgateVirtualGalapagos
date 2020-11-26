import React from "react";

import DnaBackbone from "../../components/DnaBackbone";
import BasePairs from "../../components/BasePairs";
import { basePair1, basePair2 } from "../IguanaSlide17/constants";
import classes from "./DnaInteractiveActivity.css";

const DnaInteractiveActivity = ({ label, basePairs }) => {
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

  return (
    <div className={classes.geneContainer}>
      <p className={classes.geneLabel}>{label}</p>
      <div className={classes.geneSvg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          // style={svgStyle}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
        >
          <g
            id="dna"
            // transform={`translate(0,${yTranslateDistance})`}
          >
            <DnaBackbone numGroups={numGroups + 1} />
            <BasePairs
              classes={classes}
              numGroups={numGroups}
              basePairs={basePairs}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DnaInteractiveActivity;
