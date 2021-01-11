import React, { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import { Box } from "./Box";
import { Text } from "./Text";
import update from "immutability-helper";

export default function DrawPhyloTree() {
  // const [index, setIndex] = useState(1);
  // maintain list of
  const [boxText, setBoxText] = useState([null, null, null, null]);
  const [draggedText, setDraggedText] = useState([]);

  function moveCard(item, index) {
    // the update(boxText...) function is equivalent to
    //   taking boxText array, updating the value on one index,
    //   then returning that as a new array
    const newBoxText = update(boxText, { [index]: { $set: item.name } });
    setBoxText(newBoxText);
    console.log(draggedText);
    const newDraggedText = update(
      draggedText,
      item.name ? { $push: [item.name] } : { $push: [] }
    );
    setDraggedText(newDraggedText);
    console.log(draggedText);
  }

  const iguanaNames = ["Green Iguana", "Land Iguana", "Marine Iguana"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        {iguanaNames.map((iguanaName, index) => (
          <Text
            name={iguanaName}
            key={index}
            isDropped={draggedText.indexOf(iguanaName) > -1}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <Box text={boxText[0]} moveCard={(item) => moveCard(item, 0)} />
        <Box text={boxText[1]} moveCard={(item) => moveCard(item, 1)} />
        <Box text={boxText[2]} moveCard={(item) => moveCard(item, 2)} />
        <Box text={boxText[3]} moveCard={(item) => moveCard(item, 3)} />
      </div>
    </div>
  );
}
