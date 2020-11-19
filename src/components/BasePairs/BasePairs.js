import React from "react";

import BasePairGroup from "./BasePairGroup";
import { BASE_PAIRS as basePairs } from "./constants";

const BasePairs = ({ classes, numGroups }) => {
  // 22.09

  const basePairTranslateDist = [];

  for (let x = 0; x < numGroups; x++) {
    basePairTranslateDist.push(x * 43.17);
  }

  return (
    <g id="basePairs">
      {basePairTranslateDist.map((distance, index) => (
        <BasePairGroup
          basePairs={basePairs}
          classes={classes}
          key={index}
          xTranslateDistance={distance}
        />
      ))}
    </g>
  );
};

export default BasePairs;
