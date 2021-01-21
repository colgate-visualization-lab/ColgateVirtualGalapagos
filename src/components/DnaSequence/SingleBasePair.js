import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BasePairClickContext } from "../../containers/IguanaSlide17";

const useStyles = makeStyles((theme) => ({
  geneName: {
    fontSize: "0.15rem",
    fill: "black",
    fontFamily: "Roboto",
  },

  geneDescription: {
    fontSize: "0.1rem",
    fill: "black",
    fontFamily: "Roboto",
  },

  // hover state
  basePair: {
    "&:hover": {
      opacity: 0.7,
      cursor: "pointer",
    },
  },

  //selected state
  basePairActive: {
    stroke: "#EBE7EB",
    strokeOpacity: "0.5",
    strokeWidth: "1px",
  },

  // state when selected wrong base pair
  basePairReject: {},

  // base pair colors
  base1: {
    fill: "#601a4a",
  },

  base2: {
    fill: "#ee442f",
  },

  base3: {
    fill: "#63acbe",
  },

  base4: {
    fill: "#f9f4ec",
  },
}));

const SingeBasePair = ({ basePair, geneIndex }) => {
  const classes = useStyles();
  const {
    handleOnBaseClick,
    handleEnterBasePair,
    handleLeaveBasePair,
    foundIndices,
  } = useContext(BasePairClickContext);

  const basePairClass = `${classes.basePair} ${
    foundIndices.has(geneIndex) ? classes.basePairActive : ""
  }`;

  return (
    <g
      className={basePairClass}
      onClick={() => {
        handleOnBaseClick(geneIndex);
      }}
      onMouseEnter={(e) => {
        handleEnterBasePair(e, geneIndex);
      }}
      onMouseLeave={handleLeaveBasePair}
    >
      {basePair.map((base) => (
        <rect
          key={base.id}
          className={`${classes["base" + base.fillClass]}`}
          x={base.x}
          y={base.y}
          width={base.width}
          height={base.height}
        />
      ))}
    </g>
  );
};

export default SingeBasePair;
