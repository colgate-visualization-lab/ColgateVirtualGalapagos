import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PhyloTreeMenuButton from "../../components/PhyloTreeMenu/PhyloTreeMenuButton";
import PhyloTreeMenu from "../../components/PhyloTreeMenu";

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
    <PhyloTreeMenu>
      <PhyloTreeMenuButton
        handleClick={handleCheckTree}
        label="Check My Tree"
      />
      {completedTreeVisible ? (
        <PhyloTreeMenuButton handleClick={handleResetTree} label="Reset Tree" />
      ) : (
        <PhyloTreeMenuButton
          handleClick={handleShowTree}
          label="Show Completed Tree"
        />
      )}
    </PhyloTreeMenu>
  );
};

export default PhyloTreeDnDButtons;
