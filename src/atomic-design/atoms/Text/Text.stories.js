import React from "react";
import Text from "./Text";
import "../../../index.css";
import tailwindConfig from "../../../../tailwind.config";
export default {
  title: "Atoms/Text/Title",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => {
  let themeColors = [];
  if (args.color) themeColors = [args.color];
  else {
    const colors = tailwindConfig?.theme?.extend?.colors;
    themeColors = colors
      ? Object.keys(colors).map((color) => `text-${color}`)
      : ["text-black"];
  }
  return themeColors.map((color) => (
    <Text key={color} {...args} color={color} />
  ));
};

export const Small = Template.bind({});
Small.args = {
  type: "title",
  size: "sm",
  value: "Davy Jones' Locker",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "title",
  size: "md",
  value: "Davy Jones' Locker",
};

export const Large = Template.bind({});
Large.args = {
  type: "title",

  size: "lg",
  value: "Davy Jones' Locker",
};
