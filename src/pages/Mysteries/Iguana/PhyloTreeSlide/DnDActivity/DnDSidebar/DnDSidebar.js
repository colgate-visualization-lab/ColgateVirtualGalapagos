import React from "react";
import Grid from "@material-ui/core/Grid";

import ActionButtons from "../../components/ActionButtons";
import Instructions from "../../components/Instructions";
import DragSourcePanel from "./DragSourcePanel";
import Sidebar from "../../components/Sidebar";
import actions from "../../constants/actions";
import { useDnDActivity } from "../../contexts/DnDActivityContext";

const DnDSidebar = () => {
  const [, dispatch] = useDnDActivity();
  const handleResetTree = () => {
    dispatch({ type: actions.RESET_TREE });
  };

  const handleShowTree = () => {
    dispatch({ type: actions.SHOW_TREE });
  };

  const handleCheckTree = () => {
    dispatch({ type: actions.CHECK_TREE });
  };

  const actionButtons = [
    { text: "Check Tree", handleClick: handleCheckTree },
    { text: "Show Tree", handleClick: handleShowTree },
    { text: "Reset Tree", handleClick: handleResetTree },
  ];

  return (
    <Sidebar>
      <Grid item>
        <Instructions>
          Create a phylogenetic tree by dragging the iguana names below and
          place them on the tree to the right. Once done, press "Check Tree"
          button to check if made a correct tree.
        </Instructions>
      </Grid>
      <DragSourcePanel />
      <Grid item container justify="center" spacing={2}>
        <ActionButtons buttons={actionButtons} />
      </Grid>
    </Sidebar>
  );
};

export default DnDSidebar;
