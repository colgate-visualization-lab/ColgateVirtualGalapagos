import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Map from "./Map";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

const Islands = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        {/* <Paper> */}
        <Typography variant="h2" style={{ fontSize: "3rem" }}>
          CLICK ON AN ISLAND TO EXPLORE ITS MYSTERIES!
        </Typography>
        {/* </Paper> */}
      </Grid>

      <Grid item>
        {/* <div
          style={{
            height: "90vh",
            padding: "20px",
            width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
        <Map />
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default Islands;
