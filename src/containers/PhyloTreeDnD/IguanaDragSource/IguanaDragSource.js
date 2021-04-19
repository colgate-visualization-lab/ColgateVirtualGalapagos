import React from "react";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import IguanaBox from "./IguanaBox";

const useStyles = makeStyles((theme) => ({
  iguanaBoxes: {
    // position: "relative",
    // justifySelf: "center",
    // display: "flex",
    // justifyItems: "center",
    // alignItems: "space-between",
    // backgroundColor: "#FFF",
    // borderRadius: "5px",
    // // margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  container: {
    width: "20em",
  },
  dragTitle: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  dragInstruction: {
    fontSize: "0.8rem",
  },
}));

const IguanaDragSource = ({ undraggedNames, completedTreeVisible }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" spacing={1}>
      {/* <Paper className={classes.iguanaBoxes}> */}
      <Grid item>
        <Typography className={classes.dragTitle}>Instructions</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.dragInstruction}>
          Fill out the tree by dragging the iguana species names onto it
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          spacing={1}
          justify="center"
          // className={classes.container}
        >
          {undraggedNames.map((iguanaName, index) => (
            <Grid item key={index}>
              <Grow in={!completedTreeVisible}>
                <IguanaBox name={iguanaName} />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Grid>
  );
};

export default IguanaDragSource;
