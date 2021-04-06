import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDrop } from "react-dnd";
import Fade from "@material-ui/core/Fade";

import { ItemTypes } from "./ItemTypes";
import IguanaBox from "./IguanaBox";

const useStyles = makeStyles(() => ({
  dropTarget: {
    background: "rgba(240,24,100,0.5)",
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(0, -50%)",
    width: ({ width }) => width,
    height: ({ height }) => height,
  },
  checkContainer: {
    position: "absolute",
    top: ({ containerTop }) => containerTop,
    left: ({ left }) => left,
    transform: "translate(0,-140%)",
    width: ({ width }) => width,
    height: ({ containerHeight }) => containerHeight,
  },
  check: {
    position: "absolute",
    bottom: "1%",
    left: "1%",
    fontSize: "1rem",
  },
}));

const DropTarget = ({
  top,
  left,
  imgDimensions,
  dropTargetDimensions,
  onDrop,
  index,
  placedName,
  children,
}) => {
  const props = {
    top: `${(top / imgDimensions.height) * 100}%`,
    left: `${(left / imgDimensions.width) * 100}%`,
    width: `${(dropTargetDimensions.width / imgDimensions.width) * 100}%`,
    height: `${(dropTargetDimensions.height / imgDimensions.height) * 100}%`,
    containerTop: `${
      ((top + dropTargetDimensions.height) / imgDimensions.height) * 100
    }%`,
    containerHeight: `${(30 / imgDimensions.height) * 100}%`,
  };
  const classes = useStyles(props);

  const [, drop] = useDrop({
    accept: ItemTypes.IGUANA,
    drop(item) {
      onDrop(item.name, index);
    },
  });

  return (
    <>
      <div ref={drop} className={classes.dropTarget}>
        {placedName && <IguanaBox name={placedName} />}
      </div>
      <div className={classes.checkContainer}>
        <Fade in={!!children}>
          <div className={classes.check}>{children}</div>
        </Fade>
      </div>
    </>
  );
};

export default DropTarget;
