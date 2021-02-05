import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import IguanaBox from "./IguanaBox";

const useStyles = makeStyles(() => ({
  dropTarget: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    transform: "translate(0,-45px)",
    backgroundColor: "transparent",
    width: "170px",
    height: "90px",
  },
}));

const DropTarget = ({ top, left, onDrop, index, box }) => {
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
        {box && <IguanaBox name={box} />}
      </div>
    </>
  );
};

export default DropTarget;
