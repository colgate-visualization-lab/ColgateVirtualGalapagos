import React, { useEffect, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
const style = {
  border: "1px dashed gray",
  backgroundColor: "black",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};

export const Text = ({ name, handleDrag, handleDrop, type }) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { name, type },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (dropResult.dropped) {
        handleDrag(item.type);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, connectDrop] = useDrop({
    accept: ["sourceTextbox", "targetTextbox"],
    // drop: moveCard,
    drop(item, monitor) {
      const prevText = name !== "Drag Here" ? name : "";

      return handleDrop(item.name, prevText, item.type);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div className="text" ref={ref} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
