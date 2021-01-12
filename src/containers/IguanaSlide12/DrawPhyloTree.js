import React, { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import { Box } from "./Box";
import { Text } from "./Text";
import update from "immutability-helper";

export default function DrawPhyloTree() {
  // maintain list of
  const [placedItems, setPlacedItems] = useState([null, null, null]);
  const [unplacedItems, setUnplacedItems] = useState([
    "Green Iguana",
    "Land Iguana",
    "Marine Iguana",
  ]);

  // function moveCard(item, index) {
  //   // the update(boxText...) function is equivalent to
  //   //   taking boxText array, updating the value on one index,
  //   //   then returning that as a new array
  //   const newBoxText = update(boxText, { [index]: { $set: item.name } });
  //   setBoxText(newBoxText);
  //   const newDraggedText = update(
  //     draggedText,
  //     item.name ? { $push: [item.name] } : { $push: [] }
  //   );
  //   setDraggedText(newDraggedText);
  // }

  const moveItem = (item, index, dndRef) => {};

  const handleDrag = (itemType, index) => {
    if (itemType === "sourceTextbox") {
      setUnplacedItems(
        update(unplacedItems, {
          [index]: { $set: null },
        })
      );
      unplacedItems;
    } else {
      setPlacedItems(update(placedItems, { [index]: { $set: null } }));
    }
  };

  const handleDroppedOnSource = (newText, itemType) => {
    if (itemType === "sourceTextbox") {
      return { dropped: false };
    } else {
      setUnplacedItems(
        update(unplacedItems, {
          [unplacedItems.indexOf(null)]: { $set: newText },
        })
      );
      return { dropped: true };
    }
  };
  const handleDroppedOnTarget = (newText, prevText, index) => {
    setPlacedItems(update(placedItems, { [index]: { $set: newText } }));
    if (prevText !== "") {
      setUnplacedItems(
        update(unplacedItems, {
          [unplacedItems.indexOf(null)]: { $set: prevText },
        })
      );
    }

    return { dropped: true };
  };

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
        {unplacedItems.map((iguanaName, index) => (
          <Text
            name={iguanaName ? iguanaName : "Drag Here"}
            key={index}
            type="sourceTextbox"
            handleDrag={(itemType) => {
              handleDrag(itemType, index);
            }}
            handleDrop={(newText, prevText, itemType) =>
              handleDroppedOnSource(newText, itemType)
            }
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
        {placedItems.map((iguanaName, index) => (
          <Text
            name={iguanaName ? iguanaName : "Drag Here"}
            key={index}
            type="targetTextbox"
            handleDrag={(itemType) => {
              handleDrag(itemType, index);
            }}
            handleDrop={(newText, prevText, itemType) =>
              handleDroppedOnTarget(newText, prevText, index)
            }
          />
        ))}

        {/* <Box text={boxText[0]} moveCard={(item) => moveCard(item, 0)} />
        <Box text={boxText[1]} moveCard={(item) => moveCard(item, 1)} />
        <Box text={boxText[2]} moveCard={(item) => moveCard(item, 2)} />
        <Box text={boxText[3]} moveCard={(item) => moveCard(item, 3)} /> */}
      </div>
    </div>
  );
}
