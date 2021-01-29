import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "10%",
  },

  button: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: "rgb(0,0,0,0.4)",
  },

  description: {
    fontSize: "0.6rem",
    fontWeight: "bold",
    color: "white",
  },
}));

const PopupButtons = ({ hypotheses, onClick, popupButtonsClass }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item xs={10}>
        <Grid container spacing={2} alignContent="center" justify="center">
          {hypotheses.map((item, index) => (
            <Grid item xs={2} key={index}>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                fullWidth
                className={classes.button}
                onClick={() => {
                  onClick(item.videoSrc);
                }}
              >
                <Grid item xs={12}>
                  <Typography className={classes.description}>
                    {" "}
                    {item.description}
                  </Typography>
                </Grid>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PopupButtons;
