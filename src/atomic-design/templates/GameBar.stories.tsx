import React from "react";
import { PageProps, GameBar } from "./GameBar";
import { Story } from "@storybook/react";

export default {
  title: "Templates/GameBar",
  component: GameBar,
};

const Template: Story<PageProps> = (args) => {
  return <GameBar {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    children: "this is children element in GameBar",
};

