import RepositoryList, {
  RepositoryListProps,
} from "../components/RepositoryList/RepositoryList";
import { Meta, Story } from "@storybook/react";
import { Repository } from "../utils/types";

export default {
  title: "RepositoryList",
  component: RepositoryList,
} as Meta;

const Template: Story<RepositoryListProps> = (args: {
  repositories: Repository[];
}) => <RepositoryList {...args} />;

export const RepositoryListComponent = Template.bind({});
