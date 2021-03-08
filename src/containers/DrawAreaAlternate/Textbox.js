import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textDiv: {},
  text: {
    position: "absolute",
    top: (styleProps) => styleProps.top + styleProps.translateY,
    left: (styleProps) => styleProps.left + styleProps.translateX,

    textAlign: "center",
    backgroundColor: "transparent",
    padding: theme.spacing(0),
    border: "transparent",

    "&:hover": {
      outline: "none",
      border: "2px dashed #246AF2",
      borderRadius: "5px",
      cursor: "default",
    },

    "&:focus": {
      outline: "none",
      border: "2px solid #246AF2",
      borderRadius: "5px",
    },
  },
  input: {
    backgroundColor: "black",
  },
}));

const Textbox = () => {
  const classes = useStyles(styleProps);

  return (
    <div className={classes.textDiv}>
      <input
        onMouseOver={(e) => {
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          e.preventDefault();
        }}
        className={classes.text}
        value="This is a textbox"
      />
    </div>
  );
};

export default Textbox;
