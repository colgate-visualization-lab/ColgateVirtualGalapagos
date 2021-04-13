import React from "react";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import IguanaBox from "./IguanaBox";

const useStyles = makeStyles((theme) => ({
  iguanaBoxes: {
    position: "relative",
    justifySelf: "center",

    display: "flex",
    justifyItems: "center",
    alignItems: "space-between",

    backgroundColor: "#FFF",
    borderRadius: "5px",

    // margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

const IguanaDragSource = ({ undraggedNames, completedTreeVisible }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.iguanaBoxes}>
      {undraggedNames.map((iguanaName, index) => (
        <Grow in={!completedTreeVisible} key={index}>
          <IguanaBox name={iguanaName} />
        </Grow>
      ))}
    </Paper>
  );
};

export default IguanaDragSource;
