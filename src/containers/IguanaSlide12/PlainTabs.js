import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
// import { plainTabsStylesHook } from '@mui-treasury/styles/tabs';

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #e9e9e9",
    "&:not(:first-of-type)": {
      marginLeft: -1,
    },
    background: "#f7f7f7",
    opacity: 1,
    color: "black",
  },
  selected: {
    borderBottomWidth: 0,
    background: "#ffffff",
    "& $wrapper": {
      opacity: 1,
    },
  },
  wrapper: {
    opacity: 0.7,
  },
  indicator: {
    display: "none",
  },
}));

const PlainTabs = ({ tabIndex, handleChangeTab }) => {
  const classes = useStyles();
  const tabItemClasses = {
    root: classes.root,
    selected: classes.selected,
    wrapper: classes.wrapper,
  };
  return (
    <Tabs
      classes={{ indicator: classes.indicator }}
      value={tabIndex}
      onChange={(e, index) => handleChangeTab(index)}
      textColor="inherit"
    >
      <Tab classes={tabItemClasses} label={"Draw My Own Tree"} />
      <Tab classes={tabItemClasses} label={"Use A Tree Template"} />
    </Tabs>
  );
};

export default PlainTabs;
