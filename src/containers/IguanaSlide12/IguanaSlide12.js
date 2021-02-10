import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

import DropTarget from "./DropTarget";
import IguanaBox from "./IguanaBox";
import { Slide12Context, Box } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    padding: theme.spacing(4),
  },
  iguanaBoxes: {
    position: "relative",
    backgroundColor: "rgb(118,116,116)",
    boxShadow: "inset 0 0 2px #000000",
    borderRadius: "4px",
    width: "100%",
    height: "2.7rem",
    maxWidth: "960px",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%",
    padding: theme.spacing(2, 1),
  },
  dropTargetContainer: {
    position: "relative",
    width: "960px",
    height: "540px",
    marginTop: "2rem",
  },
  dropTargetDiv: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  backgroundImg: {
    maxWidth: "100%",
    display: "block",
    height: "auto",
  },
  buttons: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "960px",
    height: "3rem",
    border: "1px solid black",
    padding: theme.spacing(2, 1),
    backgroundColor: "rgb(118,116,116)",
  },
  button: {
    margin: theme.spacing(0, 1),
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  header: {
    fontSize: "1.5rem",
  },
}));

const IguanaSlide12 = ({ content }) => {
  const [undraggedBoxes, setUndraggedBoxes] = useState([
    "Marine Iguana",
    "Green Iguana",
    "Land Iguana",
  ]);
  const [draggedBoxes, setDraggedBoxes] = useState([
    new Box(["Green Iguana"]),
    new Box(["Marine Iguana", "Land Iguana"]),
    new Box(["Marine Iguana", "Land Iguana"]),
  ]);

  const [checkTree, setCheckTree] = useState(false);
  const [completeTree, setCompleteTree] = useState(false);

  const props = { backgroundUrl: `url('${content.backgroundUrl}')` };
  const classes = useStyles(props);

  const handleDrop = (dropppedName, index) => {
    const currentBox = draggedBoxes[index];
    updateUndraggedBoxes(dropppedName, index, currentBox);
    updateDraggedBoxes(dropppedName, index, currentBox);
  };

  const updateUndraggedBoxes = (dropppedName, index, currentBox) => {
    let newlyUndragged = undraggedBoxes.filter((name) => dropppedName !== name);
    if (
      currentBox.placedName !== null &&
      currentBox.placedName !== dropppedName
    ) {
      newlyUndragged = update(newlyUndragged, {
        $push: [currentBox.placedName],
      });
    }
    setUndraggedBoxes(newlyUndragged);
  };
  const updateDraggedBoxes = (dropppedName, index, currentBox) => {
    let newDraggedBoxes = draggedBoxes.map((box) => {
      let newBox = new Box(box.validNames);
      newBox.placedName =
        dropppedName === box.placedName ? null : box.placedName;
      return newBox;
    });
    newDraggedBoxes = update(newDraggedBoxes, {
      [index]: { $set: new Box(currentBox.validNames, dropppedName) },
    });
    setDraggedBoxes(newDraggedBoxes);
  };

  const handleCheckTree = () => {
    setCheckTree(true);
  };

  const handleShowTree = () => {
    setCompleteTree(true);
    const branchNames = getBranchNames();
    setTimeout(() => {
      setDraggedBoxes([
        new Box(["Green Iguana"], "Green Iguana"),
        new Box(["Marine Iguana", "Land Iguana"], branchNames.topRightBranch),
        new Box(
          ["Marine Iguana", "Land Iguana"],
          branchNames.bottomRightBranch
        ),
      ]);
    }, 500);
  };

  const getBranchNames = () => {
    let topRightBranch = draggedBoxes[1].placedName;
    let bottomRightBranch = draggedBoxes[2].placedName;
    if (
      topRightBranch === "Marine Iguana" ||
      bottomRightBranch === "Marine Iguana"
    ) {
      topRightBranch = topRightBranch ? topRightBranch : "Land Iguana";
      bottomRightBranch = bottomRightBranch ? bottomRightBranch : "Land Iguana";
    } else if (
      topRightBranch === "Land Iguana" ||
      bottomRightBranch === "Land Iguana"
    ) {
      topRightBranch = topRightBranch ? topRightBranch : "Marine Iguana";
      bottomRightBranch = bottomRightBranch
        ? bottomRightBranch
        : "Marine Iguana";
    } else {
      topRightBranch = "Marine Iguana";
      bottomRightBranch = "Land Iguana";
    }

    return { topRightBranch, bottomRightBranch };
  };

  const resetCheck = () => {
    setCheckTree(false);
  };
  const DropTargetComponent = ({ index, ...props }) => (
    <DropTarget
      {...props}
      index={index}
      onDrop={handleDrop}
      placedName={draggedBoxes[index].placedName}
    >
      {checkTree &&
        (draggedBoxes[index].isPlacedCorrectly() ? (
          <CheckCircleIcon fontSize="small" />
        ) : (
          <CancelIcon fontSize="small" />
        ))}
    </DropTarget>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Slide12Context.Provider value={resetCheck}>
        <div className={classes.root}>
          <div className={classes.headerDiv}>
            <Typography variant="h1" className={classes.header}>
              Drag the iguana species onto the tree to create a phylogenetic
              tree
            </Typography>
          </div>
          <div className={classes.iguanaBoxes}>
            {undraggedBoxes.map((iguanaName, index) => (
              <Grow in={!completeTree} key={index}>
                <IguanaBox name={iguanaName} />
              </Grow>
            ))}
          </div>
          <div className={classes.dropTargetContainer}>
            <img
              src={content.backgroundUrl}
              className={classes.backgroundImg}
            />
            <div className={classes.dropTargetDiv}>
              <DropTargetComponent top={270} left={60} index={0} />
              <DropTargetComponent top={135} left={736} index={1} />
              <DropTargetComponent top={405} left={736} index={2} />
            </div>
          </div>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={handleCheckTree}
            >
              Check My Tree
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={handleShowTree}
            >
              Show Completed Tree
            </Button>
          </div>
        </div>
      </Slide12Context.Provider>
    </DndProvider>
  );
};

export default IguanaSlide12;
