import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { RegisterButton, RegisterForm, RegisterInput, RegisterLabel, RegisterTitle } from './RegisterPage.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <RegisterForm onSubmit={handleFomnSubmit}>
      <RegisterTitle>REGISTRATION</RegisterTitle>
        <RegisterLabel>
          Name
        </RegisterLabel>
          <RegisterInput type="text" name='name' value={name} onChange={handleChange} />
        <RegisterLabel>
          Email
        </RegisterLabel>
          <RegisterInput type="email" name='email' value={email} onChange={handleChange}/>
        <RegisterLabel>
          Password
        </RegisterLabel>
          <RegisterInput type="password"  name='password' value={password} onChange={handleChange}/>
        <RegisterButton type="submit" >Register</RegisterButton>
      </RegisterForm>
    </div>
  );
};
