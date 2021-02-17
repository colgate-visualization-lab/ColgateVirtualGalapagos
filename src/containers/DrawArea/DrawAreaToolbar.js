import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

import {
  PenIcon,
  EraserIcon,
  TextBoxIcon,
} from "../../components/DrawAreaIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  iconContainer: {
    marginRight: theme.spacing(1),
    fontSize: "1.1rem",
    height: "1.8rem",
    width: "1.7rem",
    padding: "0.2rem",
  },
  selected: {
    backgroundColor: "rgb(178,178,178)",
    padding: "0.1rem",
  },
}));

const toolIcons = [
  { name: "pen", component: <PenIcon /> },
  { name: "eraser", component: <EraserIcon /> },
  { name: "textbox", component: <TextBoxIcon /> },
];

const DrawAreaToolbar = ({ handleToolChange, selected }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {toolIcons.map(({ name, component }) => (
        <SvgIcon
          key={name}
          className={`${classes.iconContainer} ${
            selected === name ? classes.selected : null
          }`}
          onClick={() => {
            handleToolChange(name);
          }}
        >
          {component}
        </SvgIcon>
      ))}
    </div>
  );
};

export default DrawAreaToolbar;
