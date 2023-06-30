import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
      <h1>Register page</h1>
      <form onSubmit={handleFomnSubmit}>
        <label>
          Name
          <input type="text" name='name' value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input type="email" name='email' value={email} onChange={handleChange}/>
        </label>
        <label>
          Password
          <input type="password"  name='password' value={password} onChange={handleChange}/>
        </label>
        <button type="submit" >Register</button>
      </form>
    </div>
  );
};
