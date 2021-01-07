import React from "react" 
import { useDrag, useDrop  } from "react-dnd";
const style = {
  border: "1px dashed gray",
  backgroundColor: "black",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};
export const Text = ({name}) =>{
    const [{ isDragging }, dragRef] = useDrag({
        item: { name,
          type: "text"
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      const opacity = isDragging ? 0.4 : 1;
    return (<div className="text" ref={dragRef} style={{ ...style, opacity }}>
    {name}
  </div>)
    
  }