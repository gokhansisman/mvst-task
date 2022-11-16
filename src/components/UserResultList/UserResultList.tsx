import { UserResult } from "../../utils/types";
import UserResultCard from "../UserResultCard/UserResultCard";
import "./UserResultList.less";
type UsersResultListProps = {
  userResults: UserResult[];
};

const UsersResultList = ({ userResults }: UsersResultListProps) => {
  return (
    <div className="userResultList">
      {userResults &&
        userResults.map((userResult) => <UserResultCard user={userResult} />)}
    </div>
  );
};

export default UsersResultList;
