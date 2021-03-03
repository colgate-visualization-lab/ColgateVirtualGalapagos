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
    fill: "none",
    strokeWidth: "2px",
    stroke: "#246AF2",
    strokeDasharray: "4",
    "&:hover": {
      cursor: "ew-resize",
    },
  },
}));

const PencilLine = ({ line, index, handleSelect, handleErase }) => {
  const classes = useStyles();

  const [coords, translate, selected] = [
    line.get("coords"),
    line.get("translate"),
    line.get("selected"),
  ];

  const getBounds = () => {
    let bounds = {
      top: Number.MAX_SAFE_INTEGER,
      bottom: Number.MIN_SAFE_INTEGER,
      left: Number.MAX_SAFE_INTEGER,
      right: Number.MIN_SAFE_INTEGER,
    };
    coords.forEach((p) => {
      const [x, y] = [p.get("x"), p.get("y")];
      bounds.top = bounds.top < y ? bounds.top : y;
      bounds.bottom = bounds.bottom > y ? bounds.bottom : y;
      bounds.left = bounds.left < x ? bounds.left : x;
      bounds.right = bounds.right > x ? bounds.right : x;
    });

    bounds = {
      top: bounds.top - 3,
      bottom: bounds.bottom + 3,
      left: bounds.left - 3,
      right: bounds.right + 3,
    };
    return bounds;
  };

  const bounds = getBounds();

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
          {boundingVertices.map(({ position, parent }, index) => (
            <BoundingVertex
              key={index}
              cx={position.x}
              cy={position.y}
              parent={parent}
              handleMouseDown={handleSelect}
            />
          ))}
          <path
            onMouseOver={() => {
              handleErase(index, "pencil");
            }}
            onMouseDown={(e) => {
              handleSelect(e, { name: "pencil", index, side: "both" });
            }}
            className={classes.highlightPath}
            d={pathData}
          />
          {/* <rect
            onMouseMove={() => {
              console.log("mouse mvoing over");
            }}
            x={bounds.left}
            y={bounds.top}
            width={bounds.right - bounds.left}
            height={bounds.bottom - bounds.top}
            className={classes.boundingRect}
          /> */}
        </>
      )}
      <rect
        onMouseMove={() => {
          console.log("mouse mvoing over");
        }}
        onMouseDown={(e) => {
          handleSelect(e, { name: "pencil", index, side: "all" });
        }}
        x={bounds.left}
        y={bounds.top}
        width={bounds.right - bounds.left}
        height={bounds.bottom - bounds.top}
        className={classes.boundingRect}
      />
      <path
        onMouseOver={() => {
          handleErase(index, "pencil");
        }}
        onMouseDown={(e) => {
          handleSelect(e, { name: "pencil", index, side: "both" });
        }}
        className={classes.path}
        d={pathData}
      />
    </g>
  );
};

export default PencilLine;
