import React, { useContext } from "react";

import classes from "./BasePairs.css";
import { OnBaseClickContext } from "../../containers/IguanaSlide17";

const BasePairGroup = ({ xTranslateDistance, basePairs, group }) => {
  const startIndex = group * 5;
  //prettier-ignore
  const basePairProperties = [
    { id:"leftTop", x:"31.6", y:"11", width:"3",height:"5", 
      fillClass:basePairs[startIndex].color},
    { id:"leftBottom", x:"31.6", y:"17", width:"3",height:"5", 
      fillClass:basePairs[startIndex].complement},

    { id:"midLeftTop", x:"36.6", y:"7", width:"3",height:"9", 
      fillClass:basePairs[startIndex+1].color},
    { id:"midLeftBottom", x:"36.6", y:"17", width:"3",height:"9",
      fillClass:basePairs[startIndex+1].complement},

    { id:"midTop", x:"41.6", y:"5", width:"3",height:"11", 
      fillClass:basePairs[startIndex+2].color},
    { id:"midBottom", x:"41.6", y:"17", width:"3",height:"11",
      fillClass:basePairs[startIndex+2].complement},

    { id:"midRightTop", x:"46.6", y:"7", width:"3",height:"9", 
      fillClass:basePairs[startIndex+3].color},
    { id:"midRightBottom", x:"46.6", y:"17", width:"3",height:"9",
      fillClass:basePairs[startIndex+3].complement},

    { id:"rightTop", x:"51.6", y:"10.98", width:"3",height:"5", 
      fillClass:basePairs[startIndex+4].color},
    { id:"rightBottom", x: "51.6",  y: "17", width: "3",  height: "5",
      fillClass:basePairs[startIndex+4].complement},
  ];

  const { handleOnBaseClick } = useContext(OnBaseClickContext);

  return (
    <g id="basePairGroup" transform={`translate(${xTranslateDistance})`}>
      {basePairProperties.map((base, index) => (
        <rect
          onClick={() => {
            const geneIndex = group * 5 + Math.floor(index / 2);
            handleOnBaseClick(geneIndex);
          }}
          key={base.id}
          id={base.id}
          className={`${classes["base" + base.fillClass]} ${classes.basePair}`}
          x={base.x}
          y={base.y}
          width={base.width}
          height={base.height}
        />
      ))}
    </g>
  );
};

export default BasePairGroup;
