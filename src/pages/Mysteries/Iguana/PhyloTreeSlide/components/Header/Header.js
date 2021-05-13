import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import PlainTabs from "./PlainTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(228, 228, 228, 1)",
    width: "100%",
  },

  header: {
    fontSize: "1.2rem",
  },
}));

const Header = ({ tabIndex, handleTabChange }) => {
  const tabLabels = ["Draw My Own Tree", "Use A Tree Template"];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PlainTabs
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        tabLabels={tabLabels}
      />
    </div>
  );
};

export default Header;
