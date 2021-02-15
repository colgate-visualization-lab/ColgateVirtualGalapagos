import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDrop } from "react-dnd";
import Fade from "@material-ui/core/Fade";

import { ItemTypes } from "./ItemTypes";
import IguanaBox from "./IguanaBox";

const useStyles = makeStyles(() => ({
  dropTarget: {
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

const DropTarget = ({ top, left, onDrop, index, placedName, children }) => {
  const props = {
    top: `${(top / 540) * 100}%`,
    left: `${(left / 960) * 100}%`,
    width: `${(170 / 960) * 100}%`,
    height: `${(90 / 540) * 100}%`,
    containerTop: `${((top + 90) / 540) * 100}%`,
    containerHeight: `${(30 / 540) * 100}%`,
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
