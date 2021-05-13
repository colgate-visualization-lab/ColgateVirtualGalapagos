import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import DropTarget from "../../components/DropTarget";
import actions from "../../constants/actions";
import { useDnDActivity } from "../../contexts/DnDActivityContext";

const useStyles = makeStyles((theme) => ({
  dropTargetContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
  },
}));

const DropTargets = ({ scaledBounds }) => {
  const [{ treeCorrectnessMarkers, draggedIguanas }, dispatch] =
    useDnDActivity();
  const classes = useStyles();

  const handleDrop = (droppedItem, iguanaDetails) => {
    dispatch({ type: actions.DROP, droppedItem, iguanaDetails });
  };

  return (
    <div className={classes.dropTargetContainer}>
      {draggedIguanas.map((iguana, index) => (
        <DropTarget
          key={index}
          index={index}
          iguana={iguana}
          bounds={scaledBounds[index]}
          handleDrop={handleDrop}
          treeCorrectnessMarker={
            treeCorrectnessMarkers ? treeCorrectnessMarkers[index] : null
          }
        />
      ))}
    </div>
  );
};

DropTargets.propTypes = {
  scaledBounds: PropTypes.array.isRequired,
};

export default DropTargets;
