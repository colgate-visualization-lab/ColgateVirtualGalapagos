import React from "react";
import { useDragLayer } from "react-dnd";
import { makeStyles } from "@material-ui/core/styles";

import DragSourcePreview from "./DragSourcePreview";

const useStyles = makeStyles(() => ({
  dragLayer: {
    // cursor: "grabbing",
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
}));

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer = () => {
  const classes = useStyles();
  const { item, initialSourceOffset, currentSourceOffset, isDragging } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      initialSourceOffset: monitor.getInitialSourceClientOffset(),
      currentSourceOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  // useEffect(() => {
  //   // console.log(initialSourceOffset, currentSourceOffset);
  // }, [initialSourceOffset, currentSourceOffset]);
  if (!isDragging) return null;

  return (
    <div className={classes.dragLayer}>
      <div style={getItemStyles(initialSourceOffset, currentSourceOffset)}>
        <DragSourcePreview iguana={item.iguana} />
      </div>
    </div>
  );
};

export default CustomDragLayer;
