import React from "react";
import { Carousel, CarouselProps } from "./Carousel";
import { Story } from "@storybook/react";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
};

const Template: Story<CarouselProps> = (args) => {
  return <Carousel {...args} />;
};

export const Example = Template.bind({});
Example.args = {
};

