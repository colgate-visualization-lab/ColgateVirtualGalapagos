import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Textbox from "./Textbox";
import Slide12Header from "../IguanaSlide12/Slide12Header";
import { Transform } from "./utils";

const useStyles = makeStyles(() => ({
  drawArea: {
    position: "relative",
    height: "70vh",
    width: "100%",
    backgroundColor: "white",
  },
}));

const DrawArea = ({ tabIndex, handleTabChange }) => {
  const classes = useStyles();

  const [mouseDown, setMouseDown] = useState(false);
  const [selectedTool, setSelectedTool] = useState("select");
  const [selectedObject, setSelectedObject] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState();
  const [penLines, setPenLines] = useState(List());
  const [straightLines, setStraightLines] = useState(List());
  const [textboxes, setTextboxes] = useState(List());

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const drawAreaRef = useRef();

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (e.button != 0) {
      return;
    }

    setMouseDown(true);
    if (selectedTool == "select") {
      console.log("select selected");
    } else if (selectedTool === "pen") {
      handleDrawWithPen(e);
    } else if (selectedTool === "textbox") {
      handleTextbox(e);
    } else if (selectedTool === "line") {
      handleDrawWithLine(e);
    }
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!mouseDown) return;

    if (selectedTool === "select") {
      handleMoveObject(e);
    } else if (selectedTool === "pen") {
      handleDrawingWithPen(e);
    } else if (selectedTool === "line") {
      handleDrawingWithLine(e);
    }
  };

  const handleMouseUp = (e) => {
    setMouseDown(false);
    if (!selectedObject) return;

    if (selectedTool === "select") {
      handleStopMove(e);
    }
  };

  // select tool logic
  const handleSelect = (e, { name, index, side }) => {
    e.preventDefault();
    if (name === undefined || index === undefined) return;

    setSelectedObject({ name, index, side });

    const point = relativeCoordsForEvent(e);
    if (name === "line") {
      setStraightLines(straightLines.setIn([index, "selected"], true));
      setTransformOrigin(point);
    }
  };

  const handleMoveObject = (e) => {
    if (!selectedObject) return;

    const point = relativeCoordsForEvent(e);
    if (selectedObject.name === "line") {
      moveLine(point);
    }
  };

  const handleStopMove = (e) => {
    const point = relativeCoordsForEvent(e);
    console.log(selectedObject);
    if (selectedObject.name === "line") {
      const translate = getTranslateFromOrigin(point);
      let line = straightLines.get(selectedObject.index);
      line = persistNewCoordinates(line, translate);
      line = resetTranslate(line);
      setStraightLines(straightLines.set(selectedObject.index, line));
    }

    setTransformOrigin();
    setSelectedObject(null);
  };

  const persistNewCoordinates = (line, translate) => {
    const newOrigin = new Map({
      x: line.get("origin").get("x") + translate.get("x"),
      y: line.get("origin").get("y") + translate.get("y"),
    });
    const newCurrent = new Map({
      x: line.get("current").get("x") + translate.get("x"),
      y: line.get("current").get("y") + translate.get("y"),
    });

    let newLine = line.set("origin", newOrigin);
    newLine = newLine.set("current", newCurrent);
    return newLine;
  };

  const resetTranslate = (line) => {
    return line.set(
      "translate",
      new Map({
        x: 0,
        y: 0,
      })
    );
  };

  const getTranslateFromOrigin = (point) =>
    new Map({
      x: point.get("x") - transformOrigin.get("x"),
      y: point.get("y") - transformOrigin.get("y"),
      side: selectedObject.side,
    });

  // line tool logic
  const handleDrawWithLine = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = straightLines.push(
      new Map({
        origin: point,
        current: point,
        translate: new Map({
          x: 0,
          y: 0,
        }),
        selected: false,
      })
    );
    setStraightLines(updatedLines);
  };

  const handleDrawingWithLine = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = straightLines.setIn(
      [straightLines.size - 1, "current"],
      point
    );
    setStraightLines(updatedLines);
  };

  const moveLine = (point) => {
    const translate = getTranslateFromOrigin(point);
    setTransformOrigin(point);
    let newLines;
    if (selectedObject.side === "both") {
      newLines = updateCoords(straightLines, translate, "origin");
      newLines = updateCoords(newLines, translate, "current");
    } else if (selectedObject.side === "start") {
      newLines = updateCoords(straightLines, translate, "origin");
    } else if (selectedObject.side === "end") {
      newLines = updateCoords(straightLines, translate, "current");
    }
    setStraightLines(newLines);
  };

  const updateCoords = (lines, translate, label) =>
    lines.updateIn(
      [selectedObject.index, label],
      (coord) =>
        new Map({
          x: coord.get("x") + translate.get("x"),
          y: coord.get("y") + translate.get("y"),
        })
    );

  // textbox logic
  const handleTextbox = (e) => {
    const point = relativeCoordsForEvent(e);
    setTextboxes(textboxes.push(point));
  };

  // pen tool logic
  const handleDrawWithPen = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = penLines.push(List([point]));

    setPenLines(updatedLines);
  };

  const handleDrawingWithPen = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = penLines.updateIn([penLines.size - 1], (line) =>
      line.push(point)
    );

    setPenLines(updatedLines);
  };

  const relativeCoordsForEvent = (e) => {
    const boundingRect = drawAreaRef.current.getBoundingClientRect();
    return new Map({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top,
    });
  };

  const handleToolChange = (name) => {
    setSelectedTool(name);
  };

  const handleErase = (index, target) => {
    if (!mouseDown || selectedTool !== "eraser") return;

    if (target === "pen") {
      setPenLines(penLines.splice(index, 1));
    } else if (target === "line") {
      setStraightLines(straightLines.splice(index, 1));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Slide12Header
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
          header="Draw a phylogenetic tree on the canvas"
        >
          <DrawAreaToolbar
            handleToolChange={handleToolChange}
            selected={selectedTool}
          />
        </Slide12Header>
      </Grid>
      <Grid item xs={12}>
        <div
          ref={drawAreaRef}
          className={classes.drawArea}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {textboxes.map((position, index) => (
            <Textbox key={index} text="" position={position} />
          ))}
          <Drawing
            penLines={penLines}
            straightLines={straightLines}
            handleErase={handleErase}
            handleSelect={handleSelect}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrawArea;
