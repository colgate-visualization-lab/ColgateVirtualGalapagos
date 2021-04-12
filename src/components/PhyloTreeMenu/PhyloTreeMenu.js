import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "auto",
    position: "absolute",
    zIndex: 100,
    top: 10,
    right: 10,
    padding: theme.spacing(1, 0),
    backgroundColor: "rgb(230,230,230)",
    borderRadius: "5px",
  },
}));

const PhyloTreeMenu = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default PhyloTreeMenu;
