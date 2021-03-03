import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PencilLine from "./PencilLine";
import StraightLine from "./StraightLine";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
}));
const Drawing = ({ pencilLines, straightLines, handleErase, handleSelect }) => {
  const classes = useStyles();

  return (
    <svg className={classes.drawing}>
      {/* <Textbox position={{ x: 200, y: 100 }} text="anything I want it to be" /> */}
      {pencilLines.map((line, index) => (
        <PencilLine
          key={index}
          line={line}
          index={index}
          handleErase={handleErase}
          handleSelect={handleSelect}
        />
      ))}
      {straightLines.map((line, index) => (
        <StraightLine
          line={line}
          key={index}
          index={index}
          handleErase={handleErase}
          handleSelect={handleSelect}
        />
      ))}
    </svg>
  );
};

export default Drawing;
