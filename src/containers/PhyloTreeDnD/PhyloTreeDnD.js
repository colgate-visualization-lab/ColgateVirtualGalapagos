import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DragSourcePanel from "./DragSourcePanel";
import IguanaDropTarget from "./IguanaDropTarget";
import IguanaDragSource from "./IguanaDragSource";
import PhyloTreeDnDMenu from "./PhyloTreeDnDMenu";
import { MainActivityArea } from "../../components/PhyloTree";
import PhyloTreeSidebar from "../../components/PhyloTreeSidebar";
import { Slide11Context } from "../../contexts";
import useTreeDnD from "../../hooks/useTreeDnD";

import { Box, delay } from "./utils";

const PhyloTreeDnD = () => {
  const content = useContext(Slide11Context);
  // prettier-ignore
  const { iguanaNames, iguanaNamesPlacement
	} = content.phyloTreeData

  const [state, dispatch] = useTreeDnD(iguanaNames, iguanaNamesPlacement);

  // prettier-ignore
  let { draggedNames, undraggedNames, correctnessIndicatorVisible, completedTreeVisible,
	} = state

  const handleDrop = (droppedName, index) => {
    const currentBox = draggedNames[index];
    dispatch({ type: "UPDATE_UNDRAGGED_NAMES", droppedName, currentBox });
    dispatch({ type: "UPDATE_DRAGGED_NAMES", droppedName, index, currentBox });
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: false });
    dispatch({ type: "SET_COMPLETE_TREE_STATUS", value: false });
  };

  const handleCheckTree = () => {
    dispatch({ type: "SET_TREE_CORRECTNESS_INDICATOR", value: true });
  };

  const handleShowTree = async () => {
    console.log(content.id);
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

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <PhyloTreeSidebar>
            <Grid item>
              {/* <DragSourcePanel
                undraggedNames={undraggedNames}
                completedTreeVisible={completedTreeVisible}
              /> */}
            </Grid>
            {/* <Grid item>
              <PhyloTreeDnDMenu
                handleCheckTree={handleCheckTree}
                handleResetTree={handleResetTree}
                handleShowTree={handleShowTree}
                completedTreeVisible={completedTreeVisible}
              />
            </Grid> */}
          </PhyloTreeSidebar>
          <MainActivityArea>
            {/* <IguanaDropTarget
              content={content}
              draggedNames={draggedNames}
              correctnessIndicatorVisible={correctnessIndicatorVisible}
              handleDrop={handleDrop}
            /> */}
          </MainActivityArea>
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default PhyloTreeDnD;
