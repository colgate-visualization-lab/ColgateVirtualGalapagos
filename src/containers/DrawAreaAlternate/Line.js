import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ResizingVertex from "./ResizingVertex";

const useStyles = makeStyles(() => ({
  line: {
    strokeWidth: ({ strokeWidth }) => `${strokeWidth}px`,
    stroke: ({ strokeColor }) => strokeColor,
    strokeLinecap: "round",
    strokeLineJoin: "round",
    "&:hover": {
      stroke: "#246AF2",
    },
  },
  highlightLine: {
    strokeWidth: ({ strokeWidth }) => `${strokeWidth + 3}px`,

    stroke: "#246AF2",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },
}));

const Line = ({ x1, y1, x2, y2, selected, options }) => {
  const styleProps = {
    strokeWidth: +options.get("strokeWidth"),
    strokeColor: options.get("strokeColor"),
  };
  const classes = useStyles(styleProps);

  return (
    <g>
      {selected && (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={classes.highlightLine}
        />
      )}
      <line x1={x1} y1={y1} x2={x2} y2={y2} className={classes.line} />
      {selected && (
        <>
          <ResizingVertex cx={x1} cy={y1} />
          <ResizingVertex cx={x2} cy={y2} />
        </>
      )}
    </g>
  );
};

export default Line;
