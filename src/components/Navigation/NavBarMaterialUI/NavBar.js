import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">The Virtual Galapagos</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default NavBar;
