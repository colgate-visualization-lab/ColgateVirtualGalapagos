import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const ActionButtons = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Grid key={index} item xs={12}>
          <Button variant="contained" onClick={button.handleClick} fullWidth>
            <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
              {button.text}
            </Typography>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ActionButtons;
