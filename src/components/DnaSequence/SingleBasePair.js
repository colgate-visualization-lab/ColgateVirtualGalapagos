import React, { useContext, useEffect } from "react";
import { BasePairClickContext } from "../../containers/IguanaSlide17";

const SingeBasePair = ({ basePair, classes, geneIndex }) => {
  const { handleOnBaseClick, mutationsFound } = useContext(
    BasePairClickContext
  );

  const basePairClass = `${classes.basePair} ${
    mutationsFound.includes(geneIndex) ? classes.basePairActive : ""
  }`;

  return (
    <g
      className={basePairClass}
      onClick={() => {
        handleOnBaseClick(geneIndex);
      }}
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
