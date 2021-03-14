import React, { useContext } from "react";

import SingleBasePair from "./SingleBasePair";
import { OnBaseClickContext } from "../../containers/IguanaSlide17";

const GroupOfFiveBasePairs = ({ xTranslateDistance, basePairs, group }) => {
  const startIndex = group * 5;
  //prettier-ignore
  const basePairProperties = [
    [ { id:"leftTop", x:31.6, y:11, width:3,height:5, 
      fillClass:basePairs[startIndex].color},
      { id:"leftBottom", x:31.6, y:17, width:3,height:5, 
      fillClass:basePairs[startIndex].complement},],


    [ { id:"midLeftTop", x:36.6, y:7, width:3,height:9, 
      fillClass:basePairs[startIndex+1].color},
    { id:"midLeftBottom", x:36.6, y:17, width:3,height:9,
      fillClass:basePairs[startIndex+1].complement}, ],

    [ { id:"midTop", x:41.6, y:5, width:3,height:11, 
      fillClass:basePairs[startIndex+2].color},
    { id:"midBottom", x:41.6, y:17, width:3,height:11,
      fillClass:basePairs[startIndex+2].complement}, ],

    [ { id:"midRightTop", x:46.6, y:7, width:3,height:9, 
      fillClass:basePairs[startIndex+3].color},
    { id:"midRightBottom", x:46.6, y:17, width:3,height:9,
      fillClass:basePairs[startIndex+3].complement}, ],

    [ { id:"rightTop", x:51.6, y:10.98, width:3,height:5, 
      fillClass:basePairs[startIndex+4].color},
    { id:"rightBottom", x: 51.6,  y: 17, width: 3,  height: 5,
      fillClass:basePairs[startIndex+4].complement}, ],
  ];

  return (
    <g id="basePairGroup" transform={`translate(${xTranslateDistance})`}>
      {basePairProperties.map((basePair, index) => (
        <SingleBasePair
          basePair={basePair}
          key={index}
          geneIndex={group * 5 + index}
        />
      ))}
    </g>
  );
};

export default GroupOfFiveBasePairs;
