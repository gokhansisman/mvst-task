import RepositoryCard, {
  RepositoryCardProps,
} from "../components/RepositoryCard/RepositoryCard";
import { Meta, Story } from "@storybook/react";
import { Repository } from "../utils/types";

export default {
  title: "RepositoryCard",
  component: RepositoryCard,
} as Meta;

const Template: Story<RepositoryCardProps> = (args: { repo: Repository }) => (
  <RepositoryCard {...args} />
);

export const RepistoryCard = Template.bind({});
