import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Line from "./Line";

const useStyles = makeStyles(() => ({
  drawing: {
    height: "100%",
    width: "100%",
  },
}));
const Drawing = ({ elements }) => {
  const classes = useStyles();

  const drawElement = (element, index) => {
    if (element === "line") {
      return <Line key={index} element={element} />;
    }
  };

  return (
    <svg className={classes.drawing} id="parentSvg">
      {elements.map((element, index) => (
        <Line element={element} key={index} />
      ))}
    </svg>
  );
};

export default Drawing;
