import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
display: flex;
justify-content: center:
align-items: center;

`;
export const UserEmail = styled.p``;
export const LogoutBtn = styled.button`
  color: white;
  background-color: black;
  padding: 12px 20px;
  border-radius: 10px;
  border-style: none;
  margin-left: 20px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  &:hover {
    background-color: red;
  }
`;
