import history from "../../history";
import { Repository, UserResult } from "../../utils/types";
import "./RepositoryCard.less";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export type RepositoryCardProps = {
  repo: Repository;
};
/**
 * RepositoryCard component displasy repository information
 * @param {Repository} repo Take 1 repository as a param with type of Repository.
 * @returns {JSX.Element} Returns a JSX.Element
 */
const RepositoryCard = ({ repo }: RepositoryCardProps) => {
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
