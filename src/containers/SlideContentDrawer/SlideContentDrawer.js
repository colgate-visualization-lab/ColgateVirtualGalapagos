import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import { DrawerIcon, DrawerContent, DrawerHeader } from "../SlideDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflowY: "visible",
  },

  menuButton: {
    // zIndex: 100,
    position: "absolute",
    top: 10,
    left: 5,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    marginTop: theme.typography.pxToRem(60),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerTitle: {
    justifySelf: "flex-start",
    marginRight: "auto",
    marginLeft: theme.spacing(1),
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  slideTitle: {
    fontSize: "1rem",
  },

  cleanLink: {
    ...theme.typography.link,
    textTransform: "none",
  },
}));

export default function SlideContentDrawer({
  contentDrawerOpen,
  handleContentDrawerToggle,
  handleSlideChange,
  slideData,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    handleContentDrawerToggle(true);
  };

  const handleDrawerClose = () => {
    handleContentDrawerToggle(false);
  };

  return (
    <div className={classes.root}>
      <>
        <DrawerIcon
          handleDrawerOpen={handleDrawerOpen}
          contentDrawerOpen={contentDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </DrawerIcon>
        <DrawerContent
          drawerWidth={drawerWidth}
          contentDrawerOpen={contentDrawerOpen}
          anchor="left"
        >
          <DrawerHeader
            title="Slides"
            anchor="left"
            handleDrawerClose={handleDrawerClose}
          />
          <Divider />
          <List>
            {slideData.map((data, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={data.id}
                className={classes.cleanLink}
              >
                <ListItemText
                  primaryTypographyProps={{
                    className: classes.slideTitle,
                  }}
                  // className={classes.slideTitle}
                  primary={data.title}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
        </DrawerContent>
      </>
    </div>
  );
}
