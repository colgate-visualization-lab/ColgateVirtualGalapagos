import React from "react";
import PenIcon from "./PenIcon";
import EraserIcon from "./EraserIcon";
import TextBoxIcon from "./TextBoxIcon";
import LineIcon from "./LineIcon";
import SelectIcon from "./SelectIcon";

const toolbarIcons = [
  { name: "select", component: <SelectIcon /> },
  { name: "pen", component: <PenIcon /> },
  { name: "eraser", component: <EraserIcon /> },
  { name: "textbox", component: <TextBoxIcon /> },
  { name: "line", component: <LineIcon /> },
];

export default toolbarIcons;
