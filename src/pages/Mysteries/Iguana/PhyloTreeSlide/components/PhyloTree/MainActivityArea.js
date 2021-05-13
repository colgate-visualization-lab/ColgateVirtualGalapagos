import React from "react";
import Grid from "@material-ui/core/Grid";

const MainActivityArea = ({ children }) => {
  return (
    <Grid item xs>
      {children}
    </Grid>
  );
};

export default MainActivityArea;
