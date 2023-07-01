import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { LoginForm, LoginTitle, LoginLabel, LoginButton, LoginInput } from './LoginPage.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handleFomnSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <div>
        <LoginForm onSubmit={handleFomnSubmit}>
          <LoginTitle>LOG IN</LoginTitle>
          <LoginLabel>Email</LoginLabel>

          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <LoginLabel>Password</LoginLabel>
          <LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <LoginButton type="submit">Log in</LoginButton>
        </LoginForm>
      </div>
    </div>
  );
};
