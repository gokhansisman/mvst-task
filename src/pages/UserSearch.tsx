import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import UsersResultList from "../components/UserResultList/UserResultList";
import { GET_USERS } from "../graphql/getUser";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getUsers, { loading: loadingUsers, data: userData }] = useLazyQuery(
    GET_USERS,
    {
      variables: { userQuery: searchTerm },
    }
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 2) {
        getUsers();
      }
    }, 3000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      UserSearch
      <SearchBar onSearch={setSearchTerm} />
      {loadingUsers ? (
        <h3>Loading...</h3>
      ) : (
        <UsersResultList userResults={userData && userData.search.edges} />
      )}
    </div>
  );
};

export default UserSearch;
