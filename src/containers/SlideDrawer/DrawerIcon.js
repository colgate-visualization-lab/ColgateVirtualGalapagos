import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  menuButtonLeft: {
    position: "absolute",
    top: 10,
    left: 5,
  },
  menuButtonRight: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  hide: {
    display: "none",
  },
}));

const DrawerIcon = ({
  handleDrawerOpen,
  contentDrawerOpen,
  edge,
  children,
}) => {
  const classes = useStyles();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge={edge}
      className={clsx({
        [classes.menuButtonLeft]: edge === "start",
        [classes.menuButtonRight]: edge === "end",
        [classes.hide]: contentDrawerOpen,
      })}
    >
      {children}
    </IconButton>
  );
};

export default DrawerIcon;
