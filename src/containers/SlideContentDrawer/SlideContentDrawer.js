import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import {
  DrawerIcon,
  DrawerContent,
  DrawerHeader,
} from "../../components/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflowY: "visible",
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
