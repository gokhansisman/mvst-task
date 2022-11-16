import { useState } from 'react'
import './App.css'
import { ApolloClient, gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query SearchUsers($userQuery: String!) {
    search(query: $userQuery, type: USER, first: 20) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            url
          }
        }
      }
    }
  }
`;
function App() {
  const { loading: loadingUsers, data: userData } = useQuery(GET_USERS, {
    variables: { userQuery: "gokhan" },
  });
  console.log(userData);
  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
    </div>
  )
}

export default App
