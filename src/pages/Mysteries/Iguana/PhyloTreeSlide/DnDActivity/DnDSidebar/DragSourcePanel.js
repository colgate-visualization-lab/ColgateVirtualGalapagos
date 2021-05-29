import React from "react";
import Grid from "@material-ui/core/Grid";
import { useDrop } from "react-dnd";

import DragSources from "./DragSources";
import { useDnDActivity } from "../../contexts/DnDActivityContext";
import actions from "../../constants/actions";

const DragSourcePanel = () => {
  const [, dispatch] = useDnDActivity();
  const [, drop] = useDrop({
    accept: "iguana",
    drop: (item) => {
      const droppedItem = { ...item, destination: "sidebar" };
      dispatch({ type: actions.DROP, droppedItem });
      return item;
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Grid
      item
      container
      justify="center"
      spacing={2}
      style={{ minHeight: "4em" }}
      ref={drop}
    >
      <DragSources />
    </Grid>
  );
};

export default DragSourcePanel;
