import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const unpackElementDetails = (element) => {
  return [
    element.get("x1"),
    element.get("y1"),
    element.get("x2"),
    element.get("y2"),
    element.get("selected"),
  ];
};

const Line = ({ element }) => {
  const classes = useStyles();
  const [x1, y1, x2, y2, selected] = unpackElementDetails(element);

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
    </g>
  );
};

export default Line;
