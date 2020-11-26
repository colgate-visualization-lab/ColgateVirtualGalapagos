import React from "react";

import DnaBackbone from "../../components/DnaBackbone";
import BasePairs from "../../components/BasePairs";
import { basePair1, basePair2 } from "../IguanaSlide17/constants";
import classes from "./Dna.css";

const Dna = ({ label, basePairs }) => {
  const svgStyle = {
    border: "1px solid white",
    float: "left",
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

export default Dna;
