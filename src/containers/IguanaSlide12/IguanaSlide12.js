import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

import DropTarget from "./DropTarget";
import IguanaBox from "./IguanaBox";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  iguanaBoxes: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "inset 0 0 2px #000000",
    borderRadius: "4px",
    width: "700px",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "5%",
  },
  dropTargetContainer: {
    position: "relative",
    width: "960px",
    height: "540px",
    marginTop: "2rem",
    backgroundImage: ({ backgroundUrl }) => backgroundUrl,
  },
}));

const IguanaSlide12 = ({ content }) => {
  const [undraggedBoxes, setUndraggedBoxes] = useState([
    "Marine Iguana",
    "Green Iguana",
    "Land Iguana",
  ]);
  const [draggedBoxes, setDraggedBoxes] = useState([null, null, null]);

  const props = { backgroundUrl: `url('${content.backgroundUrl}')` };
  const classes = useStyles(props);

  const handleDrop = (dropppedName, index) => {
    let newlyUndragged = undraggedBoxes.filter((name) => dropppedName !== name);
    if (draggedBoxes[index] !== null) {
      console.log(draggedBoxes[index], "here");

      newlyUndragged = update(newlyUndragged, { $push: [draggedBoxes[index]] });
    }
    setUndraggedBoxes(newlyUndragged);

    let newDraggedBoxes = draggedBoxes.map((name) =>
      dropppedName === name ? null : name
    );
    newDraggedBoxes = update(newDraggedBoxes, {
      [index]: { $set: dropppedName },
    });

    setDraggedBoxes(newDraggedBoxes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.root}>
        <div className={classes.iguanaBoxes}>
          {undraggedBoxes.map((iguanaName, index) => (
            <IguanaBox name={iguanaName} key={index} />
          ))}
        </div>
        <div className={classes.dropTargetContainer}>
          <DropTarget
            top={270}
            left={60}
            onDrop={handleDrop}
            index={0}
            box={draggedBoxes[0]}
          />
          <DropTarget
            top={135}
            left={736}
            onDrop={handleDrop}
            index={1}
            box={draggedBoxes[1]}
          />
          <DropTarget
            top={405}
            left={736}
            onDrop={handleDrop}
            index={2}
            box={draggedBoxes[2]}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default IguanaSlide12;
