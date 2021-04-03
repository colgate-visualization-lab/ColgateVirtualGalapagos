import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(245,245,245)",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  modIndex: {
    textTransform: "uppercase",
    fontSize: theme.typography.pxToRem(16),
  },
  title: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: "600",
  },
  description: {
    fontSize: theme.typography.pxToRem(16),
  },
  button: {
    fontFamily: "inherit",
    fontWeight: "600",
  },

  buttonText: {
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: theme.typography.pxToRem(20),
  },
}));

/**
 * ModuleNavItem component represents a single card on the ModuleNav page
 *  Basically has 4 parts:
 *   - Module index e.g. Module 1
 *   - Title of the module
 *   - Description of the module
 *   - Button to start the module
 *
 */
const ModuleNavItem = ({ index, title, description, link }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justify="flex-start" spacing={1}>
        <Grid item xs={12}>
          <Typography className={classes.modIndex}>
            Module {index + 1}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to={link}>
              <Button
                variant="outlined"
                size="medium"
                className={classes.button}
              >
                <Typography color="secondary" className={classes.buttonText}>
                  Start Exploring
                </Typography>
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

ModuleNavItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default ModuleNavItem;
