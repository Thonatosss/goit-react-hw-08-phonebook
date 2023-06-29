import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
    </div>
  );
};
