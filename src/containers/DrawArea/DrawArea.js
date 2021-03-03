import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { List, Map } from "immutable";
import { makeStyles } from "@material-ui/core/styles";

import Drawing from "./Drawing";
import DrawAreaToolbar from "./DrawAreaToolbar";
import Textbox from "./Textbox";
import Slide12Header from "../IguanaSlide12/Slide12Header";

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
  const [pencilLines, setPencilLines] = useState(List());
  const [straightLines, setStraightLines] = useState(List());
  const [textboxes, setTextboxes] = useState(List());

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const drawAreaRef = useRef();

  const handleMouseDown = (e, ...args) => {
    e.preventDefault();
    if (e.button != 0) {
      return;
    }

    setMouseDown(true);
    if (selectedTool == "select") {
      if (e.target.id === "parentSvg" || e.target.id === "parentDiv")
        handleSelect(e);
    } else if (selectedTool === "pencil") {
      handleDrawWithPencil(e);
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
    } else if (selectedTool === "pencil") {
      handleDrawingWithPencil(e);
    } else if (selectedTool === "line") {
      handleDrawingWithLine(e);
    }
  };

  const handleMouseUp = (e) => {
    setMouseDown(false);
    if (!selectedObject) return;

    if (selectedTool === "select") {
      // handleStopMove(e);
    }
  };

  // select tool logic
  const handleSelect = (e, args) => {
    // console.log("handle select first ");

    e.preventDefault();
    clearSelected(args);
    if (!args) {
      setSelectedObject(null);
      return;
    }
    const currentlySelected = { ...args };
    setSelectedObject(currentlySelected);

    const point = relativeCoordsForEvent(e);
    if (currentlySelected.name === "line") {
      setStraightLines(
        straightLines.setIn([currentlySelected.index, "selected"], true)
      );
      setTransformOrigin(point);
    } else if (currentlySelected.name === "pencil") {
      setPencilLines(
        pencilLines.setIn([currentlySelected.index, "selected"], true)
      );
      setTransformOrigin(point);
    }
  };

  const handleMoveObject = (e) => {
    if (!selectedObject || !mouseDown) return;

    const point = relativeCoordsForEvent(e);
    if (selectedObject.name === "line") {
      moveLine(point);
    } else if (selectedObject.name === "pencil") {
      movePencilLine(point);
    }
  };

  const handleStopMove = (e) => {
    setTransformOrigin();
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
    let newLines = straightLines;

    if (selectedObject.side === "both") {
      newLines = updateCoords(newLines, translate, "origin");
      newLines = updateCoords(newLines, translate, "current");
    } else if (selectedObject.side === "start") {
      newLines = updateCoords(newLines, translate, "origin");
    } else if (selectedObject.side === "end") {
      newLines = updateCoords(newLines, translate, "current");
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

  // pencil tool logic
  const handleDrawWithPencil = (e) => {
    const point = relativeCoordsForEvent(e);
    const updatedLines = pencilLines.push(
      new Map({
        coords: List([point]),
        translate: new Map({
          x: 0,
          y: 0,
        }),
        selected: false,
        bounds: {
          top: point.get("y") - 5,
          bottom: point.get("y") + 5,
          left: point.get("x") - 5,
          right: point.get("x") + 5,
        },
      })
    );
    // console.log("here");

    setPencilLines(updatedLines);
  };

  const handleDrawingWithPencil = (e) => {
    const point = relativeCoordsForEvent(e);
    let updatedLines = pencilLines.updateIn(
      [pencilLines.size - 1, "coords"],
      (line) => line.push(point)
    );
    updatedLines = updatedLines.updateIn(
      [pencilLines.size - 1, "bounds"],
      (bounds) => ({
        top: bounds.top < point.get("y") - 5 ? bounds.top : point.get("y") - 5,
        bottom:
          bounds.bottom > point.get("y") + 5
            ? bounds.bottom
            : point.get("y") + 5,
        left:
          bounds.left < point.get("x") - 5 ? bounds.left : point.get("x") - 5,
        right:
          bounds.right > point.get("x") + 5 ? bounds.right : point.get("x") + 5,
      })
    );

    setPencilLines(updatedLines);
  };

  const movePencilLine = (point) => {
    const translate = getTranslateFromOrigin(point);
    setTransformOrigin(point);
    if (selectedObject.side === "all") {
      setPencilLines(
        pencilLines.updateIn(
          [selectedObject.index, "translate"],
          (prevTranslate) =>
            new Map({
              x: translate.get("x") + prevTranslate.get("x"),
              y: translate.get("y") + prevTranslate.get("y"),
            })
        )
      );
    } else if (selectedObject.side === "topLeft") {
      setPencilLines(
        pencilLines.updateIn([selectedObject.index, "bounds"], (bounds) => ({
          ...bounds,
          top: bounds.top + translate.get("y"),
          left: bounds.left + translate.get("x"),
        }))
      );
    } else if (selectedObject.side === "topRight") {
      setPencilLines(
        pencilLines.updateIn([selectedObject.index, "bounds"], (bounds) => ({
          ...bounds,
          top: bounds.top + translate.get("y"),
          right: bounds.right + translate.get("x"),
        }))
      );
    } else if (selectedObject.side === "bottomLeft") {
      setPencilLines(
        pencilLines.updateIn([selectedObject.index, "bounds"], (bounds) => ({
          ...bounds,
          bottom: bounds.bottom + translate.get("y"),
          left: bounds.left + translate.get("x"),
        }))
      );
    } else if (selectedObject.side === "bottomRight") {
      setPencilLines(
        pencilLines.updateIn([selectedObject.index, "bounds"], (bounds) => ({
          ...bounds,
          bottom: bounds.bottom + translate.get("y"),
          right: bounds.right + translate.get("x"),
        }))
      );
    }
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

    if (target === "pencil") {
      setPencilLines(pencilLines.splice(index, 1));
    } else if (target === "line") {
      setStraightLines(straightLines.splice(index, 1));
    }
  };

  const clearSelected = (currentlySelected) => {
    // console.log(currentlySelected);
    // console.log(straightLines);

    setStraightLines(
      straightLines.map((line, index) => {
        if (!currentlySelected || currentlySelected.index !== index)
          return line.set("selected", false);
        return line.set("selected", true);
      })
    );
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
          id="parentDiv"
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
            pencilLines={pencilLines}
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
