import React from "react";
import PencilIcon from "./PencilIcon";
import EraserIcon from "./EraserIcon";
import TextBoxIcon from "./TextBoxIcon";
import LineIcon from "./LineIcon";
import SelectIcon from "./SelectIcon";

const toolbarIcons = [
  { name: "select", component: <SelectIcon /> },
  // { name: "pencil", component: <PencilIcon /> },
  // { name: "eraser", component: <EraserIcon /> },
  { name: "textbox", component: <TextBoxIcon /> },
  { name: "line", component: <LineIcon /> },
];

export default toolbarIcons;
