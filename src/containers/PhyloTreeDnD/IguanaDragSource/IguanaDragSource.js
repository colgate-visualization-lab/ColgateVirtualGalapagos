import React from "react";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";

import IguanaBox from "./IguanaBox";

const useStyles = makeStyles(() => ({
  iguanaBoxes: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    // width: "100%",
    // height: "2.7rem",
    maxWidth: "960px",
    minWidth: "600px",
  },
}));

const IguanaDragSource = ({ undraggedNames, completedTreeVisible }) => {
  const classes = useStyles();
  return (
    <div className={classes.iguanaBoxes}>
      {undraggedNames.map((iguanaName, index) => (
        <Grow in={!completedTreeVisible} key={index}>
          <IguanaBox name={iguanaName} />
        </Grow>
      ))}
    </div>
  );
};

export default IguanaDragSource;
