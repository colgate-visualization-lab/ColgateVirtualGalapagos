import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Line, Textbox } from "./Tools";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
}));

const unpackElementDetails = (element) => {
  const elementDetails = {
    x1: element.get("x1"),
    y1: element.get("y1"),
    x2: element.get("x2"),
    y2: element.get("y2"),
    selected: element.get("selected"),
    focused: element.get("focused"),
    cursor: element.get("cursor"),
    options: element.get("options"),
  };

  // add textValue if type textbox
  if (element.get("type") === "textbox") {
    elementDetails.text = element.get("text");
  }
  return elementDetails;
};

const Drawing = ({ elements, handleTextChange }) => {
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
            <CurrentElement
              key={index}
              {...unpackElementDetails(element)}
              handleTextChange={handleTextChange}
            />
          );
        })}
      </svg>
    </>
  );
};

export default Drawing;
