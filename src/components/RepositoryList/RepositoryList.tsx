import { useState } from "react";
import { Repository, UserResult } from "../../utils/types";
import RepositoryCard from "../Repository/RepositoryCard";
import SearchBar from "../SearchBar/SearchBar";
import "./RepositoryList.less";
type RepositoryListProps = {
  repositories: Repository[];
};

const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  let filteredRepos =
    repositories &&
    repositories.filter((repo) => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  return (
    <div className="repositoryList">
      <SearchBar onSearch={setSearchTerm} searchType="repository"/>
      {filteredRepos &&
        filteredRepos.map((repository) => <RepositoryCard repo={repository} />)}
    </div>
  );
};

export default RepositoryList;
