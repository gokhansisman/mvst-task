import SearchBar, {
  SearchBarProps,
} from "../../components/SearchBar/SearchBar";
import { Meta, Story } from "@storybook/react";

export default {
  title: "SearchBar",
  component: SearchBar,
  argTypes: {
    searchType: { control: "" },
    onSearch: { action: "onSearch" },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args: {
  searchType: string;
  onSearch: (searchTerm: string) => void;
}) => <SearchBar {...args} />;

export const UserSearch = Template.bind({});
UserSearch.args = {
  searchType: "user",
};

export const RepositorySearch = Template.bind({});
RepositorySearch.args = {
  searchType: "repository",
};
