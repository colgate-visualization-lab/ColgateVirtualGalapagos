import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    background: "white",
    border: "1px rgb(220,220,220)",
    padding: theme.spacing(2, 1),
  },
}));

const Sidebar = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={3} md={2} className={classes.menu}>
      <Grid container direction="column" spacing={2} justify="center">
        {children}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
