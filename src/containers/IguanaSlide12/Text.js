import React, { useEffect } from "react";
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

export const Text = ({ name, isDropped }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { name, type: "text" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    console.log(isDropped);
  });

  const opacity = isDragging || isDropped ? 0.4 : 1;

  return (
    <div
      className="text"
      ref={!isDropped ? dragRef : null}
      style={{ ...style, opacity }}
    >
      {name}
    </div>
  );
};
