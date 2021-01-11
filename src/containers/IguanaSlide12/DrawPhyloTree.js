import React, { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import { Box } from "./Box";
import { Text } from "./Text";
import update from "immutability-helper";

export default function DrawPhyloTree() {
  const [index, setIndex] = useState(1);
  const [boxText, setBoxText] = useState([null, null, null, null]);

  function moveCard(item, index) {
    // the update(boxText...) function is equivalent to
    //   taking boxText array, updating the value on one index,
    //   then returning that as a new array
    console.log(item);
    console.log(index);
    const newBoxText = update(boxText, { [index]: { $set: item.name } });
    console.log(newBoxText);
    setBoxText(newBoxText);
    console.log(boxText);
  }

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
        <Text name="Green Iguana" />
        <Text name="Land Iguana" />
        <Text name="Marine Iguana" />
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
