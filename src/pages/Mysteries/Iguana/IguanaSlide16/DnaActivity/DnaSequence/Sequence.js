import React from "react";

import FivePairGroup from "./FivePairGroup";

const Sequence = ({ classes, numGroups, basePairs }) => {
  // 22.09

  const basePairTranslateDist = [];

  const createBasePairTranslationDistances = () => {
    for (let x = 0; x < numGroups; x++) {
      basePairTranslateDist.push(x * 43.17);
    }
  };
  createBasePairTranslationDistances();

  return (
    <g id="basePairs">
      {basePairTranslateDist.map((distance, index) => (
        <FivePairGroup
          basePairs={basePairs}
          group={index}
          classes={classes}
          key={index}
          xTranslateDistance={distance}
        />
      ))}
    </g>
  );
};

export default Sequence;
