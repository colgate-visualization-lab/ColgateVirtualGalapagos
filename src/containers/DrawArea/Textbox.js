import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    position: "absolute",
    top: (styleProps) => styleProps.top,
    left: (styleProps) => styleProps.left,
    fontSize: "0.9rem",
    backgroundColor: "transparent",
    padding: theme.spacing(1),
  },
  input: {
    backgroundColor: "black",
  },
}));

const Textbox = ({ position }) => {
  const [text, setText] = useState("");
  const styleProps = {
    left: position.get("x"),
    top: position.get("y"),
  };
  const classes = useStyles(styleProps);

  return (
    <input
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onChange={(e) => {
        setText(e.target.value);
      }}
      className={classes.text}
      value={text}
    />
  );
};

export default Textbox;
