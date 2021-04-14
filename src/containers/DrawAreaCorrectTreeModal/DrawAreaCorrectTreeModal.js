import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";

import PhyloTreeMenuButton from "../../components/PhyloTreeMenu/PhyloTreeMenuButton";
import { Slide11Context } from "../../contexts/SlideContexts";

const useStyles = makeStyles((theme) => ({
  title: {
    "&:hover": {
      cursor: "grab",
    },
    "&:focus": {
      cursor: "grabbing",
    },
    padding: theme.spacing(2, 0, 0, 2),
    fontSize: "0.9rem",
    fontWeight: "600",
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-correct-tree-image"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const DrawAreaCorrectTreeModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { drawAreaData } = useContext(Slide11Context);

  const imgSrc = drawAreaData.correctTree;
  const handleClickDone = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <PhyloTreeMenuButton handleClick={handleClickDone} label="Done">
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-correct-tree-image"
      >
        <div className={classes.title} id="draggable-correct-tree-image">
          Your tree should look like the one below, or with the marine and land
          iguana switching places.
        </div>

        <img src={imgSrc} className={classes.backgroundImg} />
      </Dialog>
    </PhyloTreeMenuButton>
  );
};

export default DrawAreaCorrectTreeModal;
