import styled from '@emotion/styled';

export const LoginForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  width: 400px;
  height: 100%;
  padding: 30px;
  margin-top: 50px;
  border-radius: 10px;
`;
export const LoginTitle = styled.h1`
  color: white;
`;
export const LoginLabel = styled.label`
  color: white;
  margin: 10px;
`;
export const LoginButton = styled.button`
  font-family: 'Roboto Mono', monospace;
  margin-top: 20px;
  padding: 1.3em 3em;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: black;
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;
export const LoginInput = styled.input`
  height: 20px;
  padding: 5px 5px 5px 15px;
  font-size: 15px;
  font-family: 'Roboto Mono', monospace;
  outline: none;
`;
