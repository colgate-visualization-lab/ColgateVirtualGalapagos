import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  path: {
    fill: "none",
    strokeWidth: "2px",
    stroke: "black",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },
}));

const DrawingLine = ({ line, index, handleErase }) => {
  const classes = useStyles();
  const pathData =
    "M " + line.map((p) => p.get("x") + " " + p.get("y")).join(" L ");

  return (
    <path
      onMouseOver={() => {
        handleErase(index);
      }}
      className={classes.path}
      d={pathData}
    />
  );
};

export default DrawingLine;
