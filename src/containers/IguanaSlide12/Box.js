import React, { useEffect } from "react";
import { Text } from "./Text";
import { useDrag, useDrop } from "react-dnd";
import classes from "./Box.css";
export const Box = ({ text, text1, moveCard, onDrop }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: "text",
    // drop: () => moveCard(),
    drop: moveCard,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      drop: monitor.drop,
    }),
  });
  // useEffect(() => {
  //   console.log(text);
  // });
  return (
    <div
      className={classes.box}
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    >
      {text ? <Text name={text} /> : "Drag here"}
    </div>
  );
};
