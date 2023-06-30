import { useSelector } from "react-redux";
import { getUserName } from "redux/auth/authSelectors";

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  return (
    
    <div>
      <p>{userName}</p>
      <button>Logout</button>
    </div>
  );
};
