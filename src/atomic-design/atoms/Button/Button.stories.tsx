import React from "react";
import "../../../index.css";
import { ButtonProps, Button } from "./Button";
import { Story } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "sm",
  "aria-label": "Davy Jones' Locker",
};

export const Wooden = Template.bind({});
Wooden.args = {
  variant: "wooden",
  size: "md",
  "aria-label": "Davy Jones' Locker",
};
