import React, { useEffect } from "react";

const BasePairGroup = ({ xTranslateDistance, classes, basePairs }) => {
  //prettier-ignore
  const basePairProperties = [
    { id:"leftTop", x:"31.6", y:"11", width:"3",height:"5", fill:basePairs[0].color},
    { id:"leftBottom", x:"31.6", y:"17", width:"3",height:"5", fill:basePairs[0].complement},

    { id:"midLeftTop", x:"36.6", y:"7", width:"3",height:"9", fill:basePairs[1].color},
    { id:"midLeftBottom", x:"36.6", y:"17", width:"3",height:"9",fill:basePairs[1].complement},

    { id:"midTop", x:"41.6", y:"5", width:"3",height:"11", fill:basePairs[2].color},
    { id:"midBottom", x:"41.6", y:"17", width:"3",height:"11",fill:basePairs[2].complement},

    { id:"midRightTop", x:"46.6", y:"7", width:"3",height:"9", fill:basePairs[3].color},
    { id:"midRightBottom", x:"46.6", y:"17", width:"3",height:"9",fill:basePairs[3].complement},

    { id:"rightTop", x:"51.6", y:"10.98", width:"3",height:"5", fill:basePairs[4].color},
    { id:"rightBottom", x: "51.6",  y: "17", width: "3",  height: "5",fill:basePairs[4].complement},
  ];

  useEffect(() => {
    console.log(basePairProperties);
  });

  return (
    <g id="basePairGroup" transform={`translate(${xTranslateDistance})`}>
      {basePairProperties.map((base) => (
        <rect
          key={base.id}
          id={base.id}
          style={{ fill: base.fill }}
          className={classes.cls1}
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
