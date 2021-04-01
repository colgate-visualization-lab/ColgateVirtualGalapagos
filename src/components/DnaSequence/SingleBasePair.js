import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
      strokeOpacity: "0.8",
      opacity: 0.7,
      cursor: "pointer",
    },
  },

  //selected state
  basePairActive: {
    // fill: "black",
    // stroke: "black",
    // strokeOpacity: "0.7",
    // strokeWidth: "1px",
  },

  overlay: {
    fill: "black",
    opacity: ({ overlayOpacity }) => overlayOpacity,
  },

  // state when selected wrong base pair
  basePairReject: {},

  // base pair colors
  base1: {
    fill: "#882255",
  },

  base2: {
    fill: "#117733",
  },

  base3: {
    fill: "#ee442f",
  },

  base4: {
    fill: "#332288",
  },

  baseSelected: {
    fill: "black",
  },
}));

const SingeBasePair = ({ basePair, geneIndex }) => {
  const {
    handleOnBaseClick,
    handleEnterBasePair,
    handleLeaveBasePair,
    foundIndices,
  } = useContext(BasePairClickContext);

  const styleProps = {
    overlayOpacity: foundIndices.has(geneIndex) ? 0.3 : 0,
  };
  const classes = useStyles(styleProps);

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
        <g key={base.id}>
          <rect
            className={clsx(classes["base" + base.fillClass], {
              // [classes.baseSelected]: found,
            })}
            x={base.x}
            y={base.y}
            width={base.width}
            height={base.height}
          />
          <rect
            key={base.id}
            className={classes.overlay}
            x={base.x}
            y={base.y}
            width={base.width}
            height={base.height}
          />
        </g>
      ))}
    </g>
  );
};

export default SingeBasePair;
