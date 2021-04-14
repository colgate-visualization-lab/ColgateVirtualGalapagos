import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const PhyloTreeSidebar = ({ children }) => {
  return (
    <Grid container spacing={1}>
      {children}
    </Grid>
  );
};

export default PhyloTreeSidebar;
