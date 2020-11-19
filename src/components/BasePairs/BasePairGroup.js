import React from "react";
import BasePairs from "./BasePairs";

const BasePairGroup = ({ xTranslateDistance, classes }) => {
  return (
    <g id="basePairs" transform={`translate(${xTranslateDistance})`}>
      {/* <BasePair
          id="rightBottom"
          pairClass={classes.cls1}
          x="52.32"
          y="17"
          width="2.48"
          height="4.83"
        /> */}
      <rect
        id="rightBottom"
        className={classes.cls1}
        x="52.32"
        y="17"
        width="2.48"
        height="4.83"
      />
      <rect
        id="rightTop"
        className={classes.cls2}
        x="52.32"
        y="10.98"
        width="2.48"
        height="4.83"
      />
      <rect
        id="midRightBottom"
        className={classes.cls3}
        x="47.46"
        y="16.95"
        width="2.48"
        height="8.62"
      />
      <rect
        id="midRightTop"
        className={classes.cls4}
        x="47.46"
        y="7.52"
        width="2.48"
        height="8.24"
      />
      <rect
        id="midBottom"
        className={classes.cls4}
        x="42.08"
        y="16.88"
        width="2.48"
        height="12.08"
      />
      <rect
        id="midTop"
        className={classes.cls3}
        x="42.08"
        y="3.76"
        width="2.48"
        height="11.93"
      />
      <rect
        id="midLeftBottom"
        className={classes.cls2}
        x="36.8"
        y="16.88"
        width="2.48"
        height="8.62"
      />
      <rect
        id="midLeftTop"
        className={classes.cls1}
        x="36.8"
        y="7.45"
        width="2.48"
        height="8.24"
      />
      <rect
        id="leftBottom"
        className={classes.cls3}
        x="31.24"
        y="17"
        width="2.48"
        height="4.83"
      />
      <rect
        id="leftTop"
        className={classes.cls4}
        x="31.24"
        y="10.98"
        width="2.48"
        height="4.83"
      />
    </g>
  );
};

export default BasePairGroup;
