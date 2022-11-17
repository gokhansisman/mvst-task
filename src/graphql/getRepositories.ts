import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchRepositories($username: String!) {
    user(login: $username) {
      repositories(first: 50, privacy: PUBLIC) {
        nodes {
          id
          name
          url
          description
          updatedAt
          primaryLanguage {
            id
            name
          }
        }
      }
    }
  }
`;
