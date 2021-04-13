import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";

const useStyles = makeStyles((theme) => ({
  box: {
    cursor: "pointer",

    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 1),

    fontSize: "0.7rem",
    fontWeight: "bold",

    backgroundColor: "rgb(249,249,249)",
    borderRadius: "0.3rem",
  },
  dragSrc: {
    padding: "0.1rem 0.2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.1rem 0.4rem",
    },
    // backgroundColor: "rgba(255, 255, 255, 1)",
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
  const [, drag] = useDrag({
    item: { name, type: "iguana" },
  });

  return (
    <Paper ref={drag} className={classes.box}>
      <div className={classes.dragSrc}>
        <Typography variant="subtitle1" className={classes.srcName}>
          {name}
        </Typography>
      </div>
    </Paper>
  );
};

export default IguanaBox;
