import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Line from "./Line";
import Textbox from "./Textbox";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
}));

const unpackElementDetails = (element) => {
  return {
    x1: element.get("x1"),
    y1: element.get("y1"),
    x2: element.get("x2"),
    y2: element.get("y2"),
    selected: element.get("selected"),
    focused: element.get("focused"),
    cursor: element.get("cursor"),
  };
};

const Drawing = ({ elements }) => {
  const classes = useStyles();

  const drawnElements = {
    line: Line,
    textbox: Textbox,
  };

  return (
    <>
      <svg className={classes.drawing} id="parentSvg">
        {elements.map((element, index) => {
          const CurrentElement = drawnElements[element.get("type")];
          return (
            <CurrentElement key={index} {...unpackElementDetails(element)} />
          );
        })}
      </svg>
    </>
  );
};

export default Drawing;
