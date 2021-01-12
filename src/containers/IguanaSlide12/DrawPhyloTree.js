import React, { useState } from "react";
import { Text } from "./Text";
import update from "immutability-helper";

export default function DrawPhyloTree({ pos }) {
  const [targetBoxes, TargetBoxes] = useState([null, null, null]);
  const [sourceBoxes, setSourceBoxes] = useState([
    "Green Iguana",
    "Land Iguana",
    "Marine Iguana",
  ]);

  const handleDrag = (itemType, index) => {
    if (itemType === "sourceTextbox") {
      // the update(boxText...) function is equivalent to
      //   taking boxText array, updating the value on one index,
      //   then returning that as a new array
      setSourceBoxes(
        update(sourceBoxes, {
          [index]: { $set: null },
        })
      );
      sourceBoxes;
    } else {
      TargetBoxes(update(targetBoxes, { [index]: { $set: null } }));
    }
  };

  const handleDroppedOnSource = (newText, itemType) => {
    if (itemType === "sourceTextbox") {
      return { dropped: false };
    } else {
      setSourceBoxes(
        update(sourceBoxes, {
          [sourceBoxes.indexOf(null)]: { $set: newText },
        })
      );
      return { dropped: true };
    }
  };
  const handleDroppedOnTarget = (newText, prevText, index) => {
    TargetBoxes(update(targetBoxes, { [index]: { $set: newText } }));
    if (prevText !== "") {
      setSourceBoxes(
        update(sourceBoxes, {
          [sourceBoxes.indexOf(null)]: { $set: prevText },
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
        {sourceBoxes.map((iguanaName, index) => (
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

      {
        // we pass the targetbox positions that's we calculated and
        // passed down from IguanaSlide12
        targetBoxes.map((iguanaName, index) => (
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
        ))
      }
    </div>
  );
}
