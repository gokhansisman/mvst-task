import { UserResult } from "../../utils/types";
import UserResultCard from "../UserResultCard/UserResultCard";
import "./UserResultList.less";

export type UsersResultListProps = {
  userResults: UserResult[];
};
/**
 * UserResultList component renders list of UserResultCard components
 * @param {UserResult[]} userResults Take array of userResults as a param with type of UserResult[].
 * @returns {JSX.Element} Returns a JSX.Element
 */
const UsersResultList = ({ userResults }: UsersResultListProps) => {
  return (
    <div className="userResultList">
      {userResults &&
        userResults.map((userResult) => (
          <UserResultCard user={userResult} key={userResult.node.id} />
        ))}
    </div>
  );
};

export default UsersResultList;
