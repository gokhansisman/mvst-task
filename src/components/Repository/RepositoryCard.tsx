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
            <div className="title">{repo.name}</div>
            <div className="description">
              {repo.description && "No description" + " "}
              <span className="repo-language-color" />
              {" " + repo.primaryLanguage?.name}
            </div>
          </div>
          <div className="updated">
            Updated <Moment date={repo.updatedAt} fromNow />
          </div>
        </>
      )}
    </div>
  );
};

export default RepositoryCard;
