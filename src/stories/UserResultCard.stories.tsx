import UserResultCard, {
  UserResultCardProps,
} from "../components/UserResultCard/UserResultCard";
import { Meta, Story } from "@storybook/react";
import { UserResult } from "../utils/types";

export default {
  title: "UserResultCard",
  component: UserResultCard,
} as Meta;

const Template: Story<UserResultCardProps> = (args: { user: UserResult }) => (
  <UserResultCard {...args} />
);

export const UserResultCardComponent = Template.bind({});
