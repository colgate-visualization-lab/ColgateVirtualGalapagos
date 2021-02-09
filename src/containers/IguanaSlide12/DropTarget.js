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
    transform: "translate(0,-45px)",
    // backgroundColor: "blue",
    // opacity: 0.5,
    width: "170px",
    height: "90px",
  },
  checkContainer: {
    position: "absolute",
    top: ({ top }) => top + 90,
    left: ({ left }) => left,
    transform: "translate(0,-45px)",
    // backgroundColor: "khaki",
    // opacity: 0.5,
    width: "170px",
    height: "30px",
  },
  check: {
    position: "absolute",
    bottom: "1%",
    left: "1%",
  },
}));

const DropTarget = ({ top, left, onDrop, index, placedName, children }) => {
  const props = {
    top,
    left,
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
