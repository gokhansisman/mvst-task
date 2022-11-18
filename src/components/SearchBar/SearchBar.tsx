import { QueryResult, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_USERS } from "../../graphql/getUser";
import "./SearchBar.less";

export type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
  searchType: string;
};
/**
 * SearchBar component renders a search bar
 * @param {void} onSearch Take a function as a param with type of string.
 * @param {string} searchType Take a string as a param with type of string.
 * @returns {JSX.Element} Returns a JSX.Element
 */
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
