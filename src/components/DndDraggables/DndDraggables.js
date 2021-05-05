import React from "react";
import { ItemTypes } from "utils/items";
import { useDrag } from "react-dnd";

const DndDraggables = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.VOLCANO },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    begin: () => props.updateDragIndex(),
    canDrag: () => {
      return props.isReady;
    },
  });
  const style1 = { opacity: "0.5" };
  if (props.answered) {
    return (
      <div
        style={isDragging ? style1 : {}}
        className={props.isReady ? props.readyClass : props.class}
      ></div>
    );
  } else {
    return (
      <div
        ref={drag}
        style={isDragging ? style1 : {}}
        className={props.isReady ? props.readyClass : props.class}
      >
        {props.text}
      </div>
    );
  }
};

export default DndDraggables;
