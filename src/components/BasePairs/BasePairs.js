import React, { useEffect } from "react";

import BasePairGroup from "./BasePairGroup";

const BasePairs = ({ classes, numGroups, basePairs }) => {
  // 22.09

  const basePairTranslateDist = [];

  const createBasePairTranslationDistances = () => {
    for (let x = 0; x < numGroups; x++) {
      basePairTranslateDist.push(x * 43.17);
    }
  };
  createBasePairTranslationDistances();

  // useEffect(() => {
  //   console.log(basePairs);
  // });

  return (
    <g id="basePairs">
      {basePairTranslateDist.map((distance, index) => (
        <BasePairGroup
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

export default BasePairs;
