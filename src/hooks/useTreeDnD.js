import { useReducer } from "react";
import update from "immutability-helper";
import { Box, getBranchNames } from "../containers/PhyloTreeDnD/utils";

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
          completedTreeVisible: action.value,
        };
      }
      case "SHOW_COMPLETED_TREE": {
        let newDraggedNames = [];
        if (action.id === "11") {
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

export default useTreeDnD;
