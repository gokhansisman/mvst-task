import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query SearchUsers($userQuery: String!) {
    search(query: $userQuery, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            name
          }
        }
      }
    }
  }
`;
