import React, { useReducer, useContext, createContext } from "react";
import produce from "immer";
import isEmpty from "lodash/isEmpty";

import * as utils from "../utils/dnd-activity";
import { usePhyloTree } from "./PhyloTreeContext";
import actions from "../constants/actions";
import { useProgress, useSaveProgress } from "contexts/ProgressContext";

const DnDActivityContext = createContext();

const useDnDActivity = () => {
  const context = useContext(DnDActivityContext);
  if (context === null || context === undefined) {
    throw new Error(
      "useDnDActivity must be used within a DnDActivityContextProvider"
    );
  }
  return context;
};

const DnDActivityContextProvider = ({ children }) => {
  const {
    phyloTreeData: { iguanaNames, dropTargets },
  } = usePhyloTree();

  const { progress } = useProgress();
  const initialState = isEmpty(progress.state.dnd)
    ? {
        undraggedIguanas: iguanaNames,
        draggedIguanas: dropTargets,
        treeCorrectnessMarkers: null,
        allowTransition: false,
      }
    : progress.state.dnd;

  const [state, dispatch] = useReducer(
    produce((draft, action) => {
      switch (action.type) {
        case actions.DRAG_START: {
          draft.allowTransition = false;
          draft.treeCorrectnessMarkers = null;
          break;
        }

        case actions.DROP: {
          const { droppedItem, iguanaDetails } = action;
          const { iguana, source, destination } = droppedItem;
          if (destination === "tree") {
            const id = iguanaDetails.id;
            const previousItem = iguanaDetails.currentIguana;

            draft.undraggedIguanas = utils.getNewUndraggedIguanas(
              draft.undraggedIguanas,
              previousItem,
              iguana
            );
            draft.draggedIguanas = utils.getNewDraggedIguanas(
              draft.draggedIguanas,
              id,
              iguana,
              source
            );
          } else if (source !== "sidebar" && destination === "sidebar") {
            draft.undraggedIguanas.push(iguana);
            draft.draggedIguanas.forEach((item) => {
              item.currentIguana =
                item.currentIguana === iguana ? null : item.currentIguana;
            });
          }
          break;
        }

        case actions.RESET_TREE: {
          draft.undraggedIguanas = iguanaNames;
          draft.draggedIguanas = dropTargets;
          draft.treeCorrectnessMarkers = null;
          break;
        }

        case actions.SHOW_TREE: {
          draft.allowTransition = true;
          draft.treeCorrectnessMarkers = null;
          draft.undraggedIguanas = [];
          draft.draggedIguanas = utils.getCompletedTree(draft.draggedIguanas);
          break;
        }

        case actions.CHECK_TREE: {
          draft.allowTransition = true;
          draft.treeCorrectnessMarkers = utils.getTreeCorrectnessMarkers(
            draft.draggedIguanas
          );
          return;
        }

        default: {
          return;
        }
      }
    }),
    initialState
  );

  useSaveProgress({
    state: {
      ...progress.state,
      dnd: state,
    },
  });

  const value = [state, dispatch];

  return (
    <DnDActivityContext.Provider value={value}>
      {children}
    </DnDActivityContext.Provider>
  );
};

export { DnDActivityContextProvider, useDnDActivity };
