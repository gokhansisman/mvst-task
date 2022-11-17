import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/getRepositories";
import { useLocation } from "react-router-dom";
import RepositoryList from "../components/RepositoryList/RepositoryList";
import { Link } from "react-router-dom";
const RepositorySearch = () => {
  const location = useLocation();
  const username = location.pathname.split("/")[1];
  const [
    getRepositories,
    { loading: loadingRepositories, data: repositoriesData },
  ] = useLazyQuery(GET_REPOSITORIES, {
    variables: { username: username },
  });

  useEffect(() => {
    getRepositories();
  }, []);
  return (
    <div>
      <Link to="/">Back to search user</Link>
      <RepositoryList
        repositories={
          repositoriesData && repositoriesData.user.repositories.nodes
        }
      />
    </div>
  );
};

export default RepositorySearch;
