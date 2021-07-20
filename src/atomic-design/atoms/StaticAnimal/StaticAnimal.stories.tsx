import React from "react";
import { StaticAnimalProps, StaticAnimal } from "./StaticAnimal";
import { Story } from "@storybook/react";

export default {
  title: "Atoms/StaticAnimal",
  component: StaticAnimal,
};

const Template: Story<StaticAnimalProps> = (args) => {
  return <StaticAnimal {...args} />;
};

export const Example = Template.bind({});
Example.args = {
    species: "booby head"
};

