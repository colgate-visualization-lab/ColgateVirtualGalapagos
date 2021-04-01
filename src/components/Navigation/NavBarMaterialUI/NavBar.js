import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { logo, backpack } from "../../../assets/Misc";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },

  navbarImage: {
    height: "3em",
  },

  navbarImageContainer: { padding: 0 },

  tabContainer: {
    marginLeft: "auto",
    color: "white",
  },

  tab: {
    ...theme.typography.link,
    minWidth: 10,
    marginLeft: "25px", // we use fixed units here to create consistency regardless of screen size
    fontSize: "0.8rem",
  },

  menuItem: {
    fontSize: "0.8rem",
  },
  link: {
    color: "black",
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <Button
            className={classes.navbarImageContainer}
            component={Link}
            to="/home"
          >
            <img
              alt="website logo"
              className={classes.navbarImage}
              src={logo}
            />
          </Button>
          <Tabs
            className={classes.tabContainer}
            value={false}
            textColor="primary"
          >
            <Tab
              value={0}
              className={classes.tab}
              component={Link}
              to="/home"
              label="Mysteries"
            />
            <Tab
              value={1}
              className={classes.tab}
              component={Link}
              to="/gallery"
              label="Gallery"
            />
            <Tab
              value={2}
              className={classes.tab}
              component={Link}
              to="/authorization"
              label="Sign In"
            />
          </Tabs>

          {/* backpack drowdown */}
          <Button
            className={classes.navbarImageContainer}
            aria-controls="backpack-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <img
              className={classes.navbarImage}
              src={backpack}
              alt="Backpack Menu"
            />
          </Button>
          <Menu
            id="backpack-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose} >
              <Link className={classes.link} to="/fieldbook">Fieldbook</Link>
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
            <Link className={classes.link} to="/settings">Settings</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default NavBar;
