import React, { useEffect, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import { Box } from "./Box";
import { Text } from "./Text";
import update from "immutability-helper";

export default function DrawPhyloTree({ pos }) {
  useEffect(() => {
    console.log("drawPhylo");
    console.log(pos);
  });
  // maintain list of
  const [placedItems, setPlacedItems] = useState([null, null, null]);
  const [unplacedItems, setUnplacedItems] = useState([
    "Green Iguana",
    "Land Iguana",
    "Marine Iguana",
  ]);

  const handleDrag = (itemType, index) => {
    if (itemType === "sourceTextbox") {
      // the update(boxText...) function is equivalent to
      //   taking boxText array, updating the value on one index,
      //   then returning that as a new array
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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
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

      {placedItems.map((iguanaName, index) => (
        <Text
          name={iguanaName ? iguanaName : "Drag Here"}
          pos={pos[index]}
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
    </div>
  );
}
