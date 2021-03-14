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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    // marginRight: theme.spacing(2),
    position: "relative",
    // height: "100%",
    overflowY: "visible",
  },

  menuButton: {
    position: "absolute",
    top: 10,
    left: 5,
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(2),
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
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(
            classes.menuButton,
            contentDrawerOpen && classes.hide
          )}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={contentDrawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography className={classes.drawerTitle} variant="h6">
              Slides
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {slideData.map((data, index) => (
              <ListItem button key={index} component={Link} to={data.id}>
                <ListItemText primary={data.title} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </>
    </div>
  );
}
