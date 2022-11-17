import history from "../../history";
import { UserResult } from "../../utils/types";
import "./UserResultCard.less";
import { Link } from "react-router-dom";
type UserResultCardProps = {
  user: UserResult;
};
const UserResultCard = ({ user }: UserResultCardProps) => {
  return (
    <div className="userResultCardContainer">
      <Link to={`/${user.node.login}`} className="test">
        <div>{user.node.login}</div>
        <div>{user.node.name}</div>
        <div className="picture">
          <img src={user.node.avatarUrl} />
        </div>
      </Link>
    </div>
  );
};

export default UserResultCard;
