import React from "react";
import { LabProps, Lab } from "./Lab";
import { Story } from "@storybook/react";

export default {
  title: "Templates/Lab",
  component: Lab,
};

const Template: Story<LabProps> = (args) => {
  return <Lab {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    className:""
};

