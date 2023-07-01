import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { getUserName } from "redux/auth/authSelectors";
import { LogoutBtn, UserMenuContainer } from "./UserMenu.styled";

export const UserMenu = () => {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  return (
    <UserMenuContainer>
      <p>Welcome, {userName}</p>
      <LogoutBtn onClick={() => dispatch(logOut())}>Logout</LogoutBtn>
    </UserMenuContainer>
  );
};
