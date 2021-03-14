import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "1.2rem",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "1.5rem",
    height: "1.5rem",
    border: "2px solid #E5E5E5",
    borderRadius: "5px",
  },
  iconButtonContainer: {
    width: "100%",
    height: "100%",
  },
  iconButton: {
    height: "100%",
    width: "100%",
  },
}));

const ElementActions = ({ handleAction }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={2}>
        <div className={classes.input}>
          <IconButton
            size="small"
            className={classes.iconButtonContainer}
            onClick={() => {
              handleAction("duplicate");
            }}
          >
            <FileCopyOutlinedIcon className={classes.iconButton} />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.input}>
          <IconButton
            size="small"
            className={classes.iconButtonContainer}
            onClick={() => {
              handleAction("delete");
            }}
          >
            <DeleteOutlineOutlinedIcon className={classes.iconButton} />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default ElementActions;
