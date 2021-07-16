import React from "react";
import { PageProps, Page } from "./Page";
import { Story } from "@storybook/react";

export default {
  title: "Templates/Page",
  component: Page,
};

const Template: Story<PageProps> = (args) => {
  return <Page {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  color: "bg-primary",
};

