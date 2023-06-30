import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { getUserEmail, getUserName } from "redux/auth/authSelectors";

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail)
  const dispatch = useDispatch();
  return (
    <div>
      <p>{userEmail}</p>
      <p>{userName}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};
