import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",

    padding: theme.spacing(0.5, 1),
    // margin: theme.spacing(0, 1),
    backgroundColor: "rgb(239,239,239)",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgb(220,220,220)",
    },

    borderRadius: 5,
  },

  srcName: {
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
}));

const IguanaBox = ({ name }) => {
  const classes = useStyles();
  const [, drag] = useDrag({
    item: { name, type: "iguana" },
  });

  return (
    <Paper ref={drag} elevation={0} className={classes.root}>
      <div className={classes.dragSrc}>
        <Typography align="center" className={classes.srcName}>
          {name}
        </Typography>
      </div>
    </Paper>
  );
};

export default IguanaBox;
