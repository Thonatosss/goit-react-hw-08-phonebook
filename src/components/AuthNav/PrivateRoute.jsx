import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshed } from 'redux/auth/authSelectors';

export function PrivateRoute({ component: Component, redirectTo }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshed = useSelector(getIsRefreshed);
    const shoudlRedirect = !isRefreshed && !isLoggedIn;

  return shoudlRedirect ? <Navigate to={redirectTo} /> : <Component />;
}
