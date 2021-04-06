import React, { useState, useReducer } from "react";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

import DropTarget from "./DropTarget";
import IguanaBox from "./IguanaBox";
import PhyloTreeHeader from "../PhyloTreeHeader";
import { Box } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  iguanaBoxes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    width: "100%",
    height: "2.7rem",
    maxWidth: "960px",
    minWidth: "600px",
  },
  dropTargetContainer: {
    position: "relative",
    maxWidth: "960px",
    maxHeight: "600px",
    margin: theme.spacing(2),
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
    width: "100%",
    height: "auto",
    padding: theme.spacing(2, 0),
    margin: theme.spacing(3, 0, 0, 0),
    backgroundColor: "rgb(248,248,248)",
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

const getBranchNames = (topRightBranch, bottomRightBranch) => {
  //prettier-ignore
  if (topRightBranch === "Marine Iguana" || bottomRightBranch === "Land Iguana"){
    bottomRightBranch = "Land Iguana";
    topRightBranch = "Marine Iguana";
  } else {
    bottomRightBranch = "Marine Iguana";
    topRightBranch = "Land Iguana";
  }

  return { topRightBranch, bottomRightBranch };
};

const useTreeDnD = (iguanaNames, iguanaNamesPlacement) => {
  let initialState = {
    undraggedNames: iguanaNames,
    draggedNames: iguanaNamesPlacement.map((box) => new Box(box)),
    correctnessIndicatorVisible: false,
    completedTreeVisible: false,
  };

  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_UNDRAGGED_NAMES": {
        let { droppedName, currentBox } = action;
        let newlyUndragged = state.undraggedNames.filter(
          (name) => droppedName !== name
        );
        // prettier-ignore
        if (currentBox.placedName !== null && currentBox.placedName !== droppedName) {
          newlyUndragged = update(newlyUndragged, {
            $push: [currentBox.placedName],
          });
        }
        return {
          ...state,
          undraggedNames: newlyUndragged,
        };
      }
      case "UPDATE_DRAGGED_NAMES": {
        let { droppedName, currentBox, index } = action;
        let newDraggedNames = state.draggedNames.map((box) => {
          let newBox = new Box(box.validNames);
          newBox.placedName =
            droppedName === box.placedName ? null : box.placedName;
          return newBox;
        });
        newDraggedNames = update(newDraggedNames, {
          [index]: { $set: new Box(currentBox.validNames, droppedName) },
        });
        console.log(newDraggedNames);
        return {
          ...state,
          draggedNames: newDraggedNames,
        };
      }
      case "SET_UNDRAGGED_NAMES": {
        return {
          ...state,
          undraggedNames: action.names,
        };
      }
      case "SET_DRAGGED_NAMES": {
        return {
          ...state,
          draggedNames: action.names,
        };
      }
      case "SET_TREE_CORRECTNESS_INDICATOR": {
        return {
          ...state,
          correctnessIndicatorVisible: action.value,
        };
      }
      case "SET_COMPLETE_TREE_STATUS": {
        return {
          ...state,
          // correctnessIndicatorVisible: false,
          completedTreeVisible: action.value,
        };
      }
      case "SHOW_COMPLETED_TREE": {
        let newDraggedNames = [];
        if (action.id === "12") {
          const branchNames = getBranchNames(
            state.draggedNames[1].placedName,
            state.draggedNames[2].placedName
          );

          newDraggedNames = [
            new Box(["Green Iguana"], "Green Iguana"),
            new Box(
              ["Marine Iguana", "Land Iguana"],
              branchNames.topRightBranch
            ),
            new Box(
              ["Marine Iguana", "Land Iguana"],
              branchNames.bottomRightBranch
            ),
          ];
        } else {
          newDraggedNames = [
            new Box([""], ""),
            new Box(["Pink Iguana"], "Pink Iguana"),
          ];
        }

        return {
          ...state,
          correctnessIndicatorVisible: false,
          completedTreeVisible: true,
          draggedNames: newDraggedNames,
        };
      }
      default: {
        return state;
      }
    }
  }, initialState);

  return [state, dispatch];
};

const PhyloTreeDnD = ({ content, tabIndex, handleTabChange }) => {
  const {
    iguanaNames,
    iguanaNamesPlacement,
    imgDimensions,
    dropTargetDimensions,
    dropTargets,
  } = content.phyloTreeData;

  const [state, dispatch] = useTreeDnD(iguanaNames, iguanaNamesPlacement);

  let {
    draggedNames,
    undraggedNames,
    correctnessIndicatorVisible,
    completedTreeVisible,
  } = state;

  const props = { backgroundUrl: `url('${content.backgroundUrl}')` };
  const classes = useStyles(props);

  const handleDrop = (droppedName, index) => {
    console.log("called here?");
    const currentBox = draggedNames[index];
    dispatch({ type: "UPDATE_UNDRAGGED_NAMES", droppedName, currentBox });
    dispatch({ type: "UPDATE_DRAGGED_NAMES", droppedName, index, currentBox });
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
  };

  const handleCheckTree = () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: true });
  };

  // cause delay
  const delay = (time = 500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const handleShowTree = async () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: true });
    await delay(200);
    dispatch({ type: "SET_UNDRAGGED_NAMES", names: [] });
    await delay(200);
    dispatch({ type: "SHOW_COMPLETED_TREE", id: content.id });
  };

  const handleResetTree = async () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: false });
    await delay(200);
    dispatch({
      type: "SET_DRAGGED_NAMES",
      names: iguanaNamesPlacement.map((box) => new Box(box)),
    });
    await delay(300);
    dispatch({ type: "SET_UNDRAGGED_NAMES", names: iguanaNames });
  };

  const DropTargetComponent = ({ index, ...props }) => (
    <DropTarget
      {...props}
      index={index}
      imgDimensions={imgDimensions}
      dropTargetDimensions={dropTargetDimensions}
      onDrop={handleDrop}
      placedName={draggedNames[index].placedName}
    >
      {correctnessIndicatorVisible &&
        (draggedNames[index].isPlacedCorrectly() ? (
          <CheckCircleIcon fontSize="inherit" />
        ) : (
          <CancelIcon fontSize="inherit" />
        ))}
    </DropTarget>
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.root}>
        <PhyloTreeHeader
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
          header="Create a phylogenetic tree by dragging the cards below to their correct positions"
        >
          <div className={classes.iguanaBoxes}>
            {undraggedNames.map((iguanaName, index) => (
              <Grow in={!completedTreeVisible} key={index}>
                <IguanaBox name={iguanaName} />
              </Grow>
            ))}
          </div>
        </PhyloTreeHeader>
        <div className={classes.dropTargetContainer}>
          <img src={content.backgroundUrl} className={classes.backgroundImg} />
          <div className={classes.dropTargetDiv}>
            {dropTargets.map(({ top, left }, index) => (
              <DropTargetComponent
                key={index}
                top={top}
                left={left}
                index={index}
              />
            ))}
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
          {completedTreeVisible ? (
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={handleResetTree}
            >
              Reset Tree
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={handleShowTree}
            >
              Show Completed Tree
            </Button>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default PhyloTreeDnD;
