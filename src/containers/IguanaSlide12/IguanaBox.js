import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/styles";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const useStyles = makeStyles(() => ({
  box: {
    background: "transparent",
  },
}));

const IguanaBox = ({ name }) => {
  const classes = useStyles();

  const [, drag] = useDrag({
    item: { name, type: ItemTypes.IGUANA },
  });

  return (
    <div ref={drag} className={classes.box}>
      <Chip label={name} />
    </div>
  );
};

export default IguanaBox;
