import { UserResult } from "../../utils/types";
import "./UserResultCard.less";
type UserResultCardProps = {
  user: UserResult;
};
const UserResultCard = ({ user }: UserResultCardProps) => {
  return (
    <div className="userResultCardContainer">Username: {user.node.name}</div>
  );
};

export default UserResultCard;
