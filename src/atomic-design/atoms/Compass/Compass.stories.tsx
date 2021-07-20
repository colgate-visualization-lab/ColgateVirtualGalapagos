import React from "react";
import { Compass } from "./Compass";
import { Story } from "@storybook/react";


export default {
  title: "Atoms/Compass",
  component: Compass,
};

const Template: Story = (args) => {
  return <Compass {...args} />;
};

export const Example = Template.bind({});
Example.args = {
};

