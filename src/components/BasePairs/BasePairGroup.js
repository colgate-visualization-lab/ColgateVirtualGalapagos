import React from "react";

const BasePairGroup = ({ xTranslateDistance, classes }) => {
  //prettier-ignore
  const basePairProperties = [
    { id:"leftTop", x:"31.6", y:"11", width:"3",height:"5",},
    { id:"leftBottom", x:"31.6", y:"17", width:"3",height:"5",},
    { id:"midLeftTop", x:"36.6", y:"7", width:"3",height:"9",},
    { id:"midLeftBottom", x:"36.6", y:"17", width:"3",height:"9",},
    { id:"midTop", x:"41.6", y:"5", width:"3",height:"11",},
    { id:"midBottom", x:"41.6", y:"17", width:"3",height:"11",},
    { id:"midRightTop", x:"46.6", y:"7", width:"3",height:"9",},
    { id:"midRightBottom", x:"46.6", y:"17", width:"3",height:"9",},
    { id:"rightTop", x:"51.6", y:"10.98", width:"3",height:"5",},
    { id:"rightBottom", x: "51.6",  y: "17", width: "3",  height: "5",},
  ];

  return (
    <g id="basePairGroup" transform={`translate(${xTranslateDistance})`}>
      {basePairProperties.map((base) => (
        <rect
          id={base.id}
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
