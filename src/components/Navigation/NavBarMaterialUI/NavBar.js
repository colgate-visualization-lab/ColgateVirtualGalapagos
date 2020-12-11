import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import { logo } from "../../../assets/Misc";
import { transform } from "../../../assets/VolcanoModule";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "2.5em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px", // we use fixed units here to create consistency regardless of screen size
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img alt="website logo" className={classes.logo} src={logo} />
          <Tabs className={classes.tabContainer}>
            <Tab
              className={classes.tab}
              component={Link}
              to="/home"
              label="Mysteries"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/gallery"
              label="Gallery"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/authorization"
              label="Sign In"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/fieldbook"
              label="Fieldbook"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default NavBar;
