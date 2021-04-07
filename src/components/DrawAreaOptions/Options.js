import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import StrokeColorOption from "./StrokeColorOption";
import FontSizeOption from "./FontSizeOption";
import TextAlignOption from "./TextAlignOption";
import StrokeWidthOption from "./StrokeWidthOption";
import ElementActions from "./ElementActions";
import { unpackElementDetails } from "../../containers/DrawArea/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2, 4, 2),
    position: "absolute",
    zIndex: 100,
    top: 20,
    left: 20,

    width: "240px",
  },
  optionHeader: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    padding: theme.spacing(0.5, 0, 1, 0),
  },
}));

const Options = ({
  id,
  element,
  handleOptionsChange,
  handleLoadSlide12Data,
  handleAction,
  handleClearCanvas,
}) => {
  let options = [];
  let type = undefined;
  if (element) {
    const unpackedElementDetails = unpackElementDetails(element);
    options = unpackedElementDetails.options;
    type = unpackedElementDetails.type;
  }
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <Grid container justify="flex-start" spacing={2}>
        {id === "19" && (
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={handleLoadSlide12Data}
              size="small"
            >
              <Typography className={classes.optionHeader}>
                Load Saved Tree
              </Typography>
            </Button>
          </Grid>
        )}
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleClearCanvas} size="small">
            <Typography className={classes.optionHeader}>
              Reset Canvas
            </Typography>
          </Button>
        </Grid>

        {type !== undefined && (
          <>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Stroke Color
              </Typography>
              <StrokeColorOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
          </>
        )}
        {type === "textbox" && (
          <>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Font Size
              </Typography>
              <FontSizeOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Text Align
              </Typography>
              <TextAlignOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
          </>
        )}
        {type === "line" && (
          <>
            <Grid item xs={12}>
              <Typography className={classes.optionHeader}>
                Stroke Width
              </Typography>
              <StrokeWidthOption
                options={options}
                handleOptionsChange={handleOptionsChange}
              />
            </Grid>
          </>
        )}
        {type !== undefined && (
          <Grid item xs={12}>
            <Typography className={classes.optionHeader}>Actions</Typography>
            <ElementActions handleAction={handleAction} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Options;
