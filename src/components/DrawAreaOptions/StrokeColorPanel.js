import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.5rem",
    width: "200px",
  },
  colorDiv: {
    background: ({ color }) => color,
    height: "2rem",
    width: "100%",
    borderRadius: "5px",
  },
  color: {
    background: "khaki",
    height: "3rem",
    width: "90%",
    borderRadius: "5px",
    margin: "auto",
  },
}));

const colors = [
  "#000000",
  "#343A40",
  "#495057",
  "#C92A2A",
  "#A61E4D",
  "#862E9C",
  "#5F3DC4",
  "#364FC7",
  "#1864AB",
  "#087F5B",
  "#E67700",
  "#D9480F",
];

const StrokeColorPanel = ({ options, handleColorChange }) => {
  const styleProps = {
    color: options.get("strokeColor"),
  };
  const classes = useStyles(styleProps);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "color popover" : undefined;

  return (
    <>
      <div className={classes.colorDiv} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Paper className={classes.root}>
          <Grid container justify="center" alignItems="center" spacing={1}>
            {colors.map((color) => (
              <Grid key={color} item xs={3}>
                <div
                  onClick={(event) => {
                    handleColorChange(color);
                    handleClose();
                  }}
                  className={classes.color}
                  style={{
                    background: color,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Popover>
    </>
  );
};

export default StrokeColorPanel;
