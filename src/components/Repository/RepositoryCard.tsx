import history from "../../history";
import { Repository, UserResult } from "../../utils/types";
import "./RepositoryCard.less";
import { Link } from "react-router-dom";
import Moment from "react-moment";

type RepositoryProps = {
  repo: Repository;
};
const RepositoryCard = ({ repo }: RepositoryProps) => {
  return (
    <div className="repositoryCard">
      {repo && (
        <>
          <div>
            <p>{repo.name}</p>
            <p>{repo.description}</p>
          </div>
          <span>{repo.primaryLanguage?.name}</span>
          <Moment date={repo.updatedAt} fromNow />
        </>
      )}
    </div>
  );
};

export default RepositoryCard;
