import React, { useEffect } from "react";

import BasePairGroup from "./BasePairGroup";
import { basePair1, basePair2 } from "./constants";

const BasePairs = ({ classes, numGroups, onClick }) => {
  // 22.09

  const basePairTranslateDist = [];

  for (let x = 0; x < numGroups; x++) {
    basePairTranslateDist.push(x * 43.17);
  }

  // useEffect(() => {
  //   console.log(basePairs);
  // });

  return (
    <g id="basePairs">
      {basePairTranslateDist.map((distance, index) => (
        <BasePairGroup
          basePairs={basePair1}
          group={index}
          classes={classes}
          key={index}
          xTranslateDistance={distance}
          onClick={onClick}
        />
      ))}
    </g>
  );
};

export default BasePairs;
