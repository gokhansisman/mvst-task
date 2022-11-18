import UserResultList, {
  UsersResultListProps,
} from "../components/UserResultList/UserResultList";
import { Meta, Story } from "@storybook/react";
import { UserResult } from "../utils/types";

export default {
  title: "UserResultList",
  component: UserResultList,
  argTypes: {
    userResults: { control: "" },
  },
} as Meta;

const Template: Story<UsersResultListProps> = (args: {
  userResults: UserResult[];
}) => <UserResultList {...args} />;

const user1: UserResult = {
  node: {
    id: "MDQ6VXNlcjE=",
    name: "user1",
    avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
    login: "gokhansisman",
  },
};
const mockUsers = [user1];
export const UserResultListComponent = Template.bind({});
UserResultListComponent.args = {
  userResults: mockUsers,
};
