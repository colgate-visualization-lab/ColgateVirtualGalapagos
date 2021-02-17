import React from "react";
import DrawingLine from "./DrawingLine";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
}));
const Drawing = ({ lines, handleErase }) => {
  const classes = useStyles();

  return (
    <svg className={classes.drawing}>
      {lines.map((line, index) => (
        <DrawingLine
          key={index}
          line={line}
          index={index}
          handleErase={handleErase}
        />
      ))}
    </svg>
  );
};

export default Drawing;
