import { QueryResult, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USERS } from "../../graphql/getUser";
import "./SearchBar.less";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
  searchType: string;
};
const SearchBar = ({ onSearch, searchType }: SearchBarProps) => {
  return (
    <input
      autoFocus
      type="text"
      autoComplete="off"
      className="container"
      placeholder={`Search for a ${searchType}`}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
