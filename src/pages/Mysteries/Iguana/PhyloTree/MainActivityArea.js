import React from "react";
import Grid from "@material-ui/core/Grid";

const MainActivityArea = ({ children }) => {
  return (
    <Grid item xs container spacing={0} justify="center">
      {children}
    </Grid>
  );
};

export default MainActivityArea;
