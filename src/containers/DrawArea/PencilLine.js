import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BoundingVertex from "./BoundingVertex";

const useStyles = makeStyles(() => ({
  path: {
    fill: "none",
    strokeWidth: "3px",
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

  highlightPath: {
    fill: "none",
    strokeWidth: "5px",
    stroke: "#246AF2",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },

  boundingRect: {
    fill: "transparent",
    strokeWidth: "2px",
    stroke: "#246AF2",
    strokeDasharray: "4",
    // "&:hover": {
    //   cursor: "ew-resize",
    // },
  },
}));

const PencilLine = ({ line, index, handleSelect, handleErase }) => {
  const classes = useStyles();

  const [coords, translate, selected, bounds] = [
    line.get("coords"),
    line.get("translate"),
    line.get("selected"),
    line.get("bounds"),
  ];

  const boundingVertices = [
    {
      position: { x: bounds.left, y: bounds.top },
      parent: { name: "pencil", index, side: "topLeft" },
    },
    {
      position: { x: bounds.right, y: bounds.top },
      parent: { name: "pencil", index, side: "topRight" },
    },
    {
      position: { x: bounds.left, y: bounds.bottom },
      parent: { name: "pencil", index, side: "bottomLeft" },
    },
    {
      position: { x: bounds.right, y: bounds.bottom },
      parent: { name: "pencil", index, side: "bottomRight" },
    },
  ];

  const pathData =
    "M " +
    line
      .get("coords")
      .map((p) => p.get("x") + " " + p.get("y"))
      .join(" L ");

  return (
    <g transform={`translate(${translate.get("x")} ${translate.get("y")})`}>
      {selected && (
        <>
          <path
            onMouseOver={() => {
              handleErase(index, "pencil");
            }}
            onMouseDown={(e) => {
              handleSelect(e, { name: "pencil", index, side: "all" });
            }}
            className={classes.highlightPath}
            d={pathData}
          />
          <rect
            x={bounds.left}
            y={bounds.top}
            width={bounds.right - bounds.left}
            height={bounds.bottom - bounds.top}
            className={classes.boundingRect}
            onMouseDown={(e) => {
              handleSelect(e, { name: "pencil", index, side: "all" });
            }}
          />
          {boundingVertices.map(({ position, parent }, index) => (
            <BoundingVertex
              key={index}
              cx={position.x}
              cy={position.y}
              parent={parent}
              handleMouseDown={handleSelect}
            />
          ))}
        </>
      )}
      <svg
        id="frame_svg"
        // viewBox={`0 0 ${bounds.right - bounds.left}  ${
        //   bounds.bottom - bounds.top
        // }`}
        viewBox="0 0 100% 140vh"
        // preserveAspectRatio="none"
      >
        <path
          onMouseOver={() => {
            handleErase(index, "pencil");
          }}
          onMouseDown={(e) => {
            handleSelect(e, { name: "pencil", index, side: "all" });
          }}
          className={classes.path}
          d={pathData}
        />
      </svg>
    </g>
  );
};

export default PencilLine;
