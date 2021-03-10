import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ResizingVertex from "./ResizingVertex";

const useStyles = makeStyles(() => ({
  line: {
    strokeWidth: "3",
    stroke: "black",
    strokeLinecap: "round",
    strokeLineJoin: "round",
    "&:hover": {
      stroke: "#246AF2",
    },
    "&:active": {
      stroke: "black",
    },
  },
  highlightLine: {
    strokeWidth: "5px",
    stroke: "#246AF2",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },
}));

const Line = ({ x1, y1, x2, y2, selected }) => {
  const classes = useStyles();
  // console.log(x1, x2);
  // const [] = unpackElementDetails(element);

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
