import { useState } from "react";
import "./App.css";
import { ApolloClient, gql, useQuery } from "@apollo/client";
import SearchBar from "./components/SearchBar/SearchBar";
import UserSearch from "./pages/UserSearch";

function App() {
  return (
    <div className="App">
      <h1>GitHub Repositories With Search Functionality</h1>
      <UserSearch />
    </div>
  );
}

export default App;
