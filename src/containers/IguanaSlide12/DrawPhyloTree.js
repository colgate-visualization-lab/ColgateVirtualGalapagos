import React, { useEffect, useRef, useState } from "react"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop  } from "react-dnd";
import Box from "./Box"
import Text from "./Text"
export default function DrawPhyloTree(){
    const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }

  return (
    <div className="app">
      <Box text={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
      <Box text={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
      <Box text={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
    </div>)
}


  