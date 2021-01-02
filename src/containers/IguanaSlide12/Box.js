import React from "react"
import Text from "./Text"
import { useDrag, useDrop  } from "react-dnd";
import classes from './Box.css'

export default function Box({ text, moveCard }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "text",
        drop: () => moveCard(),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      });
    return <div className={classes.box}
      ref={dropRef}
        style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
      >
        {text ? <Text /> : "Drag Here"}
        
      </div>;
  }
