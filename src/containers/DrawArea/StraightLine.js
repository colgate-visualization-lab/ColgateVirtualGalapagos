import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  const [origin, current, translate] = [
    line.get("origin"),
    line.get("current"),
    line.get("translate"),
  ];
  return (
    <line
      onMouseOver={() => {
        handleErase(index, "line");
      }}
      onMouseDown={(e) => {
        handleSelect(e, "line", index);
      }}
      x1={origin.get("x")}
      y1={origin.get("y")}
      x2={current.get("x")}
      y2={current.get("y")}
      transform={`translate(${translate.get("x")} ${translate.get("y")})`}
      className={classes.line}
    />
  );
};

export default StraightLine;
