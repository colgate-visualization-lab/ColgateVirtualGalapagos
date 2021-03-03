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

const Textbox = ({ textboxDetails, index, handleSelect }) => {
  const [position, selected, translate] = [
    textboxDetails.get("position"),
    textboxDetails.get("selected"),
    textboxDetails.get("translate"),
  ];

  const [text, setText] = useState("");
  const [size, setSize] = useState(1);
  const styleProps = {
    left: position.get("x"),
    top: position.get("y"),
    translateX: translate.get("x"),
    translateY: translate.get("y"),
  };
  const classes = useStyles(styleProps);

  return (
    <div className={classes.textDiv}>
      <input
        autoFocus={selected}
        size={size}
        onMouseOver={(e) => {
          // e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          handleSelect(e, { name: "textbox", index, side: "all" });
        }}
        onKeyDown={(e) => {
          handleDelete(e, index, "line");
        }}
        onChange={(e) => {
          const currVal = e.target.value;
          setSize(currVal === "" ? 1 : currVal.length);
          setText(currVal);
        }}
        className={classes.text}
        value={text}
      />
    </div>
  );
};

export default Textbox;
