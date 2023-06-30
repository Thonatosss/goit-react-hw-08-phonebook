import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event =>{
        const {name, value} = event.target;
        switch (name) {
            case 'email':
                return setEmail(value);
                
            case 'password':
                return setPassword(value);
        
            default:
                return;
        }
    }
    const handleFomnSubmit = event =>{
        event.preventDefault();
        dispatch(login({email, password}));
        setEmail('');
        setPassword('');
        

    }
  return (
    <div>
      <div>
        <h1>Login page</h1>
        <form onSubmit={handleFomnSubmit}>
          <label>
            Email
            <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
          <label>
            Password
            <input type="password" name='password' value={password} onChange={handleChange} />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};
