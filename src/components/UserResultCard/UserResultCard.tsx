import history from "../../history";
import { UserResult } from "../../utils/types";
import "./UserResultCard.less";
import { Link } from "react-router-dom";

export type UserResultCardProps = {
  user: UserResult;
};
/**
 * UserResultCard component displays user information based on search
 * @param {UserResult} user Take 1 user as a param with type of UserResult.
 * @returns {JSX.Element} Returns a JSX.Element
 */
const UserResultCard = ({ user }: UserResultCardProps) => {
  return (
    <div className="userResultCardContainer">
      <Link to={`/${user&&user.node.login}`} className="test">
        <div className="container">
          <div className="picture">
            <img src={user&&user.node.avatarUrl} />
          </div>
          <div>{user&&user.node.login}</div>
        </div>
      </Link>
    </div>
  );
};

export default UserResultCard;
