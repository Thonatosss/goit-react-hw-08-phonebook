import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/authSelectors";


export function RestrictedRoute({component: Component, redirectTo}) {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo}/>: <Component/>;
}