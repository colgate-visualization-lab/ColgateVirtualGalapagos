import React from "react";
import "../../../index.css";
import { TextProps, Text } from "./Text";
import { Story } from "@storybook/react";

export default {
  title: "Atoms/Text",
  component: Text,
};

const Template: Story<TextProps> = (args) => {
  return <Text {...args} />;
};

export const Small = Template.bind({});
Small.args = {
  color: "text-primary",
  type: "title",
  size: "sm",
  value: "Davy Jones' Locker",
};

export const Medium = Template.bind({});
Medium.args = {
  color: "text-primary",
  type: "title",
  size: "md",
  value: "Davy Jones' Locker",
};

export const Large = Template.bind({});
Large.args = {
  color: "text-primary",
  type: "title",
  size: "lg",
  value: "Davy Jones' Locker",
};
