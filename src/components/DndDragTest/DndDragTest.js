import React from "react";
import { ItemTypes } from "utils/items";
import { useDrag } from "react-dnd";

const DndDraggables = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.VOLCANO },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    begin: () => props.onDrag(),
    canDrag: () => {
      return props.canDrag;
    },
  });
  const opaque = { opacity: "0.5" };

  if (props.dropped == false) {
    return (
      <div
        ref={drag}
        style={isDragging ? opaque : {}}
        className={props.className}
      >
        {props.children}
      </div>
    );
  } else {
    return null;
  }
};

export default DndDraggables;
