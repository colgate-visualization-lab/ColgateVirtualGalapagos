import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DnDActivityContextProvider } from "../contexts/DnDActivityContext";
import DnDSidebar from "./DnDSidebar";
import DnDMainActivity from "./DnDMainActivity";
import CustomDragLayer from "./CustomDragLayer/CustomDragLayer";

const DnDActivity = () => {
  return (
    <Grid container spacing={0} justify="center">
      <DndProvider backend={HTML5Backend}>
        <DnDActivityContextProvider>
          <DnDSidebar />
          <DnDMainActivity />
          <CustomDragLayer />
        </DnDActivityContextProvider>
      </DndProvider>
    </Grid>
  );
};

DnDActivity.propTypes = {};

export default DnDActivity;
