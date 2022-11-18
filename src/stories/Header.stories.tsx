import Header from "../components/Header/Header";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<typeof Header> = (args: {}) => <Header />;

export const HeaderComponent = Template.bind({});
