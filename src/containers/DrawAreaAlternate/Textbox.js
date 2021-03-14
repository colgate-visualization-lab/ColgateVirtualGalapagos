import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ResizingVertex from "./ResizingVertex";
import { LinearScale } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  boundingRect: {
    stroke: "#246AF2",
    strokeDasharray: "4",
    strokeWidth: "2px",
    fill: "transparent",
  },
  focusedRect: {
    stroke: "#246AF2",
    strokeWidth: "1px",
    fill: "transparent",
  },
  textDiv: {
    background: "transparent",
    padding: 0,
  },
  text: {
    height: "100%",
    width: "100%",
    transform: ({ mirrorX, mirrorY }) => `scale(${mirrorX}, ${mirrorY})`,
    fontFamily: "'Roboto Mono', monospace",
    fontSize: ({ options }) =>
      theme.typography.pxToRem(options.get("fontSize")),
    color: ({ options }) => options.get("strokeColor"),
    textAlign: ({ options }) => options.get("textAlign"),
    padding: 0,
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

const Textbox = ({ x1, y1, x2, y2, selected, focused, options }) => {
  const [value, setValue] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (focused) {
      ref.current.focus();
    } else {
      ref.current.blur();
    }
  });

  const styleProps = {
    left: x1 <= x2 ? x1 : x2,
    top: y1 <= y2 ? y1 : y2,
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
    mirrorX: x1 <= x2 ? 1 : -1,
    mirrorY: y1 <= y2 ? 1 : -1,
    options,
  };
  // console.log(styleProps.)
  const classes = useStyles(styleProps);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <g>
      {focused && (
        <rect
          x={styleProps.left}
          y={styleProps.top}
          height={styleProps.height}
          width={styleProps.width}
          className={classes.focusedRect}
        />
      )}
      {selected && (
        <>
          <rect
            x={styleProps.left}
            y={styleProps.top}
            height={styleProps.height}
            width={styleProps.width}
            className={classes.boundingRect}
          />

          <ResizingVertex cx={x1} cy={y1} />
          <ResizingVertex cx={x1} cy={y2} />
          <ResizingVertex cx={x2} cy={y1} />
          <ResizingVertex cx={x2} cy={y2} />
        </>
      )}
      <foreignObject
        x={styleProps.left}
        y={styleProps.top}
        height={styleProps.height}
        width={styleProps.width}
        className={classes.textDiv}
      >
        <textarea
          autoFocus={false}
          ref={ref}
          className={classes.text}
          value={value}
          onChange={handleChange}
        />
      </foreignObject>
    </g>
  );
};

export default Textbox;
