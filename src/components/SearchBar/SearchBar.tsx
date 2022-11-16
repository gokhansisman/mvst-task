import { QueryResult, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USERS } from "../../graphql/getUser";
import "./SearchBar.less";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};
const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      autoFocus
      type="text"
      autoComplete="off"
      className="container"
      placeholder="Search here..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
