import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import { Slide12Context } from "./utils";

const useStyles = makeStyles((theme) => ({
  box: {
    background: "transparent",
    cursor: "pointer",
  },
  dragSrc: {
    padding: "0.1rem 0.2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.1rem 0.4rem",
    },
    backgroundColor: "rgb(207,207,207)",
    borderRadius: "0.3rem",
  },
  srcName: {
    fontSize: "0.7rem",
    color: "black",
    [theme.breakpoints.up(720)]: {
      fontSize: "0.8rem",
    },
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
      <div className={classes.dragSrc}>
        <Typography variant="subtitle1" className={classes.srcName}>
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default IguanaBox;
