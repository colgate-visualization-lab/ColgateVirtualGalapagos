import { useState } from "react";
const useDragSourceStyle = (isDragging) => {
  const [dragStyle, setDragStyle] = useState("neutral");

  const handleEvent = (event) => {
    if (isDragging) return;
    switch (event.type) {
      case "mouseover": {
        setDragStyle("hover");
        break;
      }
      case "mouseleave": {
        setDragStyle("neutral");
        break;
      }
      case "mousedown": {
        setDragStyle("clicked");
        break;
      }
      case "mouseup": {
        setDragStyle("neutral");
        break;
      }
      default: {
        throw new Error(`Unhandled event type: ${event.type}`);
      }
    }
  };

  return { handleEvent, dragStyle, setDragStyle };
};

export default useDragSourceStyle;
