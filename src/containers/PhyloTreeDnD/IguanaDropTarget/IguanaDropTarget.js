import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

import DropTargetBox from "./DropTargetBox";

const useStyles = makeStyles((theme) => ({
  dropTargetContainer: {
    position: "relative",
    maxWidth: "960px",
    maxHeight: "600px",
    margin: theme.spacing(2),
  },
  dropTargetDiv: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  backgroundImg: {
    maxWidth: "100%",
    display: "block",
    height: "auto",
  },
}));

const IguanaDropTarget = ({
  content,
  draggedNames,
  correctnessIndicatorVisible,
  handleDrop,
}) => {
  const classes = useStyles();

  let {
    imgDimensions,
    dropTargetDimensions,
    dropTargets,
  } = content.phyloTreeData;
  console.log(draggedNames);
  return (
    <div className={classes.dropTargetContainer}>
      <img src={content.backgroundUrl} className={classes.backgroundImg} />
      <div className={classes.dropTargetDiv}>
        {dropTargets.map(({ top, left }, index) => (
          <DropTargetBox
            key={index}
            index={index}
            top={top}
            left={left}
            imgDimensions={imgDimensions}
            dropTargetDimensions={dropTargetDimensions}
            onDrop={handleDrop}
            placedName={draggedNames[index].placedName}
          >
            {correctnessIndicatorVisible &&
              (draggedNames[index].isPlacedCorrectly() ? (
                <CheckCircleIcon fontSize="inherit" />
              ) : (
                <CancelIcon fontSize="inherit" />
              ))}
          </DropTargetBox>
        ))}
      </div>
    </div>
  );
};

export default IguanaDropTarget;
