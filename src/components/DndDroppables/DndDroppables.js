import React, { useContext, Fragment } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "utils/items";

const DndDroppables = (props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.VOLCANO,
    drop: () => {
      if (props.dropIndex == props.dragIndex) {
        console.log("Right Answer");
        props.unlock();
      } else {
        console.log("Wrong Answer");
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const style1 = { opacity: "0.5" };
  const style2 = { opacity: "1" };
  if (props.answered) {
    return (
      <div className={props.divClass}>
        <h1 className={props.answerClass}>{props.text}</h1>
        <img
          style={isOver ? style1 : style2}
          ref={drop}
          src={props.src}
          className={props.class}
        />
      </div>
    );
  } else if (props.answered1) {
    return (
      <div ref={drop} className={props.answerClass}>
        {props.text}
      </div>
    );
  } else if (props.slide10) {
    return (
      <div
        style={isOver ? style1 : style2}
        ref={drop}
        className={props.class}
      />
    );
  } else {
    return (
      <div className={props.divClass}>
        <img
          style={isOver ? style1 : style2}
          ref={drop}
          src={props.src}
          className={props.class}
        />
      </div>
    );
  }
};

export default DndDroppables;
