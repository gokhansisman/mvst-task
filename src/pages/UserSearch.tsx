import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import UsersResultList from "../components/UserResultList/UserResultList";
import { GET_USERS } from "../graphql/getUser";
import Loader from "../assets/loading.svg";
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
    }, 2000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} searchType="user" />
      {loadingUsers ? (
        <img src={Loader} style={{ marginTop: 16 }} />
      ) : (
        <UsersResultList userResults={userData && userData.search.edges} />
      )}
      {userData && userData.search.edges.length === 0 && <div className="not-found">User not found</div>}
    </div>
  );
};

export default UserSearch;
