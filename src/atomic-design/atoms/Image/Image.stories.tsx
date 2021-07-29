import React from "react";
import { Story } from "@storybook/react";
import { Image, ImageProps } from "./Image";
import img from "../../../assets/images/isabela/bluefooted.png"


export default {
  title: "Atoms/Image",
    component: Image,
};

const Template: Story<ImageProps> = (args) => {
  return <Image {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    src: "",
};

