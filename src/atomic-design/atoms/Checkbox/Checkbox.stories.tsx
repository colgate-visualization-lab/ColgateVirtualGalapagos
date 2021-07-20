import React from "react";
import { CheckboxProps, CheckBox } from "./Checkbox";
import { Story } from "@storybook/react";


export default {
  title: "Atoms/Checkbox",
  component: CheckBox,
};

const Template: Story<CheckboxProps> = (args) => {
  return <CheckBox {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    label:"Auto Volume",
    value:true,

};

