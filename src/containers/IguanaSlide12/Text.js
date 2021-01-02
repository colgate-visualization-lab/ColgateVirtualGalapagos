import React from "react" 
import { useDrag, useDrop  } from "react-dnd";
const words =['Marine Iguana', 'Land Iguana']
     const items = words.map((word, idx) => {
       return <li key={idx}>{word}</li>;
     });
export default function Text() {
    const [{ isDragging }, dragRef] = useDrag({
        item: {
          type: "text",
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
    
    return <div className="text"
    ref={dragRef}
      style={{
        backgroundColor: isDragging ? "#fbb" : "black",
      }}
    >
      {items}
    </div>;
    
  }