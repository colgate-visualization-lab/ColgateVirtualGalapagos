import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:not(:first-of-type)": {
      marginLeft: -1,
    },
    // background: "#f7f7f7",
    background: "rgba(228, 228, 228, 1)",
    opacity: 1,
    padding: 0,
    margin: theme.spacing(0, 2, 0, 0),
    color: "black",
    fontWeight: theme.typography.fontWeightBold,
  },
  selected: {
    borderBottomWidth: "3px black",
    "& $wrapper": {
      opacity: 1,
    },
  },
  wrapper: {
    opacity: 0.5,
    fontSize: "1.2rem",
    textTransform: "capitalize",
  },
  indicator: {
    color: "black",
  },
}));

const PlainTabs = ({ tabIndex, handleTabChange, tabLabels }) => {
  const classes = useStyles();
  const tabItemClasses = {
    root: classes.root,
    selected: classes.selected,
    wrapper: classes.wrapper,
  };
  return (
    <Tabs
      // classes={{ indicator: classes.indicator }}
      indicatorColor="primary"
      value={tabIndex}
      onChange={(e, index) => handleTabChange(index)}
      textColor="inherit"
    >
      {tabLabels.map((label, index) => (
        <Tab key={`${label}-${index}`} classes={tabItemClasses} label={label} />
      ))}
    </Tabs>
  );
};

export default PlainTabs;
