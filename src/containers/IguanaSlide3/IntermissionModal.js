import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    position: "relative",
    width: "50%",
    height: "50%",
    display: "flex",
    justifyItems: "center",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
      width: "80%",
      height: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      // padding: theme.spacing(1),
      width: "80%",
      height: "50%",
    },
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundImage:
      "url('http://virtualgalapagos.colgate.edu/assets/IguanaModule/Images/IguanaSlide3Intro.JPG')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: theme.palette.grey["800"],
    opacity: "0.5",
    width: "100%",
    height: "100%",
  },

  content: {
    position: "relative",
  },

  title: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
      // textAlign: "left",
    },
  },

  img: {
    objectFit: "contain",
    maxHeight: "100%",
    maxWidth: "100%",
    minWidth: "360px",
  },

  button: {
    height: "100%",
  },

  description: {
    fontSize: "0.5rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.4rem",
    },
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const IntermissionModal = ({ hypotheses, onClick, handleClose, open }) => {
  const classes = useStyles();

  const CloseButton = () => (
    <IconButton
      aria-label="cancel"
      className={classes.cancelButton}
      color="secondary"
      onClick={handleClose}
    >
      <CancelIcon />
    </IconButton>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => {}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Fade in={open}>
        <div className={classes.root}>
          <div className={classes.background} />
          <Grid
            container
            alignContent="center"
            justify="flex-start"
            spacing={1}
            className={classes.content}
          >
            <CloseButton />
            <Grid item xs={12}>
              <Typography component="h1" className={classes.title}>
                Select A Hypothesis To Explore
              </Typography>
            </Grid>
            {hypotheses.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
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
        </div>
      </Fade>
    </Modal>
  );
};

export default IntermissionModal;
