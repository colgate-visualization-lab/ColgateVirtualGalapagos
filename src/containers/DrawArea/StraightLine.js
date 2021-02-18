import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  line: {
    strokeWidth: "2px",
    stroke: "black",
    strokeLinecap: "round",
    strokeLineJoin: "round",
  },
}));

const StraightLine = ({ line, handleErase, index }) => {
  const classes = useStyles();
  console.log(line);
  const [origin, current] = [line.get("origin"), line.get("current")];
  return (
    <line
      onMouseOver={() => {
        handleErase(index, "line");
      }}
      x1={origin.get("x")}
      y1={origin.get("y")}
      x2={current.get("x")}
      y2={current.get("y")}
      className={classes.line}
    />
  );
};

export default StraightLine;
