import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import StrokeColorOption from "./StrokeColorOption";
import FontSizeOption from "./FontSizeOption";
import TextAlignOption from "./TextAlignOption";
import StrokeWidthOption from "./StrokeWidthOption";
import ElementActions from "./ElementActions";
import { unpackElementDetails } from "../../containers/DrawArea/utils";

const useStyles = makeStyles((theme) => ({
  optionHeader: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    padding: theme.spacing(0.5, 0, 1, 0),
  },
}));

const Options = ({ element, handleOptionsChange, handleAction }) => {
  let options = [];
  let type = undefined;
  if (element) {
    const unpackedElementDetails = unpackElementDetails(element);
    options = unpackedElementDetails.options;
    type = unpackedElementDetails.type;
  }
  const classes = useStyles();

  return (
    element && (
      <Grid container justify="flex-start" spacing={2}>
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
    )
  );
};

export default Options;
