import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
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
}));

const getChevronIcon = (direction, anchor) => {
  if (direction === "ltr") {
    if (anchor === "left") {
      return ChevronLeftIcon;
    } else {
      return ChevronRightIcon;
    }
  } else {
    if (anchor === "left") {
      return ChevronRightIcon;
    } else {
      return ChevronLeftIcon;
    }
  }
};

const DrawerHeader = ({ title, anchor, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const ChevronIcon = getChevronIcon(theme.direction, anchor);
  return (
    <div className={classes.drawerHeader}>
      <Typography className={classes.drawerTitle} variant="h6">
        {title}
      </Typography>
      <IconButton onClick={handleDrawerClose}>
        <ChevronIcon />
      </IconButton>
    </div>
  );
};

export default DrawerHeader;
