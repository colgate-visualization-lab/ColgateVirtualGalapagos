import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: (drawerWidth) => drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: (drawerWidth) => drawerWidth,
  },
}));

const DrawerContent = ({
  children,
  drawerWidth,
  contentDrawerOpen,
  anchor,
}) => {
  const classes = useStyles(drawerWidth);
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor={anchor}
      open={contentDrawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  );
};

export default DrawerContent;
