import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { useEffect } from "react";

import DragSource from "./DragSource";
import CorrectnessMarkerIcon from "./CorrectnessMarkerIcon";

const useStyles = makeStyles((theme) => ({
  ...theme.dropTarget,
  root: {
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    width: ({ width }) => width,
    height: ({ height }) => height,
    padding: theme.spacing(1),

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid red",
  },
}));

const getDropTargetClass = (treeCorrectnessMarker) => {
  return treeCorrectnessMarker === null
    ? "neutral"
    : treeCorrectnessMarker === true
    ? "correct"
    : "incorrect";
};

const DropTarget = ({
  index,
  iguana,
  bounds,
  handleDrop,
  treeCorrectnessMarker,
}) => {
  const classes = useStyles(bounds);

  const [dropTargetClass, setDropTargetClass] = useState(
    getDropTargetClass(treeCorrectnessMarker)
  );

  const [{ isOver }, drop] = useDrop({
    accept: "iguana",
    drop: (item) => {
      const droppedItem = { ...item, destination: "tree" };
      handleDrop(droppedItem, iguana);
      return item;
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    setDropTargetClass(getDropTargetClass(treeCorrectnessMarker));
  }, [treeCorrectnessMarker]);

  useEffect(() => {
    setDropTargetClass(
      isOver ? "hover" : getDropTargetClass(treeCorrectnessMarker)
    );
  }, [isOver, treeCorrectnessMarker]);

  return (
    <div
      className={clsx(classes.root, classes[dropTargetClass])}
      data-testid={`target-${index}`}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="drop-target"
      ref={drop}
    >
      {iguana.currentIguana ? (
        <>
          <DragSource iguana={iguana.currentIguana} source={iguana.id} />
        </>
      ) : (
        <Typography variant="subtitle2" color="textSecondary">
          drop an iguana here
        </Typography>
      )}
      {treeCorrectnessMarker !== null && (
        <CorrectnessMarkerIcon treeCorrectnessMarker={treeCorrectnessMarker} />
      )}
    </div>
  );
};

DropTarget.propTypes = {
  bounds: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
};

export default DropTarget;
