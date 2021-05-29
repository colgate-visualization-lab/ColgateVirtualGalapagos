import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const ExtraControls = ({}) => {
  return (
    <div>
      <IconButton color="primary">
        <SettingsOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default ExtraControls;
