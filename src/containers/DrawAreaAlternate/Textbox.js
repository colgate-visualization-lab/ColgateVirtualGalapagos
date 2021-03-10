import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ResizingVertex from "./ResizingVertex";

const useStyles = makeStyles((theme) => ({
  boundingRect: {
    stroke: "#246AF2",
    strokeDasharray: "4",
    strokeWidth: "2px",
    fill: "transparent",
  },
  textDiv: {
    position: "relative",
    overflowY: "visible",
    background: "transparent",
  },
  text: {
    height: "100%",
    width: "100%",
    fontSize: "1rem",
    fontFamily: "'Roboto Mono', monospace",
    padding: theme.spacing(0),
    resize: "none",
    background: "transparent",
    border: "none",
    "&:hover": {
      cursor: "default",
      outline: "none",
      border: "transparent",
      background: "transparent",
    },
    "&:focus": {
      outline: "none",
      background: "transparent",
      border: "transparent",
    },
  },
  input: {
    backgroundColor: "black",
  },
}));

const Textbox = ({ x1, y1, x2, y2, selected }) => {
  const [value, setValue] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (selected) ref.current.focus();
  });

  const styleProps = {
    left: x1,
    top: y1,
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
  };
  const classes = useStyles(styleProps);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <g>
      <foreignObject
        x={x1}
        y={y1}
        height={styleProps.height}
        width={styleProps.width}
        className={classes.textDiv}
      >
        <textarea
          // onMouseDown={(e) => {
          //   e.preventDefault();
          // }}
          // disabled={selected}
          ref={ref}
          className={classes.text}
          value={value}
          onChange={handleChange}
        />
      </foreignObject>
      {/* {selected && ( */}
      <rect
        x={x1}
        y={y1}
        height={styleProps.height}
        width={styleProps.width}
        className={classes.boundingRect}
      />
      <>
        <ResizingVertex cx={x1} cy={y1} />
        <ResizingVertex cx={x1} cy={y2} />
        <ResizingVertex cx={x2} cy={y1} />
        <ResizingVertex cx={x2} cy={y2} />
      </>
      {/* )} */}
    </g>
  );
};

export default Textbox;
