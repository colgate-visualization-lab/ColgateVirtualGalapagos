import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BoundingVertex from "./BoundingVertex";

const useStyles = makeStyles(() => ({
  line: {
    strokeWidth: "5px",
    stroke: "black",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },
}));

const StraightLine = ({ line, handleErase, handleSelect, index }) => {
  const classes = useStyles();
  const [origin, current, translate, selected] = [
    line.get("origin"),
    line.get("current"),
    line.get("translate"),
    line.get("selected"),
  ];

  const boundingVertices = [
    { position: origin, parent: { name: "line", index, side: "start" } },
    { position: current, parent: { name: "line", index, side: "end" } },
  ];
  return (
    <g transform={`translate(${translate.get("x")} ${translate.get("y")})`}>
      <line
        onMouseOver={() => {
          handleErase(index, "line");
        }}
        onMouseDown={(e) => {
          handleSelect(e, { name: "line", index, side: "both" });
        }}
        onMouseMove={() => {
          console.log("mouse moving");
        }}
        x1={origin.get("x")}
        y1={origin.get("y")}
        x2={current.get("x")}
        y2={current.get("y")}
        className={classes.line}
      />
      {selected &&
        boundingVertices.map(({ position, parent }, index) => (
          <BoundingVertex
            key={index}
            cx={position.get("x")}
            cy={position.get("y")}
            parent={parent}
            handleMouseDown={handleSelect}
          />
        ))}
    </g>
  );
};

export default StraightLine;
