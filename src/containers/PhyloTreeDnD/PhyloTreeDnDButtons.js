import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "auto",
    padding: theme.spacing(2, 0),
    margin: theme.spacing(3, 0, 0, 0),
    backgroundColor: "rgb(248,248,248)",
  },
  button: {
    margin: theme.spacing(0, 1),
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
}));

const PhyloTreeDnDButtons = ({
  handleCheckTree,
  handleResetTree,
  handleShowTree,
  completedTreeVisible,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        onClick={handleCheckTree}
      >
        Check My Tree
      </Button>
      {completedTreeVisible ? (
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={handleResetTree}
        >
          Reset Tree
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={handleShowTree}
        >
          Show Completed Tree
        </Button>
      )}
    </div>
  );
};

export default PhyloTreeDnDButtons;
