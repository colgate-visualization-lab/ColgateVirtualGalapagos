import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intermissionRoot: {
    padding: theme.spacing(2),
    backgroundImage:
      "url('http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG')",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundBlendMode: "lighten",
    backgroundColor: "black",
  },

  title: {
    fontSize: "1.7rem",
    fontWeight: "bold",
    textAlign: "center",
  },

  img: {
    objectFit: "contain",
    maxHeight: "100%",
    maxWidth: "100%",
    minWidth: "360px",
  },

  button: {
    height: "4em",
  },

  hypothesisTitle: {
    fontSize: "0.7rem",
    fontWeight: "bolder",
  },

  description: {
    fontSize: "0.65rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    },
  },
}));

const IntermissionScreen = ({ hypotheses, onClick }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.intermissionRoot}
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography component="h1" className={classes.title}>
          Select A Hypothesis To Explore
        </Typography>
      </Grid>
      {hypotheses.map((item, index) => (
        <Grid item xs={12} sm={4} md={2} key={index}>
          <Button
            variant="contained"
            color="secondary"
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
  );
};

export default IntermissionScreen;
