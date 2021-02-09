import React, { useContext } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/styles";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import { Slide12Context } from "./utils";

const useStyles = makeStyles(() => ({
  box: {
    background: "transparent",
    cursor: "pointer",
  },
}));

const IguanaBox = ({ name }) => {
  const classes = useStyles();
  const resetCheck = useContext(Slide12Context);

  const [, drag] = useDrag({
    item: { name, type: ItemTypes.IGUANA },
    begin: () => {
      resetCheck();
    },
  });

  return (
    <div ref={drag} className={classes.box}>
      <Chip label={name} />
    </div>
  );
};

export default IguanaBox;
