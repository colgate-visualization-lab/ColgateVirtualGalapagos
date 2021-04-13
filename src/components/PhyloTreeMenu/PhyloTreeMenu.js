import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    // height: "auto",
    // position: "absolute",
    // top: 10,
    // right: 10,
    zIndex: 100,
    padding: theme.spacing(1),
    // marginRight: theme.spacing(2),
    backgroundColor: "#FFF",
    borderRadius: "5px",
  },
}));

const PhyloTreeMenu = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.root}>{children}</Paper>;
};

export default PhyloTreeMenu;
