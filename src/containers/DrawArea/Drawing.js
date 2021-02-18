import React from "react";
import DrawingLine from "./DrawingLine";
import StraightLine from "./StraightLine";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: "0.9rem",
  },
}));
const Drawing = ({ penLines, straightLines, handleErase }) => {
  const classes = useStyles();

  return (
    <svg className={classes.drawing}>
      <text x="20" y="35" className={classes.text}>
        My
      </text>
      {penLines.map((line, index) => (
        <DrawingLine
          key={index}
          line={line}
          index={index}
          handleErase={handleErase}
        />
      ))}
      {straightLines.map((line, index) => (
        <StraightLine
          line={line}
          key={index}
          index={index}
          handleErase={handleErase}
        />
      ))}
    </svg>
  );
};

export default Drawing;
