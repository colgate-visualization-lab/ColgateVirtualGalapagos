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
    position: "relative",
    overflowY: "visible",
    background: "transparent",
  },
  text: {
    transform: ({ mirrorX, mirrorY }) => `scale(${mirrorX}, ${mirrorY})`,
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

const Textbox = ({ x1, y1, x2, y2, selected, focused }) => {
  const [value, setValue] = useState("");
  const ref = useRef();

  useEffect(() => {
    // console.log(focused);
    if (focused) {
      // console.log("focus it out");
      ref.current.focus();
    } else {
      // console.log("blur it out");
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
  };
  // console.log(styleProps.)
  const classes = useStyles(styleProps);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <g
      onMouseDown={(e) => {
        console.log(focused);
      }}
    >
      <foreignObject
        x={styleProps.left}
        y={styleProps.top}
        height={styleProps.height}
        width={styleProps.width}
        className={classes.textDiv}
      >
        <textarea
          autoFocus={false}
          disabled={!focused}
          ref={ref}
          className={classes.text}
          value={value}
          onChange={handleChange}
        />
      </foreignObject>
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
    </g>
  );
};

export default Textbox;
