import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { lighten, makeStyles } from "@material-ui/core/styles";

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
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "khaki",
  },

  img: {
    objectFit: "contain",
    maxHeight: "100%",
    maxWidth: "100%",
    minWidth: "360px",
  },

  button: {
    height: "5em",
  },

  hypothesisTitle: {
    fontSize: "0.7rem",
    fontWeight: "bolder",
  },

  description: {
    fontSize: "0.55rem",
    fontWeight: "bold",
  },
}));

const IntermissionScreen = ({ hypotheses, onClick }) => {
  const classes = useStyles();

  return (
    <>
      {/* <div style={{}}>
        <img
          src="http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG"
          className={classes.img}
        />
      </div> */}
      <Grid
        container
        alignContent="center"
        justify="center"
        className={classes.intermissionRoot}
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography component="h1" className={classes.title}>
            Select a Hypothesis to Explore
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
                console.log(item);
                onClick(item.videoSrc);
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography className={classes.hypothesisTitle}>
                    {" "}
                    Hypothesis {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.description}>
                    {" "}
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default IntermissionScreen;
