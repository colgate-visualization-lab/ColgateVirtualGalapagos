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
}));

const SingeBasePair = ({ basePair, classes, geneIndex }) => {
  const style = useStyles();
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
    <>
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
    </>
  );
};

export default SingeBasePair;
