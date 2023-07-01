
import { AuthLink, AuthNavContainer } from "./AuthNav.styled";
export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthLink to="/register">Registration</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </AuthNavContainer>
  );
};
